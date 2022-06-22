import React from 'react'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png';

export default function Header() {
  return (
    <header className={classes.header}>
      <nav className={classes.headerNav}>
        <div>
          <img src={logo} alt='logo' className={classes.logoImg}/>
          <Link to='/' className={[classes.navLink, classes.logoText].join(' ')}>Agency</Link>
        </div>
        <div className={classes.navMenu}>
          <Link to='/about' className={classes.navLink}>About</Link>
          <Link to='/services' className={classes.navLink}>Services</Link>
          <Link to='/pricing' className={classes.navLink}>Pricing</Link>
          <Link to='/blog' className={classes.navLink}>Blog</Link>
        </div>
        <button className={classes.contactBtn}><Link to='/contact' className={classes.navLink}>CONTACT</Link></button>
      </nav>
    </header>
  )
}
