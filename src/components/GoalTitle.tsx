import React, { useEffect, useRef, useState } from 'react';

const GoalTitle: React.FunctionComponent = () => {
  const [goalTitle, setGoalTitle] = useState<string>('');

  const handleInput = ({ target: { value } }) => {
    setGoalTitle(value);
  };

  return (
    <input type="text" autoFocus value={goalTitle} onChange={handleInput} />
  );
};

export default GoalTitle;
