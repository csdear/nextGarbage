
import React, { useLayoutEffect, useState } from "react";

function WindowResize() {
    const dimensions = useWindowSize();
    console.log("WindowResize component. re-rendered");
    return (
    <div className="App">
        <h1>{"width: " + dimensions[0] + " height:" + dimensions[1]}</h1>
    </div>
    );
    }

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState([0, 0]);

        useLayoutEffect(() => {
                function updateWindowSize() {
                setWindowSize([window.innerWidth, window.innerHeight]);
            }
            window.addEventListener("resize", updateWindowSize);
            updateWindowSize();
            return () => window.removeEventListener("resize", updateWindowSize);
            }, []);
    return windowSize;
}

export default WindowResize;