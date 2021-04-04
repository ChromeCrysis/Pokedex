import React, { Component } from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

import * as S from '../Home/style'

import Navbar from '../../components/navbar/navbar'
import PokemonList from '../../components/pokemon/pokemonList'
import Pokemon from '../../components/pokemon/pokemon'
 
import Background from '../Home/assets/pokedex_background.jpg'



export default class Home extends Component{
    render(){
        return (
            <Router>
                <S.Canvas style={{background: `url(${Background})`}}>
                    <S.Container>
                        <Navbar/>
                        <Switch>
                            <Route exact path="/" component={PokemonList}/>
                            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon}/>
                        </Switch>
                    </S.Container>
                </S.Canvas>
            </Router>
        )
    }
  }