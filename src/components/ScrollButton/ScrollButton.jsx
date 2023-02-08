import React, { useState, useEffect } from "react";
import './ScrollButton.scss';
import { HiChevronDoubleUp } from 'react-icons/hi'

function ScrollButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 20) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const handleClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <>
            {showButton ? (
                <button
                    className="animate__animated animate__bounceInUp btn-scroll"
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        backgroundColor: "#00a98f",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        padding: "10px 20px",
                        cursor: "pointer",
                        zIndex: "500"
                    }}
                    onClick={handleClick}
                >
                    {/* Ir al inicio */}
                    <HiChevronDoubleUp />
                </button>
            ) : (
                <button
                    className="animate__animated animate__fadeOutDown animate__faster btn-scroll-out"
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        backgroundColor: "#00a98f",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        padding: "10px 20px",
                        cursor: "pointer",
                        zIndex: "500"
                    }}
                    onClick={handleClick}
                >
                    <HiChevronDoubleUp />
                </button>
            )}
        </>
    );
}

export default ScrollButton;