import React from 'react'

export default function Contact() {
  return <>
  <section id='contact' className='contact'>
    <div className="container py-5">
    <h5 className='mb-3' >
        CONTACT US
      </h5>
      <div className="row my-5  ">
        <div className="col-md-4 ">
        <ul className='list-unstyled'>
                <li className='d-flex align-items-center mb-3 '>
                    <div className="li-icon me-3">
                    <i class="fa-lg fa-solid fa-location-dot"></i>
                    </div>
                    <div className="li-text text-sec">
                        <h6 className='fw-semibold mb-0'>Location</h6>
                        <p className='my-0'>MAADI</p>
                    </div>
                </li>
                <li className='d-flex align-items-center mb-3 '>
                    <div className="li-icon me-3">
                    <i class="fa-lg fa-regular fa-clock"></i>
                    </div>
                    <div className="li-text text-sec ">
                        <h6 className='fw-semibold mb-0'>Open Hours</h6>
                        <p className='my-0'>9AM - 12PM</p>
                    </div>
                </li>
                <li className='d-flex align-items-center mb-3  '>
                    <div className="li-icon me-3">
                    <i class="fa-lg fa-regular fa-envelope"></i>
                    </div>
                    <div className="li-text text-sec justify-content-between ">
                        <h6 className='fw-semibold mb-0'>Email</h6>
                        <p className='my-0'>info@example.com</p>
                    </div>
                </li>
                <li className='d-flex align-items-center mb-3 '>
                    <div className="li-icon me-3">
                    <i class="fa-lg fa-solid fa-phone"></i>
                    </div>
                    <div className="li-text text-sec">
                        <h6 className='fw-semibold mb-0'>Call</h6>
                        <p className='my-0'>+20 101 234 5678</p>
                    </div>
                </li>
            </ul>
        </div>
        <div className="col-md-8 text-center">
           <form action="">
            <div className="d-flex gap-4 mb-4">
            <input type="text" placeholder='Your Name' className='form-control w-50' />
            <input type="email" placeholder='Your Email' className='form-control w-50' />
            </div>
            <input type="text" placeholder='Subject' className='form-control w-100 mb-4' />
            <textarea placeholder='Message' name="" id="" className='form-control mb-4' cols="20" rows="4"></textarea>
            <button className='btn'>Send Message</button>
           </form>
        </div>
      </div>
    </div>
  </section>
  </>
}
