import React, { useEffect, useState } from 'react'
import styles from './Meal.module.css'
import testimage from '../../Assets/Images/plat-1.png'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'

export default function Meal() {
  let {mealId} = useParams()

  const[mealDetails,setMealDetails] = useState([])
  const[mealIngredients,setMealIngredients] = useState([]);
  const [mealMeasures, setMealMeasures] = useState([]);
  const[modalVisability,setModalVisability] =useState(false);
  const[loading,isLoading] = useState(false)

  async function getMealDetails(id){
    isLoading(true)
    try {
      let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    console.log(data?.meals[0]);
    setMealDetails(data?.meals[0])
    setMealIngredients(extractIngredients(data?.meals[0]));
    setMealMeasures(extractMeasures(data?.meals[0]));
    isLoading(false)
    } catch (error) {
      console.log(error);
      isLoading(true)
    }
  }

  function extractIngredients(meal) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(meal[`strIngredient${i}`]);
      }
    }
    return ingredients;
  }

  function extractMeasures(meal) {
    const measures = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strMeasure${i}`]) {
        measures.push(meal[`strMeasure${i}`]);
      }
    }
    return measures;
  }
  function CloseModal(e){
  if(e.key == 'Escape') {
    setModalVisability(false)
  }
  }
  useEffect(()=>{
    getMealDetails(mealId)
    document.addEventListener('keydown', CloseModal);
  },[])

  return <>
    <section className='meal min-vh-100 position-relative' id='meal'>
      <Link className='return' to={'/'}><i class=" fa-solid fa-rotate-left fa-2xl"></i></Link>
      <div className="container  py-5">
        {loading&&<Loader/>}
      <div className={`modall overflow-y-scroll p-4 ${!modalVisability && 'd-none'}`}>
        <div className="close-modal px-5 py-3  position-absolute end-0  ">
          <i className='fas fa-x fa-xl ' onClick={()=> setModalVisability(false)}></i>
        </div>
        <h2 className='text-sec text-center mb-4 mt-3 fw-semibold '>
        Instructions
        </h2>
        <p className='text-black'>{mealDetails?.strInstructions}</p>
      </div>
      <div className={`overlayy position-absolute  ${!modalVisability && 'd-none'}`}>
      </div>
        <div className="row my-5 py-5">
          <div className="col-12  position-relative ">
           <div className="meal-image d-none d-md-block overflow-hidden  position-absolute ">
           <img src={mealDetails?.strMealThumb} className='img-fluid' alt="" />
           </div>
            <div className="meal-title py-4 rounded-3 ps-md-5 d-flex align-items-center justify-content-between px-4">
             <div className="title d-flex align-items-center px-md-5">
             <h2 className=' text-black ms-md-5 me-md-4 my-0 fw-semibold'>{mealDetails?.strMeal}</h2>
              <button className='btn me-md-3 me-2'>{mealDetails?.strCategory}</button>
              <button className='btn'>{mealDetails?.strArea}</button>
             </div>
             <button className='btn bg-main mx-2'><a href={mealDetails?.strYoutube} target='_blank' className=''>
              VIDEO</a></button>
            </div>
          </div>
        </div>
        <div className="row  ">
          <div className="meal-instructions rounded-3  px-5 py-5">
            <h2 className='text-sec h4 pb-2'>Instructions</h2>
            <div className="meal-info mb-3 mt-4">
            <p className='text-black d-inline pe-2'>
            {mealDetails?.strInstructions?.slice(0,300)} ...
            </p>
            <button className='d-inline showmore text-black border-0 rounded-2' onClick={()=>setModalVisability(true)}>Show More</button>
            </div>
            <h2 className='text-sec h4 pb-2'>Ingredients</h2>
            <div className="ingredients mt-3 ">
              {mealIngredients?.map((ingredients,index)=>(
                  <div className="specific-ingredient position-relative d-inline-block me-2">
                  <button className='btn mb-2'>{ingredients}</button>
                   <div className="numbers text-black position-absolute bottom-100  rounded-2 text-center">{`${mealMeasures[index].slice(0,7)}`} </div>
                  </div>
              ))}
             
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}
