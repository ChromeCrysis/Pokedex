import React, { Component } from 'react'
import * as S from './style'

import navBrand from '../navbar/assets/pokedex.PNG'

export default class PokemonCard extends Component{
  render(){
  return (
    <S.NavBar className="navbar navbar-expand-lg fixed-top">
      <S.StyledLink to="/">
      <a className="navbar-brand"><S.NavBrand src={navBrand}/></a>
      </S.StyledLink>
    </S.NavBar>
  )
  }
}