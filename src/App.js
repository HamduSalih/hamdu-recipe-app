import React from 'react';
import './App.css';
import Form from './components/Form.js';
import Recipes from './components/Recipes';

const API_KEY = 'yourApiKeyFromSpoonacuclar';

class App extends React.Component {
state={
  recipes:[]
}

  getRecipe = async (e) => {
    const recipeName = e.target.recipeName.value;
    e.preventDefault();

    const api_call = await fetch(`https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${recipeName}&number=10`);
    const data = await api_call.json();
    this.setState({ recipes: data.results });
    console.log(this.state.recipes);
  }

  componentDidMount = () => {
    const json = localStorage.getItem('recipes');
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  }

  componentDidUpdate = () => {
    //called when state is changed
    const recipes =  JSON.stringify(this.state.recipes);
    localStorage.setItem('recipes', recipes);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className='App-title'>Hamd Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
