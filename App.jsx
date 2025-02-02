
import React, { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router";

const App = () => {

    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode'))) || (false);
    console.log(JSON.parse(localStorage.getItem('isDarkMode')))
    
    return(
        <>
        <Header theme={[isDark, setIsDark]}/>
        <Outlet context={[isDark, setIsDark]}/>
        
        </>
    );
};

export default App;
