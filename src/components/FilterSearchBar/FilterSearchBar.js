import {Box,Divider, Button} from '@mui/material'
import React from 'react'
import { deepPurple } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import DateSet from './DateSet';
import PriceRange from './PriceRange';
import PropertyType from './PropertyType';
import { useState } from 'react';
import "./FilterSearchBar.css"

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

    <div style={{width:"100%"}}>
        <div style={{display:"flex",width:"100%",justifyContent:"space-between"}} >
            <div >
                <div class="f-title">Location</div>
                <TextField onChange={(e)=>{setLocation(e.target.value)}}  id="standard-basic" defaultValue='New York' variant="standard" label='City'/>
            </div>
            <Divider  orientation='vertical' flexItem />
            <div >
                <div class="f-title">When</div>
                <DateSet handler={handleDate} />
            </div>
            <Divider  orientation='vertical' flexItem />
            <div style={{paddingBottom:'15px'}}>
                <div class="f-title">Price</div>
                <PriceRange handler={handlePrice} />
            </div>
            <Divider  orientation='vertical' flexItem />
            <div style={{paddingBottom:'15px'}}>
                <div class="f-title">Property Type</div>
                <PropertyType handler={handleType}/>
            </div>
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
        </div>
    </div>
    
    </Box>
  )
}

export default FilterSearchBar