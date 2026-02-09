import { useState, useEffect } from "react";
import uniqueMonths from "../Services/uniqueMonths";
import uniquepartners from "../Services/uniquePartners";

const Filter = ({tableName, selectedMonths, setSelectedMonths, selectedPartner, setSelectedpartner}) =>{

    const [uniqueMonthList, setuniqueMonthList] = useState([]);
    const [uniquePartners, setUniquepartners] = useState([]);

     useEffect(()=>{
        async function fetchData() {
            const months = await uniqueMonths(tableName);
            if(months.length > 0){
                setuniqueMonthList(months);
            }
        }

        fetchData()
    }, []);


     useEffect(()=>{
        async function fetchData() {
            const partners = await uniquepartners(tableName);
            if(partners.length > 0){
                setUniquepartners(partners);
            }
        }

        fetchData()
    }, []);
    




    return(
        <div className="flex gap-3 justify-between">
            <div className="monthSelector flex gap-3 w-1/2">
            <div>
                <span>Select months: </span>
                <select multiple onChange={(e)=>setSelectedMonths(prev=> prev.includes(e.target.value)? prev : [...prev, e.target.value])}>   
                    {uniqueMonthList.map((item)=>{
                        return(
                            <option key={item} value={item}>{item}</option>
                        )
                    })}
                </select>
            </div>
            <div className="w-full bg-white rounded-2xl">
                {selectedMonths.map((item, index)=><div key={index} className="bg-green-900 text-white px-1 py-0.5 rounded-lg my-1 mx-1 inline-flex">{item}<span className="bg-black text-white px-1 rounded-lg py-0 ml-1.5 cursor-pointer" onClick={()=> setSelectedMonths(prev => prev.filter(month=> month !== item))}>X</span></div>)}
                
            </div>
            </div>

             <div className="partnerSelector flex gap-3 w-1/2">
            <div>
                <span>Select Partner: </span>
                <select multiple onChange={(e)=>setSelectedpartner(prev=> prev.includes(e.target.value)? prev : [...prev, e.target.value])}>   
                    {uniquePartners.map((item)=>{
                        return(
                            <option key={item} value={item}>{item}</option>
                        )
                    })}
                </select>
            </div>
            <div className="w-full bg-white rounded-2xl">
                {selectedPartner.map((item, index)=><div key={index} className="bg-green-900 text-white px-1 py-0.5 rounded-lg my-1 mx-1 inline-flex">{item}<span className="bg-black text-white px-1 rounded-lg py-0 ml-1.5 cursor-pointer" onClick={()=> setSelectedpartner    (prev => prev.filter(month=> month !== item))}>X</span></div>)}
                
            </div>
            </div>

        </div>
    )
}

export default Filter;