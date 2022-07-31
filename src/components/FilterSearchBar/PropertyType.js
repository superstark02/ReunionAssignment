import React from 'react'
import { Select,Box } from '@mui/material';
import {MenuItem} from '@mui/material';
// Component to get PropertyType from user
const PropertyType = ({handler}) => {
    const [range, setRange] = React.useState(0);
    const menuItems=[
      {
        text:'House',
      },
      {
        text:'Office',
      },
      {
        text:'Industry',
      }
    ];
    const handleChange = (event) => {
      setRange(event.target.value);
      handler(menuItems[event.target.value]);
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

export default PropertyType

