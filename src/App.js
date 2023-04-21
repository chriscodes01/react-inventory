import './App.css'
import { PropTypes } from "prop-types"
import Info from "./Info.js"

function App() {
  return (
    <div className="App">
      <Info title="Inventory" />
      <AddItem text="Chris" number={1} />
      <AddItem text="is" number={2} />
      <AddItem text="cool" number={3} />
    </div>
  );
}

function AddItem(props) {
  const value = props.text

  return (
    <form>
      <p>{props.number}</p>
      <label for="text-form">Type something: </label>
      <input type="text" value={value} id="text-form"/>
    </form>
  )
}

AddItem.defaultProps = {
  text: "default",
  number: 0
}

AddItem.propTypes = {
  text: PropTypes.string,
  number: PropTypes.number
}

export default App
