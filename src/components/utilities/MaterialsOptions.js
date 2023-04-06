import React from 'react';

import BergkrossImg from '../../../public/img/bergkross.jpg';
import MakadamImg from '../../../public/img/makadam-8-16-sackad-butik.jpg';
import GrusImg from '../../../public/img/gardsgrus.jpg';
import StenmjolImg from '../../../public/img/stenmjol.jpg';
import VaxtjordImg from '../../../public/img/vaxtjord_A.jpg';
import TackbarkImg from '../../../public/img/Tackbark-Lowres.jpg';
import ToppdressImg from '../../../public/img/Toppdress-Lowres.jpg';
import rorgravsgrusImg from '../../../public/img/rorgravsgrus.jpg';
import MakadamFlisImg from '../../../public/img/Makadam-Flis-m-Bio-Lowres.jpg';


export function createListClickHandler(onListItemClick, itemTitle) {
    return () => {
      onListItemClick(itemTitle);
    };
  }

  export function Bergkross({ onListItemClick = () => {} }) {
    return (
      <div className="button-container">
        <div className="button-item">
          <div onClick={createListClickHandler(onListItemClick, "Liftdumper 1")}>
            <li className="list-group-item d-flex align-items-center">
              <img src={BergkrossImg} alt="Bergkross" className="mr-2" />
              1. Bergkross 0-32
            </li>
          </div>
        </div>
      </div>
    );
  }
  
  export function Makadam({ onListItemClick = () => {} }) {
    return (
      <div className="button-container">
        <div className="button-item">
          <div onClick={createListClickHandler(onListItemClick, "Liftdumper 1")}>
            <li className="list-group-item d-flex align-items-center">
              <img src={MakadamImg} alt="Makadam" className="mr-2" />
              1. Makadam 2-6
            </li>
          </div>
        </div>
        <div className="button-item">
          <div onClick={createListClickHandler(onListItemClick, "Liftdumper 1")}>
            <li className="list-group-item d-flex align-items-center">
              <img src={GrusImg} alt="Grus" className="mr-2" />
              2. Makadam 8-16
            </li>
          </div>
        </div>
        <div className="button-item">
          <div onClick={createListClickHandler(onListItemClick, "Liftdumper 1")}>
            <li className="list-group-item d-flex align-items-center">
              <img src={StenmjolImg} alt="Stenmjol" className="mr-2" />
              3. Makadam/Flies 2-6
            </li>
          </div>
        </div>
      </div>
    );
  }
  
  export function Grus({ onListItemClick = () => {} }) {
    return (
      <div className="button-container">
        <div className="button-item">
          <div onClick={createListClickHandler(onListItemClick, "Liftdumper 1")}>
            <li className="list-group-item d-flex align-items-center">
              <img src={StenmjolImg} alt="Stenmjol" className="mr-2" />
              1. Gårdsgrus 4-8
            </li>
          </div>
        </div>
        <div className="button-item">
          <div onClick={createListClickHandler(onListItemClick, "Liftdumper 1")}>
            <li className="list-group-item d-flex align-items-center">
              <img src={StenmjolImg} alt="Stenmjol" className="mr-2" />
              2. Rörgravsgrus 0-8
            </li>
          </div>
        </div>
        <div className="button-item">
          <div onClick={createListClickHandler(onListItemClick, "Liftdumper 1")}>
            <li className="list-group-item d-flex align-items-center">
              <img src={StenmjolImg} alt="Stenmjol" className="mr-2" />
              3. Singel 8-11
            </li>
          </div>
        </div>
        <div className="button-item">  
            <div onClick={createListClickHandler(onListItemClick, "Liftdumper 1")}>
                <li className="list-group-item d-flex align-items-center">
                    <img src= {StenmjolImg} alt="Stenmjol" className="mr-2" />
                    4. Singel 16-22
                </li>
            </div>
        </div>
    </div>
);
}

