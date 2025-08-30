import React, { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import companies from '../data/companiesData'; // adjust path as needed

const Example = () => {
  const columns = useMemo(() => [
    {
      accessorKey: 'synqId',
      header: 'ID',
      size: 80,
    },
    {
      accessorKey: 'firma',
      header: 'Company Name',
      size: 250,
    },
    {
      accessorKey: 'plz',
      header: 'Postal Code',
    },
    {
      accessorKey: 'ort',
      header: 'City',
    },
    {
      accessorKey: 'land',
      header: 'Country',
    },
    {
      accessorKey: 'agent',
      header: 'Agent',
    },
    {
      accessorKey: 'angestellte',
      header: 'Employees',
    },
    {
      accessorKey: 'tranche',
      header: 'Tranche',
    },
    {
      accessorKey: 'leadStatus',
      header: 'Lead Status',
    },
    {
      accessorKey: 'abg',
      header: 'Abgeschlossen',
    },
    {
      accessorKey: 'followUp',
      header: 'Follow-Up',
    },
    {
      accessorKey: 'lCall',
      header: 'Last Call',
    },
    {
      accessorKey: 'aktiv',
      header: 'Active',
      Cell: ({ cell }) => (cell.getValue() ? 'Yes' : 'No'),
    },
  ], []);

  const table = useMaterialReactTable({
    columns,
    data: companies,
  });

  return <MaterialReactTable table={table} />;
};

export default Example;
