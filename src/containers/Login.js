import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { signInWithEmailAndPassword } from 'firebase/auth';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { useState } from 'react';
import cooking from '../material/cooking.png'
import { styled } from '@mui/material';



const Login = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
          color: 'white',
        },
        '& .MuiFormLabel-root': {
            color: 'white',
        },
        '& label.fieldset': {
          color: 'white',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#b3dec1',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#b3dec1',
          },
          '&:hover fieldset': {
            borderColor: 'white',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#b3dec1',
          },
        },
      });

      const ColorButton = styled(Button)(({ theme }) => ({
        '&:hover': {
          backgroundColor: '#99cba9',
        },
      }));

    return (
        
        <Box style={{ backgroundColor: '#402D20', backgroundSize:'100%'}} display="flex" flexDirection="row" alignItems={'center'}>
            <Container component="main" maxWidth="xs" sx={{ml: 10, mr: 10}} display="flex" flexDirection="row">
                <Box
                    sx={{
                        mt: 10,
                        mb: 15,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, backgroundColor: '#b3dec1'}}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" color={'white'} >
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} color='white'>
                    
                        <CssTextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            sx={{
                                input: { color: 'white'}
                            }}
                        />
                        <CssTextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                    
                        <Typography color='red'>{errorMessage}</Typography>
                        <ColorButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, backgroundColor: '#b3dec1', color:'#402D20'}}
                        >
                            Sign In
                        </ColorButton>
                        <Grid container>
                            <Grid item sx={{ mt: 2}}  >
                                <Link to="/register" color="inherit" style={{textDecoration:'none', color:'inherit' }} >
                                    "Don't have an account? Sign Up"
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container >
            <Box position={'right'} >
                <img src={cooking} alt='cookingcover' width={'600'}/>
            </Box>
        </Box>
      
    );
}

export default Login;