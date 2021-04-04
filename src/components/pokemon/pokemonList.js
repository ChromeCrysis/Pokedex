import React, { Component } from 'react';
import axios from 'axios';

import PokemonCard from '../pokemon/pokemonCard';

import Spinner from '../pokemon/assets/spinner.gif'


export default class PokemonList extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon/',
    pokemon: null,
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data['results'] });
  }

  render() {
    return (
      <div>
        {this.state.pokemon ? (
          <div className="container">
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
          </div>
        ) : (
          <div className="mx-auto center">
            <img src={Spinner} style={{width: '20em', height: '20em'}}/>
          </div>
        )}
      </div>
    );
  }
}