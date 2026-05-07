import Tervehdys from "./tehtava/Tervehdys";
import OpiskelijaTiedot from "./tehtava/OpiskelijaTiedot";

function App() {
  return (
    <div>
      <h1>React tehtävät</h1>

      <Tervehdys nimi="Ville" />

      <OpiskelijaTiedot />
    </div>
  );
}

export default App;
