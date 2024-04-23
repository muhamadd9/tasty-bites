import React, { useEffect, useState } from 'react'
import styles from './NavBar.module.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../Assets/Images/logo.png'
import { NavLink } from 'react-bootstrap';
import TopBar from '../TopBar/TopBar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../Loader/Loader';


export default function NavBar() {
  const[search,setSearch] = useState(true) ;
  const[isScrolled,setIsScrolled] = useState(false) ;
  const[searchMeals,setSearchMeals] = useState([])
  const[Loading,setLoading] = useState(false)

  async function getSerachedMeals(mealName){
    setLoading(true)
      try {
        let {data} = await axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        setSearchMeals(data)
        setLoading(false)

      } catch (error) {
        console.log(error);
      }
  }

  function switchSearchButton(){
    search?setSearch(false):setSearch(true);
    
  }
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
  <TopBar/>
  <Navbar expand="lg" className={`${isScrolled ? 'bg-nav-scrolled' :' bg-nav' }  navbar navbar-dark positon-relative fixed-top `}>
      <Container  className=''>
        <Navbar.Brand href="#" className=' d-flex align-items-center  '>
        <img src={logo} style={{'width' : '55px' , 'height':'60px'}} alt="" />
        <h2 className='fw-semibold px-2  m-0'>Tasty Bites</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className=''>
          <Nav hidden={!search}
            className="mx-auto ps-md-5 ps-4 my-2 my-lg-0 text-white positon-absloute  "
            style={{ maxHeight: '350px' }}
            navbarScroll
          >
            <NavLink href='#header'>Home </NavLink>
            <NavLink href='#about'>About </NavLink>
            <NavLink href='#menu'>Menu </NavLink>
            <NavLink href='#chefs'>Chefs </NavLink>
            <NavLink href='#contact'>Contact </NavLink>
          </Nav>
          <div className="d-flex align-items-center ms-auto mt-3 mt-md-0 ">
          <Form className="d-flex me-auto  ">
            <div className="search-container position-relative">
            <Form.Control 
              type="search" placeholder="Search"  onChange={(e)=>getSerachedMeals(e.target.value)} className="me-md-2 w-100 rounded-pill" aria-label="Search" hidden={search}
            />
            <div className="search-bar mt-2 rounded-3 p-2  position-absolute  w-100" hidden={search}>
              {Loading?<Loader/>:null}
              {searchMeals.length == 0 || searchMeals.meals == null?<Link className='text-white text-decoration-none'><div className='position-relative'>no items found</div> </Link>:
              searchMeals?.meals?.map((meal)=>(
                <Link className='text-white text-decoration-none' to={`meal/${meal.idMeal}`}><p className=' position-relative  '>{meal.strMeal}</p> </Link>
                ))
              }
              
            </div>
            </div>
            <Button className='' onClick={switchSearchButton} ><i className=' fas fa-light fa-magnifying-glass '></i></Button>
          </Form>
          <a href="#bookTable">

          <button className=' border-2 px-md-3 rounded-3 text-white py-2 book-table' >BOOK A TABLE</button>
          </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}
