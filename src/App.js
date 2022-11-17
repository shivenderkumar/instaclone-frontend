import './App.css';
import Postview from './components/Postview';
import Landing_page from './components/Landing_page'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import CreatePost from './components/CreatePost';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/postview" element={<Postview />} />
          <Route path="/postcreate" element={<CreatePost />} />
          <Route path="/" element={<Landing_page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
