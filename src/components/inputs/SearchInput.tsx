import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
    return (
        <div className="flex items-center">
            <input
                className="flex border-black border-2 px-4 py-4 rounded-s-md flex-1 w-96"
                placeholder="Inception, Breaking Bad, Westworld"
            />
            <div className="bg-black text-white rounded-e-md" style={{ padding: "22px" }}>
                <BsSearch />
            </div>
        </div>
    );
};

export default SearchInput;
