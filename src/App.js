function App() {
  return (
    <div className="container">
      <h1>My App</h1>
    </div>
    /**
     * return React.createElement('div', {className: "container"}, React.createElement("h1", {}, 'My App'))
     */
  );
}

export default App;
