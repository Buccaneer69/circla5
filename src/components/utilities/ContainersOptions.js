import React from 'react';

const middleSectionGridItems = [
    { id: 1, title: 'LiftDumper' },
    { id: 2, title: 'LastVäxlare' },
];

const optionsList = {
    1: ['Option 1', 'Option 2', 'Option 3'],
    2: ['Option 4', 'Option 5', 'Option 6'],
    3: ['Option 7', 'Option 8', 'Option 9'],
    4: ['Option 10', 'Option 11', 'Option 12'],
};

const liftdumper = ()   => {
    return (
    <div>
        <li class="list-group-item d-flex align-items-center">
        <img src="../assets/images/liftdumper_big.png" alt="Liftdumper 1" class="mr-2" />
        1. liftdumper (låsbar) 10M^3
        </li>
        <li class="list-group-item d-flex align-items-center">
        <img src="../assets/images/liftdumper_medium.png" alt="Liftdumper 2" class="mr-2" />
        2. liftdumper (öppen) 10M^3
        </li>
        <li class="list-group-item d-flex align-items-center">
        <img src="../assets/images/liftdumper_small.png" alt="Liftdumper 3" class="mr-2" />
        3. liftdumper (öppen) 5M^3
        </li>
    </div>
    );
}

const lastvaxlare = ()   => {
    return (
    <div>
        <li class="list-group-item d-flex align-items-center">
        <img src="../assets/images/lastvaxlare_xl.png" alt="Lastväxlare 1" class="mr-2" />
        1. lastvaxlare (öppen) 30M^3
        </li>
        <li class="list-group-item d-flex align-items-center">
        <img src="../assets/images/lastvaxlare_large.png" alt="Lastväxlare 2" class="mr-2" />
        2. lastvaxlare (låsbar) 26M^3
        </li>
        <li class="list-group-item d-flex align-items-center">
        <img src="../assets/images/lastvaxlare_medium.png" alt="Lastväxlare 3" class="mr-2" />
        3. lastvaxlare (öppen) 22M^3
        </li>
        <li class="list-group-item d-flex align-items-center">
        <img src="../assets/images/lastvaxlare_small.png" alt="Lastväxlare 4" class="mr-2" />
        4. lastvaxlare (öppen) 12M^3
        </li>
    </div>
    );
}

export default {
    middleSectionGridItems,
    optionsList,
    liftdumper,
    lastvaxlare,
};