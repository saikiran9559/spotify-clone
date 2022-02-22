import Login from './pages/login'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage'
import DashBoard from './pages/dashboard'
import Redirect from './pages/redirect'
import PlayList from './pages/playlist'
import UserAllPlaylists from './pages/userAllPlaylists'
import Search from './pages/search/search'
import AllSearchTracks from './pages/allSearchTracks/allSearchTracks'
import AllResultType from './components/searchAllResultType/searchAllResultType'
import Empty from './pages/emptypage'
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path='/redirect' element={<Redirect />} />
                <Route element={<HomePage />} >
                    <Route path='/' element={<DashBoard />} />
                    <Route path='playlist/:id' element={<PlayList />} />
                    <Route path='artist/:id' element={<Empty />} />
                    <Route path='album/:id' element={<Empty />} />
                    <Route path='show/:id' element={<Empty />} />
                    <Route path='episode/:id' element={<Empty />} />
                    <Route path='playlists' element={<UserAllPlaylists />} />
                    <Route path='search' element={<Search />} />
                    <Route path="search/:query" element={<Search />} />
                    <Route path="search/:query/artists" element={<AllResultType type="artists" key="artists" />} />
                    <Route path="search/:query/tracks" element={<AllSearchTracks />} />
                    <Route path="search/:query/albums" element={<AllResultType type="albums" key="albums" />} />
                    <Route path="search/:query/playlists" element={<AllResultType type="playlists" key="playlists" />} />
                    <Route path="search/:query/episodes" element={<AllResultType type="episodes" key="episodes" />} />
                    <Route path="search/:query/shows" element={<AllResultType type="shows" key="shows" />} />
                </Route>
            </Routes>
        </BrowserRouter >
    );
}

export default App;
