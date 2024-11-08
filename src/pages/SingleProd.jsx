import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProdDetail from '../components/prodDetail/ProdDetail'
import Loading from '../components/loading/Loading'
import "./singleProd.css"
import ShowImg from '../components/ShowImg/ShowImg'
import { useProdContext } from '../context/ProductContext'
import Nav from '../components/navbar/Nav'

const SingleProd = () => {
  const url = "https://api.pujakaitem.com/api/products"
    const {id} = useParams()
    const {isLoading, SingleProduct, singleData} = useProdContext()
    // console.log(SingleProduct)
    useEffect(()=>{
      singleData(`${url}?id=${id}/`)
    },[id])
    if (isLoading){
      return(
        <>
        <Loading />
        </>
      )
    }
  return (
    <>
    <Nav />
    <div className='grid-two-column '>
      <ShowImg img={SingleProduct.image} />
        <ProdDetail data ={SingleProduct}/>
    </div>
    </>
  )
}

export default SingleProd
