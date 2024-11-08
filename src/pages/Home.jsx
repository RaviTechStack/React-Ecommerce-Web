import React from 'react'
import Hero from '../components/hero/Hero'
import FeatureCard from '../components/featureCard/FeatureCard'
import Heading from '../components/heading/Heading'
import { useProdContext } from '../context/ProductContext'
import "./Home.css"
import Footer from '../components/footer/Footer'
import { Link } from 'react-router-dom'
import ProductCard from '../components/productCard/ProductCard'
import Nav from '../components/navbar/Nav'
const Home = () => {
  const { ...data } = useProdContext()
  return (
    <div>
      <Nav />
      <Hero />

      <div className="features flex">
        <FeatureCard icon="fa-truck" heading="Fast Delivery" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, excepturi!" />
        <FeatureCard icon="fa-money-bill" heading="7 days Money back" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, excepturi!" />
        <FeatureCard icon="fa-truck-fast" heading="easy return" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, excepturi!" />
        <FeatureCard icon="fa-lock" heading="secure payment" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, excepturi!" />
      </div>
      <Heading />
      <div className="feature-list flex">
        {data.isLoading ? data.featureProd.map((curr) => {

          "loading"

        }) : data.featureProd.map((curr) => <Link to={`prod/${curr.id}`} className='links'><ProductCard key={curr.id} img={curr.image} name={curr.name} price={curr.price} /></Link>
            
        )}


      </div>
      <Link to={"/allprod"}><button>ALl PROD</button></Link>
        <Footer />
    </div>
  )
}

export default Home
