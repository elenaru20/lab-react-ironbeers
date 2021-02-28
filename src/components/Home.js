import React from 'react';

import {
  Link
} from "react-router-dom";

class Home extends React.Component {


    render() {
        return (
        <div>
            <div>
                <img src="./assets/beers.png" alt="all-beers" />
                <h1>
                    <Link to="/beers">
                    All Beers
                    </Link>
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At 
                vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            </div>
            <div>
                <img src="./assets/random-beer.png" alt="beer" />
                <h1>
                    <Link to="/random">
                    Random Beer
                    </Link>
                </h1>
                
                <p>
                Stet clita kasd gubergren, no sea takimata sanctus est 
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur 
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore 
                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit 
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita 
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                </p>
            
            </div>
            <div>
                <img src="./assets/new-beer.png" alt="new-beer" />
                <h1>
                    <Link to="/new-beer">
                    New Beer
                    </Link>
                </h1>
                <p>
                Stet clita kasd gubergren, no sea takimata sanctus est 
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur 
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore 
                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit 
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita 
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            </div>
      </div>
        );
    }
}

export default Home;