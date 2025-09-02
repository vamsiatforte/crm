
import styles from './Zusatzinformationen.module.css';
const Zusatzinformationen = () => {
    return (
        <div className={`col-5  mb-3 ps-2 ${styles.ziContainer}`}>
            <div className={styles.ziCard}>
                {/* Top Row */}
                <div className="row pb-2">
                    <div className="col-4">
                        <p className='fw-bold mb-0'>Zusatzinformationen</p>
                    </div>
                    <div className="col-8 d-flex justify-content-end" style={{ alignItems: 'center' }}>
                        <label className={styles.ziLabel}>Vollständigkeit</label>
                        <div className={styles.ziProgressWrapper} style={{ width: '220px', marginLeft: '16px' }}>
                            <div className={styles.ziProgressBar} style={{ position: 'relative', background: '#ececee', height: '12px', overflow: 'hidden' }}>
                                <div
                                    className={styles.ziProgressFill}
                                   
                                ></div>
                                <span
                                    className={styles.ziPercent}
                                   
                                >
                                    56%
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* First Row */}
                <div className="row">
                    <div className={`${styles.specialHeight} col-3`}>
                        <label className={styles.ziLabel}>Mitarbeiter Anzahl</label>
                        <div className={styles.ziValue}>440</div>
                    </div>
                    <div className={`${styles.specialHeight} col-3`}>
                        <label className={styles.ziLabel}>Mitarbeiter Cluster</label>
                        <select className={styles.ziSelect}>
                            <option>-----</option>
                            <option>Cluster A</option>
                            <option>Cluster B</option>
                        </select>
                    </div>
                    <div className={`${styles.specialHeight} col-3`}>
                        <label className={styles.ziLabel}>Umsatz in €</label>
                        <div className={styles.ziValue}>147000000</div>
                    </div>
                    <div className={`${styles.specialHeight} col-3`}>
                        <label className={styles.ziLabel}>Konzernzugehörigkeit</label>
                        <select className={styles.ziSelect}>
                            <option>-----</option>
                            <option>Konzern A</option>
                            <option>Konzern B</option>
                        </select>
                    </div>
                </div>

                {/* Third Row */}
                <div className="row">
                    <div className={`${styles.specialHeight} col-8`}>
                        <label className={styles.ziLabel}>Branche</label>
                        <select className={styles.ziSelectFull}>
                            <option>Herstellung von pharmazeutischen Erzeugnissen</option>
                            <option>Maschinenbau</option>
                            <option>IT Dienstleistungen</option>
                        </select>
                    </div>
                    <div className={`${styles.specialHeight} col-4`}>
                        <label className={styles.ziLabel}>Vertical</label>
                        <select className={styles.ziSelect}>
                            <option>Life Science</option>
                            <option>Finance</option>
                            <option>Technology</option>
                        </select>
                    </div>
                </div>

                {/* Fourth Row */}
                <div className="row">
                    <div className={`${styles.specialHeight} col-4`}>
                        <label className={styles.ziLabel}>CRM</label>
                        <select className={styles.ziSelect}>
                            <option>-----</option>
                            <option>Salesforce</option>
                            <option>Zoho</option>
                        </select>
                    </div>
                    <div className={`${styles.specialHeight} col-4`}>
                        <label className={styles.ziLabel}>ERP</label>
                        <select className={styles.ziSelect}>
                            <option>SAP</option>
                            <option>Oracle</option>
                            <option>Microsoft Dynamics</option>
                        </select>
                    </div>
                    <div className={`${styles.specialHeight} col-4`}>
                        <label className={styles.ziLabel}>Security</label>
                        <select className={styles.ziSelect}>
                            <option>-----</option>
                            <option>Fortinet</option>
                            <option>Symantec</option>
                        </select>
                    </div>
                </div>

                {/* Fifth Row */}
                <div className="row">
                    <div className={`${styles.specialHeight} col-4`}>
                        <label className={styles.ziLabel}>Database</label>
                        <select className={styles.ziSelect}>
                            <option>-----</option>
                            <option>MySQL</option>
                            <option>Oracle DB</option>
                        </select>
                    </div>
                    <div className={`${styles.specialHeight} col-4`}>
                        <label className={styles.ziLabel}>Server</label>
                        <select className={styles.ziSelect}>
                            <option>-----</option>
                            <option>Linux</option>
                            <option>Windows Server</option>
                        </select>
                    </div>
                    <div className={`${styles.specialHeight} col-4`}>
                        <label className={styles.ziLabel}>Storage</label>
                        <select className={styles.ziSelect}>
                            <option>-----</option>
                            <option>Amazon S3</option>
                            <option>Google Cloud Storage</option>
                        </select>
                    </div>
                </div>

                {/* Sixth Row */}
                <div className="row">
                    <div className={`${styles.specialHeight} col-4`}>
                        <label className={styles.ziLabel}>Cloud Solution</label>
                        <select className={styles.ziSelect}>
                            <option>-----</option>
                            <option>AWS</option>
                            <option>Azure</option>
                        </select>
                    </div>
                    <div className={`${styles.specialHeight} col-4`}>
                        <label className={styles.ziLabel}>Hosting</label>
                        <select className={styles.ziSelect}>
                            <option>-----</option>
                            <option>On-Premise</option>
                            <option>Cloud</option>
                        </select>
                    </div>
                    <div className={`${styles.specialHeight} col-4`}>
                        <label className={styles.ziLabel}>Business Intelligence</label>
                        <select className={styles.ziSelect}>
                            <option>-----</option>
                            <option>Power BI</option>
                            <option>Tableau</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Zusatzinformationen;
