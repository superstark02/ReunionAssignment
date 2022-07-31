import {Box,Typography,Stack, Card,Divider, Button} from '@mui/material'
import React from 'react'
import { deepPurple } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import DateSet from './DateSet';
import PriceRange from './PriceRange';
import PropertyType from './PropertyType';
import { useState } from 'react';
// Component for the Filters
const FilterSearchBar = ({handler,reset}) => {
    const [priceRange,setPriceRange]=useState({lp:0,up:Infinity});
  const [location,setLocation]=useState('New York');
  const [date,setDate]=useState(Date());
  const [type,setType]=useState('House');
  const [ft,setFt]=useState(false);
  const handleDate=(val)=>{
    setDate(val);
  }
  // Function to update the priceRange 
  const handlePrice=(val)=>{
    setPriceRange({lp:val.lp,up:val.up})
  }
  // Function to update the PropertyType
  const handleType=(val)=>{
    setType(val.text);
  }
  return (
    <Box sx={{paddingY:5}}>

    <Card sx={{paddingY:2,paddingX:2}}>
        <Stack direction="row" spacing={5} >
            <Stack >
                <Typography color='text.primary' fontSize={10} fontWeight={'bold'}>Location</Typography>
                <TextField onChange={(e)=>{setLocation(e.target.value)}}  id="standard-basic" defaultValue='New York' variant="standard" label='City'/>
            </Stack>
            <Divider  orientation='vertical' flexItem />
            <Stack >
                <Typography color='text.primary' fontSize={10} fontWeight={'bold'}>When</Typography>
                <DateSet handler={handleDate} />
            </Stack>
            <Divider  orientation='vertical' flexItem />
            <Stack spacing={1}>
                <Typography color='text.primary' fontSize={10} fontWeight={'bold'}>Price</Typography>
                <PriceRange handler={handlePrice} />
            </Stack>
            <Divider  orientation='vertical' flexItem />
            <Stack spacing={1}>
                <Typography color='text.primary' fontSize={10} fontWeight={'bold'}>Property Type</Typography>
                <PropertyType handler={handleType}/>
            </Stack>
            <Divider  orientation='vertical' flexItem />
            <Box sx={{ width:'15%',paddingY:1,display:'flex' ,alignItem:'center'}}>
            <Button onClick={()=>{
                handler(location,date,priceRange,type);
                setFt(true);
            }} fullWidth sx={{textTransform:'none',background:deepPurple.A200,':hover':{background:deepPurple.A100}}} variant='contained'>Search</Button>
            {ft&&<Button onClick={()=>{
                setFt(false);
                reset();
            }} color='error' variant='contained' sx={{ml:1}}>All</Button>}
            </Box>
        </Stack>
    </Card>
    
    </Box>
  )
}

export default FilterSearchBar