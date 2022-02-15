import Login from './pages/login'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/homepage'
import DashBoard from './pages/dashboard'
import Redirect from './pages/redirect'
import PlayList from './pages/playlist'
import UserAllPlaylists from './pages/userAllPlaylists'
import Search from './pages/search'
import AllSearchTracks from './pages/allSearchTracks'
import AllResultType from './components/searchAllResultType/searchAllResultType'
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path='/redirect' element={<Redirect />} />
                <Route element={<HomePage />} >
                    <Route path='/' element={<DashBoard />} />
                    <Route path='/playlist' element={<PlayList />} />
                    <Route path='/playlists' element={<UserAllPlaylists />} />
                    <Route path='/search' element={<Search />} />
                    <Route path="/search/:query" element={<Search />} />
                    <Route path="/search/:query/artists" element={<AllResultType type="artists" key="artists" />} />
                    <Route path="/search/:query/tracks" element={<AllSearchTracks />} />
                    <Route path="/search/:query/albums" element={<AllResultType type="albums" key="albums" />} />
                    <Route path="/search/:query/playlists" element={<AllResultType type="playlists" key="playlists" />} />
                    <Route path="/search/:query/episodes" element={<AllResultType type="episodes" key="episodes" />} />
                    <Route path="/search/:query/shows" element={<AllResultType type="shows" key="shows" />} />
                </Route>
            </Routes>
        </BrowserRouter >
    );
}

export default App;
