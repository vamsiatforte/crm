import React from 'react';
import styles from './LeadProject.module.css';
import { FaTrash, FaCalendarAlt } from 'react-icons/fa';
import outlook from '../images/outlook.svg';

const LeadProject = () => {
    return (
        <div className={`col-3 ${styles.leadProject}`}>
            <div className={`${styles.leadProjectDiv}`}>
                <div className={`row ${styles.leadProjectTitleDiv}`}>
                    <div className={`col-10 p-0`}>
                        <p className={`${styles.title} m-0 fw-bold`}>Administratives</p>
                    </div>
                    <div className="col-2 text-end">
                        <FaTrash className={styles.trashIcon} />
                    </div>
                </div>

                <div className='row'>
                    {/* Progress Bars Section */}
                    <div className="col-6 p-0">
                        <div>
                            <p className={`${styles.label}`}>Calls</p>
                            <div className={styles.progressBar}>
                                <div className={styles.progressFill} style={{width: '0%'}}></div>
                                <span className={styles.progressText}>0/NoTarget</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 ps-3">
                        <div>
                            <p className={`${styles.label}`}>Leads</p>
                            <div className={styles.progressBar}>
                                <div className={styles.progressFill} style={{width: '0%'}}></div>
                                <span className={styles.progressText}>0/NoTarget</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mt-1'>
                    {/* Controls Section */}
                    <div className="col-6 p-0">
                        <div>
                            <p className={`${styles.label}`}>Leadstatus</p>
                            <div className={styles.selectWrapper}>
                                <select className={styles.selectBottomBorder}>
                                    <option>---</option>
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 ps-3">
                        <div>
                            <p className={`${styles.label}`}>Wiedervorlage</p>
                            <div className={`d-flex align-items-center ${styles.datePickerContainer}`}>
                                <input
                                    type="text"
                                    placeholder="dd/mm/yyyy"
                                    className={`${styles.dateInput} flex-grow-1`}
                                />
                                <FaCalendarAlt className={`${styles.calendarIcon}`} />
                                <div className={`${styles.timeInput}`}>----</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mt-1'>
                    {/* Left Column: Zusatz and Outlook */}
                    <div className="col-6 p-0">
                        {/* Zusatz Section */}
                        <div>
                            <p className={`${styles.smallText} m-0`}>Zusatz zu Leadstatus</p>
                            <div className={`${styles.selectBottomBorder}`}><p></p></div>
                        </div>

                        {/* Outlook Section */}
                        <div className={`d-flex align-items-center justify-content-center ${styles.outlookSection}`}>
                            <div className={styles.outlookIcon}>
                                <img src={outlook} alt="Outlook" className={styles.outlookLogo} />
                            </div>
                            <div className={`${styles.outlookText}`}>
                                <p className='m-0'>Outlook</p>
                                <p className='m-0'>Erinnerung</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Button Grid */}
                    <div className="col-6 ps-3">
                        <div className='row g-1'>
                            <div className="col-6">
                                <button className={`btn btn-sm w-100 ${styles.smallButton}`}>
                                    Notiz-Intern
                                </button>
                            </div>
                            <div className="col-6">
                                <button className={`btn btn-sm w-100 ${styles.smallButton}`}>
                                    Notiz-Kunde
                                </button>
                            </div>
                            <div className="col-6">
                                <button className={`btn btn-sm w-100 ${styles.smallButton}`}>
                                    N-lead
                                </button>
                            </div>
                            <div className="col-6">
                                <button className={`btn btn-sm w-100 ${styles.smallButton}`}>
                                    abschließen
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeadProject;
