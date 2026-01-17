let activeCommentBox = null;

document.addEventListener("focusin", (e) => {
    const el = e.target;

    const isEditable = el.isContentEditable;
    const isTextarea = el.tagName === "TEXTAREA";

    if (isEditable || isTextarea) {
        activeCommentBox = el;
        console.log("comment Box is ", el)
    }

})

function getActiveCommentBox() {
    return activeCommentBox;
}

chrome.runtime.onMessage.addListener((message,sender,sendResponse)=>{
    if(message.type=== "GENERATE_COMMENT"){
        const box=getActiveCommentBox();

        if(!box){
          console.warn("no comment box found");
          return;
        }

        console.log("comment box found",box);

        const textExample="here is your comment";

        box.focus();

        if(box.tagName==="TEXTAREA"){
            document.execCommand("insertText", false, textExample);
            box.dispatchEvent(new Event("input", { bubbles: true }));

        }else if(box.isContentEditable){
          document.execCommand("insertText", false, textExample);
  }
            box.dispatchEvent(new Event("input", { bubbles: true }));

        };

    }
  

)