import { useState } from "react";
import Todo from "./todo";
import './todoApp.css'; //con ".css" , osea con la extencion, para que react reconozca que no es un archivo js

export default function TodoApp() {
  const [title, setTitle] = useState("Hola");
  const [todos, setTodos] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    const temp = [...todos];
    temp.unshift(newTodo);
    setTodos(temp);
    setTitle("");
  }

  function handleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);
  }

  function handleDelete(id) {
    const temp = todos.filter((item) => item.id !== id);
    setTodos(temp);
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="todoInput" value={title} />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Create todo"
          className="buttonCreate"
        />
      </form>

      <div className="todosContainer">
        {todos.map((item) => (
          <Todo
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

/* 
Notas:

*Componentes : primera letra en mayuscula para que React sepa que es un componente.

*Howk : funcion para actualizar la informacion del estado.

*Use state , regresa arreglo de 2 elementos. UseState es el estado inicial.

*la notacion de clases de estilo es camelCase.

*(e) : regresa una variable Event.

*Expresion en Js : usamos llaves.

*/
