import React from 'react'
import classes from './Main.module.css'

export default function Main() {
  return (
    <>
      <div className={classes.mainTitleDiv}>
        <h1 className={classes.mainTitle}>Portfolio</h1>
        <p className={classes.mainDescription}>Agency provides a full service range including technical skills, design, business understanding.</p>
      </div>
      <div className={classes.portfolioMenu}>
        <p>Show All</p>
        <p>Design</p>
        <p>Branding</p>
        <p>Illustration</p>
        <p>Motion</p>
      </div>
    </>
  )
}
