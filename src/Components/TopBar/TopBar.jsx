import React, { useEffect, useState } from 'react'
import styles from './TopBar.module.css'
export default function TopBar() {
  const[isScrolled,setIsScrolled] = useState(false) ;
  function scrollNavBar(){
    window.scrollY > 200? setIsScrolled(true):setIsScrolled(false)
  }

  useEffect(() => {
    function handleScroll() {
      scrollNavBar();
    }
    window.addEventListener('scroll', handleScroll);
  }, []);
  return <>
  <div className={` ${isScrolled ? 'topBarScrolled' :'topBar' }  topBar py-2`}>
<div className="container ">
<div className="tasty-info ">
      <div className="d-flex numberr">
        <p className='me-2 my-0'><i class="fa-regular pe-1 text-main fa-mobile"></i>  (+20) 101 234 5678</p>
        <p className='my-0'><i class="fa-regular pe-1 text-main fa-clock"></i>9AM-12PM</p>
      </div>
      <p className='my-0 english-arabic'>En/Ar</p>
    </div>
</div>
  </div>
  </>
}
