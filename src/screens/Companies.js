import React from 'react';
import companies from '../data/companies';
import { Chip, Switch } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const statusColor = (status) => {
  switch (status) {
    case 'A': return 'success';
    case 'N': return 'info';
    case 'SF': return 'warning';
    case 'E': return 'error';
    default: return 'default';
  }
};

const Companies = () => {
  return (
    <div className="container mt-4">
      <h4 className="mb-3">Projekt Company List</h4>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead style={{ backgroundColor: '#2D3E50', color: 'white' }}>
            <tr>
              <th>Synq ID</th>
              <th>Firma</th>
              <th>PLZ</th>
              <th>Ort</th>
              <th>Land</th>
              <th>Agent</th>
              <th>Angestellte</th>
              <th>Tranche</th>
              <th>Lead Status</th>
              <th>Abg.</th>
              <th>Follow Up</th>
              <th>L. Call</th>
              <th>Aktiv</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr key={company.synqId}>
                <td>{company.synqId}</td>
                <td>{company.firma}</td>
                <td>{company.plz}</td>
                <td>{company.ort}</td>
                <td>{company.land}</td>
                <td>{company.agent}</td>
                <td>{company.angestellte}</td>
                <td>{company.tranche}</td>
                <td>
                  <Chip
                    label={company.leadStatus}
                    color={statusColor(company.leadStatus)}
                    size="small"
                  />
                </td>
                <td>{company.abg}</td>
                <td>{company.followUp}</td>
                <td>{company.lCall}</td>
                <td>
                  <Switch checked={company.aktiv} color="primary" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Companies;
