import React from "react";

interface ITransparentBtnProps {
    text: string;
    onClick: () => void;
}

const TransparentBtn = (props: ITransparentBtnProps) => {
    return (
        <button className="flex p-2 hover:bg-slate-300 items-center rounded-md" onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default TransparentBtn;
