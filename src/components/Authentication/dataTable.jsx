import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const DataTable = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'FullName', headerName: 'full name', width: 130 },
        { field: 'Institution', headerName: 'Institution', width: 130 },
        { field: 'MobileNumber', headerName: 'Mobile number', type: 'number', width: 130 },
        { field: 'StateDentalCouncilNumber', headerName: 'Dental Council Number', type: 'number', width: 160 },
        { field: 'State', headerName: 'State', width: 130 },        
        { field: 'Status', headerName: 'Status', width: 130 },        
        { field: 'Options', headerName: 'Options', width: 140 },        

        // {
        //   field: 'status',
        //   headerName: 'Status',
        //   description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
        //   width: 160,
        //   valueGetter: (params) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        // },
        
      ];
      
      const rows = [
        { id: 1, FullName: 'rajesh', Institution: 'svec', MobileNumber: '9874569874', StateDentalCouncilNumber: 'A25631354', State: 'Andhra Pradesh', Status: 'Active', Options: 'View' },
        { id: 2, FullName: 'rajesh', Institution: 'svec', MobileNumber: '9874569874', StateDentalCouncilNumber: 'A25631354', State: 'Andhra Pradesh', Status: 'Active', Options: '' },
        { id: 3, FullName: 'rajesh', Institution: 'svec', MobileNumber: '9874569874', StateDentalCouncilNumber: 'A25631354', State: 'Andhra Pradesh', Status: 'Active', Options: '' },
        { id: 4, FullName: 'rajesh', Institution: 'svec', MobileNumber: '9874569874', StateDentalCouncilNumber: 'A25631354', State: 'Andhra Pradesh', Status: 'Active', Options: '' },
        { id: 5, FullName: 'rajesh', Institution: 'svec', MobileNumber: '9874569874', StateDentalCouncilNumber: 'A25631354', State: 'Andhra Pradesh', Status: 'Active', Options: '' },
        { id: 6, FullName: 'rajesh', Institution: 'svec', MobileNumber: '9874569874', StateDentalCouncilNumber: 'A25631354', State: 'Andhra Pradesh', Status: 'Active', Options: '' },
        { id: 7, FullName: 'rajesh', Institution: 'svec', MobileNumber: '9874569874', StateDentalCouncilNumber: 'A25631354', State: 'Andhra Pradesh', Status: 'Active', Options: '' },
        { id: 8, FullName: 'rajesh', Institution: 'svec', MobileNumber: '9874569874', StateDentalCouncilNumber: 'A25631354', State: 'Andhra Pradesh', Status: 'Active', Options: '' },
        { id: 9, FullName: 'rajesh', Institution: 'svec', MobileNumber: '9874569874', StateDentalCouncilNumber: 'A25631354', State: 'Andhra Pradesh', Status: 'Active', Options: '' },
      ];
      
    return (
        <>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptionss={[5]}
              checkboxSelection
            />
        </div>
        </>
    )
}

export default DataTable;
