import React from "react";
import { PiFilmSlateLight } from "react-icons/pi";
import SearchInput from "./inputs/SearchInput";
import TransparentBtn from "./buttons/TransparentBtn";
import LoginBtn from "./buttons/LoginBtn";
import SignupBtn from "./buttons/SignupBtn";
import Dropdown from "./dropdowns/Dropdown";

const Navbar = () => {
    return (
        <nav className="py-6 px-10 w-full">
            <div className="flex justify-between">
                {/* LOGO AND NAME */}
                <div className="flex items-center">
                    <span className="font-semibold text-2xl">blvd</span>
                    <PiFilmSlateLight size={30} />
                </div>
                {/* SEARCH INPUT */}
                <div className="flex">
                    <div className="mr-10">
                        <SearchInput />
                    </div>
                    {/* WRITE A REVIEW TRANSPARENT BUTTON */}
                    <TransparentBtn text="Write a Review" onClick={() => {}} />
                </div>
                {/* LOG IN BUTTON  */}
                <div className="flex">
                    <LoginBtn text="Log In" onClick={() => {}} />
                    {/* SIGN UP BUTTON  */}
                    <SignupBtn text="Sign Up" onClick={() => {}} />
                </div>
            </div>
            {/* STREAMING SERVICES DROPDOWNS -- NETFLIX | AMAZON | HULU | MORE */}
            <div className="flex justify-center">
                <Dropdown text="Netflix" />
                <Dropdown text="Amazon" />
                <Dropdown text="Hulu" />
                <Dropdown text="More" />
            </div>
        </nav>
    );
};

export default Navbar;
