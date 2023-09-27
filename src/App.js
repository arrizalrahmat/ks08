import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AboutCompany from './pages/AboutCompany';
import AboutMe from './pages/AboutMe';
import Members from './pages/Members';
import Member from './pages/Member';
import Items from './pages/Items';
import Item from './pages/Item';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Pokemons from './pages/pokemons';
import PokemonDetail from './pages/PokemonDetail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route
            path="about-company"
            element={<AboutCompany />}
          />
          <Route path="about-me" element={<AboutMe />} />
        </Route>
        <Route path="/members" element={<Members />}>
          <Route path=":userName" element={<Member />} />
        </Route>
        <Route
          path="/items"
          element={
            <ProtectedRoute>
              <Items />
            </ProtectedRoute>
          }
        >
          <Route path=":id" element={<Item />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route
          path="/pokemons/:id"
          element={<PokemonDetail />}
        />
      </Routes>
    </div>
  );
}

export default App;
