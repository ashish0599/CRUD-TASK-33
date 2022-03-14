import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Counter } from "./counter";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Tooltip from "@mui/material/Tooltip";




export function Recipe({ name, pic,rating,deleteButton,id,editbutton}) {
  const history=useHistory();
  // To display recipe in card
  return (
    <Card className="recipe-container">
      <img src={pic} alt={name} className="image" />
      <CardContent>
        <div className="recipe-info">
          <div className="recipe-specs">
          <Tooltip disableFocusListener title=" View recipe">
            <h2 className="foodname"  onClick={()=>history.push(`/recipe/${id}`)}>{name} </h2>
            </Tooltip>
            <p>
              <span className="foodname"  role="img" aria-label="star">
                ⭐ {rating}
              </span>
            </p>
          </div>
          <CardActions>
           <Counter /> {editbutton} {deleteButton} 
          
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
}