import React from "react";
import { Component } from "react";
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

class Gift extends Component {
    constructor(){
        super();

        this.state = {
            person: "",
            present:""
        }
    }
    render() {
        return (
            <div>

                <form>
                    <FormGroup>
                    <ControlLabel>Person</ControlLabel>
                        <FormControl className="input-person" onChange= {event => this.setState({person: event.target.value})} />

                        <ControlLabel>Present</ControlLabel>
                        <FormControl className="input-present" onChange= {event => this.setState({present: event.target.value})} />
                        
                    </FormGroup>
                </form>
                <button className="btn-remove" onClick={() => this.props.removeGift(this.props.gift.id)}>Remove gift</button>
            </div>
        );
    }
}

export default Gift;