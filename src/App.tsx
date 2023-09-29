import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
//ROUTES
import Home from "./pages/home/Home";
import JustAdded from "./pages/just-added/JustAdded";
import Trending from "./pages/trending/Trending";
import Watchlist from "./pages/watchlist/Watchlist";
import Reviews from "./pages/reviews/Reviews";

const App = () => {
    return (
        <section className="flex flex-col w-full">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/just-added" element={<JustAdded />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/watchlist" element={<Watchlist />} />
                <Route path="/reviews" element={<Reviews />} />
            </Routes>
        </section>
    );
};

export default App;
