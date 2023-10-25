import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { removeFromCart,emptyCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Cart() {
   const navigate=useNavigate()
   const dispathch=useDispatch()
   const [total,setTotal]=useState(0)
  const cartArray=useSelector((state)=>state.cartReducer)
   const getCartTotal=()=>{
    if(cartArray.length>0){
    setTotal(cartArray.map(item=>item.price).reduce((total,element)=>total+element,0))
  
   }else{
    setTotal(0)
   }}

   const handleCart=()=>{
    dispathch(emptyCart)
    alert("Your order sucessfully placed ....")
    navigate("/")
   }

   useEffect(()=>{
    getCartTotal()
   },[cartArray])

  return (
    <div style={{marginTop:'100px'}}>
      { cartArray.length>0?
      <div className='d-flex justify-content-between'>

   <div className='col-lg-8'>

     <table className='table shadow border'>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Image</th>
          <th>Price</th>
          <th>Action</th>
       
        </tr>
      </thead>
      <tbody>


     
     { cartArray?.map((product,index)=>(


       <tr key={product.id}>
          <td>{index+1}</td>
          <td>{product.title}</td>
          <td><img width={'100px'} height={'100px'} src={product.thumbnail} alt='' ></img></td>
          <td>${product.price}</td>
          <td><button onClick={()=>dispathch(removeFromCart(product.id))} className='btn'><i className='fa-solid fa-trash text-danger fs-2x'></i></button></td>
         
        </tr>

      ))
     }      
    
      
      </tbody>
    </table>


    </div>
    <div className='col-lg-3 border '>
      <p className='text-primary'>Cart Summary</p>
      <h4 className='mt-3'> Total Product:<span>{cartArray.length}</span></h4>
       <h4>Total:<span className='text-danger fw-bolder fs-2'>${total}</span></h4>
       <div>
        <button onClick={handleCart} className='btn btn-success rounded'>Check Out</button>
        </div>
    </div>

      </div>
    :<div style={{height:'60hv'}}  className='w-100 d-flex flex-column justify-content-center align-items-center'><img height={'250px'} width={'250px'} src='https://www.unboxindustry.com/assets/images/wishlistEmpty.png' className=''/><p className='text-danger fw-bolder fs-4'>Wishlist is Empty!!</p> <Link style={{textDecoration:'none'}}  to={"/"}> BACK TO HOME</Link></div>
   
      }
    </div>
  )
}

export default Cart
