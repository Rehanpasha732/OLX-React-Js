import { Carousel } from 'antd';
import React from 'react';
import img1 from './images/sllider.png' 
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Slider = () => (
  <Carousel autoplay>
    <div style={{}}>
      <h3><img src={img1}  style= {{width:"100%"}}/></h3>
    </div>
    <div>
    <h3><img src={img1}  style= {{width:"100%"}}/></h3>

    </div>
    <div>
    <h3><img src={img1}  style= {{width:"100%"}}/></h3>
    </div>
    <div>
    <h3><img src={img1}  style= {{width:"100%"}}/></h3>
    </div>
  </Carousel>
);

export default Slider;