import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import error from '../material/error.jpg'

const NotFound = () => {
    return (
        <Box sx={{
            display: 'flex',
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <img width={400}
                src={error}
                alt="404"
            />
            <Link underline="none" color="inherit" to="/">Kembali ke Menu</Link>
        </Box>
    )
}

export default NotFound;
