import { useState } from "react";
import data from "./data.js";
import PeopleList from "./components/PeopleList.jsx";
const App = () => {
  const [peoples, setPeoples] = useState(data);
  const handleClear = () => {
    setPeoples([]);
  };
  return (
    <main>
      <section className="container">
        <PeopleList peoples={peoples} />
        <button type="button" className="btn btn-block" onClick={handleClear}>
          Clear
        </button>
      </section>
    </main>
  );
};
export default App;
