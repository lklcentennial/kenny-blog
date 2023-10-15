import Narbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


function App() {
  const title = 'Welcome to the new blog';

  return (
    <Router>
      <div className="App">
        <Narbar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home />} />  
            <Route exact path='/create' element={<Create />} /> 
            <Route exact path='/blogs/:id' element={<BlogDetails />} />
            <Route path="*" element={<NotFound />}></Route>   
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
