import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import { middleSectionGridItems } from "./utilities/ContainersOptions";
import MaterialsOptions from "./utilities/MaterialsOptions";

const optionsFiles = {
  Container: { middleSectionGridItems },
  Material: MaterialsOptions,
  // Add other options files here
};

const Container = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("id from useParams:", id);

  const [optionsComponent, setOptionsComponent] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectedListItem, setSelectedListItem] = useState(null);

  const optionsFile = optionsFiles[id];
  console.log("Container component rendered", optionsFile);

  const handleListItemClick = (itemTitle) => {
    setSelectedListItem(itemTitle);
  };

  const handleMiddleGridItemClick = (itemId) => {
    console.log("handleMiddleGridItemClick", itemId);
    const selectedItem = optionsFile.middleSectionGridItems.find(
      (item) => item.id === itemId
    );
    console.log("selectedItem", selectedItem);
    if (selectedItem) {
      console.log("optionsComponent", selectedItem.optionsComponent);
      setOptionsComponent(() => selectedItem.optionsComponent({ onListItemClick: handleListItemClick }));
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
    <div>
      {/* Top section */}
      <div className="top-section">
        <h1>{id}</h1>
        {selectedOptions.category && (
          <p>Selected category: {selectedOptions.category}</p>
        )}
        {selectedOptions.subcategory && (
          <p>Selected subcategory: {selectedOptions.subcategory}</p>
        )}
        {selectedListItem && (
          <p>Selected list item: {selectedListItem}</p>
        )}
      </div>
      {/* Middle section */}
      <div className="middle-section">
        <div className="middle-section-Button">
          <button onClick={() => setOrder(id, selectedOptions.subcategory, selectedListItem)} >
            Lägg beställning
          </button>
        </div>
        {optionsFile.middleSectionGridItems.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              console.log("Middle section grid item clicked:", item.id);
              handleMiddleGridItemClick(item.id);
            }}
          >
            {item.title}
          </div>
        ))}
      </div>
      {/* Third section */}
      {optionsComponent && (
        <div>{optionsComponent}</div>
      )}
    </div>
  );
};

export default Container;


// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import ContainersOptions from "./utilities/ContainersOptions";
// import { middleSectionGridItems } from "./utilities/ContainersOptions";
// import MaterialsOptions from "./utilities/MaterialsOptions";

// const optionsFiles = {
//   Container: { middleSectionGridItems },
//   Material: MaterialsOptions,
//   // Add other options files here
// };

// const Container = () => {
//   const { id } = useParams();
//   console.log("id from useParams:", id);

//   const [optionsComponent, setOptionsComponent] = useState(null);
//   const [selectedOptions, setSelectedOptions] = useState({});
//   const [selectedListItem, setSelectedListItem] = useState(null);

//   const optionsFile = optionsFiles[id];
//   console.log("Container component rendered", optionsFile);

//   const handleListItemClick = (itemTitle) => {
//     setSelectedListItem(itemTitle);
//   };

//   const handleMiddleGridItemClick = (itemId) => {
//     console.log("handleMiddleGridItemClick", itemId);
//     const selectedItem = optionsFile.middleSectionGridItems.find(
//       (item) => item.id === itemId
//     );
//     console.log("selectedItem", selectedItem);
//     if (selectedItem) {
//       console.log("optionsComponent", selectedItem.optionsComponent);
//       setOptionsComponent(() => selectedItem.optionsComponent(handleListItemClick));
//       setSelectedOptions({
//         category: optionsFile.title,
//         subcategory: selectedItem.title,
//       });
//     } else {
//       console.error("Invalid grid item selected");
//     }
//   };

//   if (!optionsFile) {
//     return <div>Error: Invalid grid item selected</div>;
//   }

//   return (
//     <div>
//       {/* Top section */}
//       <div className="top-section">
//         <h1>{id}</h1>
//         {selectedOptions.category && (
//           <p>Selected category: {selectedOptions.category}</p>
//         )}
//         {selectedOptions.subcategory && (
//           <p>Selected subcategory: {selectedOptions.subcategory}</p>
//         )}
//         {selectedListItem && (
//           <p>Selected list item: {selectedListItem}</p>
//         )}
//       </div>
//       {/* Middle section */}
//       <div className="middle-section">
//         {optionsFile.middleSectionGridItems.map((item) => (
//           <div
//             key={item.id}
//             onClick={() => {
//               console.log("Middle section grid item clicked:", item.id);
//               handleMiddleGridItemClick(item.id);
//             }}
//           >
//             {item.title}
//           </div>
//         ))}
//       </div>
//       {/* Third section */}
//       {optionsComponent && (
//         <div>{optionsComponent}</div>
//       )}
//     </div>
//   );
// };

// export default Container;
