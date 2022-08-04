import { Box, Typography, Button, CardMedia, CardContent, Card } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
import api from "../apis/api";
import React from 'react';


const Search = () => {
    const { value } = useParams();
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    const [q, setQ] = useState('');

    const handleClick = (key) => {
        navigate('/detail/'+key)
    }



    return (
        <>
            <PrimarySearchAppBar />
            <Box >
                <Typography variant="h3"> Search for {value} </Typography>
            </Box>
            <Box 
                sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                mt: 5,
            }}>
                {list.length > 0 ? (
                    <div>
                        {list.map(item=>
                           <Card key={item.title}
                           sx={{ 
                           display: 'flex', 
                           flexDirection: 'column',
                           width: 220,
                           margin: 1,
                           }} 
                           >
                           <Button onClick={() => handleClick(item.key)}>
                               <Box sx={{ 
                                       display: 'flex',
                                       alignItems: 'center',
                                       flexDirection: 'column',
                                       height:200,
                                       }}>
                                   <CardMedia
                                       component="img"
                                       sx={{ width: 170, height: 225, mt:1, }}
                                       image={`${item.thumb}`}
                                       alt="Recipe poster"
                                   />
                                   <Box sx={{ display: 'flex', flexDirection: 'column',   }}>
                                       <CardContent sx={{ flex: '1 0 auto' }}>
                                       <Box sx={{
                                           width: 180,
                                           display: 'flex',
                                           ml: 8,
                                           mr: 8,
                                           }}>
                                           <Typography variant="caption" color="#644D3E">
                                           {item.title}
                                           </Typography>
                                       </Box>
                                       </CardContent>
                                   </Box>
                               </Box>
                           </Button>  
                   </Card> )}
                    </div>
                ) : (
                    <Box >     
                     <Box>
                         <Typography>No Data Result!</Typography>
                     </Box>
                    </Box>
                )}
            </Box>            
        </>
    )
}


export default Search;