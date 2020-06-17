import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import userReducer from '../reducers/userReducer';
import customerReducer from '../reducers/customerReducer'
import departmentsReducer from '../reducers/departmentReducer'
import employeeReducer from '../reducers/employeeReducer'
import ticketReducer from '../reducers/ticketReducer'


// const configureStore = () => {
//     const store = createStore(combineReducers({
//         user: userReducer,
//         customers: customerReducer
//     }), applyMiddleware(thunk))
//     return store
// }
// export default configureStore


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(thunk))(
    createStore
);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(combineReducers({
        user: userReducer,
        customers: customerReducer,
        departments: departmentsReducer,
        employees: employeeReducer,
        tickets: ticketReducer
    }), initialState);
    return store
}