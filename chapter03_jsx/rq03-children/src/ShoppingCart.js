import React, {Component} from 'react';

class ShoppingCart extends Component {
    render() {
        return (
            <aside>
                <h1>Shopping Cart</h1>
                {this.props.items.length === 0 ? (
                    <p>your cart is empty. go buy something</p>
                ) : (
                    <CartItems items={this.props.items} />
                )}
            </aside>
        )
    }
}