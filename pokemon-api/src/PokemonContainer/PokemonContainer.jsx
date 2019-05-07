import React, { Component } from 'react';
import PokemonSearchForm from './PokemonSearchForm';


class PokemonContainer extends Component {
    constructor(){
        super();
        this.state={
            pokemon: []
        }
    }
    componentDidMount(){
        this.searchPokemon({search: ""})
    }
    searchPokemon = async (formData) =>{
        console.log(formData)
        const searchUrl = (`https://pokeapi.co/api/v2/pokemon?search=${formData.search}`)
        const foundPokemon = await fetch(searchUrl);
        console.log(foundPokemon)
        const parsedResult = await foundPokemon.json();
        this.setState({
            pokemon: parsedResult.foundPokemon
        })
        
    }
    showPokemon = () =>{
        return this.state.pokemon.map((pokemon)=>
        <li key ={pokemon.url}>
        <h1>{pokemon.name}</h1>
        <h2>Species: {pokemon.species} Ability: {pokemon.ability} Item: {pokemon.item}</h2>
        
        </li>
        )
    }
    render(){
        const pokemonList = this.showPokemon; 
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