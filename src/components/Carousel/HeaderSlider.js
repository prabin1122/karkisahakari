import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './HeaderSlider.css'

function HeaderSlider() {
  var settings = {
    dots: true,
    autoplay: true,
    showArrows: true,
  }
  return (
    <div className='h-[500px]'>
      <Slider {...settings} >
        <div className='slider-backgroundImage1' >
          <div className='slider-box1'>
            <h3 >Your Trust is our best Deal.</h3>
            <h6>You can deposit money, borrow and get credit at over 18 million stores. Withdraw to your bank account, cash or use your debit Mastercard® card .</h6>
            <btn >Click Here</btn>
          </div>
        </div>
        <div className="slider-backgroundImage2">
          <div className='slider-box1'>
            <h3 >Your Trust is our best Deal.</h3>
            <h6>You can deposit money, borrow and get credit at over 18 million stores. Withdraw to your bank account, cash or use your debit Mastercard® card .</h6>
            <btn >Click Here</btn>
          </div>
        </div>
        <div className="slider-backgroundImage3">
          <div className='slider-box1'>
            <h3 >Your Trust is our best Deal.</h3>
            <h6>You can deposit money, borrow and get credit at over 18 million stores. Withdraw to your bank account, cash or use your debit Mastercard® card .</h6>
            <btn >Click Here</btn>
          </div>
        </div>
   
    </Slider>
    </div>
  )
}

export default HeaderSlider