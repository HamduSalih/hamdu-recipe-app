import React from 'react';
import { Link } from 'react-router-dom';

const API_KEY = 'yourApiKeyFromSponnacular.com';
const recipe_url = 'https://spoonacular.com/recipeImages/';

class Recipe extends React.Component{
    state={
        activeRecipe:[]
    }

    componentDidMount = async() => {
        const recipe_id = this.props.location.state.recipe_id;
        const req = await fetch(`https://api.spoonacular.com/recipes/${recipe_id}/information?apiKey=${API_KEY}`);
        const res = await req.json();
        
        this.setState({ activeRecipe: res });
        console.log(this.state.activeRecipe);
    }
    render(){
        console.log(this.props);
        const recipe = this.state.activeRecipe;
        return(
            <div className='container'>
                {   this.state.activeRecipe.length !== 0 &&
                    <div className='active-recipe'>
                        <img className='active-recipe__img' 
                            src={recipe_url + recipe.image} 
                            alt={recipe.title} />
                        <h3 className='active-recipe__title'>{recipe.title}</h3>
                        <h4 className='active-recipe__publisher'>
                            Credit: <span>{recipe.sourceName}</span>
                        </h4>
                        <p className='active-recipe__website'>Website:
                            <a href={recipe.sourceUrl}><span>{recipe.sourceName}</span></a>
                        </p>
                        <button 
                            className='active-recipe__button'>
                               <Link to='/'>Home</Link>
                        </button>
                    </div>    
                }    
            </div>
            
        );
    }
}
    

export default Recipe;