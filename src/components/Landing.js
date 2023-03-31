import React from 'react';
import { useNavigate } from 'react-router-dom';
import containerImg from '../../public/img/c-1.png';
import materialImg from '../../public/img/m-1.png';
import byggkarlImg from '../../public/img/bk-1.png';
import byggsackarImg from '../../public/img/bs-1.png';
import wasteImg from '../../public/img/6.svg';
import '../assets/styles.css';

const gridItems = [
  { id: 1, title: 'Container', imgSrc: containerImg },
  { id: 2, title: 'Material', imgSrc: materialImg },
  { id: 3, title: 'Byggkärl', imgSrc: byggkarlImg },
  { id: 4, title: 'Byggsäckar', imgSrc: byggsackarImg },
  { id: 5, title: 'Grovavfall', imgSrc: wasteImg },
];

function Landing() {
  const navigate = useNavigate();

  const handleGridItemClick = (id) => {
    console.log('handleGridItemClick', id);
    navigate(`/container/${id}`);
  };

  return (
    <div className="landing">
      <h1>Välj Tjänst</h1>
      <div className="grid">
        {gridItems.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="grid-item"
            onClick={() => handleGridItemClick(item.title)}
          >
            <div className="content">
              <img src={item.imgSrc} alt={item.title} />
              <p>{item.title}</p>
            </div>
          </div>
        ))}
        <div
          className="grid-item"
          onClick={() => handleGridItemClick(gridItems[4].title)}
        >
          <div className="content">
            <img src={gridItems[4].imgSrc} alt={gridItems[4].title} />
            <p>{gridItems[4].title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
