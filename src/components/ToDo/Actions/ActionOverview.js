import { useContext, useState } from "react";
import ToDoContext from "../../store/todo-context";
import Filter from "../Filter/Filter";
import ActionItem from "./ActionItem";
import AddAction from "./AddAction";

const ActionOverview = (props) => {
  const ctx = useContext(ToDoContext);
  const [filteredToDos, setFilteredToDos] = useState(ctx.toDos);

  const updateFilterHandler = (filter) => {
    let filteredToDos;
    filteredToDos = ctx.toDos;

    let filter_1;
    let filter_2;
    let filter_3;

    if (filter.priority === "") {
      filter_1 = filteredToDos;
    } else {
      filter_1 = filteredToDos.filter(
        (todo) => todo.priority === filter.priority
      );
    }

    if (filter.daysLeft === "") {
      filter_2 = filter_1;
    } else {
      filter_2 = filter_1.filter(
        (todo) => Number(todo.daysLeft) <= Number(filter.daysLeft)
      );
    }

    if (filter.started === "") {
      filter_3 = filter_2;
    } else {
      filter_3 = filter_2.filter((todo) => todo.done.toString() === filter.started);
    }

    setFilteredToDos(filter_3);
  };

  const actionItems = filteredToDos.map((todo) => (
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
    <div className="w-2/3 mx-auto">
      <Filter updateFilter={updateFilterHandler} />
      <div className="border-2 round-lg shadow-lg o mt-8">
        <div className="flex flex-col gap-y-8 m-12 overflow-y-scroll max-h-96">
          {actionItems}
        </div>
      </div>
      <AddAction />
    </div>
  );
};

export default ActionOverview;
