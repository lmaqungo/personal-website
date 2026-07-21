
import shoppingCart from '../assets/brick-and-order.png'; 
import cvGenerator from '../assets/the-resume.png'; 
import socialMedia from '../assets/brain-rot.png'; 

import styles from './carousel.module.css'

import Arrow from '../Arrow'

import { useState, useEffect } from 'react';

function ProjectLabel({ project }) {
    return (
        <a className={styles.projectLabel} href={project.link} target='_blank' >
            <span className='text-xs' >{ project.name }</span>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.41369 0C7.56919 0 7.71832 0.0617716 7.82828 0.171726C7.93823 0.28168 8 0.430809 8 0.586308V5.27677C8 5.43227 7.93823 5.5814 7.82828 5.69135C7.71832 5.80131 7.56919 5.86308 7.41369 5.86308C7.25819 5.86308 7.10906 5.80131 6.99911 5.69135C6.88916 5.5814 6.82738 5.43227 6.82738 5.27677V2.00165L0.993623 7.83542C0.883044 7.94222 0.734941 8.00131 0.581213 7.99998C0.427485 7.99864 0.280432 7.93698 0.171725 7.82827C0.0630193 7.71957 0.00135802 7.57251 2.2164e-05 7.41879C-0.00131369 7.26506 0.0577828 7.11696 0.164583 7.00638L5.99835 1.17262H2.72323C2.56773 1.17262 2.4186 1.11084 2.30865 1.00089C2.19869 0.890936 2.13692 0.741806 2.13692 0.586308C2.13692 0.430809 2.19869 0.28168 2.30865 0.171726C2.4186 0.0617716 2.56773 0 2.72323 0H7.41369Z" fill="black"/>
            </svg>
        </a>
    )
}

function Carousel() {

    const [activeItem, setActiveItem] = useState(0); 
    const [hover, setHover] = useState(false); 
    const slideDuration = 2500; 
    
    useEffect(() => {
        const toggleAutoplay = false; 

        if(toggleAutoplay){
            const autoplay = setInterval(() => {
                setActiveItem(currentItem => {
                    const newItem = currentItem + 1
                    if(newItem > projects.length-1){
                        return 0
                    } else {
                        return newItem
                    }
                })
            }, slideDuration);
            if(hover){
                clearInterval(autoplay)
            }
            return () => clearInterval(autoplay)
        }
        
    }, [hover])

    const projects = [
        {   id: 0, 
            name: 'Brick & Order', 
            link: 'https://github.com/lmaqungo/shopping-cart', 
            img: shoppingCart, 
            slideColor: 'white'
        }, 
        {   id: 1, 
            name: 'TheResume', 
            link: 'https://github.com/lmaqungo/cv-application',
            img: cvGenerator, 
            slideColor: '#F7F5F4'
        }, 
        {   id: 2, 
            name: 'Brainrot', 
            link: 'https://github.com/lmaqungo/social-media',
            img: socialMedia, 
            slideColor: 'black'
        }, 
    ]

    function nextSlide(){
        setActiveItem(currentItem => {
            if(currentItem === projects.length - 1){
                return 0
            } else {
                return currentItem+1
            }
        })
    }

    function prevSlide(){
        setActiveItem(currentItem => {
            if(currentItem === 0){
                return projects.length -1
            } else {
                return currentItem-1
            }
        })
    }


  return (

    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{backgroundColor:projects.find(item => item.id === activeItem ).slideColor } } className={styles.carouselOuter} >
        <ProjectLabel project={projects.find(item => item.id === activeItem )} />
        <div className={`max-w-full max-h-auto`} >
            <img loading="lazy" src={projects.find(item => item.id === activeItem ).img} alt="" className='w-full h-auto' />
        </div>
        <div className={`flex gap-2 bottom-2.5 left-2.5 ${styles.carouselFooter}`} >
            <Arrow onClick={prevSlide} />
            <Arrow onClick={nextSlide} direction={'right'} />
        </div>
        <span className={`text-xs py-0.5 px-3 bg-[#BEBEBE] rounded-md ${styles.carouselFooter} absolute right-2.5 bottom-2.5 `} >Paused</span>
    </div>
    
  )
}

export default Carousel