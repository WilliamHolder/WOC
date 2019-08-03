import React from 'react';
import PropTypes from 'prop-types'
import { FaClock } from 'react-fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUtensils, faHamburger } from '@fortawesome/free-solid-svg-icons'
import RecipeHeader from './RecipeHeader'
import {fetchIngredients, fetchRecipe, fetchNutrition, fetchMethod} from '../utils/api'

export default class Recipe extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
        //id: '11111',
        id: this.props.id,
        error: null,
        ingredientList: null,
        loading: true,
        nutrionalValuesList: null,
        recipeInfoList: [],
        method: []
      }
    }
    
  componentDidMount () {
    console.log("mounted")
    
    Promise.all([ fetchIngredients(this.state.id), fetchRecipe(this.state.id), fetchMethod(this.state.id)]).then((responses) => {
      console.log("Inside Promise")  
      console.log(responses[0])
      console.log(responses[1][0])
      console.log(responses[2])
        this.setState({
            ingredientList: responses[0],
            recipeInfoList: responses[1][0],
            method: responses[2],
            loading: false
        });
    });
  }

  render() {
      const {ingredientList, loading, recipeInfoList, method} = this.state;

      {if(this.state.loading) return null}

      return (
          <React.Fragment>
            <div className="container-fluid recipe-header">
              {!this.state.loading &&
              <RecipeHeader
                recipeInfo={recipeInfoList}
              />}
            </div>
            <div className="container-fluid recipe-main">
              <div className="section">
                <div className="row recipe-method-section">
                  <div className="col-sm">
                    <div className="ingredients">
                      <h2>Ingredients</h2>
                      <hr/>
                      <div className="ingredient-list">
                      {!this.state.loading &&
                        <ul>
                        {ingredientList.map((ingredient) => (
                          <li key={ingredient.ingredient_name}>
                            <span>{ingredient.ingredient_name}</span>
                          </li>
                        ))}
                        </ul>}
                        <button type="button" className="shopping-list-btn btn blue-btn">
                            Add to shopping list
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="method">
                      <h2>Method</h2>
                      <hr/>
                      {!this.state.loading &&
                      <ol className='flex-center'>
                        {method.map((methodStep) => (
                          <li key={methodStep.stepNo}>
                            <p>
                              {methodStep.stepDescription}
                            </p>
                          </li>
                        ))}
                      </ol>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </React.Fragment>
      )
  }
}

Recipe.propTypes = {
  id: PropTypes.number.isRequired
}