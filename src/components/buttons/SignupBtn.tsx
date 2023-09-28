import React from "react";

interface ISignupBtnProps {
    text: string;
    onClick: () => void;
}

const SignupBtn = (props: ISignupBtnProps) => {
    return (
        <button className="flex py-2 px-4 bg-black text-white items-center rounded-md" onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default SignupBtn;
