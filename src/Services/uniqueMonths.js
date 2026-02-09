import { supabaseClient } from "./supabaseClient"

const uniqueMonths = async (tableName) =>{
    const {data, error} = await supabaseClient.from(tableName).select("month");
    if(error){
        console.log(error);
        return []
    }

    const uMonths = [...new Set(data.map(item => item.month))];

    return uMonths;
}

export default uniqueMonths;