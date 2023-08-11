/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState(null);
  const [name, setName] = useState('');

  useEffect(() => {
    fetch('api/todos')
      .then((res) => res.json())
      .then((json) => setTodos(json.todos))
      .catch((err) => console.log(err));
  }, []);

  const createTodo = async () => {
    try {
      const response = await fetch('api/todos', { method: 'POST', body: JSON.stringify({ name }) });
      console.log(response);
      const json = await response.json();
      // console.log(json);
      setTodos((prevTodos) => ([...prevTodos, json.todo]));
      setName('');
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    createTodo();
  };

  const deleteTodo = async (id) => {
    try {
      await fetch(`/api/todos/${id}`, { method: 'DELETE' });

      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="flex flex-col justify-center">
        <h1 className="font-normal text-center my-3">Todos</h1>
        <div className="flex flex-col justify-center content-center mt-10">
          {!todos
            ? (
              <p className="px-3 text-gray-500">
                Loading...
              </p>
            )
            : (
              <div>
                {todos.map(({ id = 0, name = 'empty' }) => (
                  <div className="content" key={id} data-testid="todo">
                    <input type="checkbox" value={name} />
                    <div className="info mx-3">
                      {name}
                    </div>
                    <button className="bg-red-400" onClick={() => deleteTodo(id)}>Delete</button>
                  </div>
                ))}
              </div>
            )}

          <div className="my-4">
            <form onSubmit={handleSubmit}>
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  className="form-control w-3/4"
                  data-testid="post-todo"
                  placeholder="Todo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button type="submit" className="btn btn-success">+</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
