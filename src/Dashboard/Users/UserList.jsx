import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'username', label: 'Username', minWidth: 100 },
  {
    id: 'Categories',
    label: 'Categories',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Edit',
    label: 'Edit',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Delete',
    label: 'Delete',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(username, categories, population, size) {
  // const density = population / size;
  return { username, categories, population, size };
}

// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ];
 
const UserList = ({ user }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
                    // {user?._id}
  const rows = [
    createData(user?.username,user?.categories,user,null,null),
  ]
  console.log('th-data-suer',user?._id);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
    <table>
      <thead>
        <tr><th>username</th></tr>
        <tr><th>title</th></tr>
        <tr><th>categories</th></tr>
      </thead>
      <tbody>
        <tr><td>{user?.username}</td></tr>
      </tbody>
    </table>
    </>
    // <>
    //   <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    //     <TableContainer sx={{ maxHeight: 440 }}>
    //       <Table stickyHeader aria-label="sticky table">
    //         <TableHead>
    //           <TableRow>
    //             {columns.map((column) => (
    //               <TableCell
    //                 key={column.id}
    //                 align={column.align}
    //                 style={{ minWidth: column.minWidth }}

    //               >
    //                 {column.label}

    //               </TableCell>

    //             ))}
    //           </TableRow>
    //         </TableHead>
    //         <TableBody>
    //           {rows
    //             .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    //             .map((row) => {
    //               return (
    //                 <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
    //                   {columns.map((column) => {
    //                     const value = row[column.id];
    //                     return (
    //                       <TableCell key={column.id} align={column.align}>
    //                         {column.format && typeof value === 'number'
    //                           ? column.format(value)
    //                           : value}
                              
    //                       </TableCell>
    //                     );
    //                   })}
    //                 </TableRow>
    //               );
    //             })}
    //         </TableBody>
    //       </Table>
    //     </TableContainer>
    //     <TablePagination
    //       rowsPerPageOptions={[5, 10]}
    //       component="div"
    //       count={rows.length}
    //       rowsPerPage={rowsPerPage}
    //       page={page}
    //       onPageChange={handleChangePage}
    //       onRowsPerPageChange={handleChangeRowsPerPage}
    //     />

    //   </Paper>
    // </>
  );
}

export default UserList;