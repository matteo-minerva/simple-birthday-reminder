import React, { useState } from "react";
import data from "./data";
import People from "./ListOfPeople";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <People people={people} />
        <button onClick={() => setPeople([])}>Clear all</button>
      </section>
    </main>
  );
};

export default App;
