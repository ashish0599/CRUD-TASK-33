import "./App.css";
import { Switch, Route } from "react-router-dom";
 import { Notfound } from "./Notfound";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import Tooltip from "@mui/material/Tooltip";
import { useHistory } from "react-router-dom";
 import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Box from '@mui/material/Box';
 import { RecipeList } from "./recipelist";
 import {Addrecipe} from "./Addrecipe";
 import {Editrecipe} from "./Editrecipe"
import { Recipedetails } from "./recipedetails";
import KitchenIcon from '@mui/icons-material/Kitchen';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {useState} from 'react';



export const API="https://620a879392946600171c5af0.mockapi.io/recepie"; //API to access data globally
export default function App() {
  const history = useHistory();
  const[mode,setMode]=useState("light")

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  }); 
  return (
    <ThemeProvider theme={darkTheme}>
    <Paper style={{borderRadius:"0px", minHeight:"100vh"}} elevation={3} >

    <div className="App">
    <Box sx={{ flexGrow: 1 }}>
    {/* App bar contains list of links route path */}
    <AppBar position="static" className="tabcolor">
        <Toolbar disableGutters className="main-menu">
          <Tooltip disableFocusListener title="Home page"> 
            <Button
          
              size="large"
              color="inherit"
              aria-label="home"
              startIcon={<HomeIcon />}
              onClick={() => history.push("/")}
            >
              Home
            </Button>
          </Tooltip>
         

          <Tooltip disableFocusListener title="recipe list">
            <Button
            
              size="large"
              color="inherit"
              aria-label="home"
              startIcon={<FastfoodIcon />}
              onClick={() => history.push("/recipe")}
            >
              Menu
            </Button>
          </Tooltip>
          <Tooltip disableFocusListener title=" Add recipe">
            <Button
             
              size="large"
              color="inherit"
              aria-label="home"
              startIcon={<KitchenIcon />}
              onClick={() => history.push("/addrecipe")}
            >
              Add recipe
            </Button>
          </Tooltip>
          <Tooltip title= {mode==="light" ? "dark mode" : "light mode"}>
          <Button className="theme"  startIcon= {mode=== "dark" ? <Brightness7Icon /> : <Brightness4Icon />}  onClick={()=>setMode(mode==="light" ? "dark" : "light")} style={{ marginLeft:"10px" }} color="inherit"></Button>
          </Tooltip>
        </Toolbar>
       
      </AppBar>
      </Box>


      <Switch>
      <Route exact path="/recipe">
     <RecipeList/>  
         </Route>
         <Route exact path="/recipe/:id">
         <Recipedetails/>
         </Route>
         <Route exact path="/addrecipe">
          <Addrecipe/>
        </Route>
      <Route exact path="/recipe/edit/:id">
        <Editrecipe />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      
      


       <Route path="**">
      <Notfound/>
       </Route>
             
        </Switch>
    </div>
    </ Paper>
    </ThemeProvider>
 
  );
}
// Function to return home
 function Home() {
  return (
    <div className="home">
      <h1 className="home-title">WELCOME TO RECIPE APP</h1>
      <img className="home-img" alt="recipe " src="https://thedigitalrestaurant.com/wp-content/uploads/2016/06/1-7.jpg"></img> 
    </div>
  );
}
