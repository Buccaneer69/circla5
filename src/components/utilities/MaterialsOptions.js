import React from 'react';

const middleSectionGridItems = [
    { id: 1, title: 'Bergkross' },
    { id: 2, title: 'Makadam' },
    { id: 3, title: 'Grus' },
    { id: 4, title: 'Sand' },
    { id: 5, title: 'Jord' },
    { id: 6, title: 'Finsingel' },
    { id: 7, title: 'Gångsingel' },
    { id: 8, title: 'ovrigt' },
    { id: 9, title: 'Jordprodukter' },
    { id: 10, title: 'Krossprodukter' },
    { id: 11, title: 'Vatsiktadeprodukter' },
];

const optionsList = {
    1: ['Option 1', 'Option 2', 'Option 3'],
    2: ['Option 4', 'Option 5', 'Option 6'],
    3: ['Option 7', 'Option 8', 'Option 9'],
    4: ['Option 10', 'Option 11', 'Option 12'],
};

const Bergkross = ()   => {
    return (
        <div>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_big.png" alt="Liftdumper 1" class="mr-2" />
                1. Bergkross 0-32
            </li>
        </div>
    );
}

const Makadam = ()   => {
    return (
        <div>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_big.png" alt="Liftdumper 1" class="mr-2" />
                1. Makadam 2-6
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_medium.png" alt="Liftdumper 2" class="mr-2" />
                2. Makadam 8-16
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_small.png" alt="Liftdumper 3" class="mr-2" />
                3. Makadam/Flies 2-6
            </li>
        </div>
    );
}

const Grus = ()   => {
    return (
        <div>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_big.png" alt="Liftdumper 1" class="mr-2" />
                1. Gårdsgrus 4-8
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_medium.png" alt="Liftdumper 2" class="mr-2" />
                2. Rörgravsgrus 0-8
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_small.png" alt="Liftdumper 3" class="mr-2" />
                3. Stenmjöl 0-8
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_big.png" alt="Liftdumper 1" class="mr-2" />
                4. Täckbark 10-40
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_medium.png" alt="Liftdumper 2" class="mr-2" />
                5. Toppdress
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_small.png" alt="Liftdumper 3" class="mr-2" />
                6. Växtjord Typ A
            </li>
        </div>
    );
}
        
const Sand = ()   => {
    return (
        <div>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_big.png" alt="Liftdumper 1" class="mr-2" />
                1. Sandlådesand 0-2
            </li>            
        </div>
    );
}

const Jord = ()   => {
    return (
        <div>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_big.png" alt="Liftdumper 1" class="mr-2" />
                1. Rabatt & Perenna Jord
            </li>            
        </div>
    );
}

const Finsingel = ()   => {
    return (
        <div>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_big.png" alt="Liftdumper 1" class="mr-2" />
                1. Finsingel 16-28
            </li>            
        </div>
    );
}

const Gångsingel = ()   => {
    return (
        <div>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_big.png" alt="Liftdumper 1" class="mr-2" />
                1. Gångsingel 8-16
            </li>            
        </div>
    );
}
     
const ovrigt = ()   => {
    return (
        <div>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_big.png" alt="Liftdumper 1" class="mr-2" />
                1. Kullersten 90-150
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_medium.png" alt="Liftdumper 2" class="mr-2" />
                2. Toppdress
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_small.png" alt="Liftdumper 3" class="mr-2" />
                3. Täckbark 10-40
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_big.png" alt="Liftdumper 1" class="mr-2" />
                4. Växtjord Typ A
            </li>            
        </div>
    );
}

const Jordprodukter = ()   => {
    return (
        <div>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_big.png" alt="Liftdumper 1" class="mr-2" />
                1. Anläggningsjord
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_medium.png" alt="Liftdumper 2" class="mr-2" />
                2. Anläggningsjord Vinter
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_small.png" alt="Liftdumper 3" class="mr-2" />
                3. Fukthållande jord
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_big.png" alt="Liftdumper 1" class="mr-2" />
                4. Odlingsjord
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_medium.png" alt="Liftdumper 2" class="mr-2" />
                5. Sportjord 60-40
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_small.png" alt="Liftdumper 3" class="mr-2" />
                6. Sportjord 90-10
            </li>
        </div>
    );
}

const Krossprodukter = ()   => {
    return (
        <div>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_big.png" alt="Liftdumper 1" class="mr-2" />
                1. Asfaltsgrus 0-16
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_medium.png" alt="Liftdumper 2" class="mr-2" />
                2. Asfaltsgrus 0-90
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_small.png" alt="Liftdumper 3" class="mr-2" />
                3. Berg/Betongkross 0-63
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_big.png" alt="Liftdumper 1" class="mr-2" />
                4. Berg/Betongkross 0-16
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_medium.png" alt="Liftdumper 2" class="mr-2" />
                5. Bergkross 0-32
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_small.png" alt="Liftdumper 3" class="mr-2" />
                6. Bergkross 8-16
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_small.png" alt="Liftdumper 3" class="mr-2" />
                6. Bergkross 0-150
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_small.png" alt="Liftdumper 3" class="mr-2" />
                6. Betongkross 0-90
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_small.png" alt="Liftdumper 3" class="mr-2" />
                6. 358kr per ton
            </li>
        </div>
    );
}
  
const Vatsiktadeprodukter = ()   => {
    return (
        <div>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_big.png" alt="Liftdumper 1" class="mr-2" />
                1. Dressand 0,2-3,8
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_medium.png" alt="Liftdumper 2" class="mr-2" />
                2. EU Gungsand 2-6
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_small.png" alt="Liftdumper 3" class="mr-2" />
                3. Finsand 0,065-05
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_big.png" alt="Liftdumper 1" class="mr-2" />
                4. Grus 2-8
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_medium.png" alt="Liftdumper 2" class="mr-2" />
                5. Grus 4-8
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_small.png" alt="Liftdumper 3" class="mr-2" />
                6. Kullersten 90-150 lösvikt
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_small.png" alt="Liftdumper 3" class="mr-2" />
                6. Murbrukssand 0-4
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_small.png" alt="Liftdumper 3" class="mr-2" />
                6. Puts & Leksand 0-2
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_small.png" alt="Liftdumper 3" class="mr-2" />
                6. Rörgravsfyllning 0-8
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_small.png" alt="Liftdumper 3" class="mr-2" />
                6. Singel 16-32
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_small.png" alt="Liftdumper 3" class="mr-2" />
                6. Singel 32-90
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_small.png" alt="Liftdumper 3" class="mr-2" />
                6. Singel 8-16
            </li>
            <li class="list-group-item d-flex align-items-center">
                <img src="../assets/images/liftdumper_small.png" alt="Liftdumper 3" class="mr-2" />
                6. Stoppsten 500
            </li>
        </div>
    );
}


export default {
    middleSectionGridItems,
    optionsList,    
    Bergkross,
    Makadam,
    Grus,
    Sand,
    Jord,
    Finsingel,
    Gångsingel,
    ovrigt,
    Jordprodukter,
    Krossprodukter,
    Vatsiktadeprodukter
};