import React from 'react'
import Admin from '../components/Create/Admin'
import Box from '@mui/material/Box';
function Settings() {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Admin />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Settings</h1>
                </Box>
            </Box>

        </>

    )
}

export default Settings