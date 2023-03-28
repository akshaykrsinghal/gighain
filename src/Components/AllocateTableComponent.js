import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { NoteAltOutlined } from '@mui/icons-material';

function RenderDate(props) {
    const { hasFocus, value } = props;
    return <Button variant='outlined' style={{marginLeft:'23px'}}><NoteAltOutlined /></Button>
}

const columns = [
  { field: 'id', headerName: 'Gig ID', width: 100 },
  { field: 'gigtype', headerName: 'Gig Type', width: 130 },
  { field: 'attendance', headerName: 'Attendance', width: 130 },
  {
    field: 'location',
    headerName: 'Location',
    width: 200,
  },
  {
    field: 'giggersassigned',
    headerName: '#Giggers Assigned',
    width: 204,
    renderCell: RenderDate
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 204,
  },
];

const rows = [
    {id: 13456543, gigtype: 'Stock Auditing',attendance:'12/25',location:'',giggersassigned:<a href=''>link</a>,status:'To Be Approved'},
    {id: 13456544, gigtype: 'Stock Auditing',attendance:'12/25',location:'',giggersassigned:'123',status:'To Be Approved'},
    {id: 13456545, gigtype: 'Stock Auditing',attendance:'12/25',location:'',giggersassigned:'',status:'To Be Approved'},
    {id: 13456546, gigtype: 'Stock Auditing',attendance:'12/25',location:'',giggersassigned:'',status:'To Be Approved'},
    {id: 13456547, gigtype: 'Stock Auditing',attendance:'12/25',location:'',giggersassigned:'',status:'To Be Approved'},
    {id: 13456548, gigtype: 'Stock Auditing',attendance:'12/25',location:'',giggersassigned:'',status:'To Be Approved'},
];

export default function AllocateTableComponent() {
  return (
    <div style={{ height: 400, width: '100%',backgroundColor:'#FFF',marginTop:'32px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        
      />
    </div>
  );
}