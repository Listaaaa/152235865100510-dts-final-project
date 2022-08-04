import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import Paper7 from '../material/Paper7.jpg';
import { styled } from '@mui/material';

const Register = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
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
       
        <Box style={{ backgroundColor:'#402D20', backgroundSize:'100%'}} display="flex" flexDirection="row">
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    mt: 10,
                    mb: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, backgroundColor: '#b3dec1'}}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" color={'white'}>
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <CssTextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CssTextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                    </Grid>
                    <Typography color='red'>{errorMessage}</Typography>
                    <ColorButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, backgroundColor: '#b3dec1', color:'#402D20'}}
                    >
                        Sign Up
                    </ColorButton>
                    <Grid container justifyContent="flex-end">
                        <Grid item sx={{ mt: 2}}>
                            <Link to="/login" style={{textDecoration:'none', color:'white'}}>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
        </Box>
       
    );
}

export default Register;
