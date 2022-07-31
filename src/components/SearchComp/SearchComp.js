import React from 'react';

import {Typography,Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {data} from '../../utils/DummyData';
// Component to search using name of Property
const SearchComp = ({handler}) => {
  return (
    <Box display='flex'>
    <Typography color='text.primary' fontSize={40} fontWeight={'bold'}>Search properties to rent </Typography>
              <Box flexGrow={1}/>
     <SearchBar handler={handler} field={'name'}/>
   </Box>
  )
}

function SearchBar({handler,field}) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={data}
      getOptionLabel={(option) => option[field]}
      sx={{ width: 300,background:'#fff'}}
      renderInput={(params) => <TextField  {...params} label="Search using name" />}
      onChange={handler}
    />
  );
}
export default SearchComp