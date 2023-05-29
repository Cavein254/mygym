import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from 'react-hook-form';
// import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import Htext from "@/shared/Htext";

type Props = {
    setSelectedPage: (value:SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {
    const inputStyles = `mt-5 w-full rounded-lg bg-primary-500 px-5 py-3 placeholder-white`
    const {register, trigger, formState:{errors}} = useForm();
    const onSubmit = async (e:any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        >
            <motion.div
            className="md:w-3/5"
            initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                    hidden:{opacity:0, x:-50},
                    visible:{opacity:1, x:0}
                }}
            >
                <Htext><span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE</Htext>
                <p className="my-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium corrupti porro expedita, doloremque natus nobis, voluptate quaerat error incidunt saepe repellendus est nesciunt quo a, officia dolorum id? Fuga, exercitationem!</p>
            </motion.div>
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div
                className="mt-10 basis-3/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                    hidden:{opacity:0, y:50},
                    visible:{opacity:1, y:0}
                }}
                >
                    <form
                    target = "_blank"
                    onSubmit={onSubmit}
                    method="POST"
                    action="https://formsubmit.co/your@email.com"
                    >
                        <input 
                        className={inputStyles}
                        type="text"
                        placeholder="NAME"
                        {...register("name", {
                            required:true,
                            maxLength:100
                        })}
                        />
                        {errors.name && (
                            <p className="mt-1 text-primary-500 ">
                                {errors.name.type === "required" && "This field is required"}
                                {errors.name.type === "maxLength" && "Max length is 100"}
                            </p>
                        )}
                        <input 
                        className={inputStyles}
                        type="email"
                        placeholder="EMAIL"
                        {...register("email", {
                            required:true,
                            pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                        />
                        {errors.email && (
                            <p className="mt-1 text-primary-500 ">
                                {errors.email.type === "required" && "This field is required"}
                                {errors.email.type === "email" && "Invalid email address"}
                            </p>
                        )}
                        <textarea 
                        className={inputStyles}
                        rows={4}
                        cols={50}
                        placeholder="MESSAGE"
                        {...register("message", {
                            required:true,
                            maxLength:1000,
                        })}
                        />
                        {errors.message && (
                            <p className="mt-1 text-primary-500 ">
                                {errors.message.type === "required" && "This field is required"}
                                {errors.message.type === "maxLength" && "The maximum length should be 1000 characters"}
                            </p>
                        )}
                        <button
                            type="submit"
                            className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                        >
                            SUBMIT
                        </button>
                    </form>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs