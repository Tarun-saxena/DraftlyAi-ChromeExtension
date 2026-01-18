import axios from "axios";
const BACKEND_URL = "http://localhost:3000/generate-comment"

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "REQUEST_COMMENT") {
        const { context } = message.payload;
        handleRequest(context, sendResponse);
        return true;
    };

    async function handleRequest(context, sendResponse) {

        try {
            const response = await axios.post(BACKEND_URL, {
                context
            });

            const comment = response.data

            sendResponse({
                comment: comment || "No comment generated"
            })
            
        } catch (e) {

            console.error("Backend failed", e);
            sendResponse({
                comment: "Error generating comment"
            });

        }

    }


})