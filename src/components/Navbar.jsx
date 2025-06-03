import React, { useContext } from 'react'
import PixabayContext from '../Context/PixabayContext'

const Navbar = () => {
    const{fetchImageByCategory,setQuery}=useContext(PixabayContext);

  return (
    <>

    <div className='container text-center my-4'>
      <button onClick={()=>fetchImageByCategory("nature")} type="button" className="btn btn-outline-primary mx-3">Nature</button>
      <button onClick={()=>fetchImageByCategory("science")} type="button" className="btn btn-outline-info mx-3">Science</button>
      <button onClick={()=>fetchImageByCategory("fashion")} type="button" className="btn btn-outline-secondary mx-3">Fashion</button>
      <button onClick={()=>fetchImageByCategory("travel")} type="button" className="btn btn-outline-danger mx-3">Travel</button>
      <button onClick={()=>fetchImageByCategory("health")} type="button" className="btn btn-outline-warning mx-3">Health</button>
      <button onClick={()=>fetchImageByCategory("food")} type="button" className="btn btn-outline-success mx-3">Food</button>
      <button onClick={()=>fetchImageByCategory("music")} type="button" className="btn btn-outline-light mx-3">Music</button>
      <button onClick={()=>fetchImageByCategory("sports")} type="button" className="btn btn-outline-info mx-3">Sports</button>
    </div>

    <div className="container" style={{width:'500px'}}>
    <input type="text" onChange={(e)=>setQuery(e.target.value)} className="form-control  bg-dark text-light"></input>
    </div>

    </>
  )
}

export default Navbar
