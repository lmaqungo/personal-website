import shoppingCart from './assets/brick-and-order.png'
import socialMedia from './assets/brain-rot.png'
import cvGenerator from './assets/the-resume.png'

const Projects = () => {

    const projects = [
            {   id: 0, 
                name: 'Brick & Order— Ecommerce store', 
                link: 'https://github.com/lmaqungo/shopping-cart', 
                img: shoppingCart, 
            }, 
            {   id: 1, 
                name: 'TheResume— CV generator', 
                link: 'https://github.com/lmaqungo/cv-application',
                img: cvGenerator, 
            }, 
            {   id: 2, 
                name: 'Brainrot— Social media app', 
                link: 'https://github.com/lmaqungo/social-media',
                img: socialMedia, 
            }, 
    ]

  return (
    <div className='max-w-full flex flex-col gap-8' >
        {
            projects.map((project, index) => {
                return(
                    <div className='flex flex-col gap-8' >
                        <div className='flex flex-col sm:flex-row gap-4 items-center sm:items-start'>
                            <img className='max-w-full sm:max-w-6/10 rounded-md ' src={project.img} alt="" />
                            <div className='flex flex-col self-stretch sm:justify-between gap-6' >
                                <p className='font-bold' >{project.name}</p>
                                <a className='self-end text-sm font-medium text-white bg-black rounded-lg p-2 hover:bg-gray-700 transition' href={project.link} target='_blank'>View on github</a>
                            </div>
                        </div>
                        { index < projects.length-1 && <hr className='border-dashed border-gray-400' />}
                    </div>
                )
            })
        }
    </div>
  )
}

export default Projects