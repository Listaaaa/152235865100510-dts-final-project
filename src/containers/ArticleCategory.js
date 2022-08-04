import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../apis/api';
import gaya4 from '../material/gaya4.jpg'
import dapur4 from '../material/dapur4.jpg'
import tipsMasak4 from '../material/tipsMasak4.jpg'
import PrimarySearchAppBar from '../components/PrimarySearchAppBar';
import Footer from '../components/Footer';


const ArticleCategory = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const fetchedCategories = await api.get(`/api/category/article`);
                setCategories(fetchedCategories.data.results);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCategories();
    }, []);

    return (
        <Box>
        <PrimarySearchAppBar />
                    
      <Card  
       sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              width: 1000,
              mt: 5,
              ml: 16,
              backgroundImage: `url(${dapur4})`,
            }} 
            >
        <Button onClick={() => navigate("/article-category/inspirasi-dapur")}>
        <Box sx={{ 
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                height:130,
                }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Box sx={{
                  width: 900,
                  display: 'flex',
                  ml: 8,
                  mr: 8,
                  mt: 3,
                  justifyContent: 'center',
                }}>
                <Typography variant="h4"  color="#FFFFFF">
                  Inspirasi Dapur
                </Typography>
              </Box>
            </CardContent>
        </Box>
        </Button>
      </Card>
      
      <Card  
       sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              width: 1000,
              mt: 2,
              ml: 16,
              backgroundImage: `url(${gaya4})`,
            }} 
            >
        <Button onClick={() => navigate("/article-category/makanan-gaya-hidup")}>
        <Box sx={{ 
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                height:130,
                
                }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Box sx={{
                  width: 900,
                  display: 'flex',
                  ml: 8,
                  mr: 8,
                  mt: 3,
                  justifyContent: 'center',
                }}>
                <Typography variant="h4" color="#FFFFFF">
                  Makanan dan Gaya Hidup
                </Typography>
              </Box>
            </CardContent>
        </Box>
        </Button>
      </Card>

      <Card  
       sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              width: 1000,
              mt: 2,
              ml: 16,
              mb: 5,
              backgroundImage: `url(${tipsMasak4})`,
            }} 
            >
        <Button onClick={() => navigate("/article-category/tips-masak")}>
        <Box sx={{ 
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                height:130,
                }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
              <Box sx={{
                  width: 900,
                  display: 'flex',
                  ml: 8,
                  mr: 8,
                  mt: 3,
                  justifyContent: 'center',
                }}>
                <Typography variant="h4" color="#FFFFFF">
                  Tips Masak
                </Typography>
              </Box>
            </CardContent>
           </Box>
        </Button>
      </Card>
      <Footer />
    </Box>
    )
};
export default ArticleCategory;