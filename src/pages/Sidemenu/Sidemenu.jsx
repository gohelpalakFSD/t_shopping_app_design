import React from 'react'
import './Sidemenu.css'

function Sidemenu() {
    return (
        <>
            <div className="section">
                <div className="container">
                    <div className='side-data'>
                        <h1><i class="fa-brands fa-github"></i></h1>
                        <div>
                            <div style={{ marginLeft: "40px" }}>
                                <h1>Sizes:</h1>
                            </div>
                            <div className='size-chart'>
                                <div className='size'>
                                    <h6>XS</h6></div>
                                <div className='size'>
                                    <h6>S</h6></div>
                                <div className='size'>
                                    <h6>M</h6></div>
                                <div className='size'>
                                    <h6>ML</h6></div>
                                <div className='size'>
                                    <h6>L</h6></div>
                                <div className='size'>
                                    <h6>XL</h6></div>
                                <div className='size'>
                                    <h6>XXL</h6></div>
                                    <div className='size'>
                                    <h6>XXL</h6></div>
                            </div>
                        </div>
                        <div style={{marginLeft:"40px", paddingTop:"20px"}}>
                            <h4 style={{marginBottom:"10px"}}>Leave a star on Github if this Repository is useful:</h4>
                            <a href='#' >Star</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Sidemenu