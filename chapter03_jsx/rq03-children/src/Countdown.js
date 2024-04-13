import React from 'react'

class Countdown extends React.Component {
    render() {
        if (this.props.remaining ===0) {
            return null
        }
        const seconds = this.props.remaining % 60;
        const minutes = Math.floor(this.props.remaining / 60);
        return <p>{minutes} : {seconds}</p>;
    }
}