import React from 'react';

import liftdumper_big from '../../../public/img/liftdumper_big.png';
import liftdumper_medium from '../../../public/img/liftdumper_medium.png';
import liftdumper_small from '../../../public/img/liftdumper_small.png';

import lastvaxlare_large from '../../../public/img/lastvaxlare_large.png';
import lastvaxlare_medium from '../../../public/img/lastvaxlare_medium.png';
import lastvaxlare_small from '../../../public/img/lastvaxlare_small.png';
import lastvaxlare_xl from '../../../public/img/lastvaxlare_xl.png';

export function createListClickHandler(onListItemClick, itemTitle) {
  return () => {
    onListItemClick(itemTitle);
  };
}

export function liftdumper({ onListItemClick = () => {} }) {
  return (
    <div>
      <div onClick={createListClickHandler(onListItemClick, "Liftdumper 1")}>
        <li className="list-group-item d-flex align-items-center">
          <img src= {liftdumper_big} alt="Liftdumper 1" className="mr-2" />
          Liftdumper (låsbar) 10M^3
        </li>
      </div>
      <div onClick={createListClickHandler(onListItemClick, "Liftdumper 2")}>
        <li className="list-group-item d-flex align-items-center">
          <img src={liftdumper_medium} alt="Liftdumper 2" className="mr-2" />
          Liftdumper (öppen) 10M^3
        </li>
      </div>
      <div onClick={createListClickHandler(onListItemClick, "Liftdumper 3")}>
        <li className="list-group-item d-flex align-items-center">
          <img src={liftdumper_small} alt="Liftdumper 3" className="mr-2" />
          Liftdumper (öppen) 5M^3
        </li>
      </div>
    </div>
  );
}

export function lastvaxlare({ onListItemClick = () => {} }) {
    return (
        <div>
            <div onClick={createListClickHandler(onListItemClick, "Lastväxlare 1")}>
                <li className="list-group-item d-flex align-items-center">
                    <img src={lastvaxlare_xl} alt="Lastväxlare 1" className="mr-2" />
                    Lastvaxlare (öppen) 30M^3
                </li>
            </div>
            <div onClick={createListClickHandler(onListItemClick, "Lastväxlare 2")}>
                <li className="list-group-item d-flex align-items-center">
                    <img src={lastvaxlare_large} alt="Lastväxlare 2" className="mr-2" />
                    Lastvaxlare (låsbar) 26M^3
                </li>
            </div>
            <div onClick={createListClickHandler(onListItemClick, "Lastväxlare 3")}>
                <li className="list-group-item d-flex align-items-center">
                    <img src={lastvaxlare_medium} alt="Lastväxlare 3" className="mr-2" />
                    Lastvaxlare (öppen) 22M^3
                </li>
            </div>
            <div onClick={createListClickHandler(onListItemClick, "Lastväxlare 4")}>
                <li className="list-group-item d-flex align-items-center">
                    <img src={lastvaxlare_small} alt="Lastväxlare 4" className="mr-2" />
                    Lastvaxlare (öppen) 12M^3
                    </li>
            </div>
        </div>
    );
}

export const middleSectionGridItems = [
    { id: 1, title: 'Liftdumper', optionsComponent: liftdumper },
    { id: 2, title: 'Lastväxlare', optionsComponent: lastvaxlare },
];
