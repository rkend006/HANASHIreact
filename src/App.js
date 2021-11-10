import './App.css';

function App() {

  const title = 'HANASHI APPLICATION';
  const likes = 50;
  const person = {name:'Ryan',age:'26'};



  return (
    <div className = "App">
      <div className = "content">
        <h1>{title}</h1>
        <p>liked {likes} times!</p>
      </div>
    </div>

  );
}

export default App;
