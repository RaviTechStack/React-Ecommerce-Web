import React from 'react'
import "./Allprod.css"
import { useProdContext } from '../context/ProductContext'
import ListProd from '../components/listProd/ListProd'
import ProductCard from '../components/productCard/ProductCard'
import { Link } from 'react-router-dom'
import { useFilterContext } from '../context/FilterProdContext'
import Nav from '../components/navbar/Nav'
import Footer from '../components/footer/Footer'

const AllProd = () => {
  const { ...data } = useProdContext()
  const { ...filterData } = useFilterContext()
  const { grid_view, setGridView, setListView, sorting, filter, updateFilter } = useFilterContext()

  const getUniqueValue = (data, value) => {
    let tempData = data.map((currEle) => (currEle[value]))
    if(value === "colors"){
      tempData = [].concat(...tempData)
    }
    let uniData = ["All", ...new Set(tempData)]
    return uniData
  }

  let AllCategory = getUniqueValue(filterData.allProd, "category")
  let AllCompany = getUniqueValue(filterData.allProd, "company")
  let AllColor = getUniqueValue(filterData.allProd, "colors")
  console.log(data)

  return (
<>
<Nav />
    <div className='grid-Prod-Column'>
      <div className="sortingConatiner flex-col">
        <h2>Category</h2>
        <div className="category-menu">
          {AllCategory.map((currEle, inde) => (
            <button key={inde} value={currEle} name="category" onClick={updateFilter}>{currEle}</button>
          ))}
        </div>
        <div className="company">
          <select name="company" id="company" className='company-menu' onChange={updateFilter}>
            {AllCompany.map((currEle, inde) => (
              <option value={currEle}>{currEle}</option>
            ))}
          </select>
        </div>
        <div className="colors-filter">
          <p>Colors</p>
          {
            
             AllColor.map((curr, inde)=>{
              return(
                <button name= "color" key={inde} style={{backgroundColor: curr }}className={`clr`} value={curr} onClick={updateFilter} >
                </button>
              )
            })
          }
        </div>
        <div className="price-range">
          <h4>Price Range</h4>
          <div className="price-change flex">
          <input type="range" name="price" id="" value={filterData.filter.price} min={filterData.filter.min_val} max={filterData.filter.max_val} onChange={updateFilter}/>
          <p className='show-price'>{filterData.filter.price}</p>
          </div>
          
        </div>
      </div>
      <div className="prod-container">
        <div className="sorting-btn flex">
          <div className="grid-view-btns">
            <button onClick={setGridView} className={grid_view ? "grid-list-btn activeBtn" : "grid-list-btn"}>grid</button>
            <button onClick={setListView} className={grid_view ? "grid-list-btn" : "grid-list-btn activeBtn"}>list</button>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder='Search For Products' name='text' value={filter.text} onChange={updateFilter} />
          </form>
          <select name="sort" id="sort" onChange={sorting} >
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
            <option value="lowest">lowest</option>
            <option value="highest">highest</option>
          </select>
        </div>
        {grid_view ? <div className="prodDisplay">
          {data.isLoading ? "loading" : filterData.filterProd.map((curr) => (<Link to={`/prod/${curr.id}`} className='links'> <ProductCard key={curr.id} img={curr.image} name={curr.name} price={curr.price} /></Link>))}
        </div>
          : <div className='listShow'> {filterData.filterProd.map((curr) => (<Link to={`/prod/${curr.id}`} className='links'> <ListProd key={curr.id} productData={curr} /></Link>))}</div>}

      </div>
    </div>
    <Footer />
    </>
  )
}

export default AllProd
