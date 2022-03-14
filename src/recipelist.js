import { Recipe } from "./recipe";
import Button from '@mui/material/Button';
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from "react";
import{API} from "./App"
export function RecipeList() {
  const history=useHistory();
  
  const [recipe, setrecipe] = useState([]);
  const getrecipe=()=>{fetch(`${API}`,{method:"GET"})
  .then((data)=>data.json())
  .then((char)=> setrecipe(char));}

  useEffect(()=> getrecipe(),[])
  const deleterecipe = (id)=> {
    fetch(`${API}/${id}`,{
      method:"DELETE"}).then(()=>getrecipe())
  }
  return (
    <section className="recipe-list">
      <div className="recipe-list-container">
        {recipe.map(({id,recipes_name,image,rating,}, index) => (
          <Recipe
            key={index}
            name={recipes_name}
            pic={image}
           
            rating={rating} 
            id={id}
            editbutton={
              <Button 
            
            className="editbtn"
            color="success"
            startIcon={< EditIcon/>}
            onClick={()=>{history.push(`/recipe/edit/${id}`)}}
            />
            } 
            deleteButton={
             
            <Button 
            
            className="dltbtn"
            color="error"
            startIcon={<DeleteIcon />
           }
              onClick={()=>{
             deleterecipe(id)
            }}></Button> }
              
            />
            
        ))
      
        }
          
      </div>

    </section>
  );
}