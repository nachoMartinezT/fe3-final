import { createContext } from "react";

export const themes = {
    light: {
        font:"black",
        background: "white"
    },
    dark: {
        font: "white",
        background:"black"
    }
};

const ThemeContext= createContext();

export default ThemeContext;
