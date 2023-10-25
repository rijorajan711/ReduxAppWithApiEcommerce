import React from 'react'
import { Row,Col,Card,Button } from 'react-bootstrap'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishList } from '../redux/wishlistSlice'
import { addToCart } from '../redux/cartSlice'
function Wishlist() {
  const dispatch=useDispatch()
  const products=useSelector((state)=>state.wishlistReducer)
  console.log(products)

   
   const handleWishListCart=(product)=>{
          dispatch(addToCart(product))
          dispatch(removeFromWishList(product.id))
   }


  return (
    <div style={{marginTop:'100px'}}>

      <Row>
      {
       products.length>0?products.map((product,index)=>(

      <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3} >
    <Card className='shadow rounded' style={{ width: '18rem',height:'30rem'}}>
      <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text >
         <p>{product?.description}</p>
         <h5>${product?.price}</h5>
        </Card.Text>
        <div className='d-flex flex-row justify-content-between'>

        
        <Button onClick={()=>dispatch(removeFromWishList(product.id))}  className='btn btn-light'><i className='fa-solid fa-trash text-danger fa-2x'></i></Button>
        <Button onClick={()=>handleWishListCart(product)} className='btn btn-light'><i className='fa-solid fa-cart-plus text-sucess fa-2x'></i></Button>
        </div>
      </Card.Body>
    </Card>
      
      </Col>

        )):<div style={{height:'60hv'}}  className='w-100 d-flex flex-column justify-content-center align-items-center'><img height={'250px'} width={'250px'} src='https://www.unboxindustry.com/assets/images/wishlistEmpty.png' className=''/><p className='text-danger fw-bolder fs-4'>Wishlist is Empty!!</p> <Link style={{textDecoration:'none'}}  to={"/"}> BACK TO HOME</Link></div>


      }
    </Row>
      

    </div>
  )
}

export default Wishlist
