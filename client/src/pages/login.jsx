import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { serverURL } from '../server';
import { useDispatch } from 'react-redux'
import { setLoginDetails } from '../redux/userslice';
import { Alert } from '@mui/material';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  // state for show hide error messase
  const [show, setShow] = useState('none')
  // state for error message
  const [error_msg, setErrorMsg] = React.useState('')
  // hook to navigage
  const location = useNavigate()

  const dispatch = useDispatch()

  // when user clicks on login button
  const handleSubmit = async (event) => {
    // prevent from reload submit
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    // values from login form
    const values = {
      login_token: data.get('email'),
      password: data.get('password'),
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    };
    // triggered when user click on login
    const response = await fetch(`${serverURL}/login`, requestOptions)
      .then(res => res.text())
      .then(text => {
        const msg = (JSON.parse(text))
        console.log(msg)
        // setting the redux with user login information if user provide correct crendetials
        if (msg.user) {
          const notify = () => toast(
            msg.success_msg
          );
          notify()
          dispatch(setLoginDetails({
            id: msg.user._id,
            token: msg.token,
            email: msg.user.email,
            isLoggedIn: true
          }))
          // navigate to homepage
          location('/foryou')
        }
        // if error occurs show error message
        if (msg.error_msg) {
          // setting display flex when error occur
          setErrorMsg(msg.error_msg)
          setShow('flex')
        }
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/05/31/13/02/mobile-phone-791644_1280.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              PicTok Login
            </Typography>
            <Alert variant="filled" severity="error" style={{ display: `${show}` }}>{error_msg}</Alert>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to='/register' variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}