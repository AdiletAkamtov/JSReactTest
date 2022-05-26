import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastname: '',
            salary: '',
            age: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
            [e.target.lastname] : e.target.value, 
            [e.target.age] : e.target.value       
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary ,this.state.lastname,this.state.age);
        this.setState({
            name: '',
            lastname: '',
            salary: '',
            age: ''

        })
    }

    render() {
        const {name, salary, lastname,age} = this.state;

        return (
            <div className="app-add-form">
                <h3 className='app-add-title'>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Имя"
                        name="name"
                        value={name} 
                        onChange={this.onValueChange}/>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Фамилия"
                        name="lastname"
                        value={lastname} 
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Возраст"
                        name="age"
                        value={age} 
                        onChange={this.onValueChange}/>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Скилы"
                        name="salary"
                        value={salary} 
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;