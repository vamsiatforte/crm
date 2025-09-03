import React from 'react';
import styles from './CallDocument.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { TextField, MenuItem } from '@mui/material';

const CallDocument = ({ onClose }) => {
  return (
    <div className={`container-fluid ${styles.wrapper} `}>
      <div className="row">
       
        <div className={`col-7 me-4 ${styles.adjustWidth}`}>
           <div className="col-12">
            <p className={`m-0  ${styles.callText}`}>
              Call Dokumentation <span className={styles.name}>(Daniel Stoffel)</span>
            </p>

          </div>
        <div className={`${styles.questionDiv}`}>
              <div className={`col-12 mt-2`}>
            <p className={`text-primary m-0 ${styles.question}`}>Wenn "ja" mit welchen</p>
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

          <div className="col-12 mt-2">
            <p className={`text-primary m-0 ${styles.question}`}>Ist Ihnen eine Integration in SAP wichtig?</p>
            <TextField
              select
              variant="standard"
              size="small"
              fullWidth
              className={styles.callselect}
              defaultValue=""
            >
              <MenuItem value="">-----</MenuItem>
              <MenuItem value="one">one</MenuItem>
              <MenuItem value="two">two</MenuItem>
            </TextField>
          </div>

          <div className="col-12 mt-2">
            <p className={`text-primary m-0 ${styles.question}`}>Nutzen Sie bereits eine Software zur Steuerung Wartungs- und Serviceprozessen?</p>
            <TextField
              select
              variant="standard"
              size="small"
              fullWidth
              className={styles.callselect}
              defaultValue=""
            >
              <MenuItem value="">-----</MenuItem>
              <MenuItem value="one">one</MenuItem>
              <MenuItem value="two">two</MenuItem>
            </TextField>
          </div>

          <div className={`col-12 mt-2`}>
            <p className={`text-primary m-0 ${styles.question}`}>Wenn "ja" mit welchen</p>
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

        <div className={`col-4 bg-dark text-white  ${styles.Anspreche}`}>
          <div className="row">
            <div className="col-10">
              <p className={`fw-bold m-0 ${styles.AnsprecheTitle}`}>Ansprechpartner Rating</p>
            </div>
            <div className="col-1 text-end">
              <span className={styles.closeBtn} onClick={onClose}>✕</span>
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

              <button className={`btn btn-secondary btn-sm w-100  mt-2 ${styles.notizBtn}`} type="button">
                Notiz(intern)
              </button>

              <p className="m-0 my-2">Ausgeschieden</p>
            </div>

            <div className="col-7">
              <p className="m-0">Wiedervorlage</p>
              <div className="row">
                <div className="col-6 ">
                  <input type="date" className={` ${styles.callselect1} ${styles.callDate}`} />
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

              <button className={`btn btn-secondary btn-sm w-100 mt-2 ${styles.notizBtn}`} type="button">
                Notiz(Kundensetig)
              </button>
              <p className='m-0 my-2'>Zur Blacklist</p>
            </div>
          </div>

          <div className="row">
            <div className="col-5">
              <button className="btn btn-info btn-sm w-100 mt-2 rounded-0" type="button">Wahlversuch</button>
            </div>
            <div className="col-7">
              <button className="btn btn-info btn-sm w-100 mt-2 rounded-0" type="button">Call</button>
            </div>
          </div>
        </div>
      </div>

      <div className='row mt-1'>
        <div className='col-12'>
          <div className={`container-fluid ${styles.container} p-0`}>
            <h6 className="">Call History</h6>

            <div className={styles.callHistoryContainer}>
              <div className={styles.noDataMessage}>
                <p>No data available</p>
              </div>
            </div>

            <div className={styles.buttonContainer}>
              <button className={`btn ${styles.callHistoryBtn}`} type="button">
                Call history
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallDocument;
