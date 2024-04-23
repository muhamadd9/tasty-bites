import React from 'react'
import moreDetailsImg from "../../Assets/Images/book-table.png"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function MoreDetails() {
    const peopleArray = [
        { text: '1 PERSON' , calender : '22/04/2024' , time : '10AM' }
        , { text: '2 PERSON' , calender : '23/04/2024' , time : '12AM' }
        , { text: '3 PERSON'  , calender : '24/04/2024' , time : '2PM'}
        , { text: '4 PERSON' , calender : '25/04/2024' , time : '4PM' },
         { text: '5 PERSON' , calender : '26/04/2024' , time : '6PM' },
    ]
  return <>
  <section id='moreDetails' className='moreDetails'>
    <div className="container text-center pt-5 pb-3">
        <div className="more-title ">
        <h2 className='text-sec fw-semibold my-4'>
        <span><i class="fa-solid fs-4 text-main fa-quote-left"></i></span> YOU HAVE NO IDEA <br /> WHAT'S AT STEAK HERE! <span><i class="fa-solid span fs-4 text-main fa-quote-right"></i></span></h2>
        </div>
        <div className="row my-5 ">
            <img src={moreDetailsImg} alt="" className='img-fluid ' />
        </div>

        <div className="row my-5 py-3 pb-5 bookTable" id='bookTable'>
            <h3 className='text-sec my-0 fw-semibold h2 mb-5'>BOOK A TABLE</h3>
            <div className="col-md-3 mb-5 mb-md-0">
            <div class="dropdown">
                 <button class=" btn dropdown-toggle  fw-semibold w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                     1 Person
                </button>
                <ul className="dropdown-menu overflow-y-scroll w-100" style={{maxHeight:'150px'}}>
                    {peopleArray.map((people)=>(
                             <li >
                             <a className={`dropdown-item active}`} >
                                   {people.text}
                               </a>
                         </li>
                    ))}
               
                </ul>
            </div>
            </div>
            <div className="col-md-3 mb-5 mb-md-0">
            <div class="dropdown">
                 <button class=" btn dropdown-toggle  fw-semibold w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                 22/04/2024
                </button>
                <ul className="dropdown-menu overflow-y-scroll w-100" style={{maxHeight:'200px'}}>
                    {peopleArray.map((people)=>(
                             <li >
                             <a className={`dropdown-item fw-semibold active}`} >
                                   {people.calender}
                               </a>
                         </li>
                    ))}
               
                </ul>
            </div>
            </div>
            <div className="col-md-3 mb-5 mb-md-0">
            <div class="dropdown">
                 <button class="  btn dropdown-toggle  fw-semibold w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                     10AM
                </button>
                <ul className="dropdown-menu overflow-y-scroll w-100" style={{maxHeight:'200px'}}>
                    {peopleArray.map((people)=>(
                             <li >
                             <a className={`dropdown-item active}`} >
                                   {people.time}
                               </a>
                         </li>
                    ))}
               
                </ul>
            </div>
            </div>
            <div className="col-md-3 mb-5 mb-md-0">
            <button class=" bg-main btn btn-main  fw-semibold w-100" type="button" >
                     BOOK NOW
                </button>
            </div>
        </div>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27653.56566333143!2d31.241050726516367!3d29.959430089128283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458380c12aa4a31%3A0x4962f017c0a58ccf!2sOvio%20Maadi%20Restaurant!5e0!3m2!1sen!2seg!4v1713712751231!5m2!1sen!2seg" width="100%" height="400"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </section>
  </>
}
