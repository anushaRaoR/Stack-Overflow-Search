import axios from 'axios';


const API_URL = "http://api.stackexchange.com/2.2"

export async function getAnswersForQuestion(questionid){
    const {data} = await axios.get(API_URL+"/questions/"+questionid+"/answers?order=desc&sort=activity&site=stackoverflow&filter=!9Z(-wzu0T");
    return data;
}