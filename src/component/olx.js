import React from 'react'
import img from "./images/logo.png"
import img2 from "./images/olx-black.jpg"
import img3  from './images/footer.png'
import { CarOutlined } from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons'
import Slider from './slider'

import "./olx.css"
import Down from './Dropdown';
import Cards from './cards';


function Olx() {



    return (
        <div>
            {/* <div classNameName="container-fluid header"> */}
            <div className="upper">
                <div className="row first_line">
                    <div className="col-4 col-sm-4 col-md-1 col-lg-1 logo"> <img src={img} /></div>
                    <div className="col-4 col-sm-4 col-md-1 col-lg-1 motors"> <a href="##"><span className='car'><CarOutlined /></span>MOTORS</a></div>
                    <div className="col-4 col-sm-4 col-md-10 col-lg-10 motors "> <a href="##"> PROPERTIES</a></div>
                </div>
                <div className="srch">
                    <img className='black_img' src={img2} />
                    <div className='location' >
                        <select>
                            <option> Search city, area and localty </option>
                            <option>PAKISTAN</option>
                            <option>Use current location</option>
                            <option>See ads in all pakistan</option>
                        </select>
                        <input className='input_box' placeholder='find cars mobile and more...' /><span className='search_icon'><SearchOutlined /> </span>
                        {/* <div className="sell">
                            <a href='#' >login</a>
                        </div> */}
                    </div>

                </div>
            </div>
            <div className="nav">
                <span className='dropdown'><Down /></span>
                <a className='links'>Mobile Phones</a>
                <a className='links'>Cars</a>
                <a className='links'>Mobile Phones</a>
                <a className='links'>Motorcycles</a>
                <a className='links'>House</a>
                <a className='links'>TV - Video - Audio</a>
                <a className='links'>Tablets</a>
                <a className='links'>Land - Plots</a>

            </div>
            <Slider />

            <div className='Fresh ' style={{marginLeft:"45px"}}><h1>Fresh recommendations</h1></div>
            <div className='cards'>
                <Cards />
            </div>
            <img src={img3}/>



        </div>
    )
}

export default Olx