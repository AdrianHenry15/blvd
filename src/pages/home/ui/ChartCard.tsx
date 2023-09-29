import { Channels } from "../../../lib/enums";
import React, { useEffect, useState } from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import { SiNetflix } from "react-icons/si";
import axios from "axios";
import "./ChartCard.css";
import SmallMovieCard from "../../../components/cards/SmallMovieCard";

interface IChartCardProps {
    name: Channels;
    fetchURL: any;
}

const ChartCard = (props: IChartCardProps) => {
    const [movies, setMovie] = useState([]);

    useEffect(() => {
        axios.get(props.fetchURL).then((response) => {
            setMovie(response.data.results);
        });
    }, [props.fetchURL]);
    return (
        <div className="flex flex-col">
            {/* ICON AND TITLE */}
            <div className="flex items-center">
                <div className="bg-black p-2 rounded-md mr-2">
                    <SiNetflix size={30} style={{ color: "red" }} />
                </div>
                <span className="section-text">{props.name}</span>
            </div>
            {/* CHART SECTION */}
            <div className="flex flex-col">
                {/* CHART STAT */}
                <div className="flex">
                    <span className="chart-stat-number">1</span>
                    {/* <img src="" alt="motion-picture" /> */}
                    <div>
                        {movies.map((item, id) => {
                            return <SmallMovieCard key={id} item={item} />;
                        })}
                    </div>
                    {/* MOTION PICTURE NAME */}
                    <div className="flex flex-col">
                        <span className="mp-title">{/* MOTION PICTURE NAME */} DUMMY TEXT</span>
                        <span className="mp-aside-text">{/* SEASON OR MOVIE */} DUMBO</span>
                    </div>
                    {/* ARROW ICON THAT SHOWS GOOD RATINGS OR BAD RATINGS */}
                    <BiSolidUpArrow />
                </div>
            </div>
        </div>
    );
};

export default ChartCard;
