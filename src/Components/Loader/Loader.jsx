import React from 'react'
import styles from './Loader.module.css'
export default function Loader() {
  return <>
  <div className="loaderPage text-center">
  <span class={`${styles.loader}`}></span>
  </div>
  </>
}
