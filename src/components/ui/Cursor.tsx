/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect } from "react";
import styles from "./Cursor.module.css";

const Cursor = () => {
    useEffect(() => {
        const handleMouseMove = (e: any) => {
            const x = e.clientX + window.scrollX;
            const y = e.clientY + window.scrollY;

            document.documentElement.style.setProperty("--x", `${x}px`);
            document.documentElement.style.setProperty("--y", `${y}px`);
        };

        // Add the mousemove event listener
        document.body.addEventListener("mousemove", handleMouseMove);

        // Clean up the event listener on unmount
        return () => {
            document.body.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return <div id="invertedcursor" className={styles.cursor}></div>;
};

export default Cursor;
