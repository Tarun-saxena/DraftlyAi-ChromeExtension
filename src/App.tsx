
import './App.css'

function App() {

  async function handleGenerate(){
    const[tab]= await chrome.tabs.query({
      active:true,
      currentWindow:true
    })
    chrome.tabs.sendMessage(tab.id!, {
      type: "GENERATE_COMMENT"
    });
    window.close(); 
  }
  

  return (
<div className="w-80 bg-white text-black rounded-lg border border-gray-200">
  
  {/* Header */}
  <div className="px-4 py-3 border-b border-gray-200">
    <h1 className="text-sm font-semibold">DraftlyAI</h1>
    <p className="text-xs text-gray-500">
      Draft comments smartly
    </p>
  </div>

  {/* Body */}
  <div className="p-4 space-y-3">
    <p className="text-xs text-gray-600">
      Click below to generate a comment based on the surrounding content.
    </p>

    <button
      onClick={handleGenerate}
      className="w-full py-2 text-sm font-medium rounded-md bg-black text-white hover:bg-black/90 transition"
    >
      Generate Comment
    </button>
  </div>
</div>

  )
}

export default App
