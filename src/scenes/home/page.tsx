import HomePageGraphic from "@/assets/HomePageGraphic.png"
import HomePageText from "@/assets/HomePageText.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import UseMediaQuery from "@/hooks/UseMediaQuery"
import ActionButton from "@/shared/ActionButton"
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"


type Props = {
    selectedPage:SelectedPage
    setSelectedPage:(value:SelectedPage) => void;
}

const Home = ({setSelectedPage}:Props) => {
    const isAboveMediaQuery = UseMediaQuery("(min-width:1060px");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-6">
        <div>
            <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
                <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                    hidden:{opacity:0, x:-50},
                    visible:{opacity:1, x:0}
                }}
                className="z-10 mt-32 md:basis-3/5">
                    <div className="md:-mt-20">
                        <div className="relative">
                            <div className="before:absolute before:z-[-1] before:-left-20 before:-top-20 md:before:content-evolvetext">
                                <img alt="home-page-text" src={HomePageText}/>
                            </div>
                        </div>
                    </div>
                    <p className="mt-8 text-sm">
                        Unrivaled Gym. Unparallel Training Fitness Classes.
                        Studio to get the Body Shaped That you dream of ....
                        Get that body NOW
                    </p>
                </motion.div>
                <div className="flex mt-8 items-center gap-8">
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                    <AnchorLink
                    className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                    onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                    >
                     <p>Learn More </p>   
                    </AnchorLink>
                </div>
            </div>
            <div className="flex basis-3/5 justify:center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                <img alt="home-graphic" src={HomePageGraphic} />
            </div>
        </div>
        {isAboveMediaQuery && (
            <div className="h-[150px] w-full bg-primary-100 py-10">
                <div className="mx-auto w-5/6 ">
                    <div className="flex w-3/5 items-center justify-between gap-8">
                        <img alt="Sponsor" src={SponsorRedBull} />
                        <img alt="Sponsor" src={SponsorFortune} /> 
                        <img alt="Sponsor" src={SponsorForbes} />
                    </div>
                </div>
        </div>
        )}
    </section>
  )
}

export default Home