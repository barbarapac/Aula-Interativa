import React from 'react'
import '../../css/pure-min.css'
import '../../css/marketing-old-ie.css'
import '../../css/marketing.css'
import { Link } from 'react-router-dom'


class Menu extends React.Component{
  render(){
    return(
      <div className="header">
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
            <Link className="pure-menu-heading" to="/">Aula Interativa</Link>

            <ul className="pure-menu-list">
                <li className="pure-menu-item pure-menu-selected">
                    <Link to="/" className="pure-menu-link">Home</Link>
                </li>
                <li className="pure-menu-item">
                    <Link to="/login" className="pure-menu-link">Login</Link>
                </li>
            </ul>
        </div>
    </div>
    )
  }
}

export default (Menu)