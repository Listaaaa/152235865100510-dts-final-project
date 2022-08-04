import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const Footer = () => {
    return (
        <AppBar position='static' color='' >
            <Box display='flex' alignItems="center">
                <Box sx={{ml:"39%"}}>
                    <Typography>
                    ©2022 | Audrey Callista Aisyah Hidayat
                    </Typography>
                </Box>
            </Box>
        </AppBar>
    );
};
export default Footer;