
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
import NameList from './components/NameList';
import Person from './components/Person';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import From from './components/From';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary >
        <Hero heroName="Spiderman" />
        <Hero heroName="Iornman" />
        <Hero heroName="Joker" />
      </ErrorBoundary>
      {/*<PortalDemo />
      {/*<FRParentInput />
      {/*<FocusInput />
      {/*<RefsDemo />
      {/*<ParentComponent />
      {/*<Table />
      {/*<FragmentDemo />
      {/*< LifecycleA />
      {/*<From />
      {/* <h1 className='error'>Error</h1> }
      {/* <h1 className={styles.success}>Success</h1>
      <Inline/>
      {/*<Stylesheet primary={true} />
      {/* <Person />
      <NameList />
      {/*<UserGreeting /> }
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
