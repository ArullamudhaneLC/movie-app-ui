import * as actions from '../actions/actions';
const initalState = {
    data: {}

};
function onSelectMovie(state, payload) {
    console.log('reducerr');
console.log(payload, 'payloadd');
}

function reducer(state = initalState, action) {
    // const onSelectMovie = (state, payload) => ({
    //     ...state,
    //     selectedMovie: payload
    // });


    switch (action.type) {
        case actions.FETCH_DATA_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case actions.FETCH_DATA:
            return onSelectMovie(state, action.payload);


        case actions.FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.playload.error,
                movies: []
            }
    }

}
export default reducer;