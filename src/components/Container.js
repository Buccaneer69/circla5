import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import { middleSectionGridItems } from "./utilities/ContainersOptions";
import { middleSectionGridItems as materialsMiddleSectionGridItems } from "./utilities/MaterialsOptions";

const optionsFiles = {
  Container: { middleSectionGridItems },
  Material: { middleSectionGridItems: materialsMiddleSectionGridItems },
  // Add other options files here
};

const Container = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("id from useParams:", id);

  const [optionsComponent, setOptionsComponent] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectedListItem, setSelectedListItem] = useState(null);
  const [middleSectionClicked, setMiddleSectionClicked] = useState(false); 

  const optionsFile = optionsFiles[id];
  console.log("Container component rendered", optionsFile);

  const handleListItemClick = (itemTitle) => {
    setSelectedListItem(itemTitle);
  };

  const handleMiddleGridItemClick = (itemId) => {
    console.log("handleMiddleGridItemClick", itemId);
    setMiddleSectionClicked(true);
    const selectedItem = optionsFile.middleSectionGridItems.find(
      (item) => item.id === itemId
    );
    console.log("selectedItem", selectedItem);
    if (selectedItem) {
      console.log("optionsComponent", selectedItem.optionsComponent);
      setOptionsComponent(() => selectedItem.optionsComponent); // Update this line
      setSelectedOptions({
        category: id,
        subcategory: selectedItem.title,
      });
    } else {
      console.error("Invalid grid item selected");
    }
  };
  

  const setOrder = (category, subcategory, listItem) => {
    console.log("setOrder", category, subcategory, listItem);
    // navigate to Order page
    navigate(`/order/${category}/${subcategory}/${listItem}`);

  };

  if (!optionsFile) {
    return <div>Error: Invalid grid item selected</div>;
  };

  return (
    <div className="Container">
    {/* Top section */}
      <h1>{id}</h1>
      <div className="top-section">        
        <div className="selected-options">
          <div className="selected-label">Kategori:</div>
          <div className="selected-value">{selectedOptions.category || "N/A"}</div>
          <div className="selected-label">Typ:</div>
          <div className="selected-value">{selectedOptions.subcategory || "N/A"}</div>
          <div className="selected-label">Storlek:</div>
          <div className="selected-value">{selectedListItem || "N/A"}</div>
        </div>
      </div>
      <div className="generalButton">
        {middleSectionClicked && (
          <button className="sendOrder" onClick={() => setOrder(id, selectedOptions.subcategory, selectedListItem)} >
            Lägg beställning
          </button>
        )}
        </div>
      {/* Middle section */}
      <div className="middle-section"
        style={{
          gridTemplateColumns: `repeat(${Math.min(optionsFile.middleSectionGridItems.length, 3)}, 1fr)`,
        }}
      >                
        {optionsFile.middleSectionGridItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              console.log("Middle section grid item clicked:", item.id);
              handleMiddleGridItemClick(item.id);
            }}
          >
            {item.title}
          </button>
        ))}
        
      </div>
      {/* Third section */}
      <div className="third-section">
        {optionsComponent && (
          <div className="button-container">
            {optionsComponent({ onListItemClick: handleListItemClick })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Container;

