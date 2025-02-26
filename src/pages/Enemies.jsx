// src/pages/EnemiesList.js
import React, { useState } from 'react';

const Enemies = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEnemy, setSelectedEnemy] = useState(null);

  const enemies = [
    { id: 1, name: 'Mutant Brute', health: 100, shield: 50, might: 10, initiative: 15 },
    { id: 2, name: 'Mutant Sniper', health: 80, shield: 30, might: 5, initiative: 25 },
  ];

  const openModal = (enemy) => {
    setSelectedEnemy(enemy);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEnemy(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Available Enemies</h1>
      <ul className="space-y-2">
        {enemies.map((enemy) => (
          <li key={enemy.id}>
            <button
              className="p-2 bg-blue-500 text-white rounded"
              onClick={() => openModal(enemy)}
            >
              {enemy.name}
            </button>
          </li>
        ))}
      </ul>

      {showModal && selectedEnemy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold">{selectedEnemy.name}</h2>
            <p>Health: {selectedEnemy.health}</p>
            <p>Shield: {selectedEnemy.shield}</p>
            <p>Might: {selectedEnemy.might}</p>
            <p>Initiative: {selectedEnemy.initiative}</p>
            <button
              className="mt-4 p-2 bg-red-500 text-white rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Enemies;
