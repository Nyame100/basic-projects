import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ id, title, info }) => {
  const [answer, setAnswer] = useState(false);
  return (
    <section className="question">
      <div>
        <header>
          <h4>{title}</h4>
          <button
            className="btn"
            onClick={() => {
              return setAnswer(!answer);
            }}
          >
            {answer ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {/* {answer && <p>{info}</p>} */}
        <p>{answer ? info : `${info.substring(0, 0)}`}</p>
      </div>
    </section>
  );
};

export default Question;
