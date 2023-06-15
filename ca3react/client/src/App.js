import {useRef, useState, useEffect} from 'react';
import './App.css';
import { uploadFile} from './services/api';

function App() {

  const [file, setFile] = useState('');

const fileInputRef = useRef();

  const logo = 'https://tse3.explicit.bing.net/th?id=OIP.XOzPcytxLQAGGCFXpKmOtAHaF7&pid=Api&P=0';
  
  
useEffect(() => {
  const getImage = async() => {
    if(file) {
      const data = new FormData();
      data.append("name", file.name);
      data.append("file", file);

      let response = await uploadFile(data);
    }
  }
  getImage();
}, [file])

  const onUploadClick= () => {
    fileInputRef.current.click();
  }

  return (
  <div className="container">
 <img src={logo} alt="banner"/>
 <div className='wrapper'>
  <h1>File Sharing !</h1>
  <p>Upload and Share the download link</p>
 <button onClick={() => onUploadClick()}>Upload</button>
 <input type="file"
   ref={fileInputRef}
   style ={{display: 'none'}}
   onChange = {(e) => setFile(e.target.files[0])}
 />
 </div>
  </div>
  );
}

export default App;
