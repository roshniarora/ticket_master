import axios from '../../config/axios'
// import * as types from '../constant'


const setUser = (load, user) => {
    return { type: load, payload: user }
}


const startLoginUser = (formdata, history) => (dispatch) => {
    // console.log(formdata, 'login action')

    axios.post('/users/login', formdata)
        .then(response => {
            if (response.data.hasOwnProperty('error')) {
                alert(response.data.error);
            }
            else {
                // console.log(response.data)
                alert('successfully logged in')
                localStorage.setItem('token', response.data.token)
                // axios.get('/users/account', {
                //     headers: {
                //         'x-auth': localStorage.getItem('token')
                //     }
                // })
                //     .then((response) => {
                //         const user = response.data

                //         dispatch(setUser("SET_USER", user))
                //         dispatch(history.push('/'))
                //     })
                //     .catch((err) => {
                //         console.log(err)
                //     })

                dispatch(history.push('/'))

            }

        })
        .catch((err) => {
            console.log(err, "error")
        })
}


// const startGetUser = () => (dispatch) => {
//     axios.get('/users/account', {
//         headers: {
//             'x-auth': localStorage.getItem('token')
//         }
//     }).then((response) => {
//         const user = response.data
//         dispatch(setUser(user))
//     })
//         .catch((err) => {
//             console.log(err, "error")
//         })
// }




const startRegisterUser = (formdata, history) => (dispatch) => {
    // console.log('action generator', formdata)
    axios.post('/users/register', formdata)
        .then(response => {
            if (response.data.hasOwnProperty('errors')) {
                alert(response.data.message)
            } else {
                alert('you have registered successfully')
                dispatch(history.push('/users/login'))

            }

            // dispatch(history.push('/users/login'))
        })
        .catch((err) => {
            console.log(err, "error")
        })


}

const startLogoutUser = () => (dispatch) => {
    axios.delete('/users/logout', {
        headers: {
            'x-auth': localStorage.getItem('token')
        }
    })
        .then((response) => {
            if (response.data.notice) {
                alert(response.data.notice)
                localStorage.removeItem('token')
                dispatch(setUser({}))
                window.location.href = "/"
            }
        })
}

export {
    startRegisterUser,
    startLoginUser,
    setUser,
    // startGetUser,
    startLogoutUser
}