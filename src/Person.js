import React from "react";

const Person = ({ person }) => {
  const { name, age, image } = person;

  const heading = <h4>{name}</h4>;
  const paragraph = <p>{age} years</p>;
  const img = <img src={image} alt={name} />;

  return (
    <article className="person">
      {img}
      <div>
        {heading}
        {paragraph}
      </div>
    </article>
  );
};

export default Person;
