import React from 'react'
import Admin from '../components/Create/Admin'
import Box from '@mui/material/Box';

// import UserList from './Users/UserList';
import Users from './Users/Users';

function About1() {
    return (
        <>
        <Box height={90}/>
            <Box sx={{ display: 'flex' }}>
                <Admin />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    {/* <UserList/> */}
                    <Users/>

                </Box>
            </Box>

        </>

    )
}

export default About1