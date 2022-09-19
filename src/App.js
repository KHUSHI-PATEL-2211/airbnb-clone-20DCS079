import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SearchPage from './Components/SearchPage/SearchPage';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>

        
        <Route exact path='/search' element={<SearchPage />}/>
        <Route exact path='/' element={<Home />}/>
        </Routes>

        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
