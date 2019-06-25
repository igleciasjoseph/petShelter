import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class Display extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pet: {},
            liked: false
        }
    }

    componentDidMount = () => {
        axios.get(`/api/pets/${this.props.match.params._id}`)
            .then(res => {
                this.setState({
                    pet: res.data.pet
                });
            })
    }

    like = () => {
        let st = { ...this.state }
        st.liked = true;
        st.pet.likes += 1;
        this.setState(st);
        axios.put(`/api/pets/${this.props.match.params._id}`, this.state.pet)
            .then(res => {
                this.componentDidMount();
            })
    }

    adopt = () => {
        axios.delete(`/api/pets/${this.props.match.params._id}`)
            .then(res => {
                if (res.data.errors) {
                    console.log(res.data.errors.errors);
                } else {
                    this.props.history.push("/");
                }
            });
    }

    render() {
        return (
            <div>
                <h1 className="mt-5 mb-5">Pet Shelter</h1>
                <h1 className="mb-5">Details about {this.state.pet.name}</h1>
                <Link to={"/"} className="btn btn-primary mb-5">Home</Link>
                <div>
                    <div>
                        <h3>Pet Type:</h3> <p>{this.state.pet.type}</p>
                    </div>
                    <div>
                        <h3>Description:</h3> <p>{this.state.pet.description}</p>
                    </div>
                    <div>
                        <h3>Skills:</h3>
                        <div>
                            <li>{this.state.pet.skillOne}</li>
                            <li>{this.state.pet.skillTwo}</li>
                            <li>{this.state.pet.skillThree}</li>
                        </div>
                    </div>
                    <div className="mb-5">
                        <h3>Likes:</h3>
                        <p className="mb-5">{this.state.pet.likes}</p>
                        {this.state.liked ?
                            <button onClick={this.like.bind(this)} className="btn btn-dark" disabled>Like this pet</button> :
                            <button onClick={this.like.bind(this)} className="btn btn-info">Like this pet</button>
                        }
                    </div>
                    <div>
                        <button onClick={this.adopt.bind(this)} className="btn btn-warning">Adopt this pet</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Display