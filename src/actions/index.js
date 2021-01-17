import googleAPI  from '../api/googleAPI'

export const fetchData = (searchTerm) => {
    return async (dispatch) => {

        //any data get from server
        dispatch({
            type: 'SET_LOADING',
            payload: null
        })

        const response = await googleAPI.get('/', {
            params: {
                q: searchTerm,
                maxResults: 12
            }
        });
        
        //call reducer
        if(response.status === 200) {
            try {
                dispatch({
                    type: 'GET_SEARCH_RESULT',
                    payload: response.data.items
                })
            } catch {
                dispatch({
                    type: 'isError',
                    payload: 'Something went wrong'
                })
            }
            
        } else {
            console.log(`Error: ${response.status}`);
        }
    }    
}

export const fetchBookByID = (id) => {
    return async (dispatch) => {
        //any data get from server
        dispatch({
            type: 'SET_LOADING',
            payload: null
        })

        const response = await googleAPI.get(`/${id}`);
        
        //call reducer
        if(response.status === 200) {
            try{
                dispatch({
                    type: 'GET_BOOK',
                    payload: response.data
                })
            } catch {
                dispatch({
                    type: 'isError',
                    payload: 'Something went wrong'
                })
            }
            
        } else {
            console.log(`Error: ${response.status}`);
        }
    }
}