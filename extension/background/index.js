const BACKEND_URL = "http://localhost:3000/generate-comment"


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "REQUEST_COMMENT") {
        const { context } = message.payload;
        handleRequest(context, sendResponse);
        return true;
        
    };

    async function handleRequest(context, sendResponse) {

        try {
            const response = await fetch(BACKEND_URL, {
                method:"POST",
                headers:{
                    "content-Type":"application/json"
                },
                body:JSON.stringify({context})
            });

            const data = await response.json();
            const comment = data.comment

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