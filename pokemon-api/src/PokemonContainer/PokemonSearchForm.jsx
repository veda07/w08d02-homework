import React, { Component } from 'react';

class PokemonSearchForm extends Component {
    constructor(){
        super();
        this.state={
            search: " "
        }
    }
    handleChange = (e) =>{
        e.preventDefault();
        this.props.searchPokemon(this.state);

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return(
            <div>
                    <form onSubmit={this.handleSubmit}>
                    Pokemon <input onChange={this.handleChange}type="text" name="search"/>
                    <input type="submit"/>
                    </form>
            </div>
        )
    }
}



export default PokemonSearchForm;