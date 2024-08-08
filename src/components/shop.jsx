import React, { useEffect, useState } from 'react'
import '../assets/css/header.css'
import '../assets/css/shop.css'   
import { Link } from 'react-router-dom'

const Shop = () => {
  const [data, setData] = useState([])
  const [loading,setLoading] = useState(true)

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const result = await response.json()
      setData(result)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  if(loading){
   return <div>loading...</div>
  }
   

  return (
    <div className="container mr-229 height-auto">
      <div className="products-section">
        {data.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <p className='resize-p'> <Link to="#">Sign in </Link>or Create an account to see pricing <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.62 20.8097C12.28 20.9297 11.72 20.9297 11.38 20.8097C8.48 19.8197 2 15.6897 2 8.68973C2 5.59973 4.49 3.09973 7.56 3.09973C9.38 3.09973 10.99 3.97973 12 5.33973C13.01 3.97973 14.63 3.09973 16.44 3.09973C19.51 3.09973 22 5.59973 22 8.68973C22 15.6897 15.52 19.8197 12.62 20.8097Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop
