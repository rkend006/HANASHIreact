import './App.css';

function App() {

  const title = 'HANASHI APPLICATION';
  const likes = 50;
  const igLink = "https://www.instagram.com/hvnvshi/"
  const youtubeLink = "https://www.youtube.com/watch?v=1So4hbdJ6r0"


  return (
    <div className = "App">
      <div className = "content">
        <h1>{title}</h1>
        <p>liked {likes} times!</p>

        <a href={igLink}>Instagram</a>
        <p> </p>
        <a href={youtubeLink}>YouTube</a>
      </div>
    </div>

  );
}

export default App;
