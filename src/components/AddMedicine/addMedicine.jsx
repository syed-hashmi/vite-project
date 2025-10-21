
import { useCallback, useEffect, useMemo, useState } from 'react';
import React from 'react';
import "./addMedicine.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import api from '../../api/axitInstance.js';
import { useForm, Controller } from 'react-hook-form'
import { ChildComp } from './ChildComp/ChildComp.jsx';
import { TablePagination, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import Box from '@mui/material/Box';


import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export function AddMedicine() {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    debugger;
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page when rows per page changes
  };


  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const [tableData, setTableData] = useState([]);

  const getTableData = () => {
    api.get("/getMedicine").then((response) => {
      setTableData(response.data);
    }).catch((error) => {
      console.error("Error fetching medicines:", error);
    });
  }

  const add = async (data) => {
    try {
      const result = await api.post("/addMedicine", data)
      reset([]);
      getTableData();
    } catch (error) {
      console.error("Error adding medicine:", error);
    }
  };


  useEffect(() => {
    getTableData();
  }, []);



  const submitMethod = (data) => {
    console.log("Medicine Data:", data);
    add(data);
    getTableData();
  };


  const handleClick = useCallback((name) => {
    console.log("caleldFRomChild " + name);
  }, []);


  const myMemoVal = useMemo((data) => {
    debugger;
    for (let index = 0; index < 1273; index++) {
      console.log("");
    }

    let result = 3 * 32
    return result;
  }, []);

  // const handleClick = (name) => {
  //   console.log("caleldFRomChild " + name);
  // }

  const searchMedicines = () => {
    console.log("searchMedicines Called");
  }
  const displayedRows = tableData?.data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div className='medicineGridAndFrom'>
      {/* <div>
        {myMemoVal}
        <ChildComp name={"sarosh"} handleClick={handleClick} /> 
       </div> */}
      <div className="add-medicine-container custom-textfield">
        <div className='flexItem'>
          <h1>Add Medicine</h1>
        </div>

        <div className='flexItem'>
          <TextField error={errors?.medicineName} fullWidth {...register("medicineName", { required: true })} label="Medicine Name" variant="outlined" />
          <span className="errorColor">{errors?.medicineName && "This field is required"}</span>
        </div>

        <div className='flexItem'>
          <TextField error={errors?.content} fullWidth {...register("content", { required: true })} label="Medicine Content" variant="outlined" />
          <span className="errorColor">{errors?.content && "This field is required"}</span>
        </div>

        <div className='flexItem'>

          <LocalizationProvider fullWidth dateAdapter={AdapterDayjs} >

            <Controller
              name="expiryDate"
              control={control}
              rules={{ required: 'Expiry date is required', pattern: { value: /^\d{4}-\d{2}-\d{2}$/, message: 'Invalid date format' } }}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  label="Expiry Date"
                  value={field.value || null}
                  onChange={(date) => field.onChange(date)}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      margin: 'normal',
                      error: !!errors.expiryDate,
                    },
                    openPickerButton: {
                      sx: { color: '#00ffe1' }, // custom icon color
                    },
                  }}
                />
              )}
            />
          </LocalizationProvider>
          <span className="errorColor">{errors?.expiryDate && "This field is required"}</span>


        </div>
        <div className='flexItem'>
          <TextField error={errors?.quantity} {...register("quantity", { required: true })} fullWidth label="Quantity" variant="outlined" type="number" />
          <span className="errorColor">{errors?.quantity && "This field is required"}</span>

        </div>
        <div className='flexItemBtn'>
          <Button className='btnColor' variant="outlined" onClick={handleSubmit(submitMethod)}>Add Medicine</Button>
        </div>

      </div>

      <div className='tableAndSearch'>
        <div>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
              <MenuIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Medicines"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={searchMedicines}>
              <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
              <DirectionsIcon />
            </IconButton>
          </Paper>
        </div>
        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Medicine Name</TableCell>
                  <TableCell align="right">Content</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Quantity</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {

                  displayedRows?.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row?.medicineName}
                      </TableCell>
                      <TableCell align="right">{row?.content}</TableCell>
                      <TableCell align="right">{row?.date}</TableCell>
                      <TableCell align="right">{row?.quantity}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 2 }}>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]} // Customize rows per page options
                component="div"
                count={tableData?.data?.length} // Total number of items
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Box>
          </TableContainer>
        </div>

      </div>
    </div>
  );
}