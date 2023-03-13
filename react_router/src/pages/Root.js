import React from "react";
import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";
import classes from "./Root.module.css"

const Root = () => {
    return (
        <>
            <MainNav />
            <main className={classes.content}>
                <Outlet />
            </main>
        </>
    );
};

export default Root;
