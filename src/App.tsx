import Dropdown from "components/Dropdown/Dropdown";
import List from "components/List/List";

function App() {
  return (
    <div className="App">
      <Dropdown />
      <List initialItems={["10", "20", "30", "40"]} />
    </div>
  );
}

export default App;
