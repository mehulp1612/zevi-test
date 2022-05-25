import './App.css';
import Container from './components/Container';

const grid={
  display:'flex',
  flexDirection:'column',
  justifyContent:'space-evenly',
  alignContent:'center',
  alignItems:'center',
  margin:'25px 25px',
  // border:'solid 1px black',
  // height:'95vh',

}

function App() {
  return (
    <div className="App">
     <div style={grid}>
       {/* calling the component by passing each of the sentences as a prop */}
       <Container text={"He's not the sharpest knife in the drawer"}/>
       <Container text={"The big building was blazing with lights"}/>
       <Container text={"Now you must answer some big questions"}/>
       <Container text={"Get Your Act Together!"}/>
     </div>
    </div>
  );
}

export default App;
