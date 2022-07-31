import React from 'react'
import { Select,Box,InputLabel } from '@mui/material';
import {MenuItem} from '@mui/material';
// To get PriceRange from user
const PriceRange = ({handler}) => {
    const [range, setRange] = React.useState(0);
    const menuItems=[
      {
        text:'$0-',
        up:Infinity,
        lp:0
      },
      {
        text:'$0-$1000',
        up:1000,
        lp:0
      },
      {
        text:'$1000-$2000',
        up:2000,
        lp:1001
      },
      {
        text:'$2000-$4000',
        up:4000,
        lp:2001
      },
      {
        text:'$4000-$6000',
        up:6000,
        lp:4001
      },
      {
        text:'$6000-$8000',
        up:8000,
        lp:6001
      },
      {
        text:'>$8000',
        up:Infinity,
        lp:8001,
      },
    ];
    const handleChange = (event) => {
      setRange(event.target.value);
      handler(menuItems[event.target.value])
    };

  return (
    <Box display='flex' alignItems='flex-end' sx={{height:"100%"}}>
<Select
labelId="demo-simple-select-standard-label"
id="demo-simple-select-standard"
value={range}
onChange={handleChange}
variant='standard'
displayEmpty
>
{menuItems.map((item,index)=>(
  <MenuItem key={index} value={index}>{item.text}</MenuItem>
))}
</Select>
    </Box>
)}

export default PriceRange

