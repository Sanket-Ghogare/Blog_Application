import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material"

import { categories } from "../../constants/data";
import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

const Tablestyle = styled(Table)`
border: 1px solid rgba(224,224,224, 1);
`;

const Buttonstyled = styled(Button)`
  margin: 20px;
  width: 85%;
  background:#6495ED;
  color:#fff;

`;
const LinkedStyle = styled(Link)`
text-decoration:'none;
color:inherit;
`;

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    const [isAdmin, setIsAdmin] = useState(false);


    useEffect(() => {
        const getIsAdmin = async () => {
            let res = await axios.get('http://localhost:8000/isAdmin', { headers: { Authorization: sessionStorage.getItem('accessToken') } })
            // let res = await API.getIsAdmin();
            console.log(res);
            if (res.status == 200) {
                setIsAdmin(res.data.isAdmin);
                console.log('isadmin', res.data);
            }
        }
        getIsAdmin();
    }, [])


    return (
        <>
            <LinkedStyle to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
                <Buttonstyled variant="contained">Create Blog</Buttonstyled>

            </LinkedStyle>

            <Tablestyle>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Link to='/'>
                                All Categories
                            </Link>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow key={category.id}>
                                <TableCell>
                                    <LinkedStyle to={`/?category=${category.type}`}>
                                        {category.type}
                                    </LinkedStyle>
                                </TableCell>
                            </TableRow>

                        ))
                    }

                </TableBody>
            </Tablestyle>
            <LinkedStyle to={isAdmin ? '/admin/home' : '/'} style={{display:isAdmin?'block':'none'}}>
                <Buttonstyled variant="contained">Administration</Buttonstyled>
            </LinkedStyle>

        </>
    )
}
export default Categories;