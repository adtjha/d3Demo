import { useState } from "react";
import { Chart } from "./components/chart";
import { Login } from "./components/login";
import "./styles/App.scss";

function App() {
  const [login, setlogin] = useState(false);
  const [data, setdata] = useState([
    { year: 1980, efficiency: 1, sales: 8949000 },
    { year: 1985, efficiency: 2, sales: 10979000 },
    { year: 1990, efficiency: 3, sales: 9303000 },
    { year: 1991, efficiency: 4, sales: 8185000 },
    { year: 1992, efficiency: 5, sales: 8213000 },
    { year: 1993, efficiency: 6, sales: 8518000 },
    { year: 1994, efficiency: 7, sales: 8991000 },
    { year: 1995, efficiency: 8, sales: 8620000 },
    { year: 1996, efficiency: 9, sales: 8479000 },
    { year: 1997, efficiency: 10, sales: 8217000 },
  ]);

  const updateData = () => {
    setdata([
      ...data.map((e) => {
        e.sales = ~~(Math.random() * 10000000);
        return e;
      }),
    ]);
  };

  return (
    <div className="c-app" onClick={updateData}>
      <header className="__header">{!login ? <Login setlogin={setlogin} /> : <Chart parentData={data} />}</header>
    </div>
  );
}

export default App;
