import React, { useMemo, useEffect, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import companies from '../data/companiesData';
import styles from './companies.module.css';

import GroupsIcon from '@mui/icons-material/Groups';
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';

const Companies = () => {
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

  const columns = useMemo(
    () => [
      { accessorKey: 'synqId', header: 'ID', size: 60 },
      { accessorKey: 'firma', header: 'Company Name', size: 190 },
      { accessorKey: 'plz', header: 'Postal Code', size: 150 },
      { accessorKey: 'ort', header: 'City', size: 90 },
      { accessorKey: 'land', header: 'Country', size: 120 },
      { accessorKey: 'agent', header: 'Agent', size: 120 },
      { accessorKey: 'angestellte', header: 'Employees', size: 140 },
      { accessorKey: 'tranche', header: 'Tranche', size: 115 },
      { accessorKey: 'leadStatus', header: 'Lead Status', size: 150 },
      { accessorKey: 'abg', header: 'Abgeschlossen', size: 180 },
      { accessorKey: 'followUp', header: 'Follow-Up', size: 150 },
      { accessorKey: 'lCall', header: 'Last Call', size: 120 },
      {
        accessorKey: 'aktiv',
        header: 'Active',
        size: 120,
        Cell: ({ cell }) => (cell.getValue() ? 'Yes' : 'No'),
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: companies,
    enableColumnResizing: true,
    muiTableBodyCellProps: {
      sx: {
        padding: '4px 6px',
      },
    },
    muiTableHeadCellProps: {
      sx: {
        padding: '4px 6px',
      },
    },
  });

  const formFieldsFirstRow = [
    { label: 'Agents', id: 'agent', options: ['Agent 1', 'Agent 2'], width: '140px', placeholder: 'Select agent' },
    { label: 'Lead', id: 'lead', options: ['Lead 1', 'Lead 2'], width: '140px', placeholder: 'Choose lead' },
    { label: 'Tranche', id: 'tranche', options: ['Tranche 1', 'Tranche 2'], width: '140px', placeholder: 'Select tranche' },
    { label: 'Vertical', id: 'vertical', options: ['Vertical 1', 'Vertical 2'], width: '140px', placeholder: 'Pick vertical' },
    { label: 'Land', id: 'country', options: ['Country 1', 'Country 2'], width: '70px', placeholder: 'Select country' },
    { label: 'PLZ von', id: 'plzFrom', options: ['PLZ 1', 'PLZ 2'], width: '70px', placeholder: 'From PLZ' },
    { label: 'PLZ bis', id: 'plzTo', options: ['PLZ 1', 'PLZ 2'], width: '70px', placeholder: 'To PLZ' },
    { label: 'MA von', id: 'maFrom', options: ['MA 1', 'MA 2'], width: '70px', placeholder: 'From MA' },
    { label: 'MA bis', id: 'maTo', options: ['MA 1', 'MA 2'], width: '70px', placeholder: 'To MA' },
  ];

  const assignAgentField = {
    label: 'Assign to sales agent',
    id: 'assignAgent',
    options: ['Agent 1', 'Agent 2'],
    placeholder: 'Assign agent',
    width: '200px',
  };

  const anzeigeOptions = ['10', '25', '50', '100'];

  return (
    <div className=" ">
      <p className={`text-white ${styles.heading} ${styles.marginMinus}`}>Companies List</p>

      <p className={`text-white ${styles.marginMinus}`} >{currentTime}</p>

      <div className={`bg-white  p-3 rounded shadow-sm ${styles.maincontainer}`}>
        <p className={`${styles.heading}`}>
          <GroupsIcon fontSize="large" />
          Companies
        </p>

        <form>
          {/* First Row */}
          <div className="row gx-2 align-items-end">
            {formFieldsFirstRow.map(({ label, id, options, width, placeholder }) => (
              <div className="col-12 col-sm-auto" key={id} style={{ minWidth: width }}>
                <label htmlFor={id} style={{ color: 'black', fontSize: '14px', display: 'block' }}>
                  {label}
                </label>
                <FormControl fullWidth variant="outlined" size="small">
                  <Select
                    id={id}
                    displayEmpty
                    defaultValue=""
                    renderValue={(selected) =>
                      selected ? selected : (
                        <span style={{ color: '#888', fontSize: '12px' }}>
                          {placeholder}
                        </span>
                      )
                    }
                    sx={{
                      backgroundColor: 'white',
                      color: 'black',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ccc',
                      },
                      '& .MuiSvgIcon-root': {
                        color: 'black',
                      },
                      '& .MuiSelect-select': {
                        padding: '4px 20px 4px 4px',
                        fontSize: '12px',
                      },
                    }}
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    {options.map((opt, index) => (
                      <MenuItem key={index} value={opt.toLowerCase().replace(/\s+/g, '')} sx={{ color: 'black' }}>
                        {opt}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            ))}

            {/* Buttons */}
            <div className="col-12 col-sm-auto d-flex justify-content-end gap-2" style={{ minWidth: '100px' }}>
              <button type="submit" className="btn btn-info btn-sm w-100">Filtern</button>
              <button type="reset" className="btn btn-secondary btn-sm w-100">Reset</button>
            </div>
          </div>


          {/* Second Row */}
          <div className="row mt-3 gx-3 d-flex justify-content-between align-items-end">
            {/* Left side: Assign to sales agent */}
            <div className="col-auto" style={{ width: '250px' /* custom width */ }}>
              <label htmlFor={assignAgentField.id} style={{ color: 'black', fontSize: '14px', display: 'block' }}>
                {assignAgentField.label}
              </label>
              <FormControl fullWidth variant="outlined" size="small">
                <Select
                  id={assignAgentField.id}
                  displayEmpty
                  defaultValue=""
                  renderValue={(selected) =>
                    selected ? selected : (
                      <span style={{ color: '#888', fontSize: '12px' }}>
                        {assignAgentField.placeholder}
                      </span>
                    )
                  }
                  sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#ccc',
                    },
                    '& .MuiSvgIcon-root': {
                      color: 'black',
                    },
                    '& .MuiSelect-select': {
                      padding: '4px 20px 4px 4px',
                      fontSize: '12px',
                    },
                  }}
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  {assignAgentField.options.map((opt, index) => (
                    <MenuItem key={index} value={opt.toLowerCase().replace(/\s+/g, '')} sx={{ color: 'black' }}>
                      {opt}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            {/* Right side: Search and Anzeige */}
            <div className="d-flex gap-3 flex-wrap justify-content-end" style={{ maxWidth: '500px', flex: 1 }}>
              <div className="col-auto" style={{ width: '220px' /* custom width */ }}>
                <label htmlFor="search" style={{ color: 'black', fontSize: '14px', display: 'block' }}>Suche</label>
                <TextField
                  id="search"
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="Enter keyword..."
                  sx={{
                    '& .MuiOutlinedInput-input': {
                      padding: '6px 20px 6px 6px',
                      fontSize: '12px',
                      backgroundColor: 'white',
                      color: 'black',
                    },
                  }}
                />
              </div>

              <div className="col-auto" style={{ width: '160px' /* custom width */ }}>
                <label htmlFor="anzahl" style={{ color: 'black', fontSize: '14px', display: 'block' }}>Anzeige</label>
                <FormControl fullWidth variant="outlined" size="small">
                  <Select
                    id="anzahl"
                    displayEmpty
                    defaultValue=""
                    renderValue={(selected) =>
                      selected ? selected : <span style={{ color: '#888', fontSize: '12px' }}>Show entries</span>
                    }
                    sx={{
                      backgroundColor: 'white',
                      color: 'black',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ccc',
                      },
                      '& .MuiSvgIcon-root': {
                        color: 'black',
                      },
                      '& .MuiSelect-select': {
                        padding: '4px 20px 4px 4px',
                        fontSize: '12px',
                      },
                    }}
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    {anzeigeOptions.map((value) => (
                      <MenuItem key={value} value={value} sx={{ color: 'black' }}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>

        </form>

        <MaterialReactTable table={table} />
      </div>
    </div>
  );
};

export default Companies;
