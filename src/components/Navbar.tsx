import React, { useState } from "react";
import SearchInput from "./inputs/SearchInput";
import LoginBtn from "./buttons/LoginBtn";
import SignupBtn from "./buttons/SignupBtn";
import { PiFilmSlateLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex flex-col py-6 px-10 w-full shadow-lg bg-black bg-opacity-10 sticky">
            <div className="flex flex-col lg:flex-row lg:justify-center justify-evenly items-center">
                {/* LOGO AND NAME */}
                <div className="flex items-center pb-6">
                    <div className="flex items-center md:absolute left-0 pl-6">
                        <span className="font-semibold text-2xl">blvd</span>
                        <PiFilmSlateLight size={30} />
                    </div>

                    {/* PAGE NAVIGATION  */}
                    <div className="md:flex md:items-center hidden">
                        <Link to="/" className="page-nav">
                            Home{" "}
                        </Link>
                        <Link to="/just-added" className="page-nav">
                            Just Added
                        </Link>
                        <Link to="trending" className="page-nav">
                            Trending
                        </Link>
                        <Link to="watchlist" className="page-nav">
                            Watchlist
                        </Link>
                        <Link to="reviews" className="page-nav">
                            Reviews
                        </Link>
                    </div>
                    {/* HAMBURGER FOR SMALL SCREENS */}
                    <div className="lg:hidden flex cursor-pointer right-0 absolute pr-6">
                        <RxHamburgerMenu size={20} />
                    </div>
                </div>
                <div className="hidden lg:flex right-0 absolute left-auto pr-4">
                    <LoginBtn text="Log In" onClick={() => {}} />
                    {/* SIGN UP BUTTON  */}
                    <SignupBtn text="Sign Up" onClick={() => {}} />
                </div>
            </div>
            {/* SEARCH INPUT  */}
            <div className="flex mr-10 w-full justify-center items-center">
                <SearchInput />
            </div>
        </nav>
    );
};

export default Navbar;
