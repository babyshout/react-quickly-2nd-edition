import React, {Component} from 'react';

const status2icon = {
    draft: <DraftIcon />,
    published: <PublishedIcon />,
    deleted: <TrashIcon />
};

class PostStatus extends Component {
    render () {
        return status2icon[this.props.status];
    }
}

class PostStatusOr extends Component {
    render() {
        return status2icon[this.props.status] || status2icon.deleted;
    }
}