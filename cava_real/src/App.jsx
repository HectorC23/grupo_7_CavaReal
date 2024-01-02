import './App.css'
import './style.css'

import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Nabvar/Navbar';
import Index from './views';
import UsersView from './views/UsersView';
import ProductsView from './views/ProductsView';
import CategoryView from './views/CategoryView';
import MostSoldView from './views/MostSoldView';
import LastSoldView from './views/LastSoldView';


function App() {

  return (
      <div  class="d-flex flex-column main-color ">

      <Navbar />

      <div class="d-flex flex-row main-color">

      <Sidebar />

        <Routes>
          <Route path='/' exact element={<Index />}/>
          <Route path='/users' element={<UsersView />}/>
          <Route path='/products' element={<ProductsView />}/>
          <Route path='/categories' element={<CategoryView/>}/>
          <Route path='/products/most-sold' element={<MostSoldView />}/>
          <Route path='/products/last-sold' element={<LastSoldView/>}/>
          <Route path='*' element={<h1>404 - Not Found</h1>} />
        </Routes>
        
        
      </div>
        {/* <!-- Footer --> */}
      <Footer />
          
        {/* <!-- End of Footer --> */}

      </div>
  );
}

export default App;
