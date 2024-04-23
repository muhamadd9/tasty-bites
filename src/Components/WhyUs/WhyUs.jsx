import React, { useRef } from 'react'
import rotateImage from '../../Assets/Images/plat-1.png'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonials1 from '../../Assets/Images/testimonials-1.jpg'
import testimonials2 from '../../Assets/Images/testimonials-2.jpg'
import testimonials3 from '../../Assets/Images/testimonials-3.jpg'
import asset3 from '../../Assets/Images/assest-3.png'
import asset4 from '../../Assets/Images/assest-4.png'
import Slider from "react-slick";

export default function WhyUs() {
    const testimonials = [
        { image: testimonials1, name: 'John D', text: 'Delicious dishes, outstanding service. A culinary gem! Will definitely return for more delightful experiences.' },
        { image: testimonials2, name: 'Michael S', text: 'Fantastic meals, inviting atmosphere. Highly recommend! Perfect for gatherings or intimate dinners. Truly enjoyable dining.' },
        { image: testimonials3, name: 'David R', text: 'Incredible experience, top-notch dishes. Absolutely loved it! A must-visit for food enthusiasts. Memorable flavors and impeccable service.' },
    ]
    let sliderRef = useRef(null);
    const play = () => {
      sliderRef.slickPlay();
    };
    const pause = () => {
      sliderRef.slickPause();
    };
  
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      arrows:false
      
    };
    
  return <>
  <ParallaxProvider>
  <div className="containerr my-5 ">
    <img src={asset3} alt="" className='position-absolute asset3' />
    <img src={asset4} alt="" className='position-absolute asset4' />
  <h5 className='mb-3' >
        WHY US
   </h5>
   <h2 className='fw-bold '>Why Choose Our Restaurant
    </h2>
    <div className="row align-items-center my-0  ">
        <div className="col-lg-6">
        <Slider  ref={slider => (sliderRef = slider)} {...settings}>
            {testimonials.map((testimonial)=>(
                <div className="row align-items-center d-flex mb-4 ">
                <div className="col-5  ">
                   <div className="test-image">
                   <img src={testimonial.image} className='w-100' alt="" />
                   </div>
                </div>
                <div className="col-7 text-sec">
                    <h3 className='fw-semibold'>{testimonial.name}</h3>
                    <p className='text-sec fs-6 fst-italic '><span><i class="fa-solid text-main-opacity fa-quote-left"></i></span> {testimonial.text}  <span><i class="fa-solid text-main-opacity fa-quote-right"></i></span></p>
                </div>
            </div>
            ))}
         
        </Slider>
           
       
        </div>
        <div className="col-lg-4  offset-lg-2">
             <Parallax
                        className='overflow-x-hidden'
                        rotate={[
                            '360deg',
                            '0deg'
                        ]}>
            <img src={rotateImage} className='img-fluid' alt="" />
            </Parallax>
        </div>
    </div>
  </div>
  </ParallaxProvider>
  </>
}
