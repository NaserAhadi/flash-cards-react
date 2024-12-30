import "./App.css";
import { useState } from "react";
const questions = [
  {
    id: 1,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 2,
    question: "What are building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 3,
    question: "What's the name of syntax we use to describe a UI in React app?",
    answer: "JSX",
  },
  {
    id: 4,
    question: "How pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 5,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 6,
    question:
      "What do we call an input that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="cards-container">
      {questions.map((card) => (
        <div
          onClick={() => handleClick(card.id)}
          key={card.id}
          className={
            card.id === selectedId ? "flash-card selected-card" : "flash-card"
          }
        >
          <p>{card.id === selectedId ? card.answer : card.question}</p>
        </div>
      ))}
    </div>
  );
}
