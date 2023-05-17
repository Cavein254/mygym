import Logo from "@/assets/Logo.png";
import UseMediaQuery from "@/hooks/UseMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Link from "./Link";

type Props = {
    selectedPage:SelectedPage,
    setSelectedPage:(value:SelectedPage) => void;
};

const Navbar = ({selectedPage,setSelectedPage}:Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = UseMediaQuery("(min-width:1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    return (
        <nav className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6 `}>
        <div className={`${flexBetween} gap-16 w-full`}>
            <img alt="logo" src={Logo} />
            {isAboveMediumScreens ?(
                <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                    <Link page="Home" 
                    selectedPage = {selectedPage}
                    setSelectedPage = {setSelectedPage}
                    />
                    <Link page="Benefit" 
                    selectedPage = {selectedPage}
                    setSelectedPage = {setSelectedPage}
                    />
                    <Link page="Our Classes"
                    selectedPage = {selectedPage}
                    setSelectedPage = {setSelectedPage}
                    />
                    <Link page="Contact Us" 
                    selectedPage = {selectedPage}
                    setSelectedPage = {setSelectedPage}
                    />
                </div>
                <div className= {`${flexBetween}`}>
                    <div className="pr-8">
                    <p>Sign In</p>
                    </div>
                    <ActionButton setSelectedPage = {setSelectedPage}>Become a Member</ActionButton>
                </div>
            </div>
            ):(
                <button className="rounded-full bg-yellow-500 p-2"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <Bars3Icon className="h-6 w-6 text-white" />
                </button>
            )
        }
        </div>
        </div>
        </nav>
    )
}

export default Navbar;