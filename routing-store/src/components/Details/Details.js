import React from 'react';
import { Link } from 'react-router-dom';
import './Details.css';

export default function Details(props) {
    
    const food = [...props.food.healthy, ...props.food.notSoHealthy ]

    const singleItem = food.filter( (item,index) => {
        return  item.id === parseInt(props.params.id);
    })[0]
    console.log('singleItem', singleItem)

    return (
        <div className=''>
            <h3>Item: { singleItem.item }</h3>
            <h3>Price: { singleItem.price }</h3>
            <img src={singleItem.img} alt=""/>
            <br/><br/>
            <Link to='/shop'><button className='btn btn-default'>Back</button></Link>
        </div> 
    )
}