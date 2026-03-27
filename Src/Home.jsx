import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import img4 from './image1/product4.jpg';
import img5 from './image1/natur2.jpeg';


const Home = () => {
  return (
    <div>
    <div className="product1">
      <img className='img1' src={img4} alt="pro" />
      <div className='product'>
        <h1 className='hd1'>OUR <br/> PRODUCTS</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quos, ipsum alias sint, veniam 
          temporibus et doloribus aliquid suscipit adipisci deleniti perferendis velit laboriosam odit fuga,
           architecto dolor sit hic?</p>
      </div>
    </div>

    <div className='about'>
      <img className='img2' src={img5} alt="img" />
      <div className='about1'>
        <h1 className='hd1'>ABOUT US</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus est, sequi, non eveniet, hic 
          explicabo cupiditate nam sint voluptatibus itaque illum magni corrupti culpa veritatis magnam. 
          Dignissimos, possimus nihil? Rem?</p>
        </div>
    </div>

    <div className='leadership'>
        <h1 className='hd1'>LEADERSHIP</h1>
    </div>

    </div>
    
  )
}

export default Home
