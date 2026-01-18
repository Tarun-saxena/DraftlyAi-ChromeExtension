let activeCommentBox = null;

//get the comment box
document.addEventListener("focusin", (e) => {
  const el = e.target;

  if (el.tagName === "TEXTAREA" || el.isContentEditable) {
    activeCommentBox = el;
    console.log(" Comment box tracked:", el);
  }
});

//extract post text
function extractContext(box) {
  let el = box;

  while (el && el !== document.body) {
    const text = el.innerText?.trim();
    if (text && text.length > 50) {
      return text;
    }
    el = el.parentElement;
  }

  return "";
}


chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "GENERATE_COMMENT") {
    const box = activeCommentBox;

    if (!box) {
      console.warn(" No comment box found");
      return;
    }
    const context = extractContext(box);
    console.log(context);

    chrome.runtime.sendMessage(
      {
        type: "REQUEST_COMMENT",
        payload: { context }
      },
      (response) => {

        if (!response.comment) {
          console.warn("no comment return")
        }

        box.focus();

        document.execCommand("insertText", false, response.comment);
        box.dispatchEvent(new Event("input", { bubbles: true }));




      }


    )

  }
});
