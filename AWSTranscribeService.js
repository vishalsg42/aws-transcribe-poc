class AWSTranscribeService {
    /**
     * 
     * @param {AWS} aws 
     */
    constructor(aws) {
        this.AWS = aws;
        this.transcribeService = new this.AWS.TranscribeService();
    }

    async startTSJob(params) {
        return new Promise((resolve, reject) => {
            this.transcribeService.startTranscriptionJob({ ...params }, (err, response) => {
                if (err) {
                    reject(err);
                }
                resolve(response.TranscriptionJob);
            })
        });
    }
    
    /**
     * @name getTranscriptionJob
     * @param {Object} params 
     * @returns {Object}
     */
    async getTranscriptionJob(params) {
        return new Promise((resolve, reject) => {
            this.transcribeService.getTranscriptionJob({ ...params }, (err, response) => {
                if (err) {
                    reject(err);
                }
                resolve(response.TranscriptionJob);
            })
        })
    }
}
module.exports = AWSTranscribeService;