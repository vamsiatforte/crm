import React from 'react';
import GroupsIcon from '@mui/icons-material/Groups';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from './SetUp.module.css';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import DashboardIcon from '@mui/icons-material/Dashboard';


const Setup = () => {
  return (
    <div className={`container-fluid   ${styles.mainContainer}`} style={{ fontSize: '0.75rem' }}>
      <h2 className=" text-white m-0">Projekt Administration</h2>
      <p className=" text-white m-0">Montag, 08. Mai 2023 | 12:54 Uhr</p>
      <div className={`bg-white rounded-3  p-4 ${styles.outWidth}`} >
        <div className="row col-lg-12  col-md-12 gap-3" >
          {/* Team Section */}
          <div className={`col-lg-2 col-md-2 mb-3 p-2 rounded ${styles.bgColor} ${styles.sectionBox} ${styles.team}`}>
            <div className={`${styles.sectionHeader}`}>
              <div className="d-flex align-items-center">
                <GroupsIcon fontSize="large" className={`${styles.iconStyle}`} />
                <h5 className="mb-0">Team</h5>
              </div>

              <p htmlFor="teamSelect" className={`${styles.teamSideText}`}>Mitarbeiter*in hinzufügen</p>

              <select id="teamSelect" className="form-select mb-3">

                <option value="">Bitte auswählen</option>
                <option value="1">Alparmy Lugerowas</option>
                <option value="2">Adise Lafiton</option>
                <option value="3">Andre Fristoz</option>
                <option value="4">Andreas Grin</option>
                <option value="5">Andreas Schlosser</option>
                <option value="6">Attila Kapitan</option>
              </select>
              <p className={`${styles.teamText}`}>Mitarbeiter*in</p>
            </div>
            <ul className={`list-group ${styles.sectionContent}`}>
              <li className={`list-group-item d-flex justify-content-between align-items-center ${styles.listItem}`}
                style={{ backgroundColor: 'white' }}>
                Adila Kalid
                <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
              </li>
              <li className={`list-group-item d-flex justify-content-between align-items-center ${styles.listItem}`}
                style={{ backgroundColor: 'transparent' }}>
                Adila Vejo
                <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
              </li>
              <li className={`list-group-item d-flex justify-content-between align-items-center ${styles.listItem}`}
                style={{ backgroundColor: 'white' }}>
                Andreas Schlosser
                <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
              </li>
              <li className={`list-group-item d-flex justify-content-between align-items-center ${styles.listItem}`}
                style={{ backgroundColor: 'transparent' }}>
                Ayse Nur Haskaya
                <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
              </li>
              <li className={`list-group-item d-flex justify-content-between align-items-center ${styles.listItem}`}
                style={{ backgroundColor: 'white' }}>
                Bahar Yilmaz
                <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
              </li>
            </ul>
          </div>

          {/* Zielvereinbarungen & Einstellungen */}
          <div className={`col-lg-5 col-md-5 mb-3 p-3  rounded ${styles.bgColor} ${styles.sectionBox} ${styles.zie}`} >
            <div className="d-flex align-items-center mb-2">
              <LaptopChromebookIcon fontSize="medium" className={`${styles.iconStyle} me-2`} />
              <p className="mb-0 fs-5 fw-bold">Zielvereinbarungen & Einstellungen</p>
            </div>

            <div className={`row ${styles.zieContent}`}>
              <div className="col-md-6">
                <div>
                  <label className="form-label fw-medium text-muted">zu leistende calls je monat</label>
                  <select className="form-select ">
                    <option value="">Bitte auswählen</option>
                    <option value="1">10</option>
                    <option value="2">20</option>
                    <option value="3">30</option>
                    <option value="4">40</option>
                  </select>
                </div>
                <div>
                  <label className="form-label fw-medium text-muted">calls target per hour</label>
                  <input className="form-control" placeholder="4" />
                </div>
                <div>
                  <label className="form-label fw-medium text-muted">% zugabe "optimistische progonse"</label>
                  <input className="form-control" placeholder="100" />
                </div>
                <div>
                  <label className="form-label fw-medium text-muted">Factor "Wahlversuche Zu call"</label>
                  <input className="form-control" placeholder="5" />
                </div>
              </div>

              <div className="col-md-6">
                <div>
                  <label className="form-label fw-medium text-muted">Zulestende leads monat (alle status)</label>
                  <select className="form-select ">
                    <option value="">Bitte auswählen</option>
                    <option value="1">100</option>
                    <option value="2">200</option>
                    <option value="3">300</option>
                  </select>
                </div>
                <div>
                  <label className="form-label fw-medium text-muted">Future update</label>
                  <select className="form-select ">
                    <option value="">Bitte auswählen</option>
                    <option value="1">10%</option>
                    <option value="2">20%</option>
                    <option value="3">30%</option>
                  </select>
                </div>
                <div>
                  <label className="form-label fw-medium text-muted">Parameter des Campaign-index</label>
                  <select className="form-select ">
                    <option value="">Bitte auswählen</option>
                    <option value="1">10%</option>
                    <option value="2">20%</option>
                    <option value="3">30%</option>
                  </select>
                </div>

                <div className={`${styles.zieLastRow} col-12 row mt-3`}>
                  <div className="d-flex align-items-end gap-3">
                    <div style={{ width: '200px' }}>
                      <label className="form-label fw-medium text-muted">Zus.calls</label>
                      <input className="form-control" placeholder="Anzahl" />
                    </div>

                    <div style={{ width: '350px' }}>
                      <select className={`form-select small ${styles.zieMonSelect}`}>
                        <option value="">Mon</option>
                        <option value="1">Mon</option>
                        <option value="2">Tue</option>
                        <option value="3">Wed</option>
                      </select>
                    </div>

                    <div>
                      <button className={`${styles.zieBtn} `}>Buchen</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WebPortal User Section */}
          <div
            className={`col-lg-4 col-md-4 p-3 rounded ${styles.bgColor} ${styles.sectionBox} ${styles.webPortalUser}`}
          >
            <div className={`${styles.sectionHeader}`}>
              <div className="d-flex align-items-center mb-1">
                <ShowChartIcon fontSize="medium" className={`${styles.iconStyle} me-2`} />
                <p className="fw-bold fs-5 mb-0">WebPortal User</p>
              </div>

              <p className="text-muted small">Benutzer*in hinzufügen</p>

              <select className="form-select form-select-sm ">
                <option value="">Bitte auswählen</option>
                <option value="1">Alparmy Lugerowas</option>
                <option value="2">Adise Lafiton</option>
                <option value="3">Andre Fristoz</option>
                <option value="4">Andreas Grin</option>
                <option value="5">Andreas Schlosser</option>
                <option value="6">Attila Kapitan</option>
              </select>
            </div>

            <div className={`${styles.sectionContent} `}>
              <div className="p-2 rounded">
                <div className="d-flex fw-bold pb-1">
                  <div className="col">Benutzer*in</div>
                  <div className="col">Username</div>
                </div>

                <div className={`d-flex p-1 rounded-0 ${styles.bgWhite}`}>
                  <div className={`col ${styles.userName}`}>Alparmy Lugerowas</div>
                  <div className="col">alparmylugerowas@gmail.com</div>
                </div>

                <div className={`d-flex p-1 ${styles.bgLightBlue}`}>
                  <div className={`col ${styles.userName}`}>Adise Lafiton</div>
                  <div className="col">adiselafiton@gmail.com</div>
                </div>

                <div className={`d-flex p-1 ${styles.bgWhite}`}>
                  <div className={`col ${styles.userName}`}>Andre Fristoz</div>
                  <div className="col">andrefristoz@gmail.com</div>
                </div>

                <div className={`d-flex p-1 ${styles.bgLightBlue}`}>
                  <div className={`col ${styles.userName}`}>Andreas Grin</div>
                  <div className="col">andreasgrin@gmail.com</div>
                </div>

                <div className={`d-flex p-1 ${styles.bgWhite}`}>
                  <div className={`col ${styles.userName}`}>Andreas Schlosser</div>
                  <div className="col">andreasschlosser@gmail.com</div>
                </div>

                <div className={`d-flex p-1 ${styles.bgLightBlue}`}>
                  <div className={`col ${styles.userName}`}>Attila Kapitan</div>
                  <div className="col">attilakapitan@gmail.com</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className={`row col-12  gap-2`}>
          {/* Kapazitäten-Übersicht */}
          <div className={`col-lg-4  ${styles.bgColor} ${styles.kap}  ${styles.sectionBox}`}>
              {/* Title/Header section */}
              <div className={`${styles.sectionHeader}`}>
                <div
                  className={`d-flex align-items-center rounded-top px-3 py-2 ${styles.kapTitle}`}

                >
                  <LaptopChromebookIcon className={`${styles.iconStyle} me-2`} />
                  <span>Kapazitäten-Übersicht</span>
                </div>
                <p className={`${styles.kapSubTitle}`}>Verfügbare Vakanzen der Mitarbeiter*innen</p>
                <input type="text" className={`${styles.kapInput}`} placeholder="Suche Mitarbeiter*in" />
              </div>
              {/* Body */}
              <div className={` ${styles.sectionContent}`}>
                <div className={` px-3 py-3`}>


                  {/* Column Headers */}
                  <div className="d-flex fw-bold text-muted mb-1">
                    <div className="flex-grow-1 text-start">Mitarbeiter*in</div>
                    <div className="d-flex gap-2">
                      <div className={`text-end ${styles.fixedWidth}`}>Gesamt</div>
                      <div className={`text-end ${styles.fixedWidth}`}>Geplant</div>
                      <div className={`text-end text-success ${styles.fixedWidth}`}>Frei</div>
                    </div>
                  </div>

                  {/* Data Rows */}
                  <div className="d-flex p-2 border-bottom" style={{ backgroundColor: '#ffffff' }}>
                    <div className="flex-grow-1 text-start">Alparmy Lugerowas</div>
                    <div className="d-flex gap-2">
                      <div className={`text-end ${styles.fixedWidth}`}>550</div>
                      <div className={`text-end ${styles.fixedWidth}`}>320</div>
                      <div className={`text-end text-success ${styles.fixedWidth}`}>230</div>
                    </div>
                  </div>
                  <div className="d-flex p-2 border-bottom" style={{ backgroundColor: '#e6f4fd' }}>
                    <div className="flex-grow-1 text-start">Adise Lafiton</div>
                    <div className="d-flex gap-2">
                      <div className={`text-end ${styles.fixedWidth}`}>550</div>
                      <div className={`text-end ${styles.fixedWidth}`}>580</div>
                      <div className={`text-end text-success ${styles.fixedWidth}`}>-30</div>
                    </div>
                  </div>
                  <div className="d-flex p-2 border-bottom" style={{ backgroundColor: '#ffffff' }}>
                    <div className="flex-grow-1 text-start">Andre Fristoz</div>
                    <div className="d-flex gap-2">
                      <div className={`text-end ${styles.fixedWidth}`}>550</div>
                      <div className={`text-end ${styles.fixedWidth}`}>560</div>
                      <div className={`text-end text-success ${styles.fixedWidth}`}>-10</div>
                    </div>
                  </div>
                  <div className="d-flex p-2 border-bottom" style={{ backgroundColor: '#e6f4fd' }}>
                    <div className="flex-grow-1 text-start">Andreas Grin</div>
                    <div className="d-flex gap-2">
                      <div className={`text-end ${styles.fixedWidth}`}>380</div>
                      <div className={`text-end ${styles.fixedWidth}`}>210</div>
                      <div className={`text-end text-success ${styles.fixedWidth}`}>170</div>
                    </div>
                  </div>
                  <div className="d-flex p-2 border-bottom" style={{ backgroundColor: '#ffffff' }}>
                    <div className="flex-grow-1 text-start">Andreas Schlosser</div>
                    <div className="d-flex gap-2">
                      <div className={`text-end ${styles.fixedWidth}`}>550</div>
                      <div className={`text-end ${styles.fixedWidth}`}>520</div>
                      <div className={`text-end text-success ${styles.fixedWidth}`}>30</div>
                    </div>
                  </div>
                  <div className="d-flex p-2 border-bottom" style={{ backgroundColor: '#e6f4fd' }}>
                    <div className="flex-grow-1 text-start">Attila Kapitan</div>
                    <div className="d-flex gap-2">
                      <div className={`text-end ${styles.fixedWidth}`}>550</div>
                      <div className={`text-end ${styles.fixedWidth}`}>610</div>
                      <div className={`text-end text-success ${styles.fixedWidth}`}>-60</div>
                    </div>
                  </div>
                  <div className="d-flex p-2 border-bottom" style={{ backgroundColor: '#ffffff' }}>
                    <div className="flex-grow-1 text-start">Andreas Grin</div>
                    <div className="d-flex gap-2">
                      <div className={`text-end ${styles.fixedWidth}`}>380</div>
                      <div className={`text-end ${styles.fixedWidth}`}>210</div>
                      <div className={`text-end text-success ${styles.fixedWidth}`}>170</div>
                    </div>
                  </div>
                  <div className="d-flex p-2 border-bottom" style={{ backgroundColor: '#e6f4fd' }}>
                    <div className="flex-grow-1 text-start">Andreas Schlosser</div>
                    <div className="d-flex gap-2">
                      <div className={`text-end ${styles.fixedWidth}`}>550</div>
                      <div className={`text-end ${styles.fixedWidth}`}>520</div>
                      <div className={`text-end text-success ${styles.fixedWidth}`}>30</div>
                    </div>
                  </div>
                  <div className="d-flex p-2 border-bottom" style={{ backgroundColor: '#ffffff' }}>
                    <div className="flex-grow-1 text-start">Attila Kapitan</div>
                    <div className="d-flex gap-2">
                      <div className={`text-end ${styles.fixedWidth}`}>550</div>
                      <div className={`text-end ${styles.fixedWidth}`}>610</div>
                      <div className={`text-end text-success ${styles.fixedWidth}`}>-60</div>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          {/* Lead Status */}
          <div className="col-lg-3" >
            <div className={`p-3 rounded-3 ${styles.bgColor} ${styles.lead} ${styles.sectionBox} `}>

              {/* Title with icon and larger font */}
              <div className={`styles.sectionHeader`}>
                <div className="d-flex align-items-center mb-2" style={{ fontSize: '1.2rem' }}>
                  <DashboardIcon className={`${styles.iconStyle} me-2`} />
                  <p className="fw-semibold mb-0">Lead Status</p>
                </div>

                <p className={`${styles.leadstatusSubText}`}>Verfügbare Lead Status</p>

                <div className="d-flex mb-3">
                  <input placeholder="Lead Status" className="form-control form-control-sm me-3" />
                  <button className="btn btn-sm btn-info">Hinzufügen</button>
                </div>
                <p className={`${styles.leadStatusText}`}>lead status</p>

              </div>
              <div className={`${styles.sectionContent}`}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item px-2 py-2 border-0" style={{ backgroundColor: 'white' }}>
                    A
                  </li>
                  <li className="list-group-item px-2 py-2 border-0" style={{ backgroundColor: 'transparent' }}>
                    A - 100% vollständig
                  </li>
                  <li className="list-group-item px-2 py-2 border-0" style={{ backgroundColor: 'white' }}>
                    A - Automation
                  </li>
                  <li className="list-group-item px-2 py-2 border-0" style={{ backgroundColor: 'transparent' }}>
                    A - Business Frühstück
                  </li>
                  <li className="list-group-item px-2 py-2 border-0" style={{ backgroundColor: 'white' }}>
                    A - Cloud
                  </li>
                  <li className="list-group-item px-2 py-2 border-0" style={{ backgroundColor: 'transparent' }}>
                    A - ConSozial
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projekt Lead Status */}
          <div className="col-lg-4 mb-3" style={{ fontSize: '0.75rem' }}>
            <div className={`p-3 rounded-3 ${styles.bgColor} ${styles.projekt} ${styles.sectionBox}`}>

              {/* Title with icon and larger text */}
              <div className={`${styles.sectionHeader}`}>
                <div className="d-flex align-items-center mb-3" style={{ fontSize: '1rem' }}>
                  <ShowChartIcon className={`${styles.iconStyle} me-2`} />
                  <p className="fw-semibold mb-0">Projekt Lead Status</p>
                </div>

                {/* Table headers */}
                <div className="d-flex fw-bold border-bottom pb-2">
                  <div className="col-4">Kategorie</div>
                  <div className="col-3">Aktionen</div>
                  <div className="col-5">Lead Status</div>
                </div>

              </div>
              {/* Data rows */}
              <div className={`${styles.sectionContent}`}>
                <div className="d-flex py-2 border-bottom align-items-start">
                  <div className="col-4 fw-medium">Highest Lead</div>
                  <div className="col-3 d-flex align-items-start">
                    <EditIcon fontSize="small" className="me-2" style={{ cursor: 'pointer' }} />
                    <SettingsIcon fontSize="small" style={{ cursor: 'pointer' }} />
                  </div>
                  <div className="col-5">
                    <ul className="mb-0 ps-3">
                      <li className="mb-1">1.A</li>
                      <li className="mb-1">2.A1</li>
                      <li className="mb-1">3.A3</li>
                      <li className="mb-1">4.A4</li>
                    </ul>
                  </div>
                </div>

                <div className="d-flex py-2 border-bottom align-items-start">
                  <div className="col-4 fw-medium">Positive Leads</div>
                  <div className="col-3 d-flex align-items-start">
                    <EditIcon fontSize="small" className="me-2" style={{ cursor: 'pointer' }} />
                    <SettingsIcon fontSize="small" style={{ cursor: 'pointer' }} />
                  </div>
                  <div className="col-5">
                    <ul className="mb-0 ps-3">
                      <li className="mb-1">1.A</li>
                      <li className="mb-1">2.A1</li>
                      <li className="mb-1">3.A3</li>
                      <li className="mb-1">4.A4</li>
                    </ul>
                  </div>
                </div>

                <div className="d-flex py-2 border-bottom align-items-start">
                  <div className="col-4 fw-medium">Negitive Leads</div>
                  <div className="col-3 d-flex align-items-start">
                    <EditIcon fontSize="small" className="me-2" style={{ cursor: 'pointer' }} />
                    <SettingsIcon fontSize="small" style={{ cursor: 'pointer' }} />
                  </div>
                  <div className="col-5">
                    <ul className="mb-0 ps-3">
                      <li className="mb-1">1.A</li>
                      <li className="mb-1">2.A1</li>
                      <li className="mb-1">3.A3 Marketing Opt-in</li>
                      <li className="mb-1">4.A4 nitch erricht</li>
                    </ul>
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

export default Setup;