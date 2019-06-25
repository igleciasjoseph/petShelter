import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: {
                name: "",
                type: "",
                description: "",
                skillOne: "",
                skillTwo: "",
                skillThree: "",
                likes: 0
            },
            errors: {}
        }
    }

    change = (key, e) => {
        let p = { ...this.state.pet };
        p[key] = e.target.value;
        this.setState({ pet: p });
    }

    create = (e) => {
        e.preventDefault();
        axios.post("/api/create", this.state.pet)
        .then(res => {
            if(res.data.errors) {
                console.log(res.data.errors);
                this.setState({errors: res.data.errors.errors});
            } else {
                this.props.history.push("/");
            }
        });
    }



    render() {
        return (
            <div>
                <h1 className="mb-5 mt-5">Know of a pet needing a home?</h1>
                <div className="border border-dark p-3">
                    <form onSubmit={this.create}>
                        <div className="form-group">
                            <label>Pet Name:</label>
                            <input type="text" className="form-control" onChange={this.change.bind(this, "name")} />
                            {
                                this.state.errors.name ?
                                    <p>{this.state.errors.name.message}</p> : 
                                    ""
                            }
                        </div>
                        <div className="form-group">
                            <label>Pet Type:</label>
                            <input type="text" className="form-control" onChange={this.change.bind(this, "type")} />
                            {
                                this.state.errors.type ?
                                    <p>{this.state.errors.type.message}</p> : 
                                    ""
                            }
                        </div>
                        <div className="form-group">
                            <label>Description:</label>
                            <input type="text" className="form-control" onChange={this.change.bind(this, "description")} />
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
                                <input type="text" onChange={this.change.bind(this, "skillOne")} />
                            </div>
                            <div className="form-group">
                                <p>Skill 2:</p>
                                <input type="text" onChange={this.change.bind(this, "skillTwo")} />
                            </div>
                            <div className="form-group">
                                <p>Skill 3:</p>
                                <input type="text" onChange={this.change.bind(this, "skillThree")} />
                            </div>
                        </div>
                        <input type="submit" className="btn btn-success mr-3"/>
                        <Link to={"/"} className="btn btn-danger">Cancel</Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form
