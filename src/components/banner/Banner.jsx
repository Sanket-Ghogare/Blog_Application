
import { Box, Typography, styled } from '@mui/material';

const Image = styled(Box)`
background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
width: 100%;
height: 50vh;
display: flex;
align-items: center;
justify-content:center;
flex-direction:column;

`;

const Heading = styled(Typography)`
font-size: 90px;
color:#FFFFFF;
line-height:1;
background:#212121
`;

const Heading2 = styled(Typography)`
font-size: 40px;
background: #FFFFFF;
`;


const Banner = () => {
    return (
        <Image>
            <Heading>Blog</Heading>
            <Heading2>Publish Your Passions,Your Way</Heading2>
        </Image>
    )
}
export default Banner;