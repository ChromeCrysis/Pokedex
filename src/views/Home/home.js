import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from '../../components/navbar/navbar'
import PokemonList from '../../components/pokemon/pokemonList'

import Background from '../Home/assets/pokedex_background.jpg'

import * as S from '../Home/style'

function Home() {
    return (
        <S.Canvas style={{background: `url(${Background})`}}>
            <S.Container>
                <Navbar/>
                <PokemonList/>
            </S.Container>
        </S.Canvas>
    )
  }
  
  export default Home;