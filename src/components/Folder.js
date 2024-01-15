import React, { useState } from "react";
import "./Folder.css";

const Folder = ({ explorerData, onAdd }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showInput, setShowInput] = useState({
    visbility: false,
    isFolder: false,
  });

  const handleAdd = (e, isFolder = false) => {
    e.stopPropagation();
    setIsExpanded(true);
    setShowInput({
      ...showInput,
      visbility: true,
      isFolder: isFolder,
    });
  };

  const handleInputChange = (e) => {
    if (e.key === "Enter" && e.target.value) {
      onAdd({
        name: e.target.value,
        isFolder: showInput.isFolder,
        parentId: explorerData.id,
      });
      setShowInput({ ...showInput, visbility: false });
    }
  };

  if (!explorerData.isFolder) {
    return <header>📄 {explorerData.name}</header>;
  }

  return (
    <div className="explorer">
      <header
        className="explorer__header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>
          {explorerData.isFolder ? "🗂️" : "📄"} {explorerData.name}
        </span>
        <button onClick={(e) => handleAdd(e, true)}>Add Folder</button>
        <button onClick={(e) => handleAdd(e, false)}>Add File</button>
      </header>

      {showInput.visbility && (
        <section className="explorer__input__container">
          {showInput.isFolder ? "🗂️" : "📄"}
          <input
            className="explorer__input"
            autoFocus
            onBlur={() =>
              setShowInput({
                ...showInput,
                visbility: false,
              })
            }
            onKeyUp={handleInputChange}
          />
        </section>
      )}

      {explorerData.items.map((expData) => {
        return (
          <header
            key={expData.id}
            style={{ display: isExpanded ? "flex" : "none" }}
            className="explorer__subheader"
          >
            <Folder key={expData.id} explorerData={expData} onAdd={onAdd} />
          </header>
        );
      })}
    </div>
  );
};

export default Folder;
