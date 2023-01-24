import React from 'react'
import { Link } from 'react-router-dom'

function Listofproducts() {
  return (

          <div className="container mt-2">
          <div className="row">
             <img className='col-6 m-1' src='https://image01.realme.net/general/20221128/1669626866394.jpg' style={{borderRadius:"30px", boxShadow:"2px 2px 20px lightgray"}}></img>
             <div className='col-5'>
                <div className='row'>
                     <img className='p-1 m-1' src='https://image01.realme.net/general/20220915/1663222596738.jpg' style={{borderRadius:"30px"}}></img>
                     <img className='p-1 m-1'  src='https://image01.realme.net/general/20191119/1574140735143.jpg'style={{borderRadius:"30px"}}></img>
                </div>
             </div>
          </div>
          </div>
  )
}

export default Listofproducts