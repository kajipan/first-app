
import './App.css';

import Greet from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Message from './components/message';
function App() {
  return (
    <div className="App">
      <Message/>
      {/* <Greet name="Bruce" heroName="Batman">
      <p>This is children props</p>
      </Greet>      
      <Greet name="Clark " heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana " heroName="wonderwomen"/>
      <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="Clark " heroName="Superman"/>
      <Welcome name="Diana " heroName="wonderwomen"/>
      {/* <Hello/> */}
    </div>
  );
}

export default App;
