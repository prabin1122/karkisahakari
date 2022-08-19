import React from 'react'
import CEOImage from '../../assets/images/CEOImage.jpg'


function CompanyCEO() {
  return (
    <div className='flex flex-col bg-[#bcfd4c] mt-10 m-auto shadow-4xl mb-10 lg:flex-row lg:w-[900px]'>
        <div>
            <img src={CEOImage} className='w-[700px] shadow-4xl'/>
        </div>
        <div className='p-10 m-auto'>
            <h3 className='text-[28px] text-[#fff] font-bold break-all'>" Our goal is to be at the heart of the financial services industry as businesses expand across. "</h3>
            <br/><br/>
            <h4 className='text-[#6e6e6e] font-bold'>CEO</h4>
            <h5 className='text-[#6e6e6e]'>Karki Sarkar</h5>
            <hr className='border-[#fff] w-24 '/>
        </div>
    </div>
  )
}

export default CompanyCEO