import logo from './logo.svg';
import './App.css';
import * as htmlToImage from 'html-to-image';
import { toPng, download } from 'html-to-image';
import Draggable, {DraggableCore} from 'react-draggable'; 
import { render } from "react-dom";
import { Resizable } from "re-resizable";
import { useState } from 'react';

const makeImage = () => {
  htmlToImage.toPng(document.getElementById('my-node'))
  .then(function (dataUrl) {
    console.log(dataUrl, 'my-node.png')
  });
}

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
};

function App() {
  const [title, setTitle] = useState("");
  
  return (
    <>

    <div class="img-size" id="my-node">
      <p>{title}</p>
      
      <h1>OMG</h1>
      

      <Draggable>
        <Resizable
          style={style}
          defaultSize={{
            width: 200,
            height: 200
          }}
        >
          <div className={"size-class"}></div>
        </Resizable>
      </Draggable>
        
    </div>
    <input onChange={e => setTitle(e.target.value)} value={title}></input>
    <button onClick={makeImage} className="App">
      Make an image
    </button>
    </>
    
  );
}

export default App;
