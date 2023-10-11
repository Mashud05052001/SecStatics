import { useEffect, useState } from "react";
import CommonChart from "./CommonChart";
import ChartSelectNavigate from "../ChartSelectNavigate";

const AttendanceRate = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[]);
    return (
        <div>
            <div>
                <ChartSelectNavigate/>
            </div>
            <h1 className="text-center mt-8 text-3xl mb-5 font-semibold text-[#4a47ac]">Attendance Rate</h1>
            <CommonChart data={data} showingKey={"attendanceRate"} isPercentage={true}/>
        </div>
    );
};

export default AttendanceRate;