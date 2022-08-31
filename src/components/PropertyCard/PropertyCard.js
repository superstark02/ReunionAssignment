import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Divider, Stack } from '@mui/material';
import { Box } from '@mui/system';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import StarIcon from '@mui/icons-material/Star';
import "./Propertycard.css"
// Component to display property
const PropertyCard = ({ data }) => {
  return (
    <Box sx={{ position: "relative", minWidth: 350, maxWidth: 400, width: '100%' }}>
      <Card sx={{ width: "100%", zIndex: 1000 }}>
        <CardMedia
          component="img"
          height="180"
          src={"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          alt="home"
        />
        <PopTag />
        <div className='card-content' >
          <div className='card-price' >
            ${data.price}<span style={{ fontSize: 15, color: 'grey' }}>/month</span>
          </div>
          <Typography fontWeight='bold' variant='h5' >
            {data.name}
          </Typography>
          <Box sx={{ paddingY: '0.6rem' }}>
            <Typography variant="body2" color="text.secondary" >
              {data.address}
            </Typography>
          </Box>
          <Divider flexItem />
          <div style={{display:"flex",justifyContent:"space-between", alignItems:"center",marginTop:"10px"}}>
            <BedIcon sx={{ color: '#7c4dff' }} />
            <Typography fontSize={13}>{data.beds} Beds</Typography>
            <BathtubIcon sx={{ color: '#7c4dff' }} />
            <Typography fontSize={13}>{data.bathrooms} Bathrooms</Typography>
            <AccessibilityIcon sx={{ color: '#7c4dff' }} />
            <Typography fontSize={13}>{data.area} m<sup>2</sup> </Typography>
          </div>
        </div>
      </Card>
    </Box>

  )
}
// Component to implement popular tag
const PopTag = () => {
  return <Box position='absolute' sx={{ top: "55%", transform: "translate(-8px,-100%)" }}>
    <Box sx={theme => ({ background: '#7c4dff', p: 1, borderRadius: 1, borderBottomLeftRadius: 0, padding: '5px 10px' })}>
      <Typography sx={{ color: 'white',fontSize: '12px' }}> <StarIcon sx={{fontSize:"15px"}} /> Popular</Typography>
    </Box>
    <Box sx={{
      width: 0, height: 0,
      borderTop: "10px solid transparent",
      borderBottom: "10px solid transparent",
      borderRight: "10px solid #7c4dff", position: 'absolute', bottom: '-10px', left: "0px"
    }}></Box>
  </Box>
}

export default PropertyCard