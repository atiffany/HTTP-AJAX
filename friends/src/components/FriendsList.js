import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, addFriends } from '../actions';
import Friends from './Friends';
//import NewEntry from './NewEntry';

class FriendsList extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: '',
        }
        this.handleData = this.handleData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.props.getFriends();
    }

    handleData(e) {
        //let id = [e.target.id];
        this.setState({ [e.target.id] : e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addFriends({
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
        });
        this.setState ({
            name: '',
            age: '',
            email: '',
        });
    }

    render() {
        return (
            <div>
                {this.props.friends.map((friend, i) => {
                    return (
                        <Friends key = {i} index = {i} friend = {friend} />
                    );
                })}
                <form>
                    <h3>Add a new friend</h3>
                    <input type = "text" placeholder = "new friend name" id = 'name' value = {this.state.name} onChange={this.handleData} />
                    <input type = "number" placeholder = "friend's age" id = 'age' value = {this.state.age} onChange={this.handleData}/>
                    <input type = "email" placeholder = "email address" id = 'email' value = {this.state.email} onChange={this.handleData}/>
                    <button type = "submit" onClick = {this.handleSubmit}>Add Friend</button>    
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends
    };
};

export default connect(mapStateToProps, { getFriends, addFriends })(FriendsList);