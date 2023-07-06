import React from "react";
import "./styles.css";

import { useState } from "react";

const foodDB = {
  "north indian": [
    { name: " Paneer makhani", rating: "4/5" },
    { name: "Paneer kulcha", rating: "3.5/5" }
  ],

  "south indian": [
    {
      name: "Masala Dosa",
      rating: "5/5"
    },
    {
      name: "Uttapam",
      rating: "4.5/5"
    }
  ],
  "punjabi": [
    {
      name: "Butter Chicken",
      rating: "3.5/5"
    },
    {
      name: " Masala Channa",
      rating: "5/5"
    }
  ]
};

export default function App() 
{
  const [selectedGenre, setGenre] = useState("punjabi");
  function genreClickHandler(genre) 
  {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🍛 goodfoods </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite foods. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(foodDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectedGenre].map((food) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

