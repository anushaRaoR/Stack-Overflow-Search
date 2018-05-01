import axios from 'axios';


const API_URL = "http://api.stackexchange.com/2.2"

export async function searchQuestion(ques){
    const {data} = await axios.get(API_URL+"/search?order=asc&sort=activity&site=stackoverflow&filter=!9Z(-wwYGT&intitle="+ques);
    return data;
}