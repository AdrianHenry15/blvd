import React from "react";
import SearchInput from "./inputs/SearchInput";
import LoginBtn from "./buttons/LoginBtn";
import SignupBtn from "./buttons/SignupBtn";
import Dropdown from "./dropdowns/Dropdown";
import { PiFilmSlateLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    return (
        <nav className="flex flex-col py-6 px-10 w-full shadow-lg bg-black bg-opacity-10">
            <div className="flex flex-col lg:flex-row lg:justify-center justify-evenly items-center">
                {/* LOGO AND NAME */}
                <div className="flex items-center pb-6">
                    <div className="flex items-center md:absolute left-0 pl-6">
                        <span className="font-semibold text-2xl">blvd</span>
                        <PiFilmSlateLight size={30} />
                    </div>

                    {/* PAGE NAVIGATION  */}
                    <div className="md:flex md:items-center hidden">
                        <span className="page-nav">Home</span>
                        <span className="page-nav">New</span>
                        <span className="page-nav">Trending</span>
                        <span className="page-nav">Watchlist</span>
                        <span className="page-nav">Review</span>
                    </div>
                    <div className="lg:hidden flex cursor-pointer right-0 absolute pr-6">
                        <RxHamburgerMenu size={20} />
                    </div>
                </div>
                {/* SEARCH INPUT */}
                {/* LOG IN BUTTON/HAMBURGER  */}
                <div className="hidden lg:flex right-0 absolute left-auto pr-4">
                    <LoginBtn text="Log In" onClick={() => {}} />
                    {/* SIGN UP BUTTON  */}
                    <SignupBtn text="Sign Up" onClick={() => {}} />
                </div>
            </div>
            <div className="flex mr-10 w-full justify-center items-center">
                <SearchInput />
            </div>
            {/* STREAMING SERVICES DROPDOWNS -- NETFLIX | AMAZON | HULU | MORE */}
            <div className="md:flex md:justify-center hidden">
                <Dropdown text="Netflix" />
                <Dropdown text="Amazon" />
                <Dropdown text="Hulu" />
                <Dropdown text="More" />
            </div>
        </nav>
    );
};

export default Navbar;
