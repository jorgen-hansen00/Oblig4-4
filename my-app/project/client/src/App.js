import Routes from './routes/Routes';
import Theme from './styles/Theme';
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Importerer Routes her da den "styrer" hele applikasjonen
 * Hvis du bruker Styled Components kan du også beholde Theme her (se inne i /styles/Theme.js)
 */

function App() {
  return (
    <Theme>
      <Routes />
    </Theme>
  );
}

function Movies() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The button was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
  ReactDOM.render(
    <Movies />,
    document.getElementById('root')
  );
}

function Movie(props) {
  return <h1>Movies</h1>;
}

export default App;

export default App;
