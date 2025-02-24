import { useState } from "react";
import "./App.css";
import VideoRoom from "./components/VideoRoom";

function App() {
  const [joined, setJoined] = useState(false);

  return (
    <div className="App">
      <h1>A BASIC VIDEO CALL APPLICATION</h1>
      {!joined && (
        <>
          <button type="button" onClick={() => setJoined(true)}>
            Join Room
          </button>
        </>
      )}
      {joined && <VideoRoom />}
    </div>
  );
}

export default App;
