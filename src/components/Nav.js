import React, { useEffect, useState } from 'react'

function Nav() {
    const [show,handleShow]=useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            }else {handleShow(false);}
        });
    //     return () => {
    //         window.removeEventListener("scroll");
    //     };
    },[]);


  return (
    <>
    <div className={`nav ${show && "nav_black"  }`}>
      <img className='nav_logo' 
      src='http://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png' 
      alt='netflix logo'></img>

      <img className='nav_avatar'
      src='https://www.vhv.rs/dpng/d/426-4264903_user-avatar-png-picture-avatar-profile-dummy-transparent.png'
      alt='avatar'></img>
    </div>
    </>
  )
}

export default Nav
