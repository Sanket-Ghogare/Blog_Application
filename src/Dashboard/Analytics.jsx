import React from 'react'
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
import Geochart from '../components/charts/Geochart';
import PieChart from '../components/charts/Piecharts';
import { API } from '../services/api';
import { useEffect, useState } from 'react';

function Analytics() {
    const [totalUser, setTotalUsers] = useState(0);
    const [totalComments, setTotalComments] = useState(0);

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

    useEffect(() => {
        const fetchComment = async () => {
            let response = await API.getComment({ category:  '' });
            // console.log('fuser-data', response.data);
            if (response.isSuccess) {
                setTotalComments(response.data.length);
                console.log('data-len',response.data.length)
            }
        }
        fetchComment();
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
                            <Card sx={{ minWidth:50 + "%",height:150 }} className='gradient'>
                                
                                <CardContent>
                                <div className='iconstyle'>
                                 <RecentActorsIcon fontSize='large'/>
                                </div>
                                    <Typography gutterBottom variant="h5" component="div" sx ={{color:"#ffffff"}}>
                                    {totalUser}
                                    </Typography>
                                    <Typography gutterBottom variant="body2" component="div" 
                                    sx ={{color:"#ccd1d1"}}> Total Visitors</Typography>
                                </CardContent>
                               
                            </Card>
                            <Card sx={{ minWidth:50 + "%",height:150 }} className='gradientlight'>
                                
                                <CardContent>
                                <div className='iconstyle'>
                                 <DynamicFeedIcon fontSize='large'/>
                                </div>
                                <Typography gutterBottom variant="h5" component="div" sx ={{color:"#ffffff"}}>
                                    {totalComments}
                                    </Typography>
                                    <Typography gutterBottom variant="body2" component="div" 
                                    sx ={{color:"#ccd1d1"}}> Total Comments</Typography>
                                </CardContent>
                               
                            </Card>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                        <Stack spacing={2}>
                            <Card className='gradientlight'>
                            <Stack spacing={2} direction='row'>  
                            <div className='iconstyle'>
                            <RecentActorsIcon/>
                                </div>
                                
                            <div className='paddingall'>
                            <span className='posttitle'>{totalComments}</span>
                            <br/>
                            <span className='posttotal'>Total Comments</span>
                           </div>
                             </Stack>
                             </Card>

                             <Card >
                            <Stack spacing={2} direction='row'>
                                <div className='iconstyleblack'>
                                <DynamicFeedIcon/>
                                </div>
                            <div className='paddingall'>
                            <span className='posttitle'> {totalUser}</span>
                            <br/>
                            <span className='posttotal'>Total Visitors</span>
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
                    <Geochart/>
                        </CardContent>
                        </Card>
                        </Grid>
                    <Grid item xs={4}>
                    <Card sx={{ height: 60 + "vh" }}>
                        <CardContent>
                     
                           <PieChart fontSize = "large"/>
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

export default Analytics