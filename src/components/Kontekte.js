import { FaStar, FaPencilAlt, FaTag } from 'react-icons/fa';
import { useState } from 'react';
import styles from './Kontekte.module.css';
import up from '../images/button_handset_up.svg';
import down from '../images/button_handset_down.svg';

const Kontakte = ({ onContactSelect, selectedIndex }) => {
    const toggleOpen = (index) => {
        onContactSelect(selectedIndex === index ? null : index);
    };

    return (
        <div className={`col-12  ${styles.kontakteContainer}`}>
            {/* Header */}
            <div className="row align-items-center mb-3">
                <div className="col-10">
                    <div className="d-flex align-items-center">
                        <div className={`${styles.kontakteHeader} border-top border-dark pt-2 me-3`}>
                            <p className="mb-0">Kontakte</p>
                        </div>
                        <p className={`mb-0 d-flex align-items-center ${styles.favoritesText}`}>
                            <FaStar className={`me-1 ${styles.starIcon}`} /> Favorites
                        </p>
                    </div>
                </div>
                <div className="col-2">
                    <div style={{ gap: '10px' }} className="d-flex justify-content-end pt-1 pe-1">
                        <img src={up} alt="Up" className={`img-fluid ${styles.controlButton}`} />
                        <img src={down} alt="Down" className={`img-fluid ${styles.controlButton} ms-1`} />
                    </div>
                </div>
            </div>

            {/* Table Header */}
            <div className={`row ${styles.tableHeader}`}>
                <div className="col-5"><p className="fw-bold">Ansprechpartner/Funktion</p></div>
                <div className="col-2"><p className="fw-bold">Lead/WVL</p></div>
                <div className="col-2"><p className="fw-bold">Telefon/Mobil</p></div>
                <div className="col-3"><p className="fw-bold">Aktion</p></div>
            </div>

            {/* Contact Entry 1 */}
            <div style={{width:'97%',paddingLeft:'20px'}}>
                <div
                    className={`row ${styles.contactRow} ${selectedIndex === 0 ? styles.activeRow : ''}`}
                    onClick={() => toggleOpen(0)}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="col-5">
                        <div className="d-flex flex-column">
                            <p className={styles.contactName}>Daniel Stoffel</p>
                            <p className={styles.contactPosition}>Teamleiter Instandhaltung /</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="d-flex flex-column">
                            <p className={styles.leadStatus}>C</p>
                            <p className={styles.contactDate}>17/04/2025</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className={`form-check ${styles.phoneCheckbox}`}>
                            <input type="checkbox" className={`form-check-input ${styles.checkboxInput}`} />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="d-flex">
                            <button className={`btn btn-sm ${styles.editButton}`}><FaPencilAlt /></button>
                            <button className={`btn btn-sm ${styles.tagButton} ms-1`}><FaTag /></button>
                        </div>
                    </div>
                </div>

                {selectedIndex === 0 && (
                    <div className={`row ${styles.contactDetailRow}`}>
                        <div className="col-12 px-3 py-3">
                            <div className="row mb-3">
                                <div className="col-4">
                                    <label className="form-label">Email Adresse</label>
                                    <input type="email" className={`form-control ${styles.input1}`} />
                                </div>
                                <div className="col-4">
                                    <label className="form-label">Funktionsbezeichnung</label>
                                    <input type="text" className={`form-control ${styles.input1}`}/>
                                </div>
                                <div className="col-4">
                                    <label className="form-label">Rolle des AP</label>
                                    <select className={`form-select ${styles.input1}`}>
                                        <option>------</option>
                                        <option>One</option>
                                        <option>Two</option>
                                        <option>Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4 d-flex align-items-center">
                                    <input type="checkbox" id="infoCheck" className="form-check-input me-2" />
                                    <label htmlFor="infoCheck" className="form-check-label">Info Versand-Anforderung</label>
                                </div>
                                <div className="col-4">
                                    <label className="form-label">Versand-Paket</label>
                                    <input type="text"className={`form-control ${styles.input1}`} />
                                </div>
                                <div className="col-4">
                                    <label className="form-label">Versanddatum</label>
                                    <input type="date"className={`form-control ${styles.input1}`} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Contact Entry 2 */}
            <div
                className={`row ${styles.contactRow} ${selectedIndex === 1 ? styles.activeRow : ''}`}
                onClick={() => toggleOpen(1)}
                style={{ cursor: 'pointer' }}
            >
                <div className="col-5">
                    <div className="d-flex flex-column">
                        <p className={styles.contactName} style={{ color: '#007bff' }}>Zentrale</p>
                        <p className={styles.contactPosition}>/</p>
                    </div>
                </div>
                <div className="col-2">
                    <div className="d-flex flex-column">
                        <p className={styles.leadStatus}></p>
                        <p className={styles.contactDate}>21/05/2024</p>
                    </div>
                </div>
                <div className="col-2">
                    <div className={`form-check ${styles.phoneCheckbox}`}>
                        <input type="checkbox" className={`form-check-input ${styles.checkboxInput}`} />
                    </div>
                </div>
                <div className="col-3">
                    <div className="d-flex">
                        <button className={`btn btn-sm ${styles.editButton}`}><FaPencilAlt /></button>
                        <button className={`btn btn-sm ${styles.tagButton} ms-1`}><FaTag /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Kontakte;
