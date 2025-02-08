
import { Box } from '@mui/material';
//Componenntss
import Header from './components/header/Header'
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailView  from './components/details/DetailView';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
       <Header/>
       {/* margintop 54px islia h kyoki topbar ki height 54px hai  */}
       <Box style={ { marginTop : 54  }}>
        <Routes>
       <Route path='/' element={<Home/>}/>
       {/* <Route path='/product/:id' element={<DetailView/>}/> */}
       <Route path="/product/:id" element={<DetailView />} /> 
       </Routes>
       </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
