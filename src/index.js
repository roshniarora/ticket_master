import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './redux/store/configureStore'
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'


// import { startGetUser } from './redux/actions/userAction.js'


const store = configureStore()
console.log(store.getState())

// store.subscribe(() => {
//   console.log(store.getState())
// })

// handle page reload

// if (localStorage.getItem('token')) {
//   store.dispatch(startGetUser())
// }

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)


ReactDOM.render(jsx, document.getElementById('root')
);


