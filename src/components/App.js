import React from "react";
import { Component } from "react";
import { Button } from "react-bootstrap"

class App extends Component {
    constructor() {
        super();

        this.state = {
            gifts: []
        }
    }

    addGift = () => {
        const { gifts } = this.state;

        gifts.length > 0 ? 
        gifts.push({ id: this.state.gifts.length + 1 }) :
        gifts.push({ id: 1 })
        
        this.setState ({
            gifts: gifts
        })
       

    }

    render() {
        return (
            <div>

                <h2>Gift Giver</h2>
                <div className="gift-list">
                {this.state.gifts.map(gift => {
                    return (
                     <div key={gift.id}></div>
                    )
                })}
                </div>
                <button className="btn-add" onClick={this.addGift}>Add Gift</button>
            </div>
        );
    }
}

export default App;