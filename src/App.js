
import { useEffect, useState } from 'react';

import DataProvider from './context/DataProvider';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';


//components
import Login from './components/account/Login';
import Home from './components/Home/Home';
import Header from './components/header/Header';
import CreatePost from './components/Create/CreatePost';
import Detailview from './components/details/Detailview';
import Update from './components/Create/update';
import About from './components/details/comments/About/about';
import Contact from './components/Contacts/contact';
import Home1 from './Dashboard/Home1';
import About1 from './Dashboard/About1';
import Settings from './Dashboard/Settings';
import Analytics from './Dashboard/Analytics';
import axios from 'axios';

const PrivateRoute = ({ isAuthenticated, ...props }) => {

  return isAuthenticated ?
    <>
      <Header />

      <Outlet />
    </>
    : <Navigate replace to='/login' />

}

function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    sessionStorage.getItem('accessToken')?isUserAuthenticated(true):isUserAuthenticated(false); 
    console.log('ab',sessionStorage.getItem('accessToken')?true:false)
    console.log('ba',isAuthenticated)
    const getIsAdmin = async () => {
      let res = await axios.get('http://localhost:8000/isAdmin', { headers: { Authorization: sessionStorage.getItem('accessToken') } })
      // let res = await API.getIsAdmin();
      if (res.status == 200) {
        setIsAdmin(res.data.isAdmin);
      }
    }
    getIsAdmin();
    console.log(isAdmin)
    
  }, [])

  // const [isAuthorize, isUserAuthorize] = useState('')


  return (

    <DataProvider>
      <BrowserRouter>

        <div style={{ marginTop: 64 }}>
          <Routes>
            <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />

            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/' element={<Home />} />
            </Route>

            <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/create' element={<CreatePost />} />
            </Route>

            <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/details/:id' element={<Detailview />} />
            </Route>

            <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/update/:id' element={<Update />} />
            </Route>

            <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/about' element={<About />} />
            </Route>

            <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/contact' element={<Contact />} />
            </Route>

            {/* <Route path='/admin' element={<PrivateRoute isAuthenticated={isAuthenticated} />}> */}

            if (isAdmin) {
              <Route path='/admin' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
                {/* <Route path='/admin' element={<Admin/>} /> */}
                <Route path='/admin/home' element={<Home1 />} />
                <Route path='/admin/about' element={<About1 />} />
                <Route path='/admin/settings' element={<Settings />} />
                <Route path='/admin/analytics' element={<Analytics />} />
              </Route>
            }

          </Routes>
        </div >
      </BrowserRouter>
    </DataProvider >

  );
}

export default App;
