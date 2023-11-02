import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from './Slices/CatalogSlice'
 
const store = configureStore({
    reducer: {
        catalog: catalogReducer
    }

    
})

console.log(catalogReducer)

export default store