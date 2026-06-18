import React from 'react'
import '../Styles/Tea/Recommendation.css'
import bakeriesMenu from '../Data/BakeriesMenu.json'

import { FaFire } from "react-icons/fa";
import { TbCloverFilled } from "react-icons/tb";
import { BsLeafFill } from "react-icons/bs";

import img1 from '../Assets/rec1.png'
import img2 from '../Assets/rec2.png'



function Recommendation() {

  // Flatten semua item menu
  const allMenus = bakeriesMenu.flatMap(menu => menu.items)

  // Ambil chef favorite (1 item)
  const chefPick = allMenus.filter(item =>
    item.menuPicks?.includes("chef")
  )


  // Ambil guest favorites (bisa banyak)
  const guestPicks = allMenus.filter(item =>
    item.menuPicks?.includes("guest")
  )

  //Ambil more chef fav
  const bakerPick = allMenus.find(item =>
    item.menuPicks?.includes("baker")
  )

  // Mapping gambar berdasarkan title
  const menuImages = {
    "Nutella Crookie": img1,
    "Classic Crookies":img2,
  }

  return (
    <div className='sp-container'>
      <div className="sp-content">

      {/* CHEF FAVORITE */}
      <div className="chef-pick">

        <div className="chef-badge">
          <p>
            FEATURED PICK
          </p>
        </div>

        {bakerPick && (
          <div className="chef-card">
            <div className="pic-img">
              <img
                src={img1}
                alt='baker pick'
              />
            </div>
            <div className="chef-desc">
              <h4>{bakerPick.title} 
                  <span>{bakerPick.price}</span>
              </h4>
              <p>{bakerPick.desc}</p>
            </div>
          </div>
        )}

      </div>

      {/* GUEST FAVORITES */}
      <div className="guest-pick">

        <div className="guest-wrapper">
          <div className="guest-pic">
            <img
              src={img2}
              alt='chef pick'
            />
          </div>

          {guestPicks.map((item, index) => (

            <div
              className="guest-box"
              key={index}
            >
              <div className="chef-desc">

                <h4>
                  {item.title}
                  <span>{item.price}</span>
                </h4>

                <p>{item.desc}</p>

              </div>

            </div>

          ))}

        </div>
      </div>

      {/* CHEFT FAVORITES */}
      <div className="guest-pick">

        <div className="guest-badge">
          <p>
            MORE CHEF RECOMMENDATIONS
          </p>
        </div>

        <div className="guest-wrapper">

          {chefPick.map((item, index) => (

            <div
              className="guest-box"
              key={index}
            >

              <div className="chef-desc">

                <h4>
                  {item.title}
                  <span>{item.price}</span>
                </h4>

                <p>{item.desc}</p>

              </div>

            </div>

          ))}

        </div>
      </div>
      </div>

    </div>
  )
}

export default Recommendation