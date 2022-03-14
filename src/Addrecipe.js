import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { API } from './App';
import { useFormik } from "formik";
import * as yup from "yup";


// Function to Addrecipe
export function Addrecipe() {
  const recipeValidationSchema = yup.object({
    recipes_name : yup.string().required("Enter recipe_name"),
    image: yup
      .string()
      .required("Give poster URL")
      .min(4, "need a longer input"),
      rating:yup.number().required("Give rating").min(0).max(5),
      ingredients:yup.string().required("Give ingredients").min(5),
      video:yup.string().required("Enter video URL"),
      
  });
  // To handle form validation
  const formik = useFormik({
    initialValues: { recipes_name: "", image: "",rating:"",ingredients:"" ,video:""},
     validationSchema: recipeValidationSchema,
    onSubmit: (newrecipe) => {
      addrecipe(newrecipe)
    },
  });
  
  
  const his=useHistory();
  // Post method to add recipe in API
 const addrecipe = (newrecipe) => {
    fetch(`${API}`,{
      method:"POST", 
      body: JSON.stringify(newrecipe),
       headers:{
         "content-Type" : "application/json"
      }})
  
    .then(() =>his.push("/recipe"))
   };

  return (
   
      <form className="recipe" onSubmit={formik.handleSubmit}>
      <TextField  id="recipes_name" type="text"  recipes_name="recipes_name" label="Recipes Name" variant="outlined" values={formik.values.recipes_name}  onChange={formik.handleChange}
          onBlur={formik.handleBlur} />{formik.touched.recipes_name && formik.errors.recipes_name ? formik.errors.recipes_name : ""}

      <TextField id="image" type="text"  image="image" label="image" variant="outlined" values={formik.values.image}  onChange={formik.handleChange}  onBlur={formik.handleBlur} /> {formik.touched.image && formik.errors.image ? formik.errors.image : ""}
     
      <TextField id="rating" type="text"  rating="rating" label="rating" variant="outlined" values={formik.values.rating}  onChange={formik.handleChange}  onBlur={formik.handleBlur} />{formik.touched.rating && formik.errors.rating ? formik.errors.rating : ""}
      <TextField id="ingredients" type="text"  ingredients="ingredients" label="ingredients" variant="outlined" values={formik.values.ingredients}  onChange={formik.handleChange}  onBlur={formik.handleBlur} />{formik.touched.ingredients && formik.errors.ingredients ? formik.errors.ingredients : ""}
      <TextField id="video" type="video"  video="video" label="video" variant="outlined" values={formik.values.video}  onChange={formik.handleChange}  onBlur={formik.handleBlur} />{formik.touched.video && formik.errors.video ? formik.errors.video : ""}
      <Button variant="contained" type="submit">Add recipe</Button>
      <Button onClick={()=>his.goBack()} variant="contained" startIcon={<ArrowBackIosIcon />}>back</Button>
      </form>
  
  );
}