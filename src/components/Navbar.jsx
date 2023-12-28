import React from 'react'
import "./Navbar.css"
import { Search } from "../components/Search";

export const Navbar = () => {
  return (
    <div className='navbar'>
        <a href="http://localhost:3000/"><img src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg" alt ="logo"  className = "logo"/></a>
        <Search / > 
        <ul className='navitem'>
            <li><button variant="primary">Home </button></li>
            <li><button variant="primary">About </button></li>
            <li><button variant="primary">Contact </button></li>
            <li><button variant="primary">Cart </button></li>
        </ul>
    </div>
  )
}


//<iframe src="https://drive.google.com/file/d/1TV6LUSrSB-bSHtHFtBx1CW00Fn_HDrxU/preview" width="640" height="480" allow="autoplay"></iframe>
////https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYTXSNkXvNqNoF46hTPks9DR4QennXR85zBOL74xe8WdOfnc4VAhKVY5eMQlU3B7SnDKP4WKiiHfChZDsYETVEl6o8Elmg=w1330-h578