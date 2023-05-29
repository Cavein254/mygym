import Htext from '@/shared/Htext'
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
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
                <div className='md:w-3/5'>
                    <Htext>OUR CLASSES</Htext>
                    <p className='py-5'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam animi dolorem at omnis cumque amet dolor a exercitationem fugiat ducimus error, delectus facilis, maiores magni sunt eos numquam optio eligendi!
                    </p>
                </div>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default OurClasses