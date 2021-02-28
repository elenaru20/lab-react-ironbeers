import React, { Component } from 'react'
import axios from 'axios';

export default class RandomBeer extends Component {
    state = {
        randomBeer: null
    }

    componentDidMount() {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(singleBeerResponse => {
                console.log('single random Beer', singleBeerResponse);
                this.setState({
                    randomBeer: singleBeerResponse.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }


    render() {
        if (this.state.randomBeer === null) {
            return <h3>Loading...</h3>
        }
        return (
            <div>
                <h1>Random Beer Info</h1>
                <div className="beerContainer">
                    <img style={{width:"50px", margin:"50px"}} src={this.state.randomBeer.image_url} alt="beer"/>
                    <div>
                        <h3>{this.state.randomBeer.name}</h3>
                        <h2>{this.state.randomBeer.tagline}</h2>
                        <p>{this.state.randomBeer.first_brewed}</p>
                        <p>{this.state.randomBeer.attenuation_level}</p>
                        <p>{this.state.randomBeer.description}</p>
                        <p>Created by: {this.state.randomBeer.contributed_by}</p>
                    </div>
                </div>
            </div>
        )
    }
}