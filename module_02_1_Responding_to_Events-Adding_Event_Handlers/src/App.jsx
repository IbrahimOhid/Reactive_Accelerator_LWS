import "./App.css";

function Button({onSmash, children}){
  return(
    <button onClick={onSmash}>{children}</button>
  )
}

function Toolbar({onPlayMovie, OnUploadImage}){
  return(
    <div>
      <Button onSmash={onPlayMovie}>Play Movie</Button>
      <Button onSmash={OnUploadImage}>Upload Image</Button>
    </div>
  )
}

function App() {

  return (
    <div>
      <Toolbar onPlayMovie={()=> alert('Playing')}
      OnUploadImage={()=> alert('Uploading')} />
      
    </div>
  )
}

export default App

export default App;
