import { createRef } from 'react';
import { jsPDF } from "jspdf";

function generate(ref) {
  const doc = new jsPDF();

  doc.html(ref, {
   callback: function (doc) {
     doc.save();
   },
});
}

function App() {
  const ref = createRef();
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => generate(ref?.current)}>Generate</button>
      </header>
      <div style={{ display: 'none' }}>
        <div ref={ref}>
          Hello world1
        </div>
      </div>
    </div>
  );
}

export default App;
