import React, { useState } from 'react'

const ShowImg = ({img = [{url : ""}]}) => {
    const [selectImg, setSelectImg] = useState(img[0].url)
  return (
    <div className="imgContainer image-column center">
        <div className="small-img-menu center grid-four-row">
            {img.map((curElem)=>{
                return(
                    <img src={curElem.url} alt="" onClick={()=> setSelectImg(curElem.url)}/>
                )
            })}
        </div>
        <div className="mainImgContainer center">
        <img src={selectImg} alt="" className='prod-img' />
        </div>
        
        </div>

  )
}

export default ShowImg
