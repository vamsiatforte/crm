import { useState } from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl, Checkbox, FormControlLabel } from '@mui/material';
import styles from './Kontekte.module.css';
import up from '../images/button_handset_up.svg';
import down from '../images/button_handset_down.svg';
import { FaStar, FaPencilAlt, FaTag, FaPlus, FaTimes, FaPhoneAlt } from 'react-icons/fa';


const Kontakte = ({ onContactSelect, selectedIndex, showForm, setShowForm }) => {
    const [activeTab, setActiveTab] = useState('kontakte');

    const toggleOpen = (index) => {
        onContactSelect(selectedIndex === index ? null : index);
    };

    return (
        <div className={`col-12 ${styles.kontakteContainer}`}>
            {/* Tab Navigation */}
            <ul className={`nav nav-tabs mb-3 ${styles.navDiv}`}>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'kontakte' ? 'active' : ''}`}
                        onClick={() => setActiveTab('kontakte')}
                        type="button"
                    >
                        Kontakte
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'favorites' ? 'active' : ''}`}
                        onClick={() => setActiveTab('favorites')}
                        type="button"
                    >
                        <FaStar className={`me-1 ${styles.starIcon}`} /> Favorites
                    </button>
                </li>
            </ul>

            {/* Kontakte Tab Content */}
            {activeTab === 'kontakte' && (
                <>
                    <div className={`d-flex justify-content-around ${styles.tableHeader}`}>
                        <div className="d-flex justify-content-start"><p className="fw-bold">Ansprechpartner/Funktion</p></div>
                        <div><p className="fw-bold">Lead/WVL</p></div>
                        <div><p className="fw-bold">Telefon/Mobil</p></div>
                        <div><p className="fw-bold">Aktion</p></div>
                    </div>

                    {/* Contact Entry 1 */}
                    <div style={{ width: '97%' }}>
                        <div
                            className={`d-flex justify-content-between  ${styles.contactRow} ${selectedIndex === 0 ? styles.activeRow : ''}`}
                            onClick={() => toggleOpen(0)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div>
                                <div className={`d-flex flex-column ${styles.contactDiv}`}>
                                    <p className={styles.contactName}>Daniel Stoffel</p>
                                    <p className={styles.contactPosition}>Teamleiter Instandhaltung /</p>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex flex-column">
                                    <p className={styles.leadStatus}>C</p>
                                    <p className={styles.contactDate}>17/04/2025</p>
                                </div>
                            </div>
                            <div className={`form-check ${styles.phoneCheckbox}`}>
                                <div style={{ display: "flex", alignItems: "center" }} className={`${styles.phoneIcon}`}>
                                    <FaPhoneAlt
                                        style={{
                                            marginRight: 6,
                                            fontSize: "1em",
                                        }}
                                    />

                                    <span style={{ fontSize: "1em" }}>51130034945</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", marginLeft: 22, marginTop: 2 }}>
                                    <input
                                        type="checkbox"
                                        className={`form-check-input ${styles.checkboxInput}`}
                                        style={{ marginRight: 4 }}
                                    />
                                    <span style={{ fontSize: "0.98em" }}>0</span>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex">
                                    <button
                                        className={`btn btn-sm ${styles.editButton}`}
                                        onClick={e => { e.stopPropagation(); setShowForm(true); }}
                                    >
                                        <FaPencilAlt />
                                    </button>

                                    <button className={`btn btn-sm ${styles.tagButton} `}><FaTag /></button>
                                </div>
                            </div>
                        </div>

                        {/* Expanded Material UI Form */}
                        {selectedIndex === 0 && (
                            <div className={`row ${styles.contactDetailRow} `}>
                                <div className="col-12 px-3 py-3">
                                    <div className="row mb-2">
                                        <div className="col-4">
                                            <TextField
                                                label="Email Adresse"
                                                type="email"
                                                variant="standard"
                                                size="small"
                                                fullWidth
                                                InputLabelProps={{ shrink: true }}
                                                sx={{
                                                    background: 'transparent',
                                                    fontSize: '0.7rem',
                                                    '& .MuiInputBase-input': {
                                                        padding: '2px 0 2px 0',
                                                        fontSize: '0.75rem',
                                                        height: '1.48em'
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        fontSize: '0.72rem'
                                                    },
                                                    '& .MuiInput-underline:before': {
                                                        borderBottom: '1px solid #999',
                                                    },
                                                    '& .MuiInput-underline:after': {
                                                        borderBottom: '2px solid black',
                                                    },
                                                }}
                                            />
                                        </div>
                                        <div className="col-4">
                                            <TextField
                                                label="Funktionsbezeichnung"
                                                type="text"
                                                variant="standard"
                                                size="small"
                                                fullWidth
                                                InputLabelProps={{ shrink: true }}
                                                sx={{
                                                    background: 'transparent',
                                                    fontSize: '0.7rem',
                                                    '& .MuiInputBase-input': {
                                                        padding: '2px 0 2px 0',
                                                        fontSize: '0.75rem',
                                                        height: '1.48em'
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        fontSize: '0.72rem'
                                                    },
                                                    '& .MuiInput-underline:before': {
                                                        borderBottom: '1px solid #999',
                                                    },
                                                    '& .MuiInput-underline:after': {
                                                        borderBottom: '2px solid black',
                                                    },
                                                }}
                                            />
                                        </div>
                                        <div className="col-4">
                                            <FormControl variant="standard" size="small" fullWidth
                                                sx={{
                                                    background: "transparent",
                                                    '& .MuiInputBase-input': { padding: '2px 0 2px 0', fontSize: '0.75rem', height: '1.48em' },
                                                    '& .MuiInputLabel-root': { fontSize: '0.72rem' },
                                                    '& .MuiSelect-select': { padding: '2px 26px 2px 0', fontSize: '0.75rem', minHeight: '1.48em' }
                                                }}>
                                                <InputLabel shrink>Rolle des AP</InputLabel>
                                                <Select
                                                    defaultValue=""
                                                    label="Rolle des AP"
                                                    size="small"
                                                >
                                                    <MenuItem value="">------</MenuItem>
                                                    <MenuItem value="One">One</MenuItem>
                                                    <MenuItem value="Two">Two</MenuItem>
                                                    <MenuItem value="Three">Three</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4 d-flex align-items-center">
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        size="small"
                                                        sx={{
                                                            '&.Mui-checked': { color: '#1e2b3e', },
                                                            padding: '0 8px 0 0',
                                                        }}
                                                    />
                                                }
                                                label="Info Versand-Anforderung"
                                                sx={{
                                                    '& .MuiFormControlLabel-label': { fontSize: '0.5rem', color: '#333' }
                                                }}
                                            />
                                        </div>
                                        <div className="col-4">
                                            <TextField
                                                label="Versand-Paket"
                                                type="text"
                                                variant="standard"
                                                size="small"
                                                fullWidth
                                                InputLabelProps={{ shrink: true }}
                                                sx={{
                                                    background: 'transparent',
                                                    fontSize: '0.7rem',
                                                    '& .MuiInputBase-input': {
                                                        padding: '2px 0 2px 0',
                                                        fontSize: '0.75rem',
                                                        height: '1.48em'
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        fontSize: '0.72rem'
                                                    },
                                                    '& .MuiInput-underline:before': {
                                                        borderBottom: '1px solid #999',
                                                    },
                                                    '& .MuiInput-underline:after': {
                                                        borderBottom: '2px solid black',
                                                    },
                                                }}
                                            />
                                        </div>
                                        <div className="col-4">
                                            <TextField
                                                label="Versanddatum"
                                                type="date"
                                                variant="standard"
                                                size="small"
                                                fullWidth
                                                InputLabelProps={{ shrink: true }}
                                                sx={{
                                                    background: 'transparent',
                                                    fontSize: '0.7rem',
                                                    '& .MuiInputBase-input': {
                                                        padding: '2px 0 2px 0',
                                                        fontSize: '0.75rem',
                                                        height: '1.48em'
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        fontSize: '0.72rem'
                                                    },
                                                    '& .MuiInput-underline:before': {
                                                        borderBottom: '1px solid #999',
                                                    },
                                                    '& .MuiInput-underline:after': {
                                                        borderBottom: '2px solid black',
                                                    },
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Plus Icon row */}
                    <div className='d-flex justify-content-end'>
                        <p
                            onClick={() => setShowForm(true)}
                            className={`${styles.formText}`}
                        >
                            Neuen Ansprechpartner anlegen{' '}
                            <span>
                                <FaPlus color='skyblue' />
                            </span>
                        </p>
                    </div>

                    {/* Modal for new contact */}
                    {showForm && (
                        <div className={styles.modalOverlay}>
                            <div className={styles.modal}>
                                <form>
                                    {/* Modal Header with Title and Close Button */}
                                    <div className={styles.modalHeader}>
                                        <p className={styles.formTitle}>Neuen Ansprechpartner anlegen</p>
                                        <button
                                            type="button"
                                            className={styles.closeButton}
                                            onClick={() => setShowForm(false)}
                                            aria-label="Close"
                                        >
                                            <FaTimes />
                                        </button>
                                    </div>

                                    {/* Form Fields */}
                                    <TextField
                                        fullWidth
                                        label="Anrede"
                                        variant="standard"
                                        placeholder="Anrede"
                                        InputLabelProps={{ shrink: true }}
                                        className={styles.modalField}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        variant="standard"
                                        placeholder="Name"
                                        InputLabelProps={{ shrink: true }}
                                        className={styles.modalField}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        variant="standard"
                                        placeholder="Email"
                                        InputLabelProps={{ shrink: true }}
                                        className={styles.modalField}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Telefonnummer"
                                        variant="standard"
                                        placeholder="Telefonnummer"
                                        InputLabelProps={{ shrink: true }}
                                        className={styles.modalField}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Adresse"
                                        variant="standard"
                                        placeholder="Adresse"
                                        InputLabelProps={{ shrink: true }}
                                        className={styles.modalField}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Geburtsdatum"
                                        variant="standard"
                                        placeholder="Geburtsdatum"
                                        InputLabelProps={{ shrink: true }}
                                        className={styles.modalField}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Firma"
                                        variant="standard"
                                        placeholder="Firma"
                                        InputLabelProps={{ shrink: true }}
                                        className={styles.modalField}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Position"
                                        variant="standard"
                                        placeholder="Position"
                                        InputLabelProps={{ shrink: true }}
                                        className={styles.modalField}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Notizen"
                                        variant="standard"
                                        placeholder="Notizen"
                                        InputLabelProps={{ shrink: true }}
                                        className={styles.modalField}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Webseite"
                                        variant="standard"
                                        placeholder="Webseite"
                                        InputLabelProps={{ shrink: true }}
                                        className={styles.modalField}
                                    />
                                    <div className={styles.modalButtons}>
                                        <button
                                            type="button"
                                            className={`btn btn-secondary ${styles.cancelButton}`}
                                            onClick={() => setShowForm(false)}
                                        >
                                            save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </>
            )}

            {/* Favorites Tab Content */}
            {activeTab === 'favorites' && (
                <div style={{ minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                </div>
            )}
        </div>
    );
};

export default Kontakte;
