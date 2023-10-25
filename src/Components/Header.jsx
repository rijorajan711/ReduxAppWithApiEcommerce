import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Badge} from 'react-bootstrap'
import {useSelector} from "react-redux"


function Header() {
  
   const wishlist=useSelector((state)=>state.wishlistReducer)
   const cart=useSelector((state)=>state.cartReducer)
  return (
    <div>
       <Navbar expand="lg"  style={{zIndex:1}} className="bg-body-tertiary position-fixed top-0 w-100 mb-5" >
      <Container>
        <Navbar.Brand><Link to={"/"} style={{textDecoration:'none',fontWeight:'bold',color:'black'}} >E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link ><Link to={"/cart"} style={{textDecoration:'none',fontWeight:'bold',color:'black'}} >cart<Badge className='ms-2 rounded'>{cart.length}</Badge></Link></Nav.Link>
            <Nav.Link><Link to={"/wishlist"} style={{textDecoration:'none',fontWeight:'bold',color:'black'}} >wishlist<Badge className='ms-2 rounded'>{wishlist.length}</Badge></Link></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </div>
  )
}

export default Header
