function OpiskelijaTiedot({ opiskelija }) {
  return (
    <div>
      <h2>{opiskelija.nimi}</h2>
      <p>Ikä: {opiskelija.ika}</p>
      <p>Kurssi: {opiskelija.kurssi}</p>
    </div>
  );
}

export default OpiskelijaTiedot;
