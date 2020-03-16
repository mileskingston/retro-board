import React, { useState } from 'react';
import Board from './Board';

const App = () => {
  const [hidden, setHidden] = useState(false);
  const [title, setTitle] = useState('Board Title');

  const handleChange = e => {
    setTitle(e.target.value);
  }

  return (
    <div className="retro-board">
      <header className="retro-board__header">
        <h1>Retro Board</h1>
      </header>

      <main className="retro-board__main">
        <div className="retro-board__title">
          {!hidden ? (
              <h2
                onClick={() => setHidden(hidden => !hidden)}
              >
                {title}
                <span className="retro-board__title-icon" />
              </h2>
            ) : (
              <input
                className="input input--no-bg"
                onChange={handleChange}
                onBlur={() => setHidden(hidden => !hidden)}
                placeholder={title}
                autoFocus={hidden}
              />
            )
          }
        </div>

        <Board />
      </main>
    </div>
  );
}

export default App;
