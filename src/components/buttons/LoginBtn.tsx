import React from "react";

interface ILoginBtnProps {
    text: string;
    onClick: () => void;
}

const LoginBtn = (props: ILoginBtnProps) => {
    return (
        <button className="flex py-2 px-4 border-2 border-black hover:bg-slate-200 items-center rounded-md mx-2" onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default LoginBtn;
