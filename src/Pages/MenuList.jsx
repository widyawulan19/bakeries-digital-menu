import React from 'react'
import '../Styles/Tea/MenuList.css'
import '../Styles/ListMenu.css'

import { FaThumbsUp } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

import teaMenu from '../Data/TeaMenu.json';
import bakeriesMenu from '../Data/BakeriesMenu.json'

import cat1 from '../Assets/mc1.png'
import cat2 from '../Assets/mc2.png'
import cat3 from '../Assets/mc3.png'

import MenuNavbar from '../Components/MenuNavbar';

function MenuList({
    selectedCategory,
    setSelectedCategory
}) {

    const categoryPic = {
        "BROWNIES": cat1,
        "BROOKIES": cat2,
        "CROOKIES": cat3
    };

    // Tampilkan list category dulu
    if (!selectedCategory) {
        return (
            <div className="list-container">

                <div className="lm-content">

                    <div className="lm-des">
                        <h3>
                            DISCOVER OUR BAKERY
                        </h3>

                        <p>
                            Explore our handcrafted sweet treats—freshly baked every day with carefully selected ingredients.
                        </p>
                    </div>

                    <div className="lm-category">
                        {bakeriesMenu.map((item, index) => (
                            <div
                                className="list-card"
                                key={index}
                                onClick={() =>
                                    setSelectedCategory(item.category)
                                }
                            >
                                <div className="list-img">
                                    <img
                                        src={categoryPic[item.category]}
                                        alt={item.category}
                                    />
                                </div>

                                {/* <h4>{item.category}</h4> */}
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        )
    }

    const currentCategory = bakeriesMenu.find(
        item => item.category === selectedCategory
    );

    if (!currentCategory) {
        return <p>Menu tidak ditemukan...</p>;
    }

    return (
        <div className='menu-list-container'>

            {/* <MenuNavbar /> */}

            <div className='menu-list-box'>

                {/* BADGE CATEGORY */}
                <div className="ml-badge">
                    <div className="badge-nav">
                        <div className="ml-icon" onClick={() => setSelectedCategory(null)}>
                            <IoIosArrowBack/>
                        </div>
                        <h2>{currentCategory.category}</h2>
                        <IoIosArrowBack style={{color:'#F5EFE5'}}/>
                    </div>
                    
                    <div className="ml-img">
                        <img
                            src={categoryPic[currentCategory.category]}
                            alt={currentCategory.category}
                        />
                    </div>
                </div>


                {/* MENU */}
                <div className="menu-box">
                    {currentCategory.items.map((menu, index) => (
                        <div className="ml-box" key={index}>

                            <div className="menu-title">

                                <h4
                                    className={
                                        menu.tags === "popular"
                                            ? "popular-title"
                                            : ""
                                    }
                                >
                                    {menu.title}

                                    {menu.tags === "popular" && (
                                        <FaThumbsUp className="popular-icon" />
                                    )}
                                </h4>

                                

                                <span>{menu.price}</span>

                            </div>

                            <p>{menu.desc}</p>

                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default MenuList;