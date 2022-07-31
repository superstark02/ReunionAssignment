import React from 'react'
import {ImHome} from 'react-icons/im'
import Button from '@mui/material/Button';
import DropDownButton from './DropDownButton';
import { AppBar, Box, Grid, Stack, styled, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { grey,deepPurple } from '@mui/material/colors';
import './header.css'
// import { theme } from '../../utils/theme';

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
  return <AppBar sx={theme => ({background: theme.palette.common.white})}>
    <Toolbar>
      <Box display='flex' alignItems={'center'}>
         <ImHome style={{color:deepPurple.A200}}/>
         <Typography color='text.primary'  sx={{fontSize:20,ml:1, fontWeight:'bold'}}>Reunion</Typography>
      </Box>
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