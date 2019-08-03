import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUtensils, faHamburger } from '@fortawesome/free-solid-svg-icons'

export default function RecipeHeader ({recipeInfo, nutritionalInfo}) {

    return (
        <div className="header section">
            <div className="row">
                <div className="col-sm-4">
                    <img src={recipeInfo.image} className="img-fluid"/>
                </div>
                <div className="col-sm-8">
                    <h2>{recipeInfo.name}</h2>
                    <p className="author">Recipe by {recipeInfo.author}</p>
                    <div className="row uppercase recipe-info">
                        <div className="col-sm">
                            <FontAwesomeIcon icon={faClock} size="2x" color='#36b0d3'/>
                            <p>
                                {console.log(recipeInfo.preptime)}
                                Prep: {recipeInfo.preptime} mins<br></br>
                                Cook: {recipeInfo.cooktime} mins
                            </p>
                        </div>
                        <div className="col-sm">
                            <FontAwesomeIcon icon={faHamburger} size="2x" color='#36b0d3'/>
                            <p>{recipeInfo.difficulty}</p>
                        </div>
                        <div className="col-sm">
                            <FontAwesomeIcon icon={faUtensils} size="2x" color='#36b0d3'/>
                            <p>Serves {recipeInfo.servings}</p>
                        </div>
                    </div>
                    <p className="description">{recipeInfo.description}</p>
                    {0 == 1 &&
                    <div className="nutrition">
                        <div className="row">
                            {Object.keys(nutritionalInfo).map((nutritionalValue, i) => (
                                <div className="col-sm nutrition-item" key={i}>
                                    <div className="nutrition-name">
                                        <span>{nutritionalValue}</span>
                                    </div>
                                    <div className="nutrition-value">
                                        <span>{nutritionalInfo[nutritionalValue]}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

RecipeHeader.propTypes = {
    recipeInfo: PropTypes.object.isRequired
}