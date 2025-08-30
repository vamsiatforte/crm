import React, { useEffect, useState } from 'react';
import styles from './webPortal.module.css';
import LeadChart from '../components/LeadChart';
import CampaignIndexChart from '../components/CampaignIndexChart';
import LeadBreakdownDonut from '../components/LeadBreakdownDonut';

import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import GroupsIcon from '@mui/icons-material/Groups';

const WebPortal = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const berlinTime = new Date().toLocaleString('de-DE', {
        timeZone: 'Europe/Berlin',
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });

      setCurrentTime(berlinTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1 className="text-white">Web Portal</h1>
      <p className="text-white">{currentTime}</p>


      <div className={`${styles.webPortal} bg-white rounded`}>
        <div className="container-fluid">

          <div className="row">

            <div className={` col-lg-6 col-md-12 ps-1 `}>

              <div className={`${styles.bgColor} p-2  m-2 rounded`} >
                <div className='d-flex justify-content-start align-items-center '>
                  <p className={`${styles.title} d-flex align-items-center gap-2`}>
                    <GroupsIcon fontSize="large" className={`${styles.iconStyle}`} />
                    Prognostizierter Verlauf der Leandentwicklung</p>
                </div>
                <div className={`bg-white col-12`}><LeadChart /></div>
                <div className="row mt-3 ">
                  <div className={`col-6  ${styles.textBox} `}>
                    <div className={`bg-white p-2`}><p>Calls & Leads der Letzten 2 Quartale</p></div>
                  </div>
                  <div className={`col-6 ${styles.textBox} `}>
                    <div className='bg-white p-2 '><p>Aktueller Sales Funnel</p></div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row">
                <div className={`col-6 d-flex align-items-center justify-content-center pb-4 rounded mt-2  ${styles.bgColor}`} style={{ height: '100%' }}>
                  <CampaignIndexChart />
                </div>

                <div className="col-6 px-4 pt-2">
                  <div className={`row p-2 ${styles.bgColor} ${styles.lead}`}>
                    <p>
                      <LaptopChromebookIcon fontSize="medium" className={`${styles.iconStyle} me-2`} />
                      Lead Aufschlüsselung
                    </p>
                    <div className='col-6 '>
                      <div className='d-flex flex-column justify-content-center align-items-center'>
                        <p className={`fw-bold mb-1 ${styles.webPortalText}`}>Heighest Leads</p>
                        <p className='text-primary mb-2'>113</p>
                      </div>
                      <div className='d-flex flex-column justify-content-center align-items-center'>
                        <p className={`mb-1 ${styles.webPortalText} fw-bold`}> Pipeline Leads</p>
                        <p className='text-primary '>23</p>
                      </div>
                    </div>
                    <div className='col-6'><LeadBreakdownDonut /></div>
                  </div>
                </div>
              </div>
              <div className="row " >
                {/* Left Side - Conversation & Performance */}
                <div className="col-6 p-0">
                  <div className={` mt-3 p-2 col-12  ${styles.bgColor}`}>
                    <p className='fw-bold'>

                      <LaptopChromebookIcon fontSize="medium" className={` ${styles.iconStyle} me-2`} />
                      Conversation</p>
                    <div className="row d-flex justify-content-between">
                      <div className="col-6 p-0 ">
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                          <p className="mb-1 fw-bold">C-Rate</p>
                          <p className="mb-2 fw-bold text-primary">23%</p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                          <p className="mb-1 fw-bold">ROI</p>
                          <p className="mb-2 fw-bold text-primary">23%</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`mt-3 rounded ${styles.bgColor} p-2`}>
                    <p className='fw-bold'> <LaptopChromebookIcon fontSize="medium" className={`${styles.iconStyle} me-2`} /> Performance</p>
                    <ul className={`${styles.performanceList} mb-0 ps-0 list-unstyled`}>
                      <li>
                        <span>Calls Gesamt</span>
                        <span>120</span>
                      </li>
                      <li>
                        <span>Calls Akt Monat</span>
                        <span>45</span>
                      </li>
                      <li>
                        <span>Meetings Geplant</span>
                        <span>30</span>
                      </li>
                      <li>
                        <span>Meetings Geplant</span>
                        <span>30</span>
                      </li>
                      <li>
                        <span>Meetings Geplant</span>
                        <span>30</span>
                      </li>

                    </ul>

                  </div>
                </div>

                {/* Right Side - Lead Status Table */}
                <div className="col-6">
                  <div className={`mt-3 rounded ${styles.bgColor} p-2`}>
                    <p>
                      <LaptopChromebookIcon fontSize="medium" className={`${styles.iconStyle} me-2`} />
                      Lead Status
                    </p>

                    {/* Header */}
                    <div className={`d-flex fw-bold px-2 ${styles.leadStatusHeader}`}>
                      <span className="flex-fill text-center">Lead</span>
                      <span className="flex-fill text-center">Anzahl</span>
                      <span className="flex-fill text-center">Success</span>
                    </div>

                    {/* Scrollable list */}
                    <ul className={`${styles.leadStatusList} mb-0 ps-0 list-unstyled`}>
                      <li>
                        <span>Kontakt</span>
                        <span>40</span>
                        <span>72</span>
                      </li>
                      <li>
                        <span>Kontakt</span>
                        <span>40</span>
                        <span>64</span>
                      </li>
                      <li>
                        <span>Kontakt</span>
                        <span>40</span>
                        <span>88</span>
                      </li>
                      <li>
                        <span>Kontakt</span>
                        <span>40</span>
                        <span>95</span>
                      </li>
                      <li>
                        <span>Kontakt</span>
                        <span>40</span>
                        <span>81</span>
                      </li>
                      <li>
                        <span>Kontakt</span>
                        <span>40</span>
                        <span>77</span>
                      </li>
                      <li>
                        <span>Kontakt</span>
                        <span>40</span>
                        <span>90</span>
                      </li>
                    </ul>
                  </div>




                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <p className="text-white">© 2023 Sales People GmbH. Alle Rechte vorbehalten.</p>
    </div>
  );
};

export default WebPortal;
