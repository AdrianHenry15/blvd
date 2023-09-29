import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
    return (
        <div className="flex items-center">
            <input
                className="flex border-black border-y-2 border-l-2 px-4 py-2 rounded-s-sm resize lg:w-96 w-72"
                placeholder="Inception, Breaking Bad, Westworld"
            />
            <div className="bg-black text-white rounded-e-md" style={{ padding: "14px" }}>
                <BsSearch />
            </div>
        </div>
    );
};

export default SearchInput;
