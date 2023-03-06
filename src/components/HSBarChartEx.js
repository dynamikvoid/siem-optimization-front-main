import { fontSize } from "@mui/system";
import React from "react";
import HSBar from "react-horizontal-stacked-bar-chart";

const HSBarChartEx = () => {

return(
    <div className="hsbar" style={{marginTop:10, width:1150, marginLeft:25}}>

    
    <HSBar
        showTextIn
        data={[
            { value: 50, description: "Azure 50%" },
            { value: 30, description: "Linux 30%" },
            { value: 20, description: "Ops Management 20%" }
        ]} 
        height={80}
        fontColor="rgb(50,20,100)"
        font-size={150}
        />
        </div>
)
        }

export default HSBarChartEx