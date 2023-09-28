import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

interface IDropdownProps {
    text: string;
    // options: [React.ReactNode]
}

const Dropdown = (props: IDropdownProps) => {
    return (
        <div className="flex">
            <div className="flex items-center p-6 cursor-pointer hover:border-black border-transparent border-b-4">
                <span className="mr-2">{props.text}</span>
                <HiOutlineChevronDown size={15} />
            </div>
        </div>
    );
};

export default Dropdown;
