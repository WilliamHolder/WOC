import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/logo.png';
import {Switch, Route, Link} from 'react-router-dom'

export default class Header extends React.Component {

    render() {
        return (
            <nav className='navbar navbar-expand-md'>
                <Link to='/' className='navbar-brand mr-auto'>
                    <img src={logo} className='img-fluid' alt='logo'></img>
                </Link>
                <div className='searchbar'>
                    <form className='column search-form' onSubmit={this.handleSubmit}>
                        <div className='row player-inputs'>
                            <input
                            type='text'
                            id='username'
                            className='input-light'
                            placeholder='search'
                            autoComplete='off'
                            value=''
                            onChange={this.handleChange}
                            />
                            <button className='btn blue-btn search-btn'
                            type='submit'
                            disabled='username'
                            >
                                <FontAwesomeIcon icon={faSearch} size='2x' color='#fff'/>
                            </button>
                        </div>
                    </form>
                </div>
                

                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='.navbar-collapse' aria-controls='.navbar-collapse' aria-expanded='false' aria-label='Toggle navigation'>
                    <FontAwesomeIcon icon={faBars} size='2x' color='#36b0d3'/>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='nav navbar-nav ml-auto'>
                        <li className="nav-item">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Recipes
                            </a>
                            <div className="dropdown-menu ml-auto" aria-labelledby="navbarDropdownMenuLink">
                                <Link to='/recipes/11129/Chicken & chorizo rice pot' className='dropdown-item'>Chicken & chorizo rice pot</Link>
                                <Link to="/recipes/11130/Easiest ever paella" className='dropdown-item'>Easiest ever paella</Link>
                                <Link to="/recipes/11119/Easy chicken fajitas" className='dropdown-item'>Easy chicken fajitas</Link>
                                <Link to="/recipes/11121/Breakfast burrito" className='dropdown-item'>Breakfast burrito</Link>
                                <Link to="/recipes/11123/Shakshuka" className='dropdown-item'>Shakshuka</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
/*
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/products" component={ProductPage}/>
            </Switch>*/
/*
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#menus">Eat</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#menus">Drink</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#stay">Stay</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link book-button" href="#book-with-us">Book</a>
                        </li>
                    </ul>
                </div>
            </nav>*/
        )
    }

}