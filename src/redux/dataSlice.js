import { createSlice } from "@reduxjs/toolkit"
import data from '../components/data/mywork_data'


const isPersian = (text) => {
    // Regex to match Persian characters (Arabic script range)
    const persianRegex = /[\u0600-\u06FF]/;
    return persianRegex.test(text);
};
// console.log('data', data)
const initialState = {
    originalData: data, // store unfilterd data
    filteredData: data,
    limitedShowData: data.slice(0,4),
    searchQuery: '',
    filterCriteria: {},
    selectedLanguage: 'fa'
}
const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            // console.log('original data', state.originalData)

            const query = action.payload;
            if (!query) {
                state.filteredData = state.originalData;
                state.searchQuery = '';
                return;
            }
            // console.log('query', query)
            // Detect if the query is in Persian
            const isQueryPersian = isPersian(query);
            // console.log('isQueryPersian', isQueryPersian)

            const normalizedQuery = isQueryPersian ? query : query.toLowerCase();

            state.searchQuery = normalizedQuery;
            state.filteredData = state.originalData.filter((item) => {

                if (isQueryPersian) {
                    return (
                        (item.w_exp_fa && item.w_exp_fa.includes(normalizedQuery)) 
                    );
                } else {
                    return (
                        item.w_exp.toLowerCase().includes(normalizedQuery) || 
                        item.w_desc.some(desc => desc.toLowerCase().includes(normalizedQuery)) 
                    );
                }
            }
            );
            // console.log('filterd data', state.filteredData)

        },
        resetFilters: (state) => {
            state.filteredData = state.originalData;
            state.searchQuery = '';
        }
    }
});

export const { setSearchQuery, resetFilters } = dataSlice.actions;
export default dataSlice.reducer;