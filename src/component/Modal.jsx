import React,{ useState } from 'react'

const Modal = ({setshow,el}) => {
    
    const [showbutton, setshowbutton] = useState(true)
  return (
    <div className='modal'>
    <div className='modal-box'>
    <button onClick={()=>setshow(false)}>X</button>
    <h1>{el.prod}</h1>
    <img src={el.image} alt="" />
    <h2>price: {el.price}</h2>
      
    </div>
    </div>
  )
}

export default Modal
