import React from "react";
import { useParams } from "react-router-dom";
import {useState} from "react"

let vid="";
const RecipeInfo=()=>{
    const [item,setitem]=useState();
    const {MealId}=useParams();
    if(MealId!==""){
        fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
        .then(res=>res.json())
        .then(data=>{
            setitem(data.meals[0]);
        })
    }
    if(item){
        const url =item.strYoutube;
        const str =url.split("=");
        vid= str[str.length-1]
    }
    return(
        <>
        {
            (!item)?"":(<>
                <div className="content">
                    <img src={item.strMealThumb} alt="" />
                    <div className="innerContent">
                        <h2>{item.strMeal}</h2>
                        <h3>{item.strArea} Food</h3>
                        <h4> Category: {item.strCategory}</h4>
                    </div>
                </div>
                <div className="recipedetails">
                    <div className="ingredients">
                        <h2>Ingredients</h2><br />
                       <ul>
                       <li><p>{item.strIngredient1}:{item.strMeasure1}</p></li>
                       <li><p>{item.strIngredient2}:{item.strMeasure2}</p></li>
                       <li><p>{item.strIngredient3}:{item.strMeasure3}</p></li>
                       <li><p>{item.strIngredient4}:{item.strMeasure4}</p></li>
                       <li><p>{item.strIngredient5}:{item.strMeasure5}</p></li>
                       <li><p>{item.strIngredient6}:{item.strMeasure6}</p></li>
                       <li><p>{item.strIngredient7}:{item.strMeasure7}</p></li>
                       <li><p>{item.strIngredient8}:{item.strMeasure8}</p></li>
                       </ul>
                    </div>
                    <div className="instructions">
                        <h2>Instructions</h2><br />
                        <h4>{item.strInstructions}</h4>
                    </div>
                </div>
                <div className="vedio">
                        <iframe src={`https:/www.youtube.com/embed/${vid}`}>
                        </iframe>
                    </div>
           </> )
        }
        </>
    )
}
export default RecipeInfo