import React, { useState } from 'react';

import GoalIcon from './GoalIcon';

const icons = new Array(5).fill({}).map((e, i) => {
  return { id: i };
});

const GoalSteps: React.FunctionComponent = () => {
  const [completeCount, setCompleteCount] = useState<number>(0);

  const handleMarkComplete: any = (idx: number) => {
    setCompleteCount(idx + 1);
  };

  const handleReset = () => {
    setCompleteCount(0);
  };

  return (
    <>
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
    </>
  );
};

export default GoalSteps;
