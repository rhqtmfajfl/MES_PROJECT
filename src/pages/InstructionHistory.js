import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';

import FilterListIcon from '@mui/icons-material/FilterList';

import { visuallyHidden } from '@mui/utils';

// import SelectUnstyled from '@mui/base/SelectUnstyled';

import { styled } from '@mui/system';

// import Calendar from './calendar';
import FindBox from '../components/WorkHistory_Components/FindBox';


function createData(name, calories, fat, carbs, protein,date) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    date,
  };
}

const rows = [
  createData(1, "4Mcachine", "2022-02-14 22:31:21", "SG67505 031", 20,"2022-02-15 22:31:21"),
  createData(2, "4Mcachine", "2022-02-14 22:31:22", "SG67506 011", 45,"2022-02-15 22:31:21"),
  createData(3, "4Mcachine", "2022-02-14 22:31:23", "SB42699 531", 60,"2022-02-15 22:31:21"),
  createData(4, "4Mcachine", "2022-02-14 22:31:24", "SB42701 061", 28,"2022-02-15 22:31:21"),
  createData(5, "4Mcachine", "2022-02-14 22:31:25", "SG67464 011", 56,"2022-02-15 22:31:21"),
  createData(6, "4Mcachine", "2022-02-14 22:31:26", "SG67463 051", 78,"2022-02-15 22:31:21"),
  createData(7, "4Mcachine", "2022-02-14 22:31:27", "SF51032 041", 42,"2022-02-15 22:31:21"),
  createData(8, "4Mcachine", "2022-02-14 22:31:28", "SF52546 051", 26,"2022-02-15 22:31:21"),
  createData(9, "4Mcachine", "2022-02-14 22:31:29", "SF51808 021", 19,"2022-02-15 22:31:21"),
  createData(10, "4Mcachine", "2022-02-14 22:31:30", "SF31524 031", 33,"2022-02-15 22:31:21"),
  createData(11, "4Mcachine", "2022-02-14 22:31:31", "SB43114 051", 120,"2022-02-15 22:31:21"),
  createData(12, "4Mcachine", "2022-02-14 22:31:32", "SB43241 031", 43,"2022-02-15 22:31:21"),
  createData(13, "4Mcachine", "2022-02-14 22:31:33", "SB41314 531", 56,"2022-02-15 22:31:21"),
  createData(14, "4Mcachine", "2022-02-14 22:31:34", "SB42434 051", 7,"2022-02-15 22:31:21"),
  createData(15, "4Mcachine", "2022-02-14 22:31:35", "SG67505 031", 10,"2022-02-15 22:31:21"),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: true,
    disablePadding: false,
    label: '순번',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'M/C',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: '작업지시시각',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: '재료번호',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: '중량',
  },
  {
    id: 'date',
    numeric: true,
    disablePadding: false,
    label: '기한일',
  },
  
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          {/* <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          /> */}
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  // onSelectAllClick: PropTypes.func.isRequired,
  // order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
      >
    
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
        

          {/* <input type="date" name="startday"></input> */}
          {/* <Calendar/> */}

        </Typography>
    
                          
      
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  // const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const handleChangeDense = (event) => {
  //   setDense(event.target.checked);
  // };

  // const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <FindBox />

        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            // size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {
              stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  // const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      // onClick={(event) => handleClick(event, row.name)}
                      // role="checkbox"
                      // aria-checked={isItemSelected}
                      tabIndex={-1}
                      // key={row.name}
                      // selected={isItemSelected}
                    >
                      {/* <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell> */}
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                       
                      </TableCell>
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>

                    </TableRow>
                  );
                }
                )}
              {emptyRows > 0 && (
                <TableRow
                  // style={{
                  //   height: (dense ? 33 : 53) * emptyRows,
                  // }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </Box>
  );
}