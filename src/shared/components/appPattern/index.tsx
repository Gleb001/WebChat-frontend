import "./styles.scss";
import { Children } from "react";
import type { AppContainerType } from "./types";

// main
const AppContainer: AppContainerType = {
    self({ children }) {
        return (
            <div id="app-container">{
                children && Children.map(children, child => child)
            }</div>
        )
    },
    LeftSidebar({ style, children }) {
        return (
            <div style={style} id="left-sidebar">{
                children && Children.map(children, child => child)
            }</div>
        );
    },
    MainWindow({ style, children }) {
        return (
            <div style={style} id="main-window" >{
                children && Children.map(children, child => child)
            }</div>
        );
    },
    AdditionalWindow({ style, children }) {
        return (
            <div style={style} id="additional-window">{
                children && Children.map(children, child => child)
            }</div>
        );
    },
};

// export
export default AppContainer;
