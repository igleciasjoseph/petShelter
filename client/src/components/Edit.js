import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';



class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: {
                name: "",
                type: "",
                description: "",
                skillOne: "",
                skillTwo: "",
                skillThree: ""
            },
            errors: {}
        }
    }

    componentDidMount = () => {
        axios.get(`/api/pets/${this.props.match.params._id}`)
            .then(res => {
                this.setState({ pet: res.data.pet });
            })
    }

    change = (key, e) => {
        let p = { ...this.state.pet };
        p[key] = e.target.value;
        this.setState({ pet: p });
    }

    update = (e) => {
        e.preventDefault();
        axios.put(`/api/pets/${this.state.pet._id}`, this.state.pet)
            .then(res => {
                if (res.data.errors) {
                    this.setState({ errors: res.data.errors.errors })
                } else {
                    this.props.history.push("/");
                }
            });
    }


    render() {
         return (
             <div>
                 <div className="border border-dark p-3 mb-5 mt-5">
                    <form onSubmit={this.update}>
                        <div className="form-group">
                            <label>Pet Name:</label>
                            <input type="text" className="form-control" onChange={this.change.bind(this, "name")} value={this.state.pet.name}/>
                            {
                                this.state.errors.name ?
                                    <p>{this.state.errors.name.message}</p> :
                                    ""
                            }
                        </div>
                        <div className="form-group">
                            <label>Pet Type:</label>
                            <input type="text" className="form-control" onChange={this.change.bind(this, "type")} value={this.state.pet.type}/>
                            {
                                this.state.errors.type ?
                                    <p>{this.state.errors.type.message}</p> :
                                    ""
                            }
                        </div>
                        <div className="form-group">
                            <label>Description:</label>
                            <input type="text" className="form-control" onChange={this.change.bind(this, "description")} value={this.state.pet.description}/>
                            {
                                this.state.errors.description ?
                                    <p>{this.state.errors.description.message}</p> :
                                    ""
                            }
                        </div>
                        <div>
                            <label>Skills:</label>
                            <div className="form-group">
                                <p>Skill 1:</p>
                                <input type="text" onChange={this.change.bind(this, "skillOne")} value={this.state.pet.skillOne}/>
                            </div>
                            <div className="form-group">
                                <p>Skill 2:</p>
                                <input type="text" onChange={this.change.bind(this, "skillTwo")} value={this.state.pet.skillTwo}/>
                            </div>
                            <div className="form-group">
                                <p>Skill 3:</p>
                                <input type="text" onChange={this.change.bind(this, "skillThree")} value={this.state.pet.skillThree}/>
                            </div>
                        </div>
                        <input type="submit" className="btn btn-success mr-3" />
                        <Link to={"/"} className="btn btn-danger">Cancel</Link>
                    </form>
                </div>
             </div>
         )
     }
 }
 
 export default Edit
 