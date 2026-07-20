import { useState } from 'react'
import Carousel from './Carousel/Carousel'

function FooterLink({ item }){
  return (
    <a className='underline hover:no-underline hover:text-[#777777] transition ' href={item.link} target='_blank' >
      { item.label }
    </a>
  )
}

function App() {

  const links = [
    {
      label: 'Github', 
      link: 'https://github.com/lmaqungo'
    }, 
    {
      label: 'Email', 
      link: 'mailto:lmaqungo1@gmail.com'
    }
  ]

return (
  <div className='min-h-screen bg-neutral-100 flex justify-center py-12 px-8 text-sm ' >
    <div className='max-w-xl min-h-full flex flex-col gap-8 justify-between sm:justify-start ' >
      <div className='flex justify-between' >
        <div className='flex flex-col' >
          <p>Luyanda Maqungo</p>
          <p className='text-gray-400' >Software Engineer</p>
        </div>
        <div className='flex gap-8' >
          <a className='underline hover:no-underline hover:text-[#777777] transition' href='' >cv</a>
          <a className='underline hover:no-underline hover:text-[#777777] transition' href='' >work</a>
        </div>
      </div>
        <p className='whitespace-pre-line' >
        {
          `I am a South Africa-based software engineer who specializes in building web applications, with experience in React, Tailwind CSS, and Nodejs. 
          If you need somebody reliable to build your product, I'm here to help.`
        }
        </p>
      <Carousel />
      <div className='text-center flex flex-col items-center gap-2.5' >
          <p className='font-bold' >Get in Touch</p>
          <p className='text-[#777777] w-6/10' >Stay updated on my personal projects or reach out for a chat! </p>
          <div className='flex gap-2.5' >
            {
              links.map(link => <FooterLink item={link} /> )
            }
          </div>
      </div> 
    </div>
  </div>
)
}

export default App
