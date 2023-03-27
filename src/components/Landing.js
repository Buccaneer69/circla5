import React from 'react';
import { useNavigate } from 'react-router-dom';

const gridItems = [
    { id: 1, title: 'Container', imgSrc: 'https://via.placeholder.com/100' },
    { id: 2, title: 'Material', imgSrc: 'https://via.placeholder.com/100' },
    { id: 3, title: 'Byggkarl', imgSrc: 'https://via.placeholder.com/100' },
    { id: 4, title: 'Byggsackar', imgSrc: 'https://via.placeholder.com/100' },
    { id: 5, title: 'Waste', imgSrc: 'https://via.placeholder.com/100' },
  ];
  

function Landing() {
    const navigate = useNavigate();
  
    const handleGridItemClick = (id) => {
        console.log("handleGridItemClick", id);
      navigate(`/container/${id}`);
    };


    return (
        <div className="grid">
          {gridItems.map((item) => (
            <div
              key={item.id}
              className="grid-item"
              onClick={() => handleGridItemClick(item.title)}
            >
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
    );
}

export default Landing;
