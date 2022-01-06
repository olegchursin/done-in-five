import React, { useEffect, useRef, useState } from 'react';

const GoalTitle: React.FunctionComponent = () => {
  const [goalTitle, setGoalTitle] = useState<string>('');
  const [width, setWidth] = useState(0);
  const span: any = useRef();

  useEffect(() => {
    if (span && span.current) {
      setWidth(span.current.offsetWidth);
    }
  }, [goalTitle]);

  const handleInput = ({ target: { value } }) => {
    setGoalTitle(value);
  };

  return (
    <>
      <input type="text" autoFocus value={goalTitle} onChange={handleInput} />
    </>
  );
};

export default GoalTitle;
