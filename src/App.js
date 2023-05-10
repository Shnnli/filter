import { useRef } from "react";
import "./styles.css";

export default function App() {
  const ref = useRef();
  const change = () => {
    ref.current.style.filter = "grayscale(0)";
    // ref.current.style.width = "auto";
  };
  const change2 = () => {
    // ref.current.style.filter = "grayscale(1)";
  };
  return (
    <>
      <div className="App" ref={ref}>
        <div className="id1">
          <div className="id2">2</div>
        </div>
      </div>
      <div className="id3">3</div>
      <button onClick={change}>change</button>
      <button onClick={change2}>change2</button>
    </>
  );
}
