import React from 'react';

class UserName extends React.Component {
    render() {
        return (
            <p>
                {this.props.userName}
                {this.props.isVerified && <Checkmark />}
            </p>
        )
    }
}