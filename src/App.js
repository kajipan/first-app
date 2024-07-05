
import './App.css';

import Greet from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Message from './components/message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
function App() {
  return (
    <div className="App">
      <UserGreeting />
      {/*<ParentComponent/> }
      {/*<EventBind/> }
      {/*<FunctionClick/> }
      {/*<ClassClick/> }
      {/* <Counter /> }
      {/* <Message/> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>       
      <Greet name="Clark " heroName="Superman">
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="Diana " heroName="wonderwomen"/> 
      <Welcome name="Bruce" heroName="Batman"/> 
      {/*<Welcome name="Clark " heroName="Superman"/>
      <Welcome name="Diana " heroName="wonderwomen"/> */}
      {/* <Hello/> */}
    </div>
  );
}


export default App;
