// import React, {useState} from "react";
// import "./App.css"

// const items = [                   
// { id: 1, kind: 'monkey', name:'Charlie', birthdate: new Date()},
// { id: 2, kind: 'lion', name:'Mufasa', birthdate: new Date() },
// { id: 3, kind: 'wolf', name:'Igor', birthdate: new Date() },
// { id: 4, kind: 'elephant', name:'Susane', birthdate: (new Date()) },
// { id: 5, kind: 'mouse', name:'Pedro', birthdate: (new Date()) },
// { id: 6, kind: 'panther', name:'Bagera', birthdate: (new Date()) },
// { id: 7, kind: 'bear', name:'Balu', birthdate: (new Date()) },
// ];

import React, { useState } from "react";
import "./App.css";

const animalsData = [
  {
    id: 1,
    species: "Dog",
    name: "Rex",
    dateOfBirth: new Date(),
  },
  {
    id: 2,
    species: "Cat",
    name: "Snowball",
    dateOfBirth: new Date(),
  },
  {
    id: 3,
    species: "Rabbit",
    name: "Fluffy",
    dateOfBirth: new Date(),
  },
  {
    id: 4,
    species: "Hedgehog",
    name: "Needle",
    dateOfBirth: new Date(),
  },
  {
    id: 5,
    species: "Lion",
    name: "Simba",
    dateOfBirth: new Date(),
  },
  {
    id: 6,
    species: "Parrot",
    name: "Wings",
    dateOfBirth: "",
  },
];

const sectorsData = [
  "Birds",
  "Mammals",
  "Amphibians",
  "Reptiles",
  "Fish",
  "Insects",
];

function AnimalList() {
  const [animals, setAnimals] = useState(animalsData);
  const [sectors, setSectors] = useState(sectorsData);
  const [newAnimal, setNewAnimal] = useState({
    id: "",
    species: "",
    name: "",
    dateOfBirth: "",
    sector: sectors[0],
  });

  const [promenljiva, setVrednostPromenljive] = useState(pocetnaVrednost) // return [el1, el2];

  // zad3
  const handleRemoveAnimal = (animalIndex) => {
    setAnimals([
      ...animals.slice(0, animalIndex),
      ...animals.slice(animalIndex + 1),
    ]);
  };

  // zad4
  const handleMoveAnimalToTop = (animalIndex) => {
    setAnimals([
      animals[animalIndex],
      ...animals.slice(0, animalIndex),
      ...animals.slice(animalIndex + 1),
    ]);
  };

  // zad 5
  const handleAddNameToNewAnimal = (name) => {
    setNewAnimal({
      ...newAnimal,
      id: Math.random(),
      name,
    });
  };

  const handleAddSpeciesToNewAnimal = (species) => {
    setNewAnimal({
      ...newAnimal,
      species,
    });
  };

  const handleAddDateToNewAnimal = (dateOfBirth) => {
    setNewAnimal({
      ...newAnimal,
      dateOfBirth: new Date(dateOfBirth),
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    setAnimals([...animals, newAnimal]);
    setNewAnimal({
      id: "",
      species: "",
      name: "",
      dateOfBirth: "",
      sector: sectors[0],
    });
  };
  //

  const handleSectorChange = (sectorValue) => {
    setNewAnimal({
      ...newAnimal,
      sector: sectorValue,
    });
  };


  // zad7
  const checkAnimalsWithSector = (sector) => {
    const sectorAnimals = animals.filter((animal) => animal.sector === sector);

    alert(JSON.stringify(sectorAnimals));
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          required
          type="text"
          value={newAnimal.name}
          onChange={(e) => handleAddNameToNewAnimal(e.target.value)}
        ></input>
        <input
          required
          type="text"
          value={newAnimal.species}
          onChange={(e) => handleAddSpeciesToNewAnimal(e.target.value)}
        ></input>
        <input
          required
          type="date"
          value={
            newAnimal.dateOfBirth
              ? newAnimal.dateOfBirth.toISOString().substring(0, 10)
              : ""
          }
          onChange={(e) => handleAddDateToNewAnimal(e.target.value)}
        ></input>
        <select
          onChange={(e) => handleSectorChange(e.target.value)}
          value={newAnimal.sector}
        >
          {sectors.map((sector, index) => (
            <option key={index}>{sector}</option>
          ))}
        </select>
        <button type="submit">Add new animal</button>
      </form>

      <h2>Animals</h2>
      <table>
        <thead>
          <tr>
            <th>Species</th>
            <th>Name</th>
            <th>Date of birth</th>
            <th>Sector</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, index) => (
            <tr key={animal.id}>
              <td>{animal.species}</td>
              <td>{animal.name}</td>
              <td>
                {animal.dateOfBirth
                  ? animal.dateOfBirth.toDateString()
                  : "Nepoznat"}
              </td>
              <td>{animal.sector ?? "Nepoznat"}</td>  zad2
              <td>
                <button onClick={() => handleRemoveAnimal(index)}>
                  Remove
                </button>
              </td>
              <td>
                <button onClick={() => handleMoveAnimalToTop(index)}>
                  ON TOP
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Sektori</h3>
      <table>
        <thead>
          <tr>
            <th>Sektor</th>
          </tr>
        </thead>
        <tbody>
          {sectors.map((sector, index) => (
            <tr key={index}>
              <td>{sector}</td>
              <td>
                <button onClick={() => checkAnimalsWithSector(sector)}>
                  Check animals
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AnimalList;