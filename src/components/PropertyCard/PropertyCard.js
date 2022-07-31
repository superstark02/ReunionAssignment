import * as React from 'react';
import Card from '@mui/material/Card';
import mg from '../../utils/house.jpg'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { deepPurple } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import { Divider, Stack } from '@mui/material';
import { Box } from '@mui/system';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import Crop32Icon from '@mui/icons-material/Crop32';
// Component to display property
const PropertyCard = ({data}) => {
  return (
    <Box sx={{position:"relative",minWidth:350,maxWidth:400,width:'100%'}}>
    <Card sx={{width:"100%", zIndex:1000}}>
      <CardMedia
        component="img"
        height="180"
        src={mg}
        alt="green iguana"
        />
        <PopTag />
    <CardContent>
        <Typography color={deepPurple.A200} gutterBottom variant="h5" >
          ${data.price}<span style={{fontSize:15,color:'grey'}}>/month</span>
        </Typography>
        <Typography fontWeight='bold' variant='h5' >
        {data.name}
        </Typography>
        <Box sx={{paddingY:'0.6rem'}}>
        <Typography variant="body2" color="text.secondary" >
        {data.address}
        </Typography>
        </Box>
        <Divider flexItem />
        <Stack sx={{alignItems:'center',paddingTop:'1rem'}} direction={'row'} spacing={1}>
        <BedIcon sx={{color:'#7c4dff'}}/>
        <Typography  fontSize={13}>{data.beds} Beds</Typography>
        <BathtubIcon sx={{color:'#7c4dff'}}/>
        <Typography  fontSize={13}>{data.bathrooms} Bathrooms</Typography>
        <Crop32Icon sx={{color:'#7c4dff'}}/>
        <Typography  fontSize={13}>{data.area} m<sup>2</sup> </Typography>
        </Stack>
      </CardContent>
    </Card>
    </Box>
        
  )
}
// Component to implement popular tag
const PopTag = () => {
  return <Box position='absolute'  sx={{top:"50%", transform:"translate(-10px,-100%)"}}>
    <Box sx={theme => ({background:'#7c4dff', p:1, borderRadius:1, borderBottomLeftRadius:0})}>
      <Typography sx={{color:'white'}}>Popular</Typography>
    </Box>
    <Box sx={{width:0, height:0,
  borderTop: "10px solid transparent",
  borderBottom: "10px solid transparent", 
  borderRight:"10px solid #7c4dff", position:'absolute', bottom:'-10px', left:"0px"}}></Box>
  </Box>
}

export default PropertyCard