const names = ["Arska", "Basso", "Mixu"];

var Hello = function App() {
  return (
    <div>
      {names.map((name, index) => (
        <p key={index}>Hello {name} ! </p>
      ))}
    </div>
  );
}
ReactDOM.render(<Hello />, document.getElementById('container'));