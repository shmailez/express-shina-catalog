import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCatalog  = createAsyncThunk(
    'catalog/getCatalog', 
    async function(_, {rejectWithValue}) {
        try {
            const responce = await fetch('https://express-shina.ru/vacancy/catalog', {
                method: 'GET'
            })

            const data = await responce.json()

            return data.categories

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
    
)

const CatalogSlice = createSlice({
    name: 'catalog', 
    initialState: {
        catalog: []
    }, 
    reducers: {
    }, 
    extraReducers: (builder) => {
        builder
        .addCase(
            getCatalog.fulfilled, (state, action) => {
                state.status = 'loading'
                state.catalog = action.payload
            }
        )

    }
})

export default CatalogSlice.reducer