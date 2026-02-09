import {supabaseClient} from "./supabaseClient";

const apiCall = async (tableName) => {
    const {data, error} = await supabaseClient.from(tableName).select("*");

    if(error){
        console.log(error);
    }else{
        return data;    
    }
}

export default apiCall;