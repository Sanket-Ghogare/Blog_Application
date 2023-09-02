import { Box, styled, Typography} from '@mui/material';


const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">React Blog Application</Typography>
                <Text variant="h5">A blog application is a software platform or tool that enables individuals or 
                organizations to create, publish, manage, and share content in the form of blog posts. A blog, 
                short for "weblog," is an online journal or informational website.A blog application provides
                 users with a user-friendly interface to write, format, and publish blog posts, as well as manage
                  other aspects of their blog, such as design, categories, and user engagement. <br />
                    </Text>
                  
            </Wrapper>
        </Box>
    )
}

export default About;