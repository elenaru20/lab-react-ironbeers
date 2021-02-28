import React, { Component } from 'react'
import axios from 'axios';

export default class SingleBeer extends Component {
    state = {
        singleBeer: null
    }

    componentDidMount() {
        const id = this.props.match.params.beerId;
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then(singleBeerResponse => {
                console.log('single Beer', singleBeerResponse);
                this.setState({
                    singleBeer: singleBeerResponse.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        if (this.state.singleBeer === null) {
            return <h3>Loading...</h3>
        }
        return (
            <div>
                <h1>Beer Info</h1>
                <div className="beerContainer">
                    <img style={{width:"50px", margin:"50px"}} src={this.state.singleBeer.image_url} alt="beer"/>
                    <div>
                        <h3>{this.state.singleBeer.name}</h3>
                        <h2>{this.state.singleBeer.tagline}</h2>
                        <p>{this.state.singleBeer.first_brewed}</p>
                        <p>{this.state.singleBeer.attenuation_level}</p>
                        <p>{this.state.singleBeer.description}</p>
                        <p>Created by: {this.state.singleBeer.contributed_by}</p>
                    </div>
                </div>
            </div>
        )
    }
}