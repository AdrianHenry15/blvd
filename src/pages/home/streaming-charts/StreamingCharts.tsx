import React from "react";
import ChartCard from "../ui/ChartCard";
import { Channels } from "../../../lib/enums";
import requests from "../../../api/Requests";

const StreamingCharts = () => {
    return (
        <div className="flex flex-col">
            <span className="section-text">Today's Streaming Charts</span>
            <div className="flex">
                <ChartCard fetchURL={requests.requestNowPlaying} name={Channels.NETFLIX} />
            </div>
        </div>
    );
};

export default StreamingCharts;
