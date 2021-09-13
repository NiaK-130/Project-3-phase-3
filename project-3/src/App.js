import './App.css';

fetch("http://localhost:9292")
  .then((r) => r.json())
  .then((data) => console.log(data));

function App() {
  return (
    <h1>Hello</h1>
  );
}

export default App;
