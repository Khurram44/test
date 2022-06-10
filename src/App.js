import logo from './logo.svg';
import './App.css';
import {Button, Stack} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import {ThumbUpAltSharp,Settings, Feed} from '@mui/icons-material';
import styled from '@emotion/styled';
import SideBar from "../src/components/Sidebar"
import NavBar from './components/Navbar';
import RightBar from './components/Rightbar';
import { Box } from '@mui/system';

function App() {
  const BlueButton  = styled(Button)({
    backgroundColor:"green",color:"yellow",margin:20, "&:hover":{
      backgroundColor:"green"}
  })
  return (
    <Box className="App"> 
   <Stack direction="row" spacing = {2} justifyContent = "space-between">
    <SideBar/>
    <NavBar/> 
    <RightBar/>
   </Stack>
   
    </Box>
  );
}

export default App;
