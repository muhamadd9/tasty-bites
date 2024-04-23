import React from 'react'
import chef1 from '../../Assets/Images/chef-1.jpg'
import chef2 from '../../Assets/Images/chef-2.jpg'
import chef3 from '../../Assets/Images/chef-3.jpg'

export default function Chefs() {
    const chefs = [
        { id: 0, name: 'Gordon Ramsay', job: 'Executive Chef', image: chef3 },
        { id: 1, name: 'Julia Child', job: 'Head Chef', image: chef2 },
        { id: 2, name: 'Thomas Keller', job: 'Sous Chef', image: chef1 },
    ]
  return <>
  <section id='chefs' className='chefs py-5'>
    <div className="container py-4  text-center">
        <h2 className=' fw-semibold display-5 mb-5'>Our Proffesional Chefs</h2>
        <div className="row">
            {chefs.map((chef)=>(
                <div className="col-md-4 my-3 px-5 px-md-3">
                <div className="chef-data position-relative">
                    <div className="chef-image ">
                        <img src={chef.image} className='w-100' alt="" />
                    </div>
                    <div className="chef-info  d-flex flex-column justify-content-end pb-4 h-100 w-100 position-absolute  ">
                        <h6 className='h5 '>{chef.name}</h6>
                        <p className='fst-italic'>{chef.job}</p>
                        <div className="chef-accounts my-2">
                        <i className="account fa-brands fa-xl mx-2 fa-square-x-twitter"></i>
                        <i className="account fa-brands fa-xl mx-2 fa-facebook"></i>
                        <i className="account fa-brands fa-xl mx-2 fa-instagram"></i>
                        <i className="account fa-brands fa-xl mx-2 fa-linkedin"></i>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  </section>
  </>
}
