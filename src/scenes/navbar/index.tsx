import Logo from "@/assets/Logo.png";
import { SelectedPage } from "@/shared/types";
import Link from "./Link";

type Props = {
    selectedPage:SelectedPage,
    setSelectedPage:(value:SelectedPage) => void;
};

const Navbar = ({selectedPage,setSelectedPage}:Props) => {
    const flexBetween = "flex items-center justify-between";
    return (
        <nav className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6 `}>
        <div className={`${flexBetween} gap-16 w-full`}>
            <img alt="logo" src={Logo} />
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
                    <p>Sign In</p>
                    <button>Become a Member</button>
                </div>
            </div>
        </div>
        </div>
        </nav>
    )
}

export default Navbar;