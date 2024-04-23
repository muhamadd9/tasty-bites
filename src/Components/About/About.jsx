import React from 'react'
import aboutImage from '../../Assets/Images/about.jpg'
export default function About() {
  return <>
  <section id='about' className='about py-5'>
    <div className="container py-5 ">
      <div className="row py-3 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h2 className='fw-semibold text-center mb-4'>About Us</h2>
          <p className=''>Welcome to Tasty Bites, where flavors come alive. <br />
              Our mission is simple: to delight your senses with every dish we serve.</p>
          <ul className='list-unstyled'>
            <li className='d-flex align-items-center mb-2'>
              <div className="checkicon">
              <i class="fa-solid fa-check fa-xs"></i>
              </div>
              Fresh Ingredients
            </li>
            <li className='d-flex align-items-center mb-2'>
              <div className="checkicon">
              <i class="fa-solid fa-check fa-xs"></i>
              </div>
              Exceptional Taste
            </li>
            <li className='d-flex align-items-center mb-2'>
              <div className="checkicon">
              <i class="fa-solid fa-check fa-xs"></i>
              </div>
              Warm Hospitality
            </li>

          </ul>
          <p className='my-4'>Join us and immerse yourself in a world of culinary delights, where each bite tells a story of passion, creativity, and dedication. Whether you're a food enthusiast or a casual diner, our diverse menu and attentive service ensure a memorable experience that will keep you coming back for more.</p>
        </div>
        <div className="col-lg-6 ">
          <div className="image">
            <img src={aboutImage} alt="" className='w-100' />
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
}
