import { styled } from '@mui/material';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './Pages/Homepage';
import LoginPage from './Pages/LoginPage';
import Register from './Pages/Register';


function App() {
  const CustomApp = styled('div')(({ theme }) => ({
    backgroundColor: "#031B34",
    color: "white",
    minHeight: "100vh",
  }))
  

  return (
    <BrowserRouter>
      <CustomApp>
        <Header />
        <Route path="/login" component={LoginPage}></Route>
        <Route path='/register' component={Register}></Route>
        <Route exact path="/" component={Homepage}/>
      </CustomApp>
    </BrowserRouter>
  );
}

export default App;
