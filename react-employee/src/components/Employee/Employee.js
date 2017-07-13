import React from 'react';
import './Employee.css'

export default function Employee(props) {
    return (
        <div className=''>
            <hr/>
            <p>Name: { props.employeeInfo.name }</p>
            <p>Current position: { props.employeeInfo.title }</p>
            <p>Hire date: { props.employeeInfo.hireDate }</p>
        </div> 
    )
}