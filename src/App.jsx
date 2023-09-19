
import './App.css'
import Body from './Components/body'
import Carousel1 from './Components/carosel'
import Navbar from './Components/navbar'
import {Routes,Route,Link} from "react-router-dom";
import Edit from './Components/crud/Edit';
import Create from './Components/crud/Create';
import Footer from './Components/Footer';

function App() {
  

  return (
    <>
    <Navbar/>
    <Carousel1/>
    <div className="container">
      <Link to="/create"><button className="btn btn-primary">create</button></Link>
      <Routes>
    <Route path="/" element={<Body/>}/>
    <Route path="/create" element={<Create/>}/>
    <Route path="/edit/:id" element={<Edit/>}/>
    </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
