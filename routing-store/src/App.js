import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Logo from './components/Logo/Logo';
import Shop from './components/Shop/Shop';
import Details from './components/Details/Details';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
            foodItems: {
                healthy: [ 
                    {
                        id: 1,
                        item: 'Apples',
                        price: '$0.99/lb',
                        img: 'http://www.pngmart.com/files/1/Apple-Fruit-Transparent-PNG.png'
                    }, {
                        id: 2,
                        item: 'Peaches',
                        price: '$1.99/lb',
                        img: 'https://68.media.tumblr.com/30676374459925a38b2351b7e0cffb93/tumblr_n3dmvoC1b81qd2bluo1_500.png'
                    }, {
                        id: 3,
                        item: 'Carrots',
                        price: '$0.68/lb',
                        img: 'http://earthfreshfoods.com//wp-content/uploads/2015/12/img6.png'
                    } ],
                notSoHealthy: [
                    {
                        id: 4,
                        item: 'Ice cream',
                        price: '$4.99',
                        img: 'http://www.freeiconspng.com/uploads/ice-cream-png-27.png'
                    }, {
                        id: 5,
                        item: 'Donuts',
                        price: '$0.99 each',
                        img: 'https://www.krispykreme.co.uk/media/krispykreme/doughnutslider/ourvarieties_3q_chocsprinkle.jpg'
                    }, {
                        id: 6,
                        item: 'Root beer',
                        price: '$1.99',
                        img: 'https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=25193394'
                    }
                ]
        } 
    }
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <Route path='/' component={ Logo } exact />
            <Route path='/shop' render={ ()=> <Shop food={this.state.foodItems} />} />
            <Route path='/details/:id' render={ (props)=> <Details 
                                                            food={ this.state.foodItems } 
                                                            params={ props.match.params }/>} />
          </div> 
        </HashRouter>  
      </div>
    );
  }
}

export default App;
