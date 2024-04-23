import React from 'react'
import styles from './Header.module.css'
import cover from '../../Assets/Images/header-bg.jpg'
export default function Header() {
  return <>
  <section id='header' className='header'>
  <div className="container py-5 h-100 ">
    <div className="row my-5 py-5 h-100 align-items-md-center  ">
      <div className="col-md-6 my-5 mb-0 mb-md-5 d-flex d-md-block flex-column align-items-center  justify-content-center ">
        <h2 className='text-white display-5 fw-bold '>Welcome to <span className='text-main'>Tasty Bites</span></h2>
        <p className='text-white fs-5 text-center text-md-start'>Delivering great food for more than 5 years!</p>
      <div className="btns py-4  d-flex">
      <button className=' border-2 me-3 px-3 rounded-pill text-white py-2 book-table ' >OUR MENU</button>
      <button className=' border-2 px-3 rounded-pill text-white py-2  book-table ' >BOOK A TABLE</button>
      </div>
      </div>
      <div className="col-md-6 d-flex d-md-block justify-content-center  ">
        <div className="video-btn positon-absloute ms-md-auto">
          
          </div>
        
      </div>
    </div>
  </div>
  </section>
  </>
}
