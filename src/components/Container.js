import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ContainersOptions from './utilities/ContainersOptions';
import MaterialsOptions from './utilities/MaterialsOptions';
// Import the other options files

const optionsFiles = [
  ContainersOptions,
  MaterialsOptions,
  // Add other options files here
];

function Container() {
    const { id } = useParams();
    const selectedGridItemId = parseInt(id, 10);
    const [selectedMiddleGridItemId, setSelectedMiddleGridItemId] = useState(null);
  
    const optionsFile = optionsFiles[selectedGridItemId - 1];
  
    const handleMiddleGridItemClick = (id) => {
      setSelectedMiddleGridItemId(id);
    };
  
    if (!optionsFile) {
      return <div>Error: Invalid grid item selected</div>;
    };
    
    return (
        <div>
        {/* Top section */}
            <div className="middle-section">
                {optionsFile.middleSectionGridItems.map((item) => (
                <div key={item.id} onClick={() => handleMiddleGridItemClick(item.id)}>
                    {item.title}
                </div>
                ))}
            </div>
            {/* Third section */}
            {selectedMiddleGridItemId && (
                <div>
                {optionsFile.optionsList[selectedMiddleGridItemId].map((option, index) => (
                    <p key={index}>{option}</p>
                ))}
                {selectedMiddleGridItemId === 1 && optionsFile.liftdumper()}
                {selectedMiddleGridItemId === 2 && optionsFile.lastvaxlare()}
                {/* Add other components here */}
                </div>
            )}
        </div>
    );
}

export default Container;
