import Logo from "@/assets/Logo.png";
import { SelectedPage } from "@/shared/types";

type Props = {
    setSelectedPage: (value:SelectedPage) => void;
}

const Footer = ({setSelectedPage}: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-center mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt='logo' src={Logo} />
                <p className="my-5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae rem dolores odio dignissimos, dicta incidunt hic exercitationem tempora assumenda, perspiciatis quis non totam iusto animi unde necessitatibus, possimus eos? A?
                </p>
                <p>Evogym All Right Reserved. </p>
            </div>
            <div className="mt-16 basis:1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">perspiciatis quis non</p>
                <p className="my-5">amet consectetur adipisicing</p>
                <p className="my-5">Recusandae rem dolores</p>
            </div>
            <div className="mt-16 basis:1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">amet consectetur adipisicing</p>
                <p>(+254)33-334-212</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer