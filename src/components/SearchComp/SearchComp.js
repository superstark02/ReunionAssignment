import React from 'react';
import {Typography,Box } from "@mui/material";
import TextField from '@mui/material/TextField';

const SearchComp = () => {
  return (
    <Box display='flex'>
    <Typography style={{fontSize:"40px",fontWeight:"600"}}>Search properties to rent </Typography>
              <Box flexGrow={1}/>
        <TextField label="Searchbar" />
   </Box>
  )
}

export default SearchComp