import React from 'react'
import PixabayContext from '../Context/PixabayContext';
import { useContext } from 'react';

const Images = () => {
  
  const {imageData}=useContext(PixabayContext);
  return (
    <>
     <div className="container my-5">
    <div className='flex1'>
      {imageData.map((data)=>
        <div key={data.id}>
        <div className="item">
        <img src={data.largeImageURL} alt='img' />
        </div>
        
        </div>
      )}
    </div>
    </div>
    
    </>
   
    
  )
}

export default Images
