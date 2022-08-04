import { styled, alpha } from '@mui/material/styles';
import { Box, Typography, Stack } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../apis/api';
import PrimarySearchAppBar from '../components/PrimarySearchAppBar';
import Footer from '../components/Footer';
import SearchCard from '../components/SearchCard';
import AppPage from './AppPage';


const SearchList=() => {
  let {value} = useParams();
  const [search, setSearch] = useState();
  const [page, setPage] = useState();


  useEffect(() => {
  const fetchSearch = async () => {
    try {
        const fetchedSearch = await api.get(`/api/search/?q=${value}`);
        setSearch(fetchedSearch.data.results);
    } catch (error) {
        console.log(error);
    }
}
fetchSearch();
}, []);

  return (
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
                search.map(searching => (
                    <SearchCard key={searching.key} search={searching}></SearchCard>
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
export default SearchList;