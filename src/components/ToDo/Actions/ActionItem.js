import { useContext, useEffect, useState } from "react";
import ToDoContext from "../../store/todo-context";

const ActionItem = (props) => {
  const ctx = useContext(ToDoContext);

  const removeItemHandler = () => {
    ctx.removeItem(props.id);
  };

  const onStartedHandler = () => {
    ctx.updateStarted(props.id);
  };

  const archiveItemHandler = () => {
    ctx.archiveItem(props.id);
  };

  const [isTooLow, setIsTooLow] = useState(false);

  useEffect(() => { 
    if (props.daysLeft <= 3) {
      setIsTooLow(true);
    } else if (props.daysLeft > 3) {
      setIsTooLow(false);
    }
  }, [props.daysLeft]);

  return (
    <div className="grid grid-cols-4 items-center text-center shadow-md border-2 rounded-lg hover:bg-veryPaleOrangeRed px-6 py-2 mr-6">
      <div className="text-lg">{props.name}</div>
      <div>
        <div>{props.date}</div>
        <div className={`italic ${isTooLow ? "text-red-500" : "text-green-500"}`}>{props.daysLeft}</div>
      </div>
      <div className="flex flex-col ">
        <div>
          <input
            type="checkbox"
            onChange={onStartedHandler}
            value={props.done}
          />
          <label className="ml-2">Started</label>
        </div>
        <button className={`${props.priority === "high" ? "text-red-500" : ""}`}>{props.priority}</button>
      </div>
      <div className="flex flex-col">
        <button onClick={archiveItemHandler}>Archive</button>
        <button onClick={removeItemHandler} className="">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ActionItem;
