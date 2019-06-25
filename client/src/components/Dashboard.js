import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pets: []
        }
    }

    sort(arr) {
        arr.sort(function (a, b) {
            var typeA = a.type.toUpperCase();
            var typeB = b.type.toUpperCase();
            if (typeA < typeB) {
                return -1;
            }
            if (typeA > typeB) {
                return 1;
            }
            return 0;
        });
        return arr;
    }

    componentDidMount = () => {
        axios.get('/api/pets')
            .then(res => {
                this.setState({pets: this.sort(res.data.pets)});
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
            <div>
                <h1 className="mb-5 mt-5">These pets are looking for a home!</h1>
                <a href="/new">Add a pet to the shelter</a>
                <table className="table table-hover">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.pets.map( pet => 
                                <tr key={pet._id}>
                                    <td>{pet.name}</td>
                                    <td>{pet.type}</td>
                                    <td>
                                        <Link to={`/pet/${pet._id}`} className="btn btn-outline-primary mr-3">Details</Link>
                                        <Link to={`/pet/${pet._id}/edit`}className="btn btn-outline-success">Edit</Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Dashboard
