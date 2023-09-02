import { useEffect, useState } from "react";

// import { Box, Grid } from '@mui/material';
import { useSearchParams } from "react-router-dom";

import { API } from '../../services/api';

// componenets

// import Userlist from '../../Dashboard/Users/UserList';
// import axios from "axios";

const Users = () => {
    const [users, setUsers] = useState([]);

    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchUsers = async () => {
            let response = await API.getUsers({ category: category || '' });
            // console.log('fuser-data', response.data);
            if (response.isSuccess) {
                setUsers(response.data);
            }
        }
        fetchUsers();
        // console.log('fuser', users);
    }, [])

    const deletePost = async (id) => {
        console.log('id', id);
        const a = await API.deletePost(id)
        setUsers(users.filter(post=>post._id !== id))
        
        
        // let ap = await axios.delete(`http://localhost:8000/delete/${id}`)
        // console.log(ap.response);
    }
    return (
        <>
            <h2>User List </h2>

            {
                <table style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th style={{ textAlign: "start" }}>Username</th>
                            <th style={{ textAlign: "start" }}>Title</th>
                            <th style={{ textAlign: "start" }}>Categories</th>
                            <th style={{ textAlign: "start" }}>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) =>
                                <tr key={user._id}>
                                    {/* {console.log(user)} */}
                                    <td>{user?.username}</td>
                                    <td>{user?.title}</td>
                                    <td>{user?.categories}</td>
                                    <td> <button onClick={() => { deletePost(user._id) }}>delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table >
            }
        </>
    )

}

export default Users;