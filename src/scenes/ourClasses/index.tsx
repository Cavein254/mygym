import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import Htext from '@/shared/Htext'
import { ClassType, SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import Class from './Class'

const classes:Array<ClassType> = [
    {
        name:"weight training classes",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam animi dolorem at omnis cumque amet dolor a exercitationem fugiat ducimus error, delectus facilis, maiores magni sunt eos numquam optio eligendi!",
        image:image1
    },
    {
        name:"Yoga classes",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam animi dolorem at omnis cumque amet dolor a exercitationem fugiat ducimus error, delectus facilis, maiores magni sunt eos numquam optio eligendi!",
        image:image2
    },
    {
        name:"Ab Core classes",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam animi dolorem at omnis cumque amet dolor a exercitationem fugiat ducimus error, delectus facilis, maiores magni sunt eos numquam optio eligendi!",
        image:image3
    },
    {
        name:"Adventure classes",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam animi dolorem at omnis cumque amet dolor a exercitationem fugiat ducimus error, delectus facilis, maiores magni sunt eos numquam optio eligendi!",
        image:image4
    },
    {
        name:"Fitness classes",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam animi dolorem at omnis cumque amet dolor a exercitationem fugiat ducimus error, delectus facilis, maiores magni sunt eos numquam optio eligendi!",
        image:image5
    },
    {
        name:"Training classes",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam animi dolorem at omnis cumque amet dolor a exercitationem fugiat ducimus error, delectus facilis, maiores magni sunt eos numquam optio eligendi!",
        image:image6
    }
]


type Props = {
    setSelectedPage: (value:SelectedPage) => void;
}

function OurClasses({setSelectedPage}: Props) {
  return (
    <section id="ourclasses" className='w-full bg-primary-300 '>
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className='mx-auto w-5/6'
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                    hidden:{opacity:0, x:-50},
                    visible:{opacity:1, x:0}
                }}
            >
                <div className='md:w-3/5 py-5'>
                    <Htext>OUR CLASSES</Htext>
                    <p className='py-5'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam animi dolorem at omnis cumque amet dolor a exercitationem fugiat ducimus error, delectus facilis, maiores magni sunt eos numquam optio eligendi!
                    </p>
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className='w-[2800px] whitespace-nowrap'>
                    {classes.map((item,index) => (
                        <Class key={`${item.name}-${index}`} name={item.name} image={item.image} description={item.description}/>
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses