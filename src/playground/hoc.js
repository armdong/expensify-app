import React from 'react'
import ReactDOM from 'react-dom'

const Info = ({ info }) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {info}</p>
  </div>
)

const withAdminWarning = (Component) => (props) => (
  <div>
    {props.isAdmin &&
      <p>This is the private info. Please don't share!</p>
    }
    <Component {...props} />
  </div>
)

const requireAuthentication = (Component) => (props) => (
  <div>
    {props.isAuthenticated
      ? <Component {...props} />
      : <p>You should login to visit this info.</p>
    }
  </div>
)

// const AdminInfo = withAdminWarning(Info)

// ReactDOM.render(
//   <AdminInfo
//     isAdmin={true}
//     info="These are the details"
//   />,
//   document.getElementById('app')
// )

const AuthInfo = requireAuthentication(Info);
ReactDOM.render(
  <AuthInfo
    isAuthenticated={true}
    info="These are the details"
  />,
  document.getElementById('app')
)