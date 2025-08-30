import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Typography
} from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import agentTableData from '../data/agentTableData';

const Performance = () => {
  const columns = [
    'agent', 'status', 'abg', 'abg.-qu.', 'h-leads', 'p-leads', 'calls', 'nue.k', 'wv', 'aktis',
    'netto', 'brutto', 'login', 'logout', 'start', 'l.akti', 'gesamt', 'calling',
    'pause', 'schulung', 'meeting', 'edv', 'deep'
  ];

  const now = new Date();
  const germanDate = now.toLocaleString('de-DE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <Box
      sx={{
        padding: 2,
        width: '100%', 
        overflowX: 'auto',
      }}
    >
      {/* Header */}
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h6" sx={{ color: 'white', fontSize: '2rem', mb: 0.5 }}>
          Team Performance
        </Typography>
        <Typography variant="body2" sx={{ color: 'white', fontSize: '0.8rem' }}>
          {germanDate}
        </Typography>
      </Box>

      <Box
        sx={{
          background: 'lightblue',
          padding: '20px',
          border: '10px solid white',
          borderRadius: '13px',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: '2rem',
            mb: 0.5,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: 'white'
          }}
        >
          <GroupsIcon fontSize="large" />
          Team
        </Typography>

        {/* Filter Section */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            marginBottom: 2,
            alignItems: 'flex-end',
            '@media (max-width: 1024px)': {
              flexDirection: 'column',
              alignItems: 'stretch',
            }
          }}
        >
          {/* Benutzer */}
          <FormControl size="small" sx={{ width: 140 }}>
            <InputLabel sx={{ fontSize: '0.75rem' }}>Benutzer</InputLabel>
            <Select label="Benutzer" defaultValue="" sx={{ fontSize: '0.75rem', height: 32 }}>
              <MenuItem value="">None</MenuItem>
              <MenuItem value="Option1">Option 1</MenuItem>
            </Select>
          </FormControl>

          {/* Projekt */}
          <FormControl size="small" sx={{ width: 100 }}>
            <InputLabel sx={{ fontSize: '0.75rem' }}>Projekt</InputLabel>
            <Select label="Projekt" defaultValue="" sx={{ fontSize: '0.75rem', height: 32 }}>
              <MenuItem value="">None</MenuItem>
              <MenuItem value="Option1">Option 1</MenuItem>
            </Select>
          </FormControl>

          {/* Status */}
          <FormControl size="small" sx={{ width: 120 }}>
            <InputLabel sx={{ fontSize: '0.75rem' }}>Status</InputLabel>
            <Select label="Status" defaultValue="" sx={{ fontSize: '0.75rem', height: 32 }}>
              <MenuItem value="">None</MenuItem>
              <MenuItem value="Option1">Option 1</MenuItem>
            </Select>
          </FormControl>

          {/* Zeit */}
          <FormControl size="small" sx={{ width: 80 }}>
            <InputLabel sx={{ fontSize: '0.75rem' }}>Zeit</InputLabel>
            <Select label="Zeit" defaultValue="" sx={{ fontSize: '0.75rem', height: 32 }}>
              <MenuItem value="">None</MenuItem>
            </Select>
          </FormControl>

          {/* Datum */}
          <FormControl size="small" sx={{ width: 110 }}>
            <InputLabel sx={{ fontSize: '0.75rem' }}>Datum</InputLabel>
            <Select label="Datum" defaultValue="" sx={{ fontSize: '0.75rem', height: 32 }}>
              <MenuItem value="">None</MenuItem>
            </Select>
          </FormControl>

          {/* Filter Button */}
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{ height: 32, fontSize: '0.75rem', minWidth: '60px', ml: 0.5 }}
          >
            Filter
          </Button>

          {/* Reset Button */}
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            sx={{ height: 32, fontSize: '0.75rem', minWidth: '60px', ml: 1 }}
          >
            Reset
          </Button>

          {/* Suchen */}
          <Box>
            <Typography variant="caption" sx={{ display: 'block', mb: 0.3, fontSize: '0.75rem' }}>
              Suchen
            </Typography>
            <TextField
              size="small"
              placeholder="Name..."
              sx={{
                width: 130,
                '& input': { fontSize: '0.75rem', height: '1.2rem' },
              }}
            />
          </Box>

          {/* Anzeige */}
          <Box>
            <Typography variant="caption" sx={{ display: 'block', mb: 0.3, fontSize: '0.75rem' }}>
              Anzeige
            </Typography>
            <FormControl size="small" sx={{ minWidth: 90 }}>
              <Select defaultValue="" sx={{ fontSize: '0.75rem', height: 32 }}>
                <MenuItem value="">0</MenuItem>
                <MenuItem value="Zelian">Zelian</MenuItem>
                <MenuItem value="Alle">Alle</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        {/* Table */}
        <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
          <Table sx={{ minWidth: 1000, tableLayout: 'auto' }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'white' }}>
                {columns.map((col) => (
                  <TableCell
                    key={col}
                    sx={{
                      whiteSpace: 'nowrap',
                      fontSize: '0.75rem',
                      paddingY: '6px',
                      paddingX: '4px',
                      fontWeight: 600,
                      color: '#000',
                    }}
                  >
                    {col}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {agentTableData.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: index % 2 === 0 ? 'white' : '#e6f2ff',
                  }}
                >
                  {columns.map((col) => (
                    <TableCell
                      key={col}
                      sx={{
                        whiteSpace: 'nowrap',
                        fontSize: '0.75rem',
                        paddingY: '12px',
                        paddingX: '4px',
                        color: '#000',
                      }}
                    >
                      {row[col]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Performance;
