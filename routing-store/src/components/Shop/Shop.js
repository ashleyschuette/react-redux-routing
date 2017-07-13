import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showHealthy: true
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle(show) {
        this.setState({
            showHealthy: show
        })
    }

    render() {

        const healthy = this.props.food.healthy.map( (item, i) => {
            return (
                <div key={ i }>
                    <p>Item: { item.item }</p>
                    <Link to={`/details/${item.id}`}>
                        <button 
                        className='btn btn-success btn-sm'
                        >Check current price for { item.item }</button>
                    </Link>
                </div> 
            )
        })

        const notSoHealthy = this.props.food.notSoHealthy.map ( (item, i) => {
            return (
                <div key={ i }>
                    <p>Item: { item.item }</p>
                    <Link to={`/details/${item.id}`}>
                        <button 
                        className='btn btn-success btn-sm'
                        >Check current price for { item.item }</button>
                    </Link>
                </div> 
            )
        })
        return (
            <div>
                <h1>Check out our amazing selection of food items!</h1>
                <div>
                    <button
                        onClick={ ()=> this.toggle(true) } 
                        className={ this.state.showHealthy ? 'btn btn-info' : 'btn btn-default' }
                        >Boring</button>
                    <button 
                        onClick={ ()=> this.toggle(false) }
                        className={ this.state.showHealthy ? 'btn btn-default' : 'btn btn-info' }
                        >Fun</button>
                </div> 
                <br/>
                { this.state.showHealthy ? healthy : notSoHealthy }
            </div> 
        )
    }
}