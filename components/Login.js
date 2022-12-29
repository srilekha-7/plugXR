import {Component} from 'react'
import Cookies from 'js-cookie'
import React,{useState} from 'react'
import {Navigate} from 'react-router-dom'




const LoginForm=()=>{

    const [state,setState]=useState([{
        username: 'hello',
        password: '',
        showSubmitError: false,
        errorMsg: ''}])
    const [input1,setInput1]=useState("");   
    const [input2,setInput2]=useState("");  
       
    const onSubmitSuccess = jwtToken => {
      const {history} = this.props
  
      Cookies.set('jwt_token', jwtToken, {
        expires: 30,
        path: '/',
      })
      history.replace('/')
    }
  
    const onSubmitFailure = errorMsg => {
      console.log(errorMsg)
      
    }

       const onChangeUsername = event => {
                 setInput1(event.target.value)
               }
            
           const  onChangePassword = event => {
                 setInput2(event.target.value)
               }    

    const renderUsernameField = () => {
       
        console.log(state[0].username);
        return (
          <>
            <label className="input-label" htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              className="username-input-field"
              value={input1}
              onChange={(e)=>onChangeUsername(e)}
            />
          </>
        )
      }

      const renderPasswordField = () => {
        return (
          <>
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="password-input-field"
              value={input2}
              onChange={(e)=>onChangePassword(e)}
            />
          </>
        )
      }

      const submitForm = async event => {
        event.preventDefault()
      
        const userDetails = {input1,input2}
        const url = 'https://apis.ccbp.in/login'
        const options = {
          method: 'POST',
          body: JSON.stringify(userDetails),
        }
        const response = await fetch(url, options)
        const data = await response.json()
        if (response.ok === true) {
          onSubmitSuccess(data.jwt_token)
        } else {
          onSubmitFailure(data.error_msg)
        }
      }
    

    return(
        <div>
            <form  onSubmit={submitForm()}>
           {/* <img
//             src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
//             className="login-website-logo-desktop-image"
//             alt="website logo"
//           /> */}
           <div className="input-container">{renderUsernameField()}</div>
           <div className="input-container">{renderPasswordField()}</div>
           <button type="submit" className="login-button">
             Login
           </button>
           {state.showSubmitError && <p className="error-message">*{state.errorMsg}</p>}
         </form>
          
        </div>
    )

}
export default LoginForm



//import './index.css'

// class LoginForm extends Component {
//   state = {
//     username: '',
//     password: '',
//     showSubmitError: false,
//     errorMsg: '',
//   }

//   onChangeUsername = event => {
//     this.setState({username: event.target.value})
//   }

//   onChangePassword = event => {
//     this.setState({password: event.target.value})
//   }

  // onSubmitSuccess = jwtToken => {
  //   const {history} = this.props

  //   Cookies.set('jwt_token', jwtToken, {
  //     expires: 30,
  //     path: '/',
  //   })
  //   history.replace('/')
  // }

  // onSubmitFailure = errorMsg => {
  //   console.log(errorMsg)
  //   this.setState({showSubmitError: true, errorMsg})
//   }

//   submitForm = async event => {
//     event.preventDefault()
//     const {username, password} = this.state
//     const userDetails = {username, password}
//     const url = 'https://apis.ccbp.in/login'
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(userDetails),
//     }
//     const response = await fetch(url, options)
//     const data = await response.json()
//     if (response.ok === true) {
//       this.onSubmitSuccess(data.jwt_token)
//     } else {
//       this.onSubmitFailure(data.error_msg)
//     }
//   }

//   renderPasswordField = () => {
//     const {password} = this.state
//     return (
//       <>
//         <label className="input-label" htmlFor="password">
//           PASSWORD
//         </label>
//         <input
//           type="password"
//           id="password"
//           className="password-input-field"
//           value={password}
//           onChange={this.onChangePassword}
//         />
//       </>
//     )
//   }

//   renderUsernameField = () => {
//     const {username} = this.state
//     return (
//       <>
//         <label className="input-label" htmlFor="username">
//           USERNAME
//         </label>
//         <input
//           type="text"
//           id="username"
//           className="username-input-field"
//           value={username}
//           onChange={this.onChangeUsername}
//         />
//       </>
//     )
//   }

//   render() {
//     const {showSubmitError, errorMsg} = this.state
//     const jwtToken = Cookies.get('jwt_token')
//     if (jwtToken !== undefined) {
//       return <Navigate to="/" />
//     }
//     return (
//       <div className="login-form-container">
//         {/* <img
//           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
//           className="login-website-logo-mobile-image"
//           alt="website logo"
//         />
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
//           className="login-image"
//           alt="website login"
//         /> */}
//         <form className="form-container" onSubmit={this.submitForm}>
//           {/* <img
//             src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
//             className="login-website-logo-desktop-image"
//             alt="website logo"
//           /> */}
//           <div className="input-container">{this.renderUsernameField()}</div>
//           <div className="input-container">{this.renderPasswordField()}</div>
//           <button type="submit" className="login-button">
//             Login
//           </button>
//           {showSubmitError && <p className="error-message">*{errorMsg}</p>}
//         </form>
//       </div>
//     )
//   }
// }
