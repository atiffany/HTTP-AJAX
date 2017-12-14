import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIENDS = 'ADD_FRIENDS';

export const getFriends = () => {
    // Add the code for this action
    const apiUrl = 'http://localhost:5000/friends';
    const friendsRequest = axios.get(apiUrl);

    return {
        type: GET_FRIENDS,
        payload: friendsRequest,
    }
};


export const addFriends = (friendsData) => {
    const apiUrl = 'https://localhost:5000/new-friend';
    const friendsAddition = axios.post(apiUrl, friendsData);

    return {
        type: ADD_FRIENDS,
        payload: friendsAddition,
    }
};