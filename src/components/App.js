import React from "react";
import { Component } from "react";
import { Button } from "react-bootstrap"
import Gift from './Gift'

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

    removeGift = (id) => {
        const gifts = this.state.gifts.filter(gift => gift.id !== id)
        this.setState({gifts})
    }



    render() {
        return (
            <div>

                <h2>Gift Giver</h2>
                <div className="gift-list">
                {this.state.gifts.map(gift => {
                    return (
                     <Gift key={gift.id}
                     gift = {gift}
                     removeGift={this.removeGift}  />
                    )
                })}
                </div>
                <button className="btn-add" onClick={this.addGift}>Add Gift</button>
            </div>
        );
    }
}

export default App;