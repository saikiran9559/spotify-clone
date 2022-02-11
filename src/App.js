import Login from './pages/login'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/homepage'
import DashBoard from './pages/dashboard'
import Redirect from './pages/redirect'
import PlayList from './pages/playlist'
import UserAllPlaylists from './pages/userAllPlaylists'
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<HomePage />} >
                    <Route path='/' element={<DashBoard />} />
                    <Route path='/redirect' element={<Redirect />} />
                    <Route path='/playlist' element={<PlayList />} />
                    <Route path='/playlists' element={<UserAllPlaylists />} />
                </Route>
            </Routes>
        </BrowserRouter >
    );
}

export default App;
