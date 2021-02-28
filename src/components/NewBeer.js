import React, { Component } from 'react'
import axios from 'axios';

export default class NewBeer extends Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewer_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ 
            [name]: value 
        });
      };
    
    handleSubmit = (event) => {
        event.preventDefault();
        const {
            name,
            tagline,
            description,
            first_brewed,
            brewer_tips,
            attenuation_level,
            contributed_by,
        } = this.state;

        axios
            .post('https://ih-beers-api2.herokuapp.com/beers/new', {
                name,
                tagline,
                description,
                first_brewed,
                brewer_tips,
                attenuation_level,
                contributed_by,
            })
            .then((data) => {
                console.log('new beer created', data);
                this.setState({ 
                    name: '',
                    tagline: '',
                    description: '',
                    first_brewed: '',
                    brewer_tips: '',
                    attenuation_level: 0,
                    contributed_by: '' 
                });
            })
            .catch((err) => console.log(err));
    };
    
    
    render() {

        return (
            <div>
                <h1>Add a new beer</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                        id="name"
                    />
                    

                    <label htmlFor="tagline">Tagline</label>
                    <input
                        name="tagline"
                        type="text"
                        value={this.state.tagline}
                        onChange={this.handleChange}
                        id="tagline"
                    />
                    

                    <label htmlFor="description">Description</label>
                    <input
                        name="description"
                        type="text"
                        value={this.state.description}
                        onChange={this.handleChange}
                        id="description"
                    />
                    

                    <label htmlFor="first_brewed">First Brewed </label>
                    <input
                        name="first_brewed"
                        type="text"
                        value={this.state.first_brewed}
                        onChange={this.handleChange}
                        id="first_brewed"
                    />
                    

                    <label htmlFor="brewer_tips">Brewer Tips</label>
                    <input
                        name="brewer_tips"
                        type="text"
                        value={this.state.brewer_tips}
                        onChange={this.handleChange}
                        id="brewer_tips"
                    />
                    

                    <label htmlFor="attenuation_level">Attenuation Level</label>
                    <input
                        name="attenuation_level"
                        type="number"
                        value={this.state.attenuation_level}
                        onChange={this.handleChange}
                        id="attenuation_level"
                    />
                    

                    <label htmlFor="contributed_by">Contributed By</label>
                    <input
                        name="contributed_by"
                        type="text"
                        value={this.state.contributed_by}
                        onChange={this.handleChange}
                        id="contributed_by"
                    />
                    

                    <button>Add New!</button>
                </form>
            </div>
        )
    }
}