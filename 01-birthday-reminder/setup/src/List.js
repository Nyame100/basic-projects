import React from "react";

const List = ({ people, removeBirthday }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div className="con">
              <div className="">
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
              <button className="btn" onClick={() => removeBirthday(id)}>
                Remove
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
