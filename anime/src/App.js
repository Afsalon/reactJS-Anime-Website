import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MiddleDataFile from './components/MiddleDataFile';
import About from './components/About';
import AnimeDetail from './components/AnimeDetail';
import Error from './components/Error';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MiddleDataFile/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/detail/:id" element={<AnimeDetail/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
