// import { StartTranscriptionJobCommand } from "@aws-sdk/client-transcribe";
// import { transcribeClient } from "./libs/transcribeClient.js";
const { v4: uuidv4 } = require('uuid');
const { TranscribeClient, CreateLanguageModelCommand } = require("@aws-sdk/client-transcribe");
const AWS = require('aws-sdk');
const credentials = new AWS.SharedIniFileCredentials({ profile: process.env.AWS_PROFILE });
AWS.config.credentials = credentials;
AWS.config.apiVersion = {
    transcribeservice: '2017-10-26'
}
AWS.config.update({ region: 'ap-south-1' })

// const client = new TranscribeClient({region: "ap-south-1"})

// const JobParams = {
//     TranscriptionJobName: "JOB_NAME",
// }

const AWSTranscribeService = require('./AWSTranscribeService');
const params = {
    LanguageCode: "en-US", // For example, 'en-US'
    MediaFormat: "mp3", // For example, 'wav'
    Media: {
        MediaFileUri: "https://billme-bucket.s3.ap-south-1.amazonaws.com/transcribe/transcribe-sample.5fc2109bb28268d10fbc677e64b7e59256783d3c.mp3",
        // For example, "https://transcribe-demo.s3-REGION.amazonaws.com/hello_world.wav"
    },
};

// const run = async () => {
//     try {
//         const data = await transcribeClient.send(
//             new StartTranscriptionJobCommand(params)
//         );
//         console.log("Success - put", data);
//         return data; // For unit tests.
//     } catch (err) {
//         console.log("Error", err);
//     }
// };
// run();

// const startTranscriptionJob = () => {
//     return new Promise(async (resolve, reject) => {
//         await transcribeService.getTranscriptionJob({ ...JobParams })
//     });
// }
async function main() {
    try {
        // const transcribeService = new AWS.TranscribeService();
        // const tbService = transcribeService.startTranscriptionJob({
        //     ...params
        // }).promise();

        // console.log('tbServiceData', tbService);
        // const tbServiceData = await tbService();
        // console.log('tbServiceData', tbServiceData);
        // const getTbService = await transcribeService.getTranscriptionJob({ ...JobParams }).promise();
        // console.log('getTbService', getTbService);
        const transcribeService = new AWSTranscribeService(AWS);
        const jobParams = {
            // TranscriptionJobName: uuidv4(),
            TranscriptionJobName: 'a293e4c3-849a-459c-a3cc-674a4edac99b',
        }
        // const startJob = await transcribeService.startTSJob({ ...jobParams, ...params });
        // console.log('startJob', startJob);

        const checkJob = await transcribeService.getTranscriptionJob({ ...jobParams });
        console.log('checkJob', checkJob);
        // process data.
    } catch (error) {
        // error handling.
    } finally {
        // finally.
    }
}
main()