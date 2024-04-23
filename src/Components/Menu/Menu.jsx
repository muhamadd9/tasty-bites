import React, { useEffect, useState } from 'react'
import testimage from '../../Assets/Images/plat-1.png'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
import WhyUs from '../WhyUs/WhyUs';
import asset1 from '../../Assets/Images/assest-1.png'
import asset2 from '../../Assets/Images/assest-2.png'

export default function Menu() {
  const[categories,setCategories]=useState([])
  const[meals,setMeals]=useState([])
  const [activeCategory, setActiveCategory] = useState(null);
  const[loading,setLoading] = useState(false)

  let navigate = useNavigate()
  async function getAllCategories(){
    try {
      let {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      setCategories(data)
    } 
    
    catch (error) {
      console.log(error);
    }
  }

  async function getAllMeals(category){
    setLoading(true)
    setMeals([])
   try {
    let { data } = await  axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    setMeals(data.meals.slice(0, 20))
    setLoading(false)
   } catch (error) {
    console.log(error);
    setLoading(false)
   }
  }

  const handleCategoryClick = (category) => {
    setActiveCategory(category); 
    getAllMeals(category); 
  };
  
  useEffect(()=>{
    getAllCategories()
    getAllMeals('beef')
  },[])



  return <>
  <section className='menu py-5' id='menu'>
  <img src={asset1} alt="" className='position-absolute asset1' />
    <img src={asset2} alt="" className='position-absolute asset2' />
    <div className="container ">
      <h5 className='mb-3' >
        MENU
      </h5>
      <h2 className='fw-bold mb-4'>Check Our Tasty Menu</h2>
      <div className="cat-name d-flex align-items-center ">
      <h6 className='h5 fw-semibold m-0 pe-3'>CATEGORY</h6>
      <div class="dropdown">
  <button class=" bg-main btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    CHOOSE CATEGORY
  </button>
  <ul class="dropdown-menu overflow-y-scroll" style={{maxHeight:'200px'}}>
    <li onClick={()=>getAllMeals(`chicken`)}>
      <a className={`dropdown-item ${activeCategory === null && 'active'}`} onClick={() => handleCategoryClick(null)}>
         <img src={testimage} className='px-0' style={{ width: '30px', height: '30px' }} alt="" />All
      </a>
    </li>
    {categories?.categories?.map((cat)=>(
    <li onClick={()=>getAllMeals(`${cat.strCategory}`)}>
      <a className={`dropdown-item d-flex align-items-center ${activeCategory === cat.strCategory && 'active'}`} onClick={() => handleCategoryClick(cat.strCategory)}>
        <img src={cat.strCategoryThumb} className='px-0' style={{ width: '25px', height: '25px' }} alt="" />
        <p className='my-0 py-0 ps-2'>{cat.strCategory}</p>
      </a>

      </li>
    ))}
  </ul>
</div>
  </div>
  <div className="row my-3">
    {loading?<Loader/>:null}
    {meals?.map((meal)=>(
        <div key={meal.idMeal} onClick={()=>navigate(`/meal/${meal.idMeal}`)} className="category-meal d-flex flex-column align-items-center col-lg-2 col-md-4 col-6 text-center text-sec my-3">
        <div className="meal-image text-center overflow-hidden  p-0 m-0 mb-2">
          <img src={meal.strMealThumb} className='w-100 p-0 m-0' alt="" />
        </div>
        <h4 className='h5 mb-3'>
        {meal.strMeal.length > 15 ? `${meal.strMeal.slice(0, 15)}...` : meal.strMeal}
        </h4>
        <div className="read-more px-2 rounded-2 text-sec bg-white ">
          Read More
        </div>
      </div>
    ))}
  </div>
    <WhyUs/>
    </div>
  </section>
  </>
}
