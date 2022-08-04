import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../apis/api';
import tipsMasak5 from '../material/tipsMasak5.jpg'
import PrimarySearchAppBar from '../components/PrimarySearchAppBar';
import Footer from '../components/Footer';


const TipsMasak = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const fetchedCategories = await api.get(`/api/category/article/tips-masak`);
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
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 3,
          mb: 3,
        }}>
            <Box>
            <Typography variant="h3"  color='#402D20'> 
            Kumpulan Artikel
            </Typography>
            </Box>
            <Box>
            <Typography variant="h4"  color='#402D20'> 
            Tips Masak
            </Typography>
            </Box>
          </Box>
          <Box sx={{mb:5,}}>{
                    categories.map(categories => (       
      <Card  key={categories.key} categories={categories}
       sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              width: 1000,
              mt: 1,
              ml: 16,
              backgroundImage: `url(${tipsMasak5})`,
            }} 
            >
        <Button onClick={() => navigate(`/article-category/tips-masak/${categories.key}`)}>
        <Box sx={{ 
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                height:50,
                }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Box sx={{
                  width: 900,
                  display: 'flex',
                  ml: 8,
                  mr: 8,
                  justifyContent: 'center',
                }}>
                <Typography variant="body1"  color="#FFFFFF">
                  {categories.key}
                </Typography>
              </Box>
            </CardContent>
        </Box>
        </Button>
      </Card>
       ))
      } 
      </Box> 
      <Footer />
    </Box>
    )
};
export default TipsMasak;