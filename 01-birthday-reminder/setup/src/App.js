import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  const removeBirthday = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} removeBirthday={removeBirthday} />
        <button onClick={() => setPeople([])}>
          {people.length === 0 ? "empty list" : "clear list"}
        </button>
      </section>
    </main>
  );
}

export default App;
