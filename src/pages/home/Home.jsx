import React, { useState } from "react";
import './Home.css';
import Header from "./../../component/nevbar/Header/Header";
import ExplorerMenu from "../../component/ExplorerMenu";
import FoodDisplay from "../../component/foodDisplay/FoodDisplay";
import AppDownload from "../../component/appDownload/AppDownload";
const Home = ()=>{
    const [category, setCategory ] = useState("All")
    return(
        <div>
            <Header/>
            <ExplorerMenu category={category} setCategory = {setCategory} />
            <FoodDisplay category={category} />
            <AppDownload/>
            
        </div>
    )
}
export default Home
