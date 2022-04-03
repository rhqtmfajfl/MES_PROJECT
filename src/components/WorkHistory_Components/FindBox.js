import React, {useState} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, Grid, TextField } from '@mui/material';
import { spacing, textAlign } from '@mui/system';

import Dateselect from '../Date/Dateselect';

const FindBox = () => {
    const[factory, setFactory] = useState('');

    const factoryChange = (event) => {
        setFactory(event.target.value);
      };

  return (
    <nav style={{border: '1px solid gray'}}>
        <Grid container spacing={2} alignItems="center" paddingLeft={2}>
            
            <Grid item >
                M/C                                                                      
            </Grid>

            <Grid item >
                <Box sx={{ minWidth: 150 }}>    
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-autowidth-label">factory</InputLabel>

                <Select
                value={factory}
                autoWidth
                id="demo-simple-select-autowidth"
                inputProps={{ 'aria-label': 'Without label' }}
                onChange={factoryChange}
                >
                    
                <MenuItem value="all">
                    전체
                </MenuItem>
                <MenuItem value="4">4면 Machine</MenuItem>
                <MenuItem value="2">2면 Machine</MenuItem>
                <MenuItem value="h">Hand Machine</MenuItem>
                </Select>

            </FormControl>

            </Box>
            
            </Grid>
            

            From
            
            <Grid item>
                <Dateselect/>

            </Grid>

                To

            <Grid item>
                <Dateselect/>

            </Grid>
            
            <Button variant="contained" href="#contained-buttons">
            조회
            </Button>
            

        </Grid>
    </nav>
  )
}

export default FindBox