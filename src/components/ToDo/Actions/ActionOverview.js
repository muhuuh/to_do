import { useContext } from "react";
import ToDoContext from "../../store/todo-context";
import ActionItem from "./ActionItem";
import AddAction from "./AddAction";

const ActionOverview = (props) => { 
  const ctx = useContext(ToDoContext);

  const actionItems = ctx.toDos.map((todo) => (
    <ActionItem
      key={todo.id}
      name={todo.name}
      id={todo.id}
      daysLeft={todo.daysLeft}
      date={todo.stopDate}
      priority={todo.priority}
      done={todo.done}
    />
  ));

  return (
    <div>
      <div className="border-2 round-lg shadow-lg w-2/3 mx-auto mt-12">
        <div className="flex flex-col gap-y-8 m-12 overflow-y-scroll max-h-96">
          {actionItems}
        </div>
      </div>
      <AddAction/>
    </div>
  );
};

export default ActionOverview;
