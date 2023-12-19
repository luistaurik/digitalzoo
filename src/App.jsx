import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './views/Home';
import FavoritesPage from './views/FavoritesPage';
import NotFound from './views/NotFound';

function App() {
  return (
    <>
      <div className="container">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/MyZoo" element={<FavoritesPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
