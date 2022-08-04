import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import api from "../apis/api";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
import RecipeCard from "../components/RecipeCard";
import Stack from '@mui/material/Stack';
import AppPage from "./AppPage";
import Footer from "../components/Footer";



const Home =() => {
    const [recipes, setRecipes] = useState([]);
    const [page, setPage] = useState(1);
   

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const fetchedRecipes = await api.get(`/api/recipes/${page}`);
                setRecipes(fetchedRecipes.data.results);
            } catch (error) {
                console.log(error);
            }
        }
        fetchRecipes();
    }, [page]);

    
    return(
        <>
        <PrimarySearchAppBar />
        <Box sx={{
            backgroundColor: '#F2FFF6',
        }}>
            <br/>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 5,
        }}>
            <Box >
                <Typography variant='h4' >MENU APA HARI INI?</Typography>
            </Box>
            <Box 
                sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                mt: 5,
            }}>
                {
                    recipes.map(recipe => (
                        <RecipeCard key={recipe.title} recipe={recipe}></RecipeCard>
                    ))
                }
            </Box>
            <Box sx={{
                mt: 5,
                mb: 3,
            }}>
            <Stack spacing={2}>
                <AppPage setPage={setPage} page={page}/>
            </Stack>
            </Box>
        </Box>
        </Box>
        <Footer />
        </>
    )
}

export default Home;