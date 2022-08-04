import { useParams } from "react-router-dom";
import { useState } from "react";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
import { Box, Typography, CardMedia } from "@mui/material";
import api from "../apis/api";
import Footer from "../components/Footer";


const ArticleDetail = () => {
    let {key} = useParams();
    let {tag} = useParams();
    const [article, setArticle] = useState([]);

    const fetchArticles = async () => {
        try {
            const fetchedArticles = await api.get(`/api/article/${tag}/${key}`);
            setArticle(fetchedArticles.data.results);
        } catch (error) {
            console.log(error);
        }
    }
    fetchArticles();

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
            <Typography variant="h4"  color="text.secondary">  { article.title } </Typography> 
            </Box>

            </Box>
            <Box sx={{
                display: 'flex',
                margin: 0,
                justifyContent: 'center',}}>
            <CardMedia
                component="img"
                sx={{ width: 1000, height: 500, mt:1, }}
                image={`${article.thumb}`} alt="backdrop"/>
            </Box>

            <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        mt: 2,}}>
                 <Typography variant="h6" color="text.secondary"></Typography>   
                 <Box sx={{ mr: 5, ml: 1, }}><Typography  variant="h6" color="text.secondary"> {article.author} | {article.date_published}</Typography></Box>
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
                    
                    <Typography variant="body1" color="text.secondary"> " { article.description } "</Typography>
                </Box>
                
            </Box>
        </Box>
        <Footer />
        </>
    )

}
export default ArticleDetail;