import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from "react";
import { useParams } from "react-router-dom";
import {API} from "./App";
import { useEffect } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



export function Editrecipe (){
   
    const [recipe, setrecipe] = useState(null);
  const { id } = useParams();  // To get id from URL
  useEffect(() => {
    fetch(`${API}/${id}`)
        .then((data) => data.json())
        .then((rec) => setrecipe(rec))
}, [id]);
      return(
        <div>
            {recipe ? <Editrec recipe={recipe}/> : <h1>Loading</h1>}
        </div>
    )
      }

      function Editrec ({recipe}) {
        const [recipename, setname] = useState(recipe.recipes_name);
        const [recipeimage, setimage] = useState(recipe.image);
        const [reciperating, setrating] = useState(recipe.rating);
        const [recipeingredients, setingredients] = useState(recipe.ingredients);
        const [recipevideo, setvideo] = useState(recipe.video);
        const his=useHistory();
    
   
return (

   
<div className="recipe">
<TextField value={recipename} id="outlined-basic"  variant="outlined"  onChange={(event) => setname(event.target.value)}/>

<TextField value={recipeimage} id="outlined-basic"  variant="outlined"  onChange={(event) => setimage(event.target.value)}/>
<TextField value={reciperating} id="outlined-basic"   variant="outlined"  onChange={(event) =>  setrating(event.target.value)}/>
<TextField value={recipeingredients} id="outlined-basic" variant="outlined"  onChange={(event) => setingredients(event.target.value)}/>
<TextField value={recipevideo} id="outlined-basic" variant="outlined"  onChange={(event) => setvideo(event.target.value)}/>
 
<Button  variant="contained"  onClick={()=>{
    const Updatedrecipe={
    recipes_name: recipename,
    image: recipeimage,
    rating: reciperating,
    ingredients : recipeingredients,
video:recipevideo};
    fetch(`${API}/${recipe.id}`,{
        method:"PUT", 
        body: JSON.stringify( Updatedrecipe),
         headers:{
           "content-Type" : "application/json"
        }})
      
      .then(() =>his.push("/recipe"))
      
   
      }}>
    save</Button>
    <Button onClick={()=>his.goBack()} variant="contained" startIcon={<ArrowBackIosIcon />}>back</Button>
</div>
)
}