import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Todo } from '@first-org/data';
import { Todos } from '@first-org/ui';
import dynamic from 'next/dynamic';

const DynamicCyto = dynamic(
  () => import('@first-org/dynamic-ui').then((mod) => mod.Cyto),
  { ssr: false }
);

const StyledPage = styled.div`
  .todo {
    color: red;
  }
`;

export function Index() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const i = 4;
  const j = 5;

  useEffect(() => {
    fetch('/api/todo')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  function addTodo() {
    fetch('/api/todo', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  }

  return (
    <StyledPage>
      <h1>Todos</h1>
      <DynamicCyto />
      <ul>
        <Todos todos={todos} />
        <button id={'add-todo'} onClick={addTodo}>
          Add Todo
        </button>
      </ul>
    </StyledPage>
  );
}

export default Index;
