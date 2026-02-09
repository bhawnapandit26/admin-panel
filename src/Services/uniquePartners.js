import { supabaseClient } from "./supabaseClient";

const uniquepartners = async (tableName) =>{
     const {data, error} = await supabaseClient.from(tableName).select("partnerIdentifier");
        if(error){
            console.log(error);
            return []
        }

        const uPartners = [...new Set(data.map(item => item.partnerIdentifier))];

        return uPartners;
}

export default uniquepartners;