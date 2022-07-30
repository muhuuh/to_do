import { useContext, useEffect, useState } from "react";
import ToDoContext from "../../store/todo-context";
import CalenderDate from "../../UI/CalenderDate";

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
    <div className="flex flex-row justify-end">
      <div className="grid grid-cols-5 items-center w-full text-center shadow-md border-2 rounded-lg hover:bg-veryPaleOrangeRed px-6 py-2 mr-6">
        <div className="truncate">{props.name}</div>
        <div
          className={`mx-8 border-2 border-white rounded-lg text-white hover:scale-125 italic ${isTooLow ? "bg-red-500" : "bg-lime-600"}`}
        >
          {props.daysLeft}
        </div>
        <div className="hover:scale-110">
          <input
            type="checkbox"
            onChange={onStartedHandler}
            value={props.done}
            className= ""
          />
          <label className="ml-2">Started</label>
        </div>
        <div
          className={`${props.priority === "high" ? "text-red-500" : ""}`}
        >
          {props.priority}
        </div>

        <div className="flex flex-col">
          <button onClick={archiveItemHandler}>Archive</button>
          <button onClick={removeItemHandler} className="">
            Delete
          </button>
        </div>
      </div>
      <div className="flex justify-end mr-6">
        <CalenderDate eta={props.date} />
      </div>
    </div>
  );
};

export default ActionItem;
