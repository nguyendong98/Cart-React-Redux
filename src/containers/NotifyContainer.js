import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notify from '../components/Notify';

class NotifyContainer extends Component {
    render() {
        var {message} = this.props
        return (
            <Notify message={message} />
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        message: state.message
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch()
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NotifyContainer)