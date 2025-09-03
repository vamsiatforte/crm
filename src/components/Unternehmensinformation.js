import React from 'react';
import styles from '../screens/CompaniesInformation.module.css';
import buttonVisit from '../images/button_visit_url.svg';
import google from '../images/button_google.svg';
import linkedin from '../images/button_linkedin.svg';
import outlook from '../images/outlook.svg';
import up from '../images/button_handset_up.svg';
import down from '../images/button_handset_down.svg';
import callHistory from '../images/button_callhistory_presets.svg';
import correction from '../images/button_correction.svg';

import { TextField } from '@mui/material';

const Unternehmensinformation = () => {
  return (
    <div className={`col-4 ${styles.Unternehmensinformation}`}>
      <div className="d-flex mb-3">
        {/* First Row with spacing */}
        <div className={`col-9 bg-white ${styles.unteDiv}`}>
          <p className="fw-bold mb-0 mt-1">Unternehmensinformation</p>

          <div className="d-flex justify-content-between">
            <div className={`${styles.dataDiv}`}>
              <p className={styles.label}>Firma</p>
              <TextField
                variant="standard"
                defaultValue="Lanza Cologne AG"
                className={styles.customInputRoot}
                InputProps={{
                  classes: {
                    input: styles.customInputInput,
                    underline: styles.customInputUnderline,
                  },
                }}
              />
            </div>
            <div className={`${styles.dataDiv}`}>
              <p className={styles.label}>SPC-ID</p>
              <TextField
                variant="standard"
                defaultValue="1"
                className={styles.customInputRoot}
                InputProps={{
                  classes: {
                    input: styles.customInputInput,
                    underline: styles.customInputUnderline,
                  },
                }}
              />
            </div>
          </div>

          {/* Second Row with spacing */}
          <div className="d-flex justify-content-between ">
            <div className={`${styles.dataDiv}`}>
              <p className={styles.label}>Straße</p>
              <TextField
                variant="standard"
                defaultValue="Nattermannallee"
                className={styles.customInputRoot}
                InputProps={{
                  classes: {
                    input: styles.customInputInput,
                    underline: styles.customInputUnderline,
                  },
                }}
              />
            </div>

            <div className={`${styles.dataDiv} d-flex justify-content-between`}>
              <div className="me-2 w-50">
                <p className={styles.label}>Nr.</p>
                <TextField
                  variant="standard"
                  defaultValue="1"
                  className={styles.customInputRoot}
                  InputProps={{
                    classes: {
                      input: styles.customInputInput,
                      underline: styles.customInputUnderline,
                    },
                  }}
                />
              </div>
              <div className="w-50">
                <p className={styles.label}>PLZ</p>
                <TextField
                  variant="standard"
                  defaultValue="50829"
                  className={styles.customInputRoot}
                  InputProps={{
                    classes: {
                      input: styles.customInputInput,
                      underline: styles.customInputUnderline,
                    },
                  }}
                />
              </div>
            </div>

            <div className={`${styles.dataDiv}`}>
              <p className={styles.label}>Ort</p>
              <TextField
                variant="standard"
                defaultValue="Köln"
                className={styles.customInputRoot}
                InputProps={{
                  classes: {
                    input: styles.customInputInput,
                    underline: styles.customInputUnderline,
                  },
                }}
              />
            </div>
            <div className={`${styles.dataDiv} ${styles.landDiv}`}>
              <p className={styles.label}>Land</p>
              <TextField
                variant="standard"
                defaultValue="DE"
                className={styles.customInputRoot}
                InputProps={{
                  classes: {
                    input: styles.customInputInput,
                    underline: styles.customInputUnderline,
                  },
                }}
              />
            </div>
          </div>

          {/* third row */}
          <div className="d-flex justify-content-between ">
            <div className={`${styles.dataDiv}`}>
              <p className={styles.label}>HomePage</p>
              <TextField
                variant="standard"
                defaultValue="www.lonzabio.com"
                className={styles.customInputRoot}
                InputProps={{
                  classes: {
                    input: styles.customInputInput,
                    underline: styles.customInputUnderline,
                  },
                }}
              />
            </div>
            <div>
              <img width={'40px'} height={'20px'} src={buttonVisit} alt="Visit Button" />
            </div>
            <div className={`${styles.dataDiv}`}>
              <p className={styles.label}>telefon</p>
              <TextField
                variant="standard"
                defaultValue="+49 22 1991990"
                className={styles.customInputRoot}
                InputProps={{
                  classes: {
                    input: styles.customInputInput,
                    underline: styles.customInputUnderline,
                  },
                }}
              />
            </div>
          </div>
        </div>

        <div className={`col-3 ${styles.firma} p-2`}>
          <div className="col-12">
            <p className={styles.firmaText}>Firma (be)Suchen</p>
          </div>

          {/* Row 1 - Logos */}
          <div className="d-flex justify-content-between">
            <div>
              <img className={styles.firmaImg} src={google} alt="Google" />
            </div>
            <div>
              <img className={styles.firmaImg} src={linkedin} alt="LinkedIn" />
            </div>
            <div>
              <img className={styles.firmaImg} src={google} alt="Google Again" />
            </div>
          </div>

          {/* Row 2 - Korretur / Konzernverw */}
          <div className="d-flex justify-content-between">
            <div>
              <p className={styles.firmaText}>Korretur</p>
            </div>
            <div>
              <p className={styles.firmaText}>Konzernverw</p>
            </div>
          </div>
          <div className="d-flex justify-content-center gap-2">
            <div>
              <img className={styles.firmaImg2} src={correction} alt="Correction" />
            </div>
            <div>
              <img className={styles.firmaImg2} src={callHistory} alt="Call History" />
            </div>
          </div>

          {/* Row 3 - Anruf Section */}
          <div className="row">
            <div className="col-12 mt-1">
              <p className={styles.firmaTextSmall}>Anruf auf Stammnummer</p>
            </div>

            <div className="d-flex justify-content-center gap-2 mt-1">
              <div>
                <img src={up} alt="Up" className={styles.firmaImgCall} />
              </div>
              <div>
                <img src={down} alt="Down" className={styles.firmaImgCall} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`d-flex justify-content-between ${styles.downDiv} py-2 gap-2`}>
        <div className={`${styles.down}`} style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
          <label className={styles.label} style={{ marginBottom: 4 }}>Trance</label>
          <TextField
            variant="standard"
            className={styles.customInputRoot}
            InputProps={{
              classes: {
                input: styles.customInputInput,
                underline: styles.customInputUnderline,
              },
            }}
            fullWidth
            defaultValue=""
          />
        </div>

        <div className={`${styles.down}`} style={{ width: '20%', display: 'flex', flexDirection: 'column' }}>
          <label className={styles.label} style={{ marginBottom: 4 }}>Prioritat/Zusatz</label>
          <TextField
            variant="standard"
            className={styles.customInputRoot}
            InputProps={{
              classes: {
                input: styles.customInputInput,
                underline: styles.customInputUnderline,
              },
            }}
            fullWidth
            defaultValue=""
          />
        </div>

        <div className={`${styles.down}`} style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
          <label className={styles.label} style={{ marginBottom: 4 }}>Account-Manager Kundenseitig</label>
          <TextField
            variant="standard"
            className={styles.customInputRoot}
            InputProps={{
              classes: {
                input: styles.customInputInput,
                underline: styles.customInputUnderline,
              },
            }}
            fullWidth
            defaultValue=""
          />
        </div>
      </div>

    </div>
  );
};

export default Unternehmensinformation;
