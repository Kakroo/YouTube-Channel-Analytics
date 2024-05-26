import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";

function Layout(){
    const [themeMode, setThemeMode] = useState("light");

    const lightTheme = ()=>{
        setThemeMode("light")
    }
    const darkTheme = ()=>{
        setThemeMode("dark")
    }

    useEffect(()=>{
        document.querySelector('html').classList.remove("light", "dark");
        document.querySelector('html').classList.add(themeMode)
      }, [themeMode]);

    return (
        <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
        <Header />
        <Outlet />
        <Footer />
        </ThemeProvider>
    )
}
export default Layout