export function Sand({ onListItemClick = () => {} }) {
    return (
      <div className="button-container">
        <div className="button-item">
          <div onClick={createListClickHandler(onListItemClick, "Liftdumper 1")}>
            <li className="list-group-item d-flex align-items-center">
              <img src={MakadamImg} alt="Makadam" className="mr-2" />
              1. Mursand
            </li>
          </div>
        </div>
        <div className="button-item">
          <div onClick={createListClickHandler(onListItemClick, "Liftdumper 1")}>
            <li className="list-group-item d-flex align-items-center">
              <img src={MakadamImg} alt="Makadam" className="mr-2" />
              2. Tagavvattningsand
            </li>
          </div>
        </div>
        <div className="button-item">
          <div onClick={createListClickHandler(onListItemClick, "Liftdumper 1")}>
            <li className="list-group-item d-flex align-items-center">
              <img src={MakadamImg} alt="Makadam" className="mr-2" />
              3. Sandlådesand
            </li>
          </div>
        </div>
      </div>
    );
  }
  
  export function Jord({ onListItemClick = () => {} }) {
    return (
      <div className="button-container">
        <div className="button-item">
          <div onClick={createListClickHandler(onListItemClick, "Liftdumper 1")}>
            <li className="list-group-item d-flex align-items-center">
              <img src={BergkrossImg} alt="Bergkross" className="mr-2" />
              1. Planteringsjord
            </li>
          </div>
        </div>
        <div className="button-item">
          <div onClick={createListClickHandler(onListItemClick, "Liftdumper 1")}>
            <li className="list-group-item d-flex align-items-center">
              <img src={BergkrossImg} alt="Bergkross" className="mr-2" />
              2. Rabattjord
            </li>
          </div>
        </div>
        <div className="button-item">
          <div onClick={createListClickHandler(onListItemClick, "Liftdumper 1")}>
            <li className="list-group-item d-flex align-items-center">
              <img src={BergkrossImg} alt="Bergkross" className="mr-2" />
              3. Blomsterjord
            </li>
          </div>
        </div>
      </div>
    );
  }
  
  export function Finsingel({ onListItemClick = () => {} }) {
    return (
      <div className="button-container">
        <div className="button-item">
          <div onClick={createListClickHandler(onListItemClick, "Liftdumper 1")}>
            <li className="list-group-item d-flex align-items-center">
              <img src={MakadamFlisImg} alt="MakadamFlis" className="mr-2" />
              1. Finsingel 2-5
            </li>
          </div>
        </div>
        <div className="button-item">
          <div onClick={createListClickHandler(onListItemClick, "Liftdumper 1")}>  
                <li className="list-group-item d-flex align-items-center">
                <img src= {MakadamFlisImg} alt="MakadamFlis" className="mr-2" />
                3. Finsingel 8-11
                </li>
            </div>
        </div>
        </div>
    );
}

export function Gangsingel({ onListItemClick = () => {} }) {
    return (
        <div>
            <div onClick={createListClickHandler(onListItemClick, "Gångsingel 8-16")}>
                <li className="list-group-item d-flex align-items-center">
                <img src= {MakadamFlisImg} alt="MakadamFlis" className="mr-2" />
                    1. Gångsingel 8-16
                </li>
            </div>
        </div>
    );
}

export function ovrigt({ onListItemClick = () => {} }) {
    return (
        <div>
            <div onClick={createListClickHandler(onListItemClick, "Kullersten 90-150")}>
                <li className="list-group-item d-flex align-items-center">
                    <img src= {MakadamFlisImg} alt="MakadamFlis" className="mr-2" />
                    1. Kullersten 90-150
                </li>
            </div>
            <div onClick={createListClickHandler(onListItemClick, "Toppdress")}>
                <li className="list-group-item d-flex align-items-center">
                    <img src= {MakadamFlisImg} alt="MakadamFlis" className="mr-2" />
                    2. Toppdress
                </li>
            </div>
            <div onClick={createListClickHandler(onListItemClick, "Täckbark 10-40")}>
                <li className="list-group-item d-flex align-items-center">
                    <img src= {MakadamFlisImg} alt="MakadamFlis" className="mr-2" />
                    3. Täckbark 10-40
                </li>
            </div>
            <div onClick={createListClickHandler(onListItemClick, "Växtjord Typ A")}>
                <li className="list-group-item d-flex align-items-center">
                    <img src= {MakadamFlisImg} alt="MakadamFlis" className="mr-2" />
                    4. Växtjord Typ A
                </li>
            </div>
        </div>
    );
}

