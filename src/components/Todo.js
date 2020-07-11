import React, {useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import TodoEdit from "./TodoEdit";
import useStyles from "../styles/TodoStyles";
import useToggleState from "../hooks/useToggleState";
import { TodoContext } from "../reducers/todoReducer";

const Todo = ({ id, task, completed }) => {
  const classes = useStyles();
  const {dispatch} = useContext(TodoContext);
  const [isEditing, toggle] = useToggleState(false);

  if (isEditing) {
    return (
      <li
        className={classes.Todo}
        style={{ overflowY: "hidden" }}
        onClick={() => toggle()}
      >
        <TodoEdit id={id} task={task} toggleEdit={toggle} />
      </li>
    );
  } else {
    return (
      <li className={classes.Todo}
      onClick={() => dispatch({ type: 'TOGGLE_TODO', payload:id })}
      >
        <span
          style={{
            textDecoration: completed ? "line-through" : "",
            color: completed ? "bdc3c7" : "#34495e",
          }}
        >
          {task}
        </span>
        <div>
          <FontAwesomeIcon
            className={classes.icons}
            style={{ color: "#c0392b" }}
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: 'REMOVE_TODO', payload:id });
            }}
            icon={faTrash}
          />
          <FontAwesomeIcon
            className={classes.icons}
            style={{ color: "#58b2dc" }}
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
            icon={faPen}
          />
        </div>
      </li>
    );
  }
};

export default Todo;
