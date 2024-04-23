import React from 'react'
import styles from './Footer.module.css'
import logo from '../../Assets/Images/logo.png'
export default function Footer() {
  return <>
  <section id='footer' className='footer'>
    <div className="container py-5">
        <div className="row py-1 px-2">
          <div className=" col-6 mb-4 mb-md-0 col-md-3 align-items-center  d-flex ">
           <div className="row align-items-center g-2 ">
            <div className="col-lg-6 text-center">
            <img src={logo} alt="" className='img-fluid' />
            </div>
            <div className="col-lg-6">
            <h3 className='my-0 py-0 mx-lg-3 text-center  h2 fw-semibold'>TASTY <br /> BITES</h3>
            </div>
           </div>
          </div>
          <div className=" col-6 mb-4 mb-md-0 col-md-3">
            <h6 className='text-main fw-semibold mb-3'>USEFUL LINKS</h6>
            <ul className='list-unstyled'>
              <li className='mb-1'><a href="#header">home</a></li>
              <li className='mb-1'><a href="#about">about</a></li>
              <li className='mb-1'><a href="#menu">menu</a></li>
              <li className='mb-1'><a href="#chefs">chefs</a></li>
              <li className='mb-1'><a href="#contact">contact</a></li>
            </ul>
          </div>
          <div className=" col-6 mb-4 mb-md-0 col-md-3">
            <h6 className='text-main fw-semibold mb-3'>SERVICE</h6>
            <ul className='list-unstyled'>
              <li className='mb-1'>Pure</li>
              <li className='mb-1'>High Quality</li>
              <li className='mb-1'>Excellent</li>
              <li className='mb-1'>Awesome</li>
            </ul>
          </div>
          <div className=" col-6 mb-4 mb-md-0 col-md-3">
            <h6 className='text-main fw-semibold mb-3'>SOCIAL</h6>
            <ul className='list-unstyled d-flex'>
              <li className='mb-1 me-3'><i class="fa-brands fa-xl fa-square-x-twitter"></i></li>
              <li className='mb-1 me-3'><i class="fa-brands fa-xl fa-facebook"></i></li>
              <li className='mb-1 me-3'><i class="fa-brands fa-xl fa-instagram"></i></li>
              <li className='mb-1 me-3'><i class="fa-solid fa-xl fa-phone"></i></li>
            </ul>
          </div>
        </div>
    </div>
  </section>
  </>
}
