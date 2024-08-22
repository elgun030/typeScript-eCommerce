import React from 'react'

// Components
import ProductItem from '../ProductItem.tsx'
import { useState, useEffect } from 'react'


const FourProducts: React.FC = (props) => {
  const [products, setProduct] = useState()
  
  const fetchProduct = async () =>{
const response = await fetch('http://localhost:3000/products')
const data = await response.json()
setProduct(data)
console.log(data);


  }
  useEffect(() => {
    fetchProduct()
  },[])
  return (
    <div className='grid grid-cols-4 gap-7'>
      {/* Product */}
    {products?.map((product:any) => {
    
    return <ProductItem product={product}/>}).splice(0,4)}
    </div>
  )
}

export default FourProducts


