import React, { useEffect, useState } from 'react';
import {Box, Typography, styled} from '@mui/material'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import { useNavigate } from 'react-router-dom';
import { Http } from './Http';





const ContainerBox1 = styled('div')(({theme})=>({
    width:"80%",
    display:"grid",
    margin:"20px auto",
    border:"0.2px solid pink",
    gridTemplateRows:"1fr",
    gridTemplateColumns:"1fr 1fr 1fr 1fr",
    alignItems:"center",
    textAlign:"center",
    gap:"30px",
    padding:"20px",
    backgroundColor:"white",
    justifyContent:"space-between",
    [theme.breakpoints.down('md')]:{
      
      gridTemplateColumns:"1fr 1fr"
  
  },
  [theme.breakpoints.down('sm')]:{
   
    gridTemplateColumns:"1fr 1fr"
  
  }
    
    
  }))

 
  
export const Card = ()=>{

  const [data, setData] = useState([])
  const naviagte = useNavigate()



  

  useEffect(()=>{
    Http.get('/api/v1/category/all').then((res)=>{
      console.log(res.data)
      setData(res.data.categories)
    }).catch((err)=>{
      console.log(err)
    })
  
    

  },[])

  const handleDetail = (categories)=>{
    naviagte('detail')
  }


    return(
        <ContainerBox1>
          {
            data ? (
              data.map((data, index)=>{
                return(
                  <Box key={index} sx={{display:"flex", flexDirection:"column",cursor:"pointer", justifyContent:"center", alignItems:"center", margin:"10px auto", gap:"10px 20px"}} 
                      onClick={()=>handleDetail(data.name)}
                  >
                    <DirectionsCarIcon  sx={{ fontSize: 40 }} />
                    <Typography>{data.name}</Typography>
                  </Box>
                )
              })
            ):(
              <div  textAlign='center' paddingTop='500px'>Loading, Please wait </div>
            )
          }
          
         

          
        </ContainerBox1>
        
    )
}