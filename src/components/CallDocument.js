import React, { useState } from 'react';
import styles from './CallDocument.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import up from '../images/button_handset_up.svg';
import down from '../images/button_handset_down.svg';
import callHistory from '../images/button_callhistory_presets.svg';

const CallDocument = () => {
    const [visible, setVisible] = useState(true);
    const [content] = useState(
        `03.05.2023 14:54:14 <strong style="color:blue">Ajla Vejo</strong> : Herr Stoffel wurde erreicht. Ich konnte mein Thema vorstellen und er war auch interessiert. Ich soll mich bis Ende Mai nochmal melden, da gerade ein Projekt ansteht.<br>
23.05.2023 09:52:44 <strong style="color:blue">Ajla Vejo</strong> : FZ/AB<br>
24.05.2023 11:08:37 <strong style="color:blue">Ajla Vejo</strong> : FZ/AB`
    );

    if (!visible) return null;

    return (
        <div className={`container-fluid ${styles.wrapper} p-2`}>
            <div className="row">
                <div className={`col-7 me-4 ${styles.adjustWidth}`}>
                    <div className="col-12">
                        <p className={`m-0  ${styles.callText}`}>Call Dokumentation <span className={styles.name}>(Daniel Stoffel)</span></p>
                        <select className={`form-select form-select-sm ${styles.callselect}`}>
                            <option>-----</option>
                            <option>one</option>
                            <option>two</option>
                        </select>
                    </div>
                    <div className={`col-12 mt-2 `}>
                        <p className=' text-primary '>
                            Wenn "ja" mit welchen
                        </p>
                        <p className={`w-100 ${styles.borderPurpose1}`}></p>

                    </div>

                    <div className="col-12 mt-2">
                        <p className={`text-primary m-0 ${styles.question}`}>Ist Ihnen eine Integration in SAP wichtig?</p>
                        <select className={`form-select form-select-sm ${styles.callselect}`}>
                            <option>-----</option>
                            <option>one</option>
                            <option>two</option>
                        </select>
                    </div>

                    <div className="col-12 mt-2">
                        <p className={`text-primary m-0 ${styles.question}`}>Nutzen Sie bereits eine Software zur Steuerung Wartungs- und Serviceprozessen?</p>
                        <select className={`form-select form-select-sm ${styles.callselect}`}>
                            <option>-----</option>
                            <option>one</option>
                            <option>two</option>
                        </select>
                    </div>

                    <div className={`col-12 mt-2 `}>
                        <p className=' text-primary '>
                            Wenn "ja" mit welchen
                        </p>
                        <p className={`w-100 ${styles.borderPurpose1}`}></p>

                    </div>

                    <div className="col-12">
                        <p className="m-0 text-primary">Test One</p>
                    </div>
                </div>

                <div className={`col-4 bg-dark text-white  ${styles.Anspreche}`}>
                    <div className="row">
                        <div className="col-10">
                            <p className={`fw-bold m-0 ${styles.AnsprecheTitle}`}>Ansprechpartner Rating</p>
                        </div>
                        <div className="col-1 text-end">
                            <span className={styles.closeBtn} onClick={() => setVisible(false)}>✕</span>
                        </div>
                    </div>

                    <div className={`row ${styles.borderPurpose}`}>
                        <div className="col-5">
                            <p className="m-0">Leadstatus</p>
                            <select className={`form-select form-select-sm ${styles.callselect1}`}>
                                <option>C</option>
                                <option>One</option>
                                <option>Two</option>
                            </select>

                            <p className="m-0 mt-2">Zusatz zu Leadstatus</p>
                            <select className={`form-select form-select-sm ${styles.callselect1}`}>
                                <option>----</option>
                                <option>One</option>
                                <option>Two</option>
                            </select>

                            <button className={`btn btn-secondary btn-sm w-100  mt-2 ${styles.notizBtn}`}>Notiz(intern)</button>

                            <p className="m-0 my-2">Ausgeschieden</p>
                        </div>

                        <div className="col-7">
                            <p className="m-0">Wiedervorlage</p>
                            <div className="row">
                                <div className="col-6">
                                    <input type="date" className={`${styles.callselect1} ${styles.callDate}`} />
                                </div>
                                <div className="col-2">
                                    <input type="time" className={`${styles.callTime} ${styles.callselect1}`} />
                                </div>
                            </div>

                            <div className="row mt-2">
                                <div className="col-5">
                                    <p className="m-0">Termin</p>
                                    <select className={`form-select form-select-sm ${styles.callselect1}`}>
                                        <option>------</option>
                                        <option>One</option>
                                        <option>Two</option>
                                    </select>
                                </div>
                                <div className="col-7">
                                    <p className="m-0">Datum</p>
                                    <input type="date" className={` ${styles.callDate} ${styles.callselect1}`} />
                                </div>
                            </div>

                            <button className={`btn btn-secondary btn-sm w-100 mt-2 ${styles.notizBtn}`}>Notiz(Kundensetig)</button>
                            <p className='m-0 my-2'>Zur Blacklist</p>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-5">
                            <button className="btn btn-info btn-sm w-100 mt-2 rounded-0">Wahlversuch</button>
                        </div>
                        <div className="col-7">
                            <button className="btn btn-info btn-sm w-100 mt-2 rounded-0">Call</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mt-2'>
                <div className='col-11'>
                    <div className={`container-fluid ${styles.container} p-0`}>
                        <h6 className="">Call History</h6>
                        <p className="m-0">Neuer Eintrag in die Call History</p>

                        {/* Toolbar */}
                        <div className={styles.toolbar}>
                            <button className="btn btn-sm btn-light border"><i className="bi bi-arrow-counterclockwise"></i></button>
                            <button className="btn btn-sm btn-light border"><i className="bi bi-arrow-clockwise"></i></button>
                            <div className={styles.vr}></div>
                            <button className="btn btn-sm btn-light border"><i className="bi bi-type-bold"></i></button>
                            <button className="btn btn-sm btn-light border"><i className="bi bi-type-italic"></i></button>
                            <button className="btn btn-sm btn-light border"><i className="bi bi-type-underline"></i></button>
                            <div className={styles.vr}></div>
                            <button className="btn btn-sm btn-light border"><i className="bi bi-text-left"></i></button>
                            <button className="btn btn-sm btn-light border"><i className="bi bi-text-center"></i></button>
                            <button className="btn btn-sm btn-light border"><i className="bi bi-text-right"></i></button>
                            <button className="btn btn-sm btn-light border"><i className="bi bi-justify"></i></button>
                            <div className={styles.vr}></div>
                            <button className="btn btn-sm btn-light border"><i className="bi bi-outdent"></i></button>
                            <button className="btn btn-sm btn-light border"><i className="bi bi-indent"></i></button>
                            <button className="btn btn-sm btn-light border"><i className="bi bi-list-ul"></i></button>
                            <button className="btn btn-sm btn-light border"><i className="bi bi-list-ol"></i></button>
                        </div>

                        {/* Static Editor Area */}
                        <div className={styles.editorContainer} dangerouslySetInnerHTML={{ __html: content }}></div>
                    </div>
                </div>
                <div className='col-1'>
                    <div className='d-flex flex-column mt-5'>
                        <img width={'100%'} src={callHistory} />
                        <img src={up} />
                        <img src={down} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CallDocument;
