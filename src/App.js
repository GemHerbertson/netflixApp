import React from 'react';
import './App.css';

const Header = () => {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
    </div>
  )
}

const Menu = () => {
  return (
    <div>
      <p>What is Netflix?</p>
      <p>How much does Netflix cost?</p>
      <p>Where can I watch?</p>
      <p>How do I cancel?</p>
      <p>What can I watch on Netflix?</p>
      <p>How does the free trial work?</p>
    </div>
  )
}

const Trial = () => {
  return (
    <div>
      <button>TRY 30 DAYS FREE</button>
    </div>
  )
}

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Menu />
        <Trial />
      </div>
    )
  }
}
export default App;
