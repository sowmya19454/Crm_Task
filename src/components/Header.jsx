import { AppBar, Container, MenuItem, Select, Toolbar, Typography,Button } from '@mui/material'
import { createTheme, styled, ThemeProvider } from '@mui/material/styles'
import React ,{ useState }from 'react'
// import React,  from 'react';
import { useHistory } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
// import LoginPage from '../Pages/LoginPage';

const Header = () => {
    const { currency, setCurrency } = CryptoState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const CustomTypography = styled(Typography)(({ theme }) => ({
        flex: 1,
        color: 'gold',
        fontFamily: "Roboto",
        fontWeight: 'bold',
        cursor: 'pointer'
    }))

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
            mode: 'dark',
        },
    });

  //styling ends here

    let history = useHistory();

    const handleClick = () => {
        history.push('/');
    }
    const handleClickLogin = () => {
        
        if (isLoggedIn) {
           
            setIsLoggedIn(false);
          } else {
            
            history.push('/login');
          }
      }
    
    
    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color='transparent' position='static'>
                <Container>
                    <Toolbar>
                        <CustomTypography onClick={() => handleClick()} variant='h5'>
                            Crypto CRM
                        </CustomTypography>

                        <Select variant='outlined' value={currency} onChange={(e) => setCurrency(e.target.value)} style={{ width: 100, height: 40, marginRight: 15 }}>
                            <MenuItem value={'USD'}>USD</MenuItem>
                            <MenuItem value={'EUR'}>EUR</MenuItem>
                        </Select>
                        {/* <smallbutton onClick={() => handleClick()}>Login</smallbutton> */}
                        <Button style={{ width:'20%'}} onClick={() => handleClickLogin()}> {isLoggedIn ? 'Logout' : 'Login'}</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header