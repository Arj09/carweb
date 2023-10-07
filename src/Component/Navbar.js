
import { AppBar, Stack, Typography, styled } from '@mui/material';
import React from 'react';





const ContainerBox = styled('div')(({theme})=>({
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    textAlign:"center",
    gap:"30px",
    padding:"20px",
    justifyContent:"space-between",
    [theme.breakpoints.down('md')]:{
    },
    [theme.breakpoints.down('sm')]:{}
    
    
  }))


export const Navbar = ()=>{
    return(
        <AppBar sx={{width:"100vw", height:"80px", backgroundColor:"blue" ,padding:"0 40px", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", position:'relative'}}>
            <ContainerBox>
            <Typography variant='h6'>Car Service</Typography>
                <Typography>Gwalior</Typography>
            </ContainerBox>
            

        </AppBar>
        
    )
}