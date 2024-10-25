import React, { useState } from 'react'
import "./Mainmenu.css"

function Mainmenu() {
    let data = [
        {
            img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10398123/2019/12/3/52795871-cf37-46bd-a128-8d3479c767d81575349640658-Roadster-Men-Shirts-3221575349637459-1.jpg",
            name: "Cropped stay groovie OFf white",
            Offer: "Free shipping",
            price: " $ 10.90",
            subprice: 'or 9*$1.21',
            add: "Add to cart"
        },
        {
            img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/9713947/2022/3/28/2bf5f058-d050-4ba9-b87f-6cf33e4b2f9a1648444700686-The-Roadster-Lifestyle-Co-Men-Olive-Green-Regular-Fit-Solid--1.jpg",
            Offer: "12%off",
            name: "Basic Cactus White Tshirt",
            price: " $ 16.10",
            subprice: 'or 9*$1.21',
            add: "Add to cart"
        },
        {
            img: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/21472036/2023/1/9/8f34cc68-2023-4a86-b7fd-17b52041e0491673259824002Shirts1.jpg",
            Offer: "10%off",
            name: "Skater black Sweat shirt",
            price: " $ 19.50",
            subprice: 'or 9*$1.21',
            add: "Add to cart"
        },
        {
            img: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/26769818/2024/2/20/9fc0c966-5c3c-4397-a65a-12c8780dfa691708416982917-Men-Green--White-Slim-Fit-Seersucker-Striped-Casual-Sustaina-1.jpg",
            Offer: "10%off",
            name: "Black Tule Oversized",
            price: " $ 25.29",
            subprice: 'or 9*$1.21',
            add: "Add to cart"
        }
    ]
    return (
        <>
            <div className="menu-sec">
                <div className='menu-data'>
                    <h4>16 Product Found</h4>
                </div>
                <div>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {
                            data.map((val) => {
                                return (
                                    <>
                                        <div style={{ width: "25%",  objectFit: "cover" }} className='cards'>
                                            <div style={{margin: "30px"}} className='cards-data'>
                                                <img src={val.img} alt="" srcset="" style={{ width: "100%", objectFit: 'cover' }} />
                                                <h6 className='offers'>{val.Offer}</h6>
                                                <div>
                                                    <h3 style={{ maxWidth: '180px', textAlign: "center", margin: " 0 auto", marginBottom: "10px", minHeight: "45px" }} className='heads'>{val.name}</h3>
                                                    <h3 style={{ maxWidth: '180px', textAlign: "center", margin: "0 auto", marginBottom: "10px" }}>{val.price}</h3>
                                                    <h3 style={{ maxWidth: '180px', textAlign: "center", margin: "0 auto", marginBottom: "10px" }}>{val.subprice}</h3>
                                                    <div style={{ display: 'flex', justifyContent: "center" }}>
                                                        <button style={{ backgroundColor: "black", color: 'white', padding: "10px 20px" }}>{val.add}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
                <div className='cart'>
                    <button className='cart-btn'>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Mainmenu