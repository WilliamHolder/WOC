import React from 'react';
import PropTypes from 'prop-types'
import { FaClock } from 'react-fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUtensils, faHamburger } from '@fortawesome/free-solid-svg-icons'
import RecipeHeader from './RecipeHeader'
import {fetchIngredients, fetchRecipe, fetchNutrition, fetchMethod} from '../utils/api'
import {fetchRecipes, fetchRecipesByTag} from '../utils/api';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
          recipeList: null,
          loading: true
      }
      
      this.updateRecipes = this.updateRecipes.bind(this)
    }
    
  componentDidMount () {
    console.log("mounted")
    this.updateRecipes();
  }

  updateRecipes() {
    this.setState({
        error: null,
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
      const {recipeList, loading} = this.state;

      if(loading) {
          return null;
      }
      
      console.log(recipeList)
      
      return (
        <React.Fragment>
            <section className="homepage-header">
                <h1 className="text-center">Recipes</h1>
            </section>
            <section className="homepage">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm">
                            <div className="homepage-section">
                                <h4>British</h4>
                                <ul>
                                    {Object.keys(recipeList).map((recipe, i) => (
                                        recipeList[recipe].tag == "British" &&
                                        (<li key={i}>
                                            <Link to={`/recipes/${recipeList[recipe].recipe_id}/${recipeList[recipe].name}`}>
                                                {recipeList[recipe].name}
                                            </Link>
                                        </li>
                                        )
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="homepage-section">
                                <h4>Mexican</h4>
                                <ul>
                                    {Object.keys(recipeList).map((recipe, i) => (
                                        recipeList[recipe].tag == "Mexican" &&
                                        (<li key={i}>
                                            <Link to={`/recipes/${recipeList[recipe].recipe_id}/${recipeList[recipe].name}`}>
                                                {recipeList[recipe].name}
                                            </Link>
                                        </li>
                                        )
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="homepage-section">
                                <h4>Spanish</h4>
                                <ul>
                                    {Object.keys(recipeList).map((recipe, i) => (
                                        recipeList[recipe].tag == "Spanish" &&
                                        (<li key={i}>
                                            <Link to={`/recipes/${recipeList[recipe].recipe_id}/${recipeList[recipe].name}`}>
                                                {recipeList[recipe].name}
                                            </Link>
                                        </li>
                                        )
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="homepage-section">
                                <h4>Moroccan</h4>
                                <ul>
                                    {Object.keys(recipeList).map((recipe, i) => (
                                        recipeList[recipe].tag == "Moroccan" &&
                                        (<li key={i}>
                                            <Link to={`/recipes/${recipeList[recipe].recipe_id}/${recipeList[recipe].name}`}>
                                                {recipeList[recipe].name}
                                            </Link>
                                        </li>
                                        )
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="homepage-recipes">
                <div className="container-fluid">
                        <div className="row">
                            {Object.keys(recipeList).map((recipe, i) => (
                                <div className="col-sm-3" key={i}>
                                    <div className="homepage-recipe-section-item">
                                        <div className="row">
                                            <Link to={`/recipes/${recipeList[recipe].recipe_id}/${recipeList[recipe].name}`}>
                                                <img src={recipeList[recipe].image} className="img-fluid recipe-page-image"/>
                                            </Link>
                                        </div>
                                        <div className="row">
                                            <p>
                                                <span className="recipe-page-name">
                                                    <Link to={`/recipes/${recipeList[recipe].recipe_id}/${recipeList[recipe].name}`}>
                                                        {recipeList[recipe].name}
                                                    </Link>
                                                </span>
                                                <span className="recipe-page-author">Author: {recipeList[recipe].author}</span>
                                                <span className="recipe-page-difficulty">Difficulty: {recipeList[recipe].difficulty}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </React.Fragment>
      )
  }
}