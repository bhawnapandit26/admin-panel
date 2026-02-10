import { useEffect, useState } from "react";
import Chart from "./Chart";
import apiCall from "../Services/apiCall";
import Filter from "./Filter";
import transformChartData from "../Services/transformChartData";

const Dashboard = () => {

    const [selectedAccordian, setSelectedAccordian] = useState("lead_partnerIdentifier_report");
    const [data, setData] = useState([]);
    const [selectedMonths, setSelectedMonths] = useState([]);
    const [selectedPartner, setSelectedpartner] = useState([]);
   

    useEffect(()=>{
        async function fetchData() {
            const data = await apiCall(selectedAccordian);
            if(data){
            setData(data);
            console.log(data);
        }
        }

        fetchData();
        
    }, []);

    const filteredData = data.filter(item =>
    selectedMonths.includes(item.month) &&
    selectedPartner.includes(item.partnerIdentifier)
    );

    const chartData = transformChartData(filteredData);

    return(
        <div className="dashboard-wrapper my-3 w-full shadow-sm shadow-gray-200 py-4 px-4 border border-gray-200 rounded-4xl flex flex-col gap-3">
            <div className="filter-section w-full bg-gray-100 rounded-2xl p-3">
                {<Filter 
                tableName={selectedAccordian}
                selectedMonths={selectedMonths}
                setSelectedMonths={setSelectedMonths}
                selectedPartner={selectedPartner}
                setSelectedpartner={setSelectedpartner}/>}
            </div>
            <div className="accordian-container flex gap-3">
                {/* <div className="accordian-left-panel w-1/6 flex flex-col gap-2.5 bg-gray-100 rounded-2xl p-3 min-h-dvh">
                    <button className="bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl cursor-pointer">Lead (Partner wise)</button>
                    <button className="bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl cursor-pointer">Lead (Country wise)</button>
                </div> */}
                <div className="accordian-right-panel w-full flex flex-col bg-gray-100 rounded-2xl p-3 ">
                    <div className="chart-container">
                   {selectedMonths.length > 0 && selectedPartner.length > 0 ? <Chart data={chartData} selectedMonths={selectedMonths}/> : <div className="text-center">Select Date and Month First to see Chart</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;