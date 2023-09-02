import React, { useState } from 'react'
import Admin from '../components/Create/Admin'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import "../Dashboard/Dash.css";
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import Accordian from './Accordian'
import Calendercharts from '../components/charts/Calendercharts';
import { useEffect } from 'react';
import { API } from '../services/api';
import axios from 'axios';

function Home1() {
    const [totalUser, setTotalUsers] = useState(0);
    const [totalPost, setTotalPost] = useState(0);
    const [isAdmin,setIsAdmin] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            let response = await API.getUsers({ category:  '' });
            // console.log('fuser-data', response.data);
            if (response.isSuccess) {
                setTotalPost(response.data.length);
                console.log('data-len',response.data.length)
            }
        }
        fetchUsers();
        // console.log('fuser', users);
    }, [])

    useEffect(() => {
        const fetchUser = async () => {
            let response = await API.getUser({ category:  '' });
            // console.log('fuser-data', response.data);
            if (response.isSuccess) {
                setTotalUsers(response.data.length);
                console.log('data-len',response.data.length)
            }
        }
        
        fetchUser();
        // console.log('fuser', users);
    }, [])

    
    return (
        <>
            <div className='bgcolor'>


                <Box height={40} />
                <Box sx={{ display: 'flex' }}>
                    <Admin />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Stack spacing={2} direction="row">
                                    <Card sx={{ minWidth: 50 + "%", height: 150 }} className='gradient'>

                                        <CardContent>
                                            <div className='iconstyle'>
                                                <RecentActorsIcon fontSize='large' />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                                {totalUser}
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div"
                                                sx={{ color: "#ccd1d1" }}> Total Users</Typography>
                                        </CardContent>

                                    </Card>
                                    <Card sx={{ minWidth: 50 + "%", height: 150 }} className='gradientlight'>

                                        <CardContent>
                                            <div className='iconstyle'>
                                                <DynamicFeedIcon fontSize='large' />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                                {totalPost}
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div"
                                                sx={{ color: "#ccd1d1" }}> Total Posts</Typography>
                                        </CardContent>

                                    </Card>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack spacing={2}>
                                    <Card className='gradientlight'>
                                        <Stack spacing={2} direction='row'>
                                            <div className='iconstyle'>
                                                <RecentActorsIcon />
                                            </div>

                                            <div className='paddingall'>
                                                <span className='posttitle'>{totalPost}</span>
                                                <br />
                                                <span className='posttotal'>Total Post</span>
                                            </div>
                                        </Stack>
                                    </Card>

                                    <Card >
                                        <Stack spacing={2} direction='row'>
                                            <div className='iconstyleblack'>
                                                <DynamicFeedIcon />
                                            </div>
                                            <div className='paddingall'>
                                                <span className='posttitle'>{totalUser}</span>
                                                <br />
                                                <span className='posttotal'>Total Users</span>
                                            </div>
                                        </Stack>

                                    </Card>
                                </Stack>


                            </Grid>

                        </Grid>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                        < Calendercharts />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                        <div className='paddingall'>
                                            <span className='posttitle'>Popular Posts</span>

                                        </div>
                                        Popular Posts
                                        <Accordian />
                                    </CardContent>
                                </Card>

                            </Grid>

                        </Grid>
                    </Box>

                </Box>
            </div>

        </>

    )
}

export default Home1