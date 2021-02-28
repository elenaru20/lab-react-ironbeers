import React from 'react';
import {
  Link
} from "react-router-dom";
import axios from 'axios';
import '../App.css';
//import { uuid } from 'uuidv4';

class Beers extends React.Component {

    state = {
        listOfBeers: []
      };

    componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((allBeers) => {
        console.log('list of the beers', allBeers)
        this.setState({ listOfBeers: allBeers.data });
      })
      .catch((err) => console.log(err));
    }

    render() {
        if (this.state.listOfBeers.length === 0) return <h3>Loading...</h3>
        return (
            <div className="App">
                <header className="App-header" style={{backgroundColor:"white"}}>
                    <h1>All Beers</h1>
                    {this.state.listOfBeers.map(beer => {
                        return (
                            <Link to={`/beers/${beer._id}`} key={beer._id} className="beerContainer">
                                <img style={{width:"50px", margin:"50px"}} src={beer.image_url} alt="beer"/>
                                <div>
                                    <h3>{beer.name}</h3>
                                    <p>{beer.tagline}</p>
                                    <p>Created by: {beer.contributed_by}</p>
                                </div>
                            </Link>
                        )
                    })}
                </header>
            </div>
        );
    }
}

export default Beers;