import React from 'react'
import { Row,Card,Col,Button } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../redux/wishlistSlice'
import { addToCart } from '../redux/cartSlice'

function Home() {
  const dispatch=useDispatch()
  const data=useFetch("https://dummyjson.com/products")
  
  
  return (

    <div style={{marginTop:'100px'}}>
   
    <Row>
      {
        data?.length>0?data?.map((product,index)=>(

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

        <Button onClick={()=>dispatch(addToWishlist(product))} className='btn btn-light'><i className='fa-solid fa-heart text-danger fa-2x'></i></Button>
        <Button onClick={()=>dispatch(addToCart(product))} className='btn btn-light'><i className='fa-solid fa-cart-plus text-sucess fa-2x'></i></Button>

        </div>
      </Card.Body>
    </Card>
      
      </Col>

        )):<p className='text-danger fw-bolder fs-4'>Nothing to Display!!</p>


      }
    </Row>
   
    </div>
  )
}

export default Home
