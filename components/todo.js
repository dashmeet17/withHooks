import React, {useState} from 'react';
import {useDispatch} from 'redux-react-hook';

export default function TodoInput() {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  const onChange = (e) => {
    debugger;
    newTodo;
    setNewTodo(e.target.value);
    debugger;
  }

  return (
    <input
      type="text"
      onChange={onChange}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          dispatch({type: 'add todo', todo: newTodo});
          setNewTodo('');
        }
      }}
      placeholder="What needs to be done?"
      value={newTodo}
    />
  );
}
