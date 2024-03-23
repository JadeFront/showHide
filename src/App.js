import react, { useState } from 'react'
import './App.css';

function App() {
  const [ showHide, setShowHide ] = useState(false);

  const popup = () => {
    setShowHide(!showHide);
  }
  return (
    <div className="App" 
      style={{
        marginTop: '3rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem'
    }}>
      <button style={{
        borderRadius: '10px',
        cursor: 'pointer'
      }} 
      onClick={popup}>
        {showHide ? <p>hide</p> : <p>show</p>}
      </button>

      {showHide && 
        <div style={{
          border: 'solid 3px blue',
          borderRadius: '10px',
          width: '50%',
          backgroundColor: 'skyblue',
          padding: '4rem 1rem'
        }}>
          <h1>SURPRISE!</h1>
        </div>
      }
    </div>
  );
}

export default App;
