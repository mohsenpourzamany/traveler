import React from 'react'
import {Link} from 'react-router-dom'
import Booking from '../Component/Booking'
import Destination from '../Component/Destination'
import Packages from '../Component/package/Packages';

const PackagePage = () => {
  return (
    <>
     <div className="container-fluid page-header">
        <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center" style={{"minHeight": "400px"}}>
                <h3 className="display-4 text-white text-uppercase">Packages</h3>
                <div className="d-inline-flex text-white">
                    <p className="m-0 text-uppercase"><Link className="text-white" to="">Home</Link></p>
                    <i className="fa fa-angle-double-right pt-1 px-3"></i>
                    <p className="m-0 text-uppercase">Packages</p>
                </div>
            </div>
        </div>
    </div>
    <Booking />
    <Packages />
    <Destination />
    </>
  )
}

export default PackagePage