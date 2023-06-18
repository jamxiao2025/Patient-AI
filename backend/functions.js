const fs = require('fs');
const pdf = require('pdf-parse');
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();
//const prompt = "Listed below are all 18 identifiers under HIPAA, look through the given data file and replace any personal identifier with a xxxxx . Make sure to replace anything that can be seen as personally identifiable given an experts discretion. Remove any identifiable location, time, date, or action that can be tracked back to the patient. Remove hospital names, hospital visits that my be able to trach back to the patient. Remove relationships to the patient and family descriptions or composition. Remove all times and dates and remove when the data was retrieved. Remove any info related to trends that can be traced back to the patient. Remove any times and dates related to hospital visits and follow up appointments. Remove the retrieval date and time of the information.\n\nGiven this patient data form:\n"
//const prompt = "Listed below are all 18 identifiers under HIPAA, look through the given data file and replace any personal identifier with a xxxxx . Make sure to replace anything that can be seen as personally identifiable given an experts discretion. When removing, don't instantly remove an entire sentence/or paragraph, please make sure to only remove key words that you think are identifiers which are explained in the following sentences. Remove any identifiable location, time, date, or action that can be tracked back to the patient. Remove hospital names, hospital visits that my be able to trach back to the patient. Remove relationships to the patient and family descriptions or composition. Remove all times and dates and remove when the data was retrieved. Remove any info related to trends that can be traced back to the patient. Remove any times and dates related to hospital visits and follow up appointments. Remove the retrieval date and time of the information. Remove the Doctor's name as well. Given this patient data form: \n"
const prompt = "Given the patient data, please replace all 18 HIPAA identifiers with xxxxx. This includes removing all names, all addresses, and all geographic information smaller than a state. Replace all elements of dates \nRemove all telephone numbers, fax numbers, email addresses, social security numbers, medical record numbers, health plan beneficiary numbers, account numbers, certificate/license numbers, vehicle identifiers and serial numbers, device identifiers and serial numbers, URLs, IP addresses, biometric identifiers, and any full face photographic images. \nAlso, replace any other unique identifying number, characteristic, or code, including any characteristic that could uniquely identify the individual. This includes information about patient relationships and any actions related to the hospital, such as time constraints on follow-up appointments and visits to other hospitals.\n Finally, replace any identifiers for the patient file itself, such as when it was retrieved, recorded, and sent. Remove the date in the retrivied part of the data as well. Also make sure to remove doctors name:"
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
  });
const openai = new OpenAIApi(configuration);


const pdfToText = async (pdfFile) => {
    let dataBuffer = fs.readFileSync(pdfFile);
    console.log(typeof(dataBuffer))
    const data = await pdf(dataBuffer)
    return data.text
    /*pdf(dataBuffer).then(function(data) {
        console.log(`PDF File has been processed: ${data.text}`)
        return data.text
    });*/
}

const gptDeIdentify = async (data) => {
    console.log(prompt + data)

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt + data,
        temperature: 0,
        max_tokens: 1800,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
    console.log(response.data)
    return response.data
}

module.exports = {pdfToText, gptDeIdentify}