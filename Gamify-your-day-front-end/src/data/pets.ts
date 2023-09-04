// import canaryNorm from './images/canary-normal.png';
import canaryNorm from 'src/images/canary-normal.png';
import canaryHappy from 'src/images/canary-happy.png';
import canarySad from 'src/images/canary-sad.png';
import hamsterNorm from 'src/images/hamster-normal.png';
import hamsterHappy from 'src/images/hamster-happy.png';
import hamsterSad from 'src/images/hamster-sad.png';
import tortoiseNorm from 'src/images/tortoise-normal.png';
import tortoiseHappy from 'src/images/tortoise-happy.png';
import tortoiseSad from 'src/images/tortoise-sad.png';
import type { PetType } from 'src/types';

const pets: PetType[] = [
  {
    petId: 1,
    name: 'tortoise',
    classname: 'petbtn',
    petClicked: false,
    btn: 'tortoisebtn',
    hungerlevel: 2,
    mood: [tortoiseNorm, tortoiseHappy, tortoiseSad],
    completion:
      "The tortoise chomps happily on a couple of apples. You've done well for today!",
  },
  {
    petId: 2,
    name: 'canary',
    classname: 'petbtn',
    petClicked: false,
    btn: 'canarybtn',
    hungerlevel: 4,
    mood: [canaryNorm, canaryHappy, canarySad],
    completion:
      "The canary sings joyfully, satisfied! You've done an amazing job!",
  },
  {
    petId: 3,
    name: 'hamster',
    classname: 'petbtn',
    petClicked: false,
    btn: 'hamsterbtn',
    hungerlevel: 8,
    mood: [hamsterNorm, hamsterHappy, hamsterSad],
    completion:
      "After so many apples, the hamster seems to be finally full as it snoozes peacefully. It wasn't easy but you did it!",
  },
];

export default pets;
