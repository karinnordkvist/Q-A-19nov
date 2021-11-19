import './App.css';
import { ChartCanvas } from './components/ChartCanvas'
import { EditableContent } from './components/EditableContent'

function App() {
  // These variables are only simulations of your tasks. 
  // You'll have to use useSelector to pull your tasks from the store.
const completed = 5
const incomplete = 16

  return (
    <div className="App">
        <ChartCanvas completed={completed} incomplete={incomplete} /> {/* Passing the numbers into the component */}
        <EditableContent />
    </div>
  );
}

export default App;
