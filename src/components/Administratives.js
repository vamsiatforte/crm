import styles from './Administratives.module.css';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { FaTimes } from 'react-icons/fa';

const Administratives = () => {
    const [wiedervorlageDate, setWiedervorlageDate] = useState(new Date('2024-05-21'));
    const [showNoteModal, setShowNoteModal] = useState(false);
    const [showCustomerNoteModal, setShowCustomerNoteModal] = useState(false); // New state
    const [color, setColor] = useState("#9AA6B2");
    const [noteContent, setNoteContent] = useState('');

    const handleSaveNote = () => {
        // Handle save logic here
        setShowNoteModal(false);
    };

    return (
        <div className={`col-3  ${styles.admin}`}>
            <div className={`${styles.adminDiv}`}>
                <div className={`row  ${styles.adminTitleDiv}`}>
                    <div className={`col-6 p-0 `}>
                        <p className={`${styles.title} m-0 fw-bold`}>Administratives</p>
                    </div>
                    <div className="col-6"></div>
                </div>

                <div className='row'>
                    {/* Left Column */}
                    <div className="col-6 p-0">
                        <div className="mb-3">
                            <p className={`${styles.label} mb-1`}>Lead status</p>
                            <div className={styles.selectWrapper}>
                                <select className={styles.selectBottomBorder}>
                                    <option>C</option>
                                    <option>ABC</option>
                                    <option>BCD</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-12'>
                            <p className={`mt-1 mb-2 ${styles.smallText}`}>Zusatz zu Leadstatus</p>
                        </div>
                        <div className={`col-12 mb-3 ${styles.selectBottomBorder}`}></div>

                        <div className='row align-items-center mb-2'>
                            <div className='col-8 pe-0'>
                                <p className={`mb-0 ${styles.smallText}`}>Is Lead Transferred?</p>
                            </div>
                            <div className='col-4'>
                                <div className={styles.selectWrapper}>
                                    <select className={styles.selectBottomBorder}>
                                        <option>No</option>
                                        <option>Yes</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className=''>
                            <div className={`${styles.selectWrapper} w-100`}>
                                <select
                                    className={`w-100 ${styles.whiteSelector}`}
                                    style={{
                                        outline: "none",
                                        border: "none",
                                        paddingLeft: "6px",
                                        color: color,
                                    }}
                                    defaultValue=""
                                    onChange={(e) => setColor(e.target.value === "" ? "#9AA6B2" : "#000")}
                                >
                                    <option value="">Select options</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className='col-6 ps-3'>
                        <div className='mb-2'>
                            <div className='row'>
                                <p className={`mb-1 ${styles.smallText}`}>Wiedervorlage</p>
                            </div>
                            <div className='row mb-3'>
                                <div className='col-7'>
                                    <div className={`d-flex align-items-center ${styles.datePickerContainer} text-white`}>
                                        <DatePicker
                                            selected={wiedervorlageDate}
                                            onChange={(date) => setWiedervorlageDate(date)}
                                            dateFormat="dd/MM/yyyy"
                                            className={`${styles.dateInput} flex-grow-1`}
                                            showPopperArrow={false}
                                            popperPlacement="bottom-start"
                                            wrapperClassName={styles.datePickerWrapper}
                                            calendarClassName={styles.datePickerCalendar}
                                            customInput={
                                                <input
                                                    style={{ color: 'white' }}
                                                    className={`${styles.dateInput} flex-grow-1`}
                                                />
                                            }
                                        />
                                        <span className={`${styles.calendarIcon} ms-2`}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path d="M8 2V5" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M16 2V5" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M3.5 9.09H20.5" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" strokeWidth="1.5" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className={`col-12 ${styles.selectBottomBorder}`}><p>-----</p></div>
                                </div>
                            </div>
                        </div>

                        <div className='row mb-2 g-1'>
                            <div className='col-6'>
                                <button
                                    className={`btn btn-sm btn-info w-100 ${styles.smallButton}`}
                                    onClick={() => setShowNoteModal(true)}
                                >
                                    Notiz-Intern
                                </button>
                            </div>
                            <div className='col-6'>
                                <button 
                                    className={`btn btn-sm btn-info w-100 ${styles.smallButton}`}
                                    onClick={() => setShowCustomerNoteModal(true)} // Added click handler
                                >
                                    Notiz-Kunde
                                </button>
                            </div>
                        </div>

                        <div className='mb-2'>
                            <button className={`btn btn-sm btn-info w-100 ${styles.smallButton}`}>Company Report</button>
                        </div>

                        <div>
                            <button className={`btn btn-sm btn-info w-100 ${styles.smallButton}`}>AP Report</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Internal Note Modal */}
            {showNoteModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.noteModal}>
                        <div className={styles.modalHeader}>
                            <h3 className={styles.modalTitle}>Edit Your Note</h3>
                            <button
                                type="button"
                                className={styles.closeButton}
                                onClick={() => setShowNoteModal(false)}
                            >
                                <FaTimes />
                            </button>
                        </div>
                        <div className={styles.modalBody}>
                            <textarea
                                className={styles.noteTextarea}
                                value={noteContent}
                                onChange={(e) => setNoteContent(e.target.value)}
                                placeholder="Enter your note here..."
                                rows={10}
                            />
                        </div>
                        <div className={styles.modalFooter}>
                            <button
                                type="button"
                                className={styles.saveButton}
                                onClick={handleSaveNote}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Customer Note Modal */}
            {showCustomerNoteModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.customerNoteModal}>
                        <div className={styles.modalHeader}>
                            <h3 className={styles.modalTitle}>Customer Note</h3>
                            <button
                                type="button"
                                className={styles.closeButton}
                                onClick={() => setShowCustomerNoteModal(false)}
                            >
                                <FaTimes />
                            </button>
                        </div>
                        <div className={styles.modalBody}>
                            <p className={styles.customerNoteText}>
                                This is a non-editable note for the customer.
                            </p>
                        </div>
                        <div className={styles.modalFooter}>
                            <button
                                type="button"
                                className={styles.closeButtonBottom}
                                onClick={() => setShowCustomerNoteModal(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Administratives;
