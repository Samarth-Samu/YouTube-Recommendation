import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [text, setText] = useState("");
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    try {
      const res = await axios.post("http://localhost:5000/mood", { text });
      setVideos(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Mood Based Music Recommendation</h1>

      <input
        placeholder="How is your mood today?"
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={getVideos}>Predict</button>

      <div className="videos">
        {videos.map((v, index) => (
          v.id?.videoId && (
            <iframe
              key={index}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${v.id.videoId}`}
              title="video"
              allowFullScreen
            ></iframe>
          )
        ))}
      </div>
    </div>
  );
}

export default App;