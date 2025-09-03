import React from 'react';
import { TextField } from '@mui/material';
import styles from './Zusatzinformationen.module.css';

const Zusatzinformationen = () => {
  return (
    <div className={`col-5 mb-3 ps-2 ${styles.ziContainer}`}>
      <div className={styles.ziCard}>
        {/* Top Row */}
        <div className="row mb-2">
          <div className="col-4">
            <p className="fw-bold mb-0">Zusatzinformationen</p>
          </div>
          <div className="col-8 d-flex justify-content-end" style={{ alignItems: 'center' }}>
            <label className={styles.ziLabel}>Vollständigkeit</label>
            <div style={{ width: '220px', marginLeft: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ position: 'relative', background: '#ececee', height: '12px', overflow: 'hidden', flexGrow: 1 }}>
                <div
                  style={{
                    width: '56%',
                    background: '#22b6ea',
                    height: '100%',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    transition: 'width 0.3s',
                  }}
                ></div>
                <span className={`${styles.persentageSpan}`}>56%</span>
              </div>
            </div>
          </div>
        </div>

        {/* First Row */}
        <div className="row">
          <div className={`${styles.specialHeight} col-3`}>
            <label className={styles.ziLabel} htmlFor="mitarbeiter-anzahl">
              Mitarbeiter Anzahl
            </label>
            <TextField
              id="mitarbeiter-anzahl"
              variant="standard"
              defaultValue="440"
              className={styles.customZiInput}
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
          <div className={`${styles.specialHeight} col-3`}>
            <label className={styles.ziLabel} htmlFor="mitarbeiter-cluster">
              Mitarbeiter Cluster
            </label>
            <select id="mitarbeiter-cluster" className={styles.ziSelect}>
              <option>-----</option>
              <option>Cluster A</option>
              <option>Cluster B</option>
            </select>
          </div>
          <div className={`${styles.specialHeight} col-3`}>
            <label className={styles.ziLabel} htmlFor="umsatz">
              Umsatz in €
            </label>
            <TextField
              id="umsatz"
              variant="standard"
              defaultValue="147000000"
              className={styles.customZiInput}
              InputProps={{
                disableUnderline: false,
                style: {
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  color: '#333',
                  lineHeight: 1,
                },
              }}
              fullWidth
            />
          </div>
          <div className={`${styles.specialHeight} col-3`}>
            <label className={styles.ziLabel} htmlFor="konzernzugehoerigkeit">
              Konzernzugehörigkeit
            </label>
            <select id="konzernzugehoerigkeit" className={styles.ziSelect}>
              <option>-----</option>
              <option>Konzern A</option>
              <option>Konzern B</option>
            </select>
          </div>
        </div>

        {/* Third Row */}
        <div className="row">
          <div className={`${styles.specialHeight} col-8`}>
            <label className={styles.ziLabel} htmlFor="branche">
              Branche
            </label>
            <select id="branche" className={styles.ziSelectFull}>
              <option>Herstellung von pharmazeutischen Erzeugnissen</option>
              <option>Maschinenbau</option>
              <option>IT Dienstleistungen</option>
            </select>
          </div>
          <div className={`${styles.specialHeight} col-4`}>
            <label className={styles.ziLabel} htmlFor="vertical">
              Vertical
            </label>
            <select id="vertical" className={styles.ziSelect}>
              <option>Life Science</option>
              <option>Finance</option>
              <option>Technology</option>
            </select>
          </div>
        </div>

        {/* Fourth Row */}
        <div className="row">
          <div className={`${styles.specialHeight} col-4`}>
            <label className={styles.ziLabel} htmlFor="crm">
              CRM
            </label>
            <select id="crm" className={styles.ziSelect}>
              <option>-----</option>
              <option>Salesforce</option>
              <option>Zoho</option>
            </select>
          </div>
          <div className={`${styles.specialHeight} col-4`}>
            <label className={styles.ziLabel} htmlFor="erp">
              ERP
            </label>
            <select id="erp" className={styles.ziSelect}>
              <option>SAP</option>
              <option>Oracle</option>
              <option>Microsoft Dynamics</option>
            </select>
          </div>
          <div className={`${styles.specialHeight} col-4`}>
            <label className={styles.ziLabel} htmlFor="security">
              Security
            </label>
            <select id="security" className={styles.ziSelect}>
              <option>-----</option>
              <option>Fortinet</option>
              <option>Symantec</option>
            </select>
          </div>
        </div>

        {/* Fifth Row */}
        <div className="row">
          <div className={`${styles.specialHeight} col-4`}>
            <label className={styles.ziLabel} htmlFor="database">
              Database
            </label>
            <select id="database" className={styles.ziSelect}>
              <option>-----</option>
              <option>MySQL</option>
              <option>Oracle DB</option>
            </select>
          </div>
          <div className={`${styles.specialHeight} col-4`}>
            <label className={styles.ziLabel} htmlFor="server">
              Server
            </label>
            <select id="server" className={styles.ziSelect}>
              <option>-----</option>
              <option>Linux</option>
              <option>Windows Server</option>
            </select>
          </div>
          <div className={`${styles.specialHeight} col-4`}>
            <label className={styles.ziLabel} htmlFor="storage">
              Storage
            </label>
            <select id="storage" className={styles.ziSelect}>
              <option>-----</option>
              <option>Amazon S3</option>
              <option>Google Cloud Storage</option>
            </select>
          </div>
        </div>

        {/* Sixth Row */}
        <div className="row">
          <div className={`${styles.specialHeight} col-4`}>
            <label className={styles.ziLabel} htmlFor="cloud-solution">
              Cloud Solution
            </label>
            <select id="cloud-solution" className={styles.ziSelect}>
              <option>-----</option>
              <option>AWS</option>
              <option>Azure</option>
            </select>
          </div>
          <div className={`${styles.specialHeight} col-4`}>
            <label className={styles.ziLabel} htmlFor="hosting">
              Hosting
            </label>
            <select id="hosting" className={styles.ziSelect}>
              <option>-----</option>
              <option>On-Premise</option>
              <option>Cloud</option>
            </select>
          </div>
          <div className={`${styles.specialHeight} col-4`}>
            <label className={styles.ziLabel} htmlFor="business-intelligence">
              Business Intelligence
            </label>
            <select id="business-intelligence" className={styles.ziSelect}>
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
