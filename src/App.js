import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  // const {data, setData} = useState(data[0])

  const [questions, setQuestions] = useState(data);
  // const { id, title, info } = data[index];
  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>

        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
