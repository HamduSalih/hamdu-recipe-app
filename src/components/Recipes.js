import React from 'react';
import { Link } from 'react-router-dom';


const base_url = 'https://spoonacular.com/recipeImages/';

const Recipes = (props) => (
    <div className='container'>
       <div className='row'>
        { props.recipes.map((recipe) => {
            return (
                <div key={recipe.id} className='col-md-4' style={{ marginBottom:'2rem' }}>
                    <div className='recipes__box'>
                        <img 
                            className='recipe__box-img'
                            src={base_url + recipe.imageUrls[0]} 
                            alt={recipe.title} />
                        <div className='recipe__text'>
                            <h5 className='recipes__title'>
                                {
                                    recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...`
                                }
                            </h5>
                            <p className='recipes__subtitle'>Duration: <span>
                                { recipe.readyInMinutes }
                                </span></p>
                        </div>
                        <button className='recipe_buttons'>
                            <Link to={{ 
                                pathname:`/recipe/${recipe.id}`,
                                state:{ recipe_id:recipe.id }}}>View Recipe</Link>
                        </button> 
                    </div>
                </div>
            );
            }) }
       </div>
    </div>
)

export default Recipes;