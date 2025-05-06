import { Table } from "./components";
import "./styles.css";

const columns = [
  { header: "Ad", accessor: "name" },
  { header: "Yaş", accessor: "age" },
];

const data = [
  { name: "Əli", age: 25 },
  { name: "Aytac", age: 30 },
];

export default function App() {
  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}
