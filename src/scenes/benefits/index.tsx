import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';
import ActionButton from "@/shared/ActionButton";
import Htext from "@/shared/Htext";
import { BenefitType, SelectedPage } from "@/shared/types";
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Benefit from "./Benefit";


const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea sint consequuntur, fugiat exercitationem, laborum ratione optio alias hic quam fuga beatae non quasi."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100s of Diverse Classes",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea sint consequuntur, fugiat exercitationem, laborum ratione optio alias hic quam fuga beatae non quasi."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea sint consequuntur, fugiat exercitationem, laborum ratione optio alias hic quam fuga beatae non quasi."
    }
]

const container = {
    hidden:{},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value:SelectedPage) => void;
}
function Benefits({setSelectedPage}:Props) {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 md:mt-[10rem]">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
            <motion.div className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden: {opacity:0, x: -15},
                visible:{opacity:1,x:0}
            }}
            >
                <Htext>MORE THAN JUST A GYM.</Htext>
                <p className="my-5 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea sint consequuntur, fugiat exercitationem, laborum ratione optio alias hic quam fuga beatae non quasi. Accusantium obcaecati doloribus magnam, possimus soluta libero.</p>
            </motion.div>
            <motion.div className="md:flex items-center justify-between gap-8 mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            variants={container}
            >
                {benefits.map((benefit:BenefitType) => (
                    <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setSelectedPage = {setSelectedPage}/>
                ))}
            </motion.div>
            <div className='mt-16 items-center justify-between gap-20 md:mt-20 md:flex'>
                <img src={BenefitsPageGraphic} alt="main image" className="mx-auto"/>
                <div>
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstactWaves">
                            <Htext>MILLIONS OF HAPPY CUSTOMERS GET {" "}
                            <span className="text-primary-500">FIT</span></Htext>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="my-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit magni dolore, numquam natus ad alias, consequuntur laborum tempora similique officiis facilis adipisci corporis voluptatem in consequatur dolorum pariatur illum vero!
                    </p>
                    <p className="mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facilis enim quis eum, nemo omnis iusto vel! Maxime in, esse excepturi unde ipsam aliquid quas eaque quasi error cumque rerum!
                    </p>
                </div>
                <div className="relative mt-16">
                    <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                    </div>
                </div>
            </div>

        </motion.div>
    </section>
  )
}

export default Benefits