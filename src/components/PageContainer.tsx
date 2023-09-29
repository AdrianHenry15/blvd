import React from "react";

interface IPageContainerProps {
    children: React.ReactNode;
}

// TODO: PageContainer FOR EACH PAGE
const PageContainer = (props: IPageContainerProps) => {
    return <div className="flex px-20 py-10">{props.children}</div>;
};

export default PageContainer;
