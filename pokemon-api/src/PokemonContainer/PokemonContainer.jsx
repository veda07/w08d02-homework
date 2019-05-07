import React, { Component } from 'react';
import PokemonSearchForm from './PokemonSearchForm';


class PokemonContainer extends Component {
    constructor(){
        super();
        this.state={
            pokemon: []
        }
    }
    // componentDidMount(){
    //     this.searchPokemon({search: ""})
    // }
    searchPokemon = async (formData) =>{
       
        const searchUrl = `https://pokeapi.co/api/v2/pokemon/${formData.search}`
        const foundPokemon = await fetch(searchUrl);
        console.log(foundPokemon)
        const parsedResult = await foundPokemon.json();
        this.setState({
            pokemon: [...this.state.pokemon, parsedResult]
        })
        
    }

    render(){
        const pokemonList = this.state.pokemon.map((poke) => {
            return (
            <li key ={poke.url}>
                <h1>{poke.name}</h1>
                <h2>Species: {poke.species.name} Weight: {poke.weight} Height {poke.height} </h2>
            </li>
            )
        })
        return(
            <div>
                <h1>Eyes On The Prize</h1>
                <PokemonSearchForm searchPokemon={this.searchPokemon}/>
                <ul>{pokemonList}</ul>
            </div>
        )
    }
}

export default PokemonContainer; 