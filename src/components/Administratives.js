import styles from './Administratives.module.css';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { TextField, MenuItem } from '@mui/material';

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
                            <div className={`${styles.selectWrapper} ${styles.leadStatus} `}>
                                <select className={styles.selectBottomBorder}>
                                    <option>C</option>
                                    <option>ABC</option>
                                    <option>BCD</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-12'>
                            <p className={`mt-1 mb-1 ${styles.smallText}`}>Zusatz zu Leadstatus</p>
                        </div>
                        <div className={`col-12 mb-3 ${styles.selectBottomBorder}`}>
                            <TextField
              variant="standard"
              className={styles.borderPurpose1}
              InputProps={{
                disableUnderline: false,
                style: {
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  color: '#333',
                  padding: '0 4px',
                  lineHeight: 1,
                },
              }}
              fullWidth
            />
                        </div>

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
                            <div className='d-flex   mb-3'>
                                <div className='w-75 me-1'>
                                    <div className={`d-flex align-items-center  ${styles.datePickerContainer} text-white`}>
                                        <TextField
                                            variant="standard"
                                            type="date"
                                            className={`${styles.dateInput} flex-grow-1`}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}

                                            placeholder="dd/mm/yyyy"
                                        />

                                    </div>
                                </div>
                                <div className=''>
                                    <div className={`col-12 ${styles.selectBottomBorder}`}>
                                        <TextField
                                            variant="standard"
                                            className={styles.borderPurpose1}
                                            InputProps={{
                                                disableUnderline: false,
                                                style: {
                                                    fontSize: '0.8rem',
                                                    fontWeight: 'bold',
                                                    color: '#333',
                                                    padding: '0 4px',
                                                    lineHeight: 1,
                                                },
                                            }}
                                            fullWidth
                                        />
                                    </div>
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