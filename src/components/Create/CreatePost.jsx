import { useState, useEffect, useContext,React } from "react";

import { Box, styled, FormControl, InputBase, Button, TextareaAutosize, InputLabel, Select, MenuItem, Typography, TextField } from "@mui/material";
// import { AddCircle as Add } from '@mui/icons-material';

import { useLocation, useNavigate } from "react-router-dom";

import { DataContext } from "../../context/DataProvider";
import { API } from "../../services/api";

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover',
});

const Formstyled = styled(FormControl)`
margin-top: 10px;
display:flex;
flex-direction:row;

`;

const InputTextField = styled(InputBase)`
flex:1;
margin:0 30px;
font-size:25px;
margin-top:60px;;

`
const Textarea = styled(TextareaAutosize)`
width:100%;
margin-top:40px;
font-size: 20px;
border :none;
&:focus-visible{
    outline:none;
}
`;

const Selectit =  styled(Select)`
width:2px;
padding:5px;
margin-left:20px
flex:center`


// const Buttonstyle = styled(Button)`
// margin-top:0px;
// `;

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createDate: new Date()
}
const CreatePost = () => {


    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const [categories, setCategories] = useState();
    const categoryinfo= ["Music","Movies","Sports","Tech","Fashion"]
    const location = useLocation();

    const navigate = useNavigate();

    const { account } = useContext(DataContext);


    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                //Api call
                const response = await API.uploadFile(data);
                post.picture = response.data;

            }

        }
        getImage();
        post.categories = location.search?.split('=')[1] || 'All';
        // post.categories = categories;
        post.username = account.username;
    }, [file])

    const handlechange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }
    
    const savePost = async () => {
        post.categories = categories;
        let response = await API.createPost(post);
        if (response.isSuccess) {
            navigate('/');
        }

    }
    return (

        <Container>
            <Image src={url} alt="banner" />

            <Formstyled>
                <input type="file" id="fileInput" style={{ display: 'none' }}
                    onChange={(e) => setFile(e.target.files[0])} />
                <label htmlFor="fileInput">
                    {/* <Buttonstyle variant="contained" size="small">Upload Image</Buttonstyle> */}
                    <p style={{background:'#1976d2',padding:'10px',color:'white',borderRadius:'5px',margin:'2px'}}>Upload Image</p>
                    {/* <Add fontSize="large" colr="action" /> */}
                </label>
                  <br/>

              

                <InputTextField placeholder='Title' onChange={(e) => handlechange(e)} name="title" />
                {/* <Button variant="contained" onClick={() => savePost()}> Publish </Button> */}
                <label htmlFor = "button">
                <p onClick={() => savePost()}style={{background:'#1976d2',padding:'10px',color:'white',borderRadius:'5px',margin:'2px'}}>Publish Blog</p>
                </label>
            </Formstyled>

           <Box>
            {/* <Typography varient ="h4" align="left">
                Select Options
            </Typography> */}
            <Box my={4} >
                <TextField label="Select Your Categories" val ={categories} onChange={e=>setCategories(e.target.value)}
                select
                SelectProps={{}} sx = {{width:"150px"}}>
                    {categoryinfo.map(categories=>(
                        <MenuItem value ={categories} key ={categories}>
                            {categories}

                        </MenuItem>
                    ))}
                </TextField>
            </Box>
           </Box>
          
            <Textarea
                minRows={5}
                placeholder="Tell your story....." onChange={(e) => handlechange(e)} name="description" />
        </Container>
   
   
        

    )
}

export default CreatePost;