import './App.css';
import Postview from './components/Postview';
import Landing_page from './components/Landing_page'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import CreatePost from './components/CreatePost';
import { PostContextProvider } from './components/PostContext';

function PostComp() {
  return (
    <div>
      <h3>Main Post Comp</h3>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <>
      <PostContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/posts' element={<PostComp />}>
              <Route path="view" element={<Postview />} />
              <Route path="create" element={<CreatePost />} />
            </Route>
            <Route path="/" element={<Landing_page />} />
          </Routes>
        </BrowserRouter>
      </PostContextProvider>
    </>
  );
}

export default App;
