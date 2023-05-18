import PetsItem from '../PetsItem/PetsItem';
// import { useState } from "react";

const pets = [
  {
    _id: '1',
    petOwnerId: '1',
    category: 'my pet',
    avatarURL:
      'https://drive.google.com/file/d/1ptVv5bfpj-szFF92jW9SMO6NxYG7pI6n/view',
    name: 'Jack',
    birthday: '22.04.2018',
    breed: 'Persian cat',
    comments:
      "Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys. Although a bitshy, he's a loyal and affectionate lap cat.",
  },
  {
    _id: '2',
    petOwnerId: '2',
    category: 'my pet',
    avatarURL:
      'https://drive.google.com/file/d/194BoAxQPJoUETVOyLhIwy7adHdfsxb-S/view',
    name: 'Jack',
    birthday: '22.04.2018',
    breed: 'Persian cat',
    comments:
      "Jack is a handsome Basenji with short, shiny red fur and perky ears. He's an active and intelligent dog that loves to explore and play. Jack is independent and strong-willed, but also affectionate and loyal to his family. He's a curious and energetic companion that brings joy and adventure to his family's life.",
  },
];

const PetsList = () => {
  return (
    <ul>
      {pets.map(pet => (
        <PetsItem key={pet._id} pet={pet} ava={pet.avatarURL} />
      ))}
    </ul>
  );
};

export default PetsList;