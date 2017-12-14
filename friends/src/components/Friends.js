import React from 'react';

const Friends = ({ friend, index }) => {
        return (
        <div>
            <p>{`Friend ${index+1}`}</p>
            <p>{`Name: ${friend.name}`}</p>
            <p>{`Age: ${friend.age}`}</p>
            <p>{`Email address: ${friend.email}`}</p>
        </div>
        );
};

export default Friends;