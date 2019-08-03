import React from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './components/Recipe';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import {Link, Route, Switch, BrowserRouter} from 'react-router-dom';
import {fetchRecipes} from './utils/api';

class App extends React.Component {
    constructor(props) {
        super(props)
  
        this.state = {
            recipeList: null,
            loading: true
        }

        this.updateRecipeRoutes = this.updateRecipeRoutes.bind(this)
    }

    componentDidMount () {
        this.updateRecipeRoutes()
    }

    updateRecipeRoutes() {
        this.setState({
            recipeList: null
        })

        if(!this.state.recipeList) {
            fetchRecipes()
                .then((data) => {
                    this.setState(({recipeList}) => ({
                        recipeList: data,
                        loading: false
                    }))
                })
            }
    }

    render() {
        return (
            <BrowserRouter>
                <div className='react-container'>
                    <Header />
                        <Route exact path="/" render={(props) => <Home {...props}/>}/>
                        {!this.state.loading &&
                            <Switch>
                                {this.state.recipeList.map((recipe) => (
                                    <Route path={`/recipes/${recipe.recipe_id}/${recipe.name}`} render={(props) => <Recipe {...props} id={recipe.recipe_id}/>}/>
                                ))}
                            </Switch>
                        }
                    <Footer />

                </div>
            </BrowserRouter>
        )
    }
}

export default App;
