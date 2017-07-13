import React, { Component } from 'react';
import './Form.css'

export default class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employeeName: '',
            dateHired: '',
            jobTitle: 'cook'
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onJobTitleChange = this.onJobTitleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            employeeName: e.target.value
        })
    }

    onDateChange(e) {
        this.setState({
            dateHired: e.target.value
        })
    }

    onJobTitleChange(e) {
        this.setState({
            jobTitle: e.target.value
        })
    }

    onFormSubmit(e) {
        e.preventDefault();
        let { employeeName, dateHired, jobTitle } = this.state
        this.props.addEmployee(employeeName, dateHired, jobTitle);
    }

    render() {
        return (
        <div className=''>
            <br/>
            <p>Joe has hired some new employees, but he keeps all of thier information on paper.</p>
            <p>Help Joe enter his employees into this app that keeps track of employee info.</p>
            <form onSubmit={ this.onFormSubmit }>
                <div className="form-group">
                    <label className="col-sm-2 control-label form-space">Name</label>
                    <div className="col-sm-10">
                    <input 
                        value={ this.state.employeeName }
                        onChange={ this.handleInputChange }
                        className="form-control form-space" 
                        placeholder="Name"
                        required />
                    </div>
                </div>
                <div className="form-group form-space">
                    <label className="col-sm-2 control-label">Date hired</label>
                    <div className="col-sm-10">
                    <input
                        onChange={ this.onDateChange } 
                        className="form-control" 
                        type='date'
                        required />
                    </div>
                </div>
                <div className="form-group form-space">
                    <div className="col-sm-10">
                    <select
                        onChange={ this.onJobTitleChange } 
                        className='form-space'>
                        <option value="cook">Cook</option>
                        <option value="server">Server</option>
                        <option value="manager">Manager</option>
                        <option value="host">Host</option>
                        <option value="busser">Busser</option>
                    </select>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-success">Save</button>
                    </div>
                </div>
            </form>
        </div> 
    )
    }
}