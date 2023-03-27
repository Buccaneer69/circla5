import React from 'react';

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
          <img src="../assets/images/liftdumper_big.png" alt="Liftdumper 1" className="mr-2" />
          1. liftdumper (låsbar) 10M^3
        </li>
      </div>
      <div onClick={createListClickHandler(onListItemClick, "Liftdumper 2")}>
        <li className="list-group-item d-flex align-items-center">
          <img src="../assets/images/liftdumper_medium.png" alt="Liftdumper 2" className="mr-2" />
          2. liftdumper (öppen) 10M^3
        </li>
      </div>
      <div onClick={createListClickHandler(onListItemClick, "Liftdumper 3")}>
        <li className="list-group-item d-flex align-items-center">
          <img src="../assets/images/liftdumper_small.png" alt="Liftdumper 3" className="mr-2" />
          3. liftdumper (öppen) 5M^3
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
                    <img src="../assets/images/lastvaxlare_xl.png" alt="Lastväxlare 1" className="mr-2" />
                    1. lastvaxlare (öppen) 30M^3
                </li>
            </div>
            <div onClick={createListClickHandler(onListItemClick, "Lastväxlare 2")}>
                <li className="list-group-item d-flex align-items-center">
                    <img src="../assets/images/lastvaxlare_large.png" alt="Lastväxlare 2" className="mr-2" />
                    2. lastvaxlare (låsbar) 26M^3
                </li>
            </div>
            <div onClick={createListClickHandler(onListItemClick, "Lastväxlare 3")}>
                <li className="list-group-item d-flex align-items-center">
                    <img src="../assets/images/lastvaxlare_medium.png" alt="Lastväxlare 3" className="mr-2" />
                    3. lastvaxlare (öppen) 22M^3
                </li>
            </div>
            <div onClick={createListClickHandler(onListItemClick, "Lastväxlare 4")}>
                <li className="list-group-item d-flex align-items-center">
                    <img src="../assets/images/lastvaxlare_small.png" alt="Lastväxlare 4" className="mr-2" />
                    4. lastvaxlare (öppen) 12M^3
                    </li>
            </div>
        </div>
    );
}

export const middleSectionGridItems = [
    { id: 1, title: 'LiftDumper', optionsComponent: liftdumper },
    { id: 2, title: 'LastVäxlare', optionsComponent: lastvaxlare },
];
