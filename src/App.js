import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCatalog } from './redux/Slices/CatalogSlice';
import Catalog from './components/Catalog';
import { Route, Routes } from 'react-router-dom';



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCatalog())
  }, [dispatch])


  const catalog = useSelector(state => state.catalog.catalog)

  return (
    <div className="App">
      
                <Routes>
                    <Route path='/' element={<Catalog data={catalog}/>}/>
                    <Route path='/:slug' element={<Catalog data={catalog}/>} />
                </Routes>
            
    </div>
  );
}

export default App;
