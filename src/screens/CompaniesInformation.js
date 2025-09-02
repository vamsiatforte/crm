import styles from './CompaniesInformation.module.css';
import { useState } from 'react';
import Unternehmensinformation from '../components/Unternehmensinformation';
import Zusatzinformationen from '../components/Zusatzinformationen';
import Administratives from '../components/Administratives';
import Kontakte from '../components/Kontekte';
import CallDocument from '../components/CallDocument'; 


const CompaniesInformation = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    return (
        <div className={`${styles.bgColor}`} style={{minWidth: "1350px"}}>
            <div className={`row ${styles.headerRow}`}>
                        <div className="col-9">
                            <span className={styles.headerTitle}>Osapiens Maintenance Service</span>
                        </div>
                        <div className="col-3 text-end">
                            <span className={styles.headerDate}>Donnerstag, 17. April 2025 um 20:28:28</span>
                            <span className={styles.headerUserIcon}>👤</span>
                        </div>
                    </div>
            <div className='container-fluid'>
            <div className='row'>
            <div className='col-12 '>
                <div className={`container-fluid ${styles.pageWrapper}`}>
                    <div className='styles.sideLine'></div>
                    {/* Header */}
                    

                    <div className='p-2'>
                        {/* Main Sections */}
                    <div className="row mt-2">
                        <Unternehmensinformation />
                        <Zusatzinformationen />
                        <Administratives />
                    </div>

                    {/* Kontakte and Right Panel */}
                    <div className="row ">
                        <div className="col-4 p-0">
                            <Kontakte selectedIndex={selectedIndex} onContactSelect={setSelectedIndex} />
                        </div>
                        <div className="col-8">
                            {selectedIndex !== null && <CallDocument />}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default CompaniesInformation;
