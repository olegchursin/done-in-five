import { useState } from 'react';

import GoalIcon from './components/GoalIcon';

const icons = new Array(5).fill({}).map((e, i) => {
  return { id: i };
});

const App: React.FunctionComponent = () => {
  const [completeCount, setCompleteCount] = useState(0);

  const handleMarkComplete: any = idx => {
    setCompleteCount(idx + 1);
  };

  const handleReset = () => {
    setCompleteCount(0);
  };

  return (
    <>
      <header>header</header>
      <main>
        <h3>Done in 5</h3>

        <div className="icons">
          {icons.map((icon, idx) => {
            const isComplete = idx < completeCount;

            return (
              <GoalIcon
                key={icon.id}
                index={idx}
                isComplete={isComplete}
                markComplete={idx => handleMarkComplete(idx)}
              ></GoalIcon>
            );
          })}
        </div>

        <button onClick={handleReset}>Reset</button>
      </main>
      <footer>footer</footer>
    </>
  );
};

export default App;
