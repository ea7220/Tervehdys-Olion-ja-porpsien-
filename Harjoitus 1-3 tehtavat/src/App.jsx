import Tervehdys from "./tehtava/Tervehdys";
import OpiskelijaTiedot from "./tehtava/OpiskelijaTiedot";

function App() {
  const opiskelija = {
    nimi: "Matti Meikäläinen",
    ika: 16,
    kurssi: "Reactin perusteet",
  };

  return (
    <div>
      <h1>React tehtävät</h1>

      <Tervehdys nimi="Elias" />

      <OpiskelijaTiedot opiskelija={opiskelija} />
    </div>
  );
}

export default App;
