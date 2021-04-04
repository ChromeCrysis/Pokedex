//Imports do react ou libs
import React, { Component } from 'react'

//Import de components
import * as S from '../pokemon/style'

//Imports de imagens do projeto
import Spinner from '../pokemon/assets/spinner.gif'

import PokeIcon from '../pokemon/assets/pokeball_icon.png'

export default class PokemonCard extends Component{

  state = {
    name: '',
    imageUrl: '',
    pokemonIndex: '',
    imageLoad: true,
    toManyRequests: false
  }

  componentDidMount(){
    const {name, url} = this.props
    const pokemonIndex = url.split('/')[url.split('/').length -2]
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`

    this.setState({name,
      imageUrl,
      pokemonIndex
    })
  }

  render(){
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <S.Card className="card">
          <div className="card-header">
            <div className="row">
              <h5>#{this.state.pokemonIndex}</h5>
              <img id="PokeIcon" src={PokeIcon}/>
            </div>
          </div>
          {this.state.imageLoad ? (
            <img className="mx-auto" src={Spinner} style={{width: '5em', height: '5em'}}></img>
          ): null}

          <S.Sprite  className="card-card-img-top rounded mx-auto mt-2"
              onLoad={() => this.setState({
                imageLoad: false
              })}
              onError={() => this.setState({
                toManyRequests: true
              })}
              src={this.state.imageUrl}
              style={
                this.state.toManyRequests ? {display: 'none'} :
                this.state.imageLoad ? null : {display: 'block'}
              }/>
          
          {this.state.toManyRequests ? (<h6 className="mx-auto">
            <span className="badge badge-danger mt-2">Muitas requisições</span>
          </h6>): null}
          <div className="card-body mx-auto">
            <div className="card-tittle">
              <h6>{this.state.name.toLowerCase().split(" ").map(
                letter => letter.charAt(0).toUpperCase() + letter.substring(1)
                ).join(' ')
                }</h6>
            </div>
          </div>
        </S.Card>
      </div>
    )
  }
}