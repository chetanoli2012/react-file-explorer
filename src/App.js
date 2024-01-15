import { useState } from "react";
import Folder from "./components/Folder";
import { explorer } from "./data/folderData";
import { updateExplorerData } from "./utils/updateExplorerData";
import "./App.css";

function App() {
  const [explorerData] = useState(explorer);

  const onAddRequest = (updateRequestData) => {
    updateExplorerData(explorerData, updateRequestData);
  };

  return (
    <div className="app">
      <Folder explorerData={explorerData} onAdd={onAddRequest} />
    </div>
  );
}

export default App;
