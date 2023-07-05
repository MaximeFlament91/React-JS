import React, { useState } from 'react'

function Todo(){
    const [todo, setTodo] = useState({
        task: '',
        array: []
      })
      // Déclare une variable d'état 'todo' en utilisant le hook useState.
      // La variable d'état contient un objet avec les propriétés 'task' initialisée à une chaîne vide et 'array' initialisée à un tableau vide.
    
      const handleChange = (event) => {
        const { name, value } = event.target
        setTodo(todo => ({...todo, [name]: value }))
      }
      // Définit une fonction handleChange qui met à jour la propriété 'task' de 'todo' avec la valeur saisie dans l'élément de formulaire correspondant.
    
      const handleSubmit = (e) => {
        e.preventDefault()
    
        todo.array.push({
          name: todo.task,
          isActive: true
        })
        // Ajoute un nouvel objet à la propriété 'array' de 'todo' avec les propriétés 'name' et 'isActive'.
    
        e.target.reset()
        // Réinitialise le formulaire.
    
        setTodo(todo => ({ ...todo, task: '' }))
        // Met à jour la propriété 'task' de 'todo' avec une chaîne vide.
      }
    
      const deleteTask = (idTask) => {
        const arrayAfterDeleteTask = todo.array.filter((task, index) => {
          if(index !== idTask) return task
        })
        // Crée un nouveau tableau 'arrayAfterDeleteTask' en filtrant les tâches de 'todo.array' à l'exception de celle avec l'indice correspondant à 'idTask'.
    
        setTodo({array: arrayAfterDeleteTask})
        // Met à jour la propriété 'array' de 'todo' avec le nouveau tableau filtré.
      }
    
      const update = (idTask) => {
        const arrayAfterUpdate = todo.array.filter((task, index) => {
          if(index === idTask) {
            task.isActive = !task.isActive
          }
          return task
        })
        // Crée un nouveau tableau 'arrayAfterUpdate' en filtrant les tâches de 'todo.array' et en inversant la valeur de 'isActive' pour celle avec l'indice correspondant à 'idTask'.
    
        setTodo({array: arrayAfterUpdate})
        // Met à jour la propriété 'array' de 'todo' avec le nouveau tableau filtré et mis à jour.
      }
    
      return(
        <div>
          <h1>TodoList 🚀</h1>
          {todo.array.map((task, index) => {
            return(
              <div key={index}  >
                <p className={task.isActive ? "" : "cross"} onClick={() => update(index)} >{task.name}</p>
                <button onClick={() => deleteTask(index)}>delete</button>
              </div>
            )
          })}
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder="Add task"
              name='task'
              onChange={handleChange}
            />
            <button>valider</button>
          </form>
        </div>
      )
    }


export default Todo;