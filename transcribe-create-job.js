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

const AWSTranscribeService = require('./AWSTranscribeService');
const params = {
    LanguageCode: "en-US", // For example, 'en-US'
    MediaFormat: "mp3", // For example, 'wav'
    Media: {
        MediaFileUri: "https://billme-bucket.s3.ap-south-1.amazonaws.com/transcribe/transcribe-sample.5fc2109bb28268d10fbc677e64b7e59256783d3c.mp3",
    },
};

async function main() {
    try {
        const transcribeService = new AWSTranscribeService(AWS);
        const jobParams = {
            // TranscriptionJobName: uuidv4(),
            TranscriptionJobName: 'a293e4c3-849a-459c-a3cc-674a4edac99b',
        }
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