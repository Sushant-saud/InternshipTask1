import React, { useState } from 'react'
import compostyle1 from './compostyle1.css'
function Commment({data}) {
    const [show,setshow]=useState(data);
    return (
        <div className='Child-Comment'>
            <div className={data ? "UserImage active ":"UserImage" }>
                <img src="/Image/istockphoto-1051185180-612x612.jpg" alt="Profile-Pic" />
            </div>
            <div className='Comment-Info'>
                <h3 className='User-Name'>Rahul Gupta</h3>
                <span className='data'>2 months ago</span>
                <p className='Desc'>This is a great post</p>
            </div>
        </div>
    )
}

export default Commment;