import React from 'react'
import Button from '@mui/material/Button';
import DropDownButton from './DropDownButton';
import { AppBar, Box, Grid, Stack, styled, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { grey,deepPurple } from '@mui/material/colors';
import './header.css'
import HouseSidingIcon from '@mui/icons-material/HouseSiding';

const Btn = styled(Button)({
  color:'black',
  ":hover":{
    color:deepPurple.A200,
  }
});

const HeaderBar = () => {
  const pages = ["Rent", "Buy", "Sell"];
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  return <AppBar elevation={0} sx={theme => ({background: theme.palette.common.white})}>
    <Toolbar>
      <div style={{display:"flex",alignItems:"center"}}>
         <HouseSidingIcon style={{color:"#7c4dff"}}/>
         <Typography color='text.primary'  sx={{fontSize:20,ml:1, fontWeight:'bold'}}>Estatery</Typography>
      </div>
      {!isSmall && 
      <Grid container spacing={5} sx={{ml:5}}>
        {pages.map((page, idx) => <Grid  item key={idx} >
          <Btn sx={{fontSize:17,textTransform:'none'}}>{page}</Btn>
        </Grid>)}
        <Grid item>
          <DropDownButton  color={'black'} text='Manage Property'/>
        </Grid>
        <Grid item>
          <DropDownButton color={'black'} text='Resources'/>
        </Grid>
      </Grid>
      }
      <Box flexGrow={1}/>
      <Stack direction="row" spacing={2}>
      <Button sx={{color:deepPurple.A200,borderColor:grey[500]}} variant='outlined' >Login</Button>
      <Button sx={{background:deepPurple.A200,':hover':{background:deepPurple.A100}}} variant='contained'>Signup</Button>
      </Stack>
    </Toolbar>
    </AppBar>
}

export default HeaderBar