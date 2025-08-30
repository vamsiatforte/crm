// NoteModal.js
import React from 'react';
import styles from './NoteModel.module.css';

const NoteModal = ({ onClose }) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h5 className="mb-3">Intern Note</h5>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Note</label>
                        <textarea className="form-control" rows="4"></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button
                            type="button"
                            className="btn btn-secondary me-2"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-info">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NoteModal;
