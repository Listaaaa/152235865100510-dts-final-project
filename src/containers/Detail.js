import { Box, Typography, CardMedia, styled, ListItem, ListItemText } from "@mui/material";
import * as React from 'react';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
import api from "../apis/api";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import TimerIcon from '@mui/icons-material/Timer';
import StarIcon from '@mui/icons-material/Star';
import Footer from "../components/Footer";

const Detail = () => {
    let {key} = useParams();
    const [recipe, setRecipe] = useState([]);
    

    const CssRestaurantIcon = styled(RestaurantIcon) ({
        '& .MuiIcon-colorPrimary' : {
            color: '#b3dec1',
          },
    });
    
    const fetchRecipes = async () => {
        try {
            const fetchedRecipes = await api.get(`/api/recipe/${key}`);
            setRecipe(fetchedRecipes.data.results);
        } catch (error) {
            console.log(error);
        }
    }
    fetchRecipes();
    

    return (
        <>
        <PrimarySearchAppBar />
        <Box sx={{
            display: 'flex',
            margin: 0,
            justifyContent: 'left',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
            backgroundColor: '#F2FFF6',
            
        }}>
            <Box sx={{
                display: 'flex',
                margin: 0,
                justifyContent: 'center',
                flexDirection: 'column',
            }}>
            <Box sx={{
                m: 5,
            }}>
            <Typography variant="h4"  color="text.secondary">  { recipe.title } </Typography> 
            </Box>
            <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        mb: 5}}>
                 <CssRestaurantIcon />
                 <Typography variant="h6" color="text.secondary"></Typography>   
                 <Box sx={{ mr: 5, ml: 1, }}><Typography  variant="h6" color="text.secondary"> { recipe.servings }</Typography></Box>
                 <TimerIcon />
                 <Typography variant="h6" color="text.secondary"></Typography>
                <Box ><Typography  variant="h6" color="text.secondary"> </Typography></Box>
                <Box sx={{ mr: 5, ml: 1, }}><Typography variant="h6" color="text.secondary">{recipe.times}</Typography></Box>
                <StarIcon />
                <Box sx={{ ml: 1, }}><Typography variant="h6" color="text.secondary">{recipe.dificulty}</Typography></Box>
                </Box>
                <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                }}>
                
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                margin: 0,
                justifyContent: 'center',}}>
            <CardMedia
                component="img"
                sx={{ width: 1000, height: 500, mt:1, }}
                image={`${recipe.thumb}`} alt="backdrop"/>
            </Box>
            
            <Box 
            sx={{
                display: 'flex',
                marginLeft: 10,
                marginRight: 10,
                justifyContent: 'left',
                flexDirection: 'column',
            }}>
                
                <Box sx={{
                        mt: 5, mb: 5, ml: 6, mr: 6
                }}>
                    
                    <Typography variant="body1" color="text.secondary"> " { recipe.desc } "</Typography>
                    <Box sx={{
                        mt: 5,
                    }}>
                       <Typography variant="h6" color="text.secondary"> Bahan yang dibutuhkan :</Typography>
                       <Typography color="text.secondary">
                            {recipe.ingredient}
                       </Typography>
                    </Box>
                    <Box sx={{
                        mt: 5,
                    }}>
                       <Typography variant="h6" color="text.secondary"> Cara memasak :</Typography>
                       <Typography color="text.secondary">
                            {recipe.step}
                       </Typography>
                    </Box>
                </Box>
                
            </Box>
        </Box>
        <Footer />
        </>
    )

}
export default Detail;