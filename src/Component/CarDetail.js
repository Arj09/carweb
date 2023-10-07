import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";


export const CarDetail = ()=>{

    const naviagte = useNavigate()

    const handleDetail  = () =>{
        naviagte('/')
    }
    return(
        <Box >
            <Button  sx={{marginLeft:"50px", mt:"50px"}} onClick={handleDetail}>Back to home</Button>
            <Typography variant="h4" sx={{textAlign:"center",}}>Car detail page</Typography>
            
        </Box>
    )
}