export function Jordprodukter({ onListItemClick = () => {} }) {
    return (
        <div>
            <div onClick={createListClickHandler(onListItemClick, "Liftdumper 1")}>
                <li className="list-group-item d-flex align-items-center">
                    <img src= {ToppdressImg} alt="Toppdress" className="mr-2" />
                    1. Anläggningsjord
                </li>
            </div>
            <div onClick={createListClickHandler(onListItemClick, "Liftdumper 2")}>
                <li className="list-group-item d-flex align-items-center">
                    <img src= {ToppdressImg} alt="Toppdress" className="mr-2" />
                    2. Anläggningsjord Vinter
                </li>
            </div>
            <div onClick={createListClickHandler(onListItemClick, "Liftdumper 3")}>
                <li className="list-group-item d-flex align-items-center">
                    <img src= {ToppdressImg} alt="Toppdress" className="mr-2" />
                    3. Fukthållande jord
                </li>
            </div>
            <div onClick={createListClickHandler(onListItemClick, "Liftdumper 4")}>
                <li className="list-group-item d-flex align-items-center">
                    <img src= {ToppdressImg} alt="Toppdress" className="mr-2" />
                    4. Odlingsjord
                </li>
            </div>
            <div onClick={createListClickHandler(onListItemClick, "Liftdumper 5")}>
            <li className="list-group-item d-flex align-items-center">
            <img src= {ToppdressImg} alt="Toppdress" className="mr-2" />
                5. Sportjord 60-40
            </li>
            </div>
            <div onClick={createListClickHandler(onListItemClick, "Liftdumper 6")}>
            <li className="list-group-item d-flex align-items-center">
            <img src= {ToppdressImg} alt="Toppdress" className="mr-2" />
                6. Sportjord 90-10
            </li>
            </div>         
        </div>
    );
// }   
// export function Krossprodukter({ onListItemClick = () => {} }) {
//     return (
//         <div>
//             <div onClick={createListClickHandler(onListItemClick, "Liftdumper 1")}>
//                 <li className="list-group-item d-flex align-items-center">
//                     <img src= {TackbarkImg} alt="Tackbark" className="mr-2" />
//                     1. Asfaltsgrus 0-16
//                 </li>
//             </div>
//             <div onClick={createListClickHandler(onListItemClick, "Liftdumper 2")}>
//                 <li className="list-group-item d-flex align-items-center">
//                     <img src= {TackbarkImg} alt="Tackbark" className="mr-2" />
//                     2. Asfaltsgrus 0-90
//                 </li>
//             </div>
//             <div onClick={createListClickHandler(onListItemClick, "Liftdumper 3")}>
//                 <li className="list-group-item d-flex align-items-center">
//                     <img src= {TackbarkImg} alt="Tackbark" className="mr-2" />
//                     3. Berg/Betongkross 0-63
//                 </li>
//             </div>
//             <div onClick={createListClickHandler(onListItemClick, "Liftdumper 4")}>
//                 <li className="list-group-item d-flex align-items-center">
//                     <img src= {TackbarkImg} alt="Tackbark" className="mr-2" />
//                     4. Berg/Betongkross 0-16
//                 </li>
//             </div>
//             <div onClick={createListClickHandler(onListItemClick, "Liftdumper 5")}>
//                 <li className="list-group-item d-flex align-items-center">
//                     <img src= {TackbarkImg} alt="Tackbark" className="mr-2" />
//                     5. Bergkross 0-32
//                 </li>
//             </div>
//             <div onClick={createListClickHandler(onListItemClick, "Liftdumper 6")}>
//                 <li className="list-group-item d-flex align-items-center">
//                     <img src= {TackbarkImg} alt="Tackbark" className="mr-2" />
//                     6. Bergkross 8-16
//                 </li>
//             </div>
//             <div onClick={createListClickHandler(onListItemClick, "Liftdumper 7")}>
//                 <li className="list-group-item d-flex align-items-center">
//                     <img src= {TackbarkImg} alt="Tackbark" className="mr-2" />
//                     6. Bergkross 0-150
//                 </li>
//             </div>
//             <div onClick={createListClickHandler(onListItemClick, "Liftdumper 8")}>
//                 <li className="list-group-item d-flex align-items-center">
//                     <img src= {TackbarkImg} alt="Tackbark" className="mr-2" />
//                     6. Betongkross 0-90
//                 </li>
//             </div>
//             <div onClick={createListClickHandler(onListItemClick, "Liftdumper 9")}>
//                 <li className="list-group-item d-flex align-items-center">
//                     <img src= {BergkrossImg} alt="Bergkross" className="mr-2" />
//                     6. 358kr per ton
//                 </li>
//             </div>
//         </div>
//     );
// }
    
// export function Vatsiktadeprodukter({ onListItemClick = () => {} }) {
//     return (
//         <div>
//             <div onClick={createListClickHandler(onListItemClick, "Liftdumper 1")}>
//                 <li className="list-group-item d-flex align-items-center">
//                     <img src= {VaxtjordImg} alt="Vaxtjord" className="mr-2" />
//                     1. Dressand 0,2-3,8
//                 </li>
//             </div>
//             <div onClick={createListClickHandler(onListItemClick, "Liftdumper 2")}>
//                 <li className="list-group-item d-flex align-items-center">
//                     <img src= {VaxtjordImg} alt="Vaxtjord" className="mr-2" />
//                     2. EU Gungsand 2-6
//                 </li>
//             </div>
//             <div onClick={createListClickHandler(onListItemClick, "Liftdumper 3")}>
//                 <li className="list-group-item d-flex align-items-center">
//                     <img src= {VaxtjordImg} alt="Vaxtjord" className="mr-2" />
//                     3. Finsand 0,065-05
//                 </li>
//             </div>
//             <div onClick={createListClickHandler(onListItemClick, "Liftdumper 4")}>
//                 <li className="list-group-item d-flex align-items-center">
//                     <img src= {VaxtjordImg} alt="Vaxtjord" className="mr-2" />
//                     4. Grus 2-8
//                 </li>
//             </div>
//             <div onClick={createListClickHandler(onListItemClick, "Liftdumper 5")}>
//                 <li className="list-group-item d-flex align-items-center">
//                     <img src= {VaxtjordImg} alt="Vaxtjord" className="mr-2" />
//                     5. Grus 4-8
//                 </li>
//             </div>
//             <div onClick={createListClickHandler(onListItemClick, "Liftdumper 6")}>
//                 <li className="list-group-item d-flex align-items-center">
//                     <img src= {VaxtjordImg} alt="Vaxtjord" className="mr-2" />
//                     6. Kullersten 90-150 lösvikt
//                 </li>
//             </div>
//             <div onClick={createListClickHandler(onListItemClick, "Liftdumper 7")}>
//                 <li className="list-group-item d-flex align-items-center">
//                     <img src= {VaxtjordImg} alt="Vaxtjord" className="mr-2" />
//                     6. Murbrukssand 0-4
//                 </li>
//             </div>
//             <div onClick={createListClickHandler(onListItemClick, "Liftdumper 8")}>
//                 <li className="list-group-item d-flex align-items-center">
//                     <img src= {VaxtjordImg} alt="Vaxtjord" className="mr-2" />
//                     6. Puts & Leksand 0-2
//                 </li>
//             </div>
//             <div onClick={createListClickHandler(onListItemClick, "Liftdumper 9")}>
//                 <li className="list-group-item d-flex align-items-center">                    
//                     <img src= {rorgravsgrusImg} alt="rorgravsgrus" className="mr-2" />
//                     6. Rörgravsfyllning 0-8
//                 </li>
//             </div>
//             <div onClick={createListClickHandler(onListItemClick, "Liftdumper 10")}>
//                 <li className="list-group-item d-flex align-items-center">
//                 <img src= {rorgravsgrusImg} alt="rorgravsgrus" className="mr-2" />
//                     6. Singel 16-32
//                 </li>
//             </div>
//             <div onClick={createListClickHandler(onListItemClick, "Liftdumper 11")}>
//                 <li className="list-group-item d-flex align-items-center">
//                 <img src= {rorgravsgrusImg} alt="rorgravsgrus" className="mr-2" />
//                     6. Singel 32-90
//                 </li>
//             </div>
//             <div onClick={createListClickHandler(onListItemClick, "Liftdumper 12")}>
//                 <li className="list-group-item d-flex align-items-center">
//                 <img src= {rorgravsgrusImg} alt="rorgravsgrus" className="mr-2" />
//                     6. Singel 8-16
//                 </li>
//             </div>
//             <div onClick={createListClickHandler(onListItemClick, "Liftdumper 13")}>
//                 <li className="list-group-item d-flex align-items-center">
//                 <img src= {rorgravsgrusImg} alt="rorgravsgrus" className="mr-2" />
//                     6. Stoppsten 500
//                 </li>
//             </div>
//         </div>
//     );
}

export const middleSectionGridItems = [
    { id: 1, title: 'Bergkross', optionsComponent: Bergkross },
    { id: 2, title: 'Makadam', optionsComponent: Makadam },
    { id: 3, title: 'Grus', optionsComponent: Grus },
    { id: 4, title: 'Sand', optionsComponent: Sand },
    { id: 5, title: 'Jord', optionsComponent: Jord },
    { id: 6, title: 'Finsingel', optionsComponent: Finsingel },
    { id: 7, title: 'Gångsingel', optionsComponent: Gangsingel },
    { id: 8, title: 'ovrigt', optionsComponent: ovrigt },
    { id: 9, title: 'Jordprodukter', optionsComponent: Jordprodukter },
//    { id: 10, title: 'Krossprodukter', optionsComponent: Krossprodukter },
//    { id: 11, title: 'Vatsiktadeprodukter', optionsComponent: Vatsiktadeprodukter },
];
