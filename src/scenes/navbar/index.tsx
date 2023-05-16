import Logo from "@/assets/Logo.png";


const Navbar = () => {
    const flexBetween = "flex items-center justify-between";
    return (
        <nav className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6 `}>
        <div className={`${flexBetween} gap-16 w-full`}>
            <img alt="logo" src={Logo} />
            <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                    <p>Home</p>
                    <p>Benefits</p>
                    <p>Our Classes</p>
                    <p>Contact Us</p>
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