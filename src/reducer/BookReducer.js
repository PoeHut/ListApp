const initialState = {
    book: null,
    booklist: null,
    error: null,
    loading: false,
}

export const getBook = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {...state, error: null, loading: true}
        case 'GET_BOOK':
            return  {...state, book: action.payload, error: null, loading: false}
        case 'GET_SEARCH_RESULT':
            return  {...state, booklist: action.payload, error: null, loading: false}
        case 'isError':
            return {...state, error: action.payload, loading: false}
        default:
            return state
    }
}