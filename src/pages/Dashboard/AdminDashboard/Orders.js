import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Typography } from '@mui/material';

const columns = [
    { id: 'name', label: 'Customer Name', minWidth: 170 },
    { id: 'code', label: 'Email', minWidth: 100 },
    {
        id: 'population',
        label: 'Product',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Quantity',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Bill',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];

function createData(name, code, population, size, status) {
    const density = population / size;
    return { name, code, population, size, density, status };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263, 'Pending'),
    createData('China', 'CN', 1403500365, 9596961, 'Delivered'),
    createData('Italy', 'IT', 60483973, 301340, 'Delivered'),
    createData('United States', 'US', 327167434, 9833520, 'Delivered'),
    createData('Canada', 'CA', 37602103, 9984670, 'Delivered'),
    createData('Australia', 'AU', 25475400, 7692024, 'Pending'),
    createData('Germany', 'DE', 83019200, 357578, 'Pending'),
    createData('Ireland', 'IE', 4857000, 70273, 'Pending'),
    createData('Mexico', 'MX', 126577691, 1972550, 'Pending'),
    createData('Japan', 'JP', 126317000, 377973, 'Pending'),
    createData('France', 'FR', 67022000, 640679, 'Pending'),
    createData('United Kingdom', 'GB', 67545757, 242495, 'Pending'),
    createData('Russia', 'RU', 146793744, 17098246, 'Pending'),
    createData('Nigeria', 'NG', 200962417, 923768, 'Pending'),
    createData('Brazil', 'BR', 210147125, 8515767, 'Pending'),
];

export default function Orders() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div>
            <Box sx={{ margin: '10px 0px 20px' }}>
                <Paper sx={{background: '#e8f9fd', padding: '10px 0px'}}>
                    <p className='text-center text-xl font-bold text-neutral'>All Orders</p>
                </Paper>
            </Box>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>

    );
}