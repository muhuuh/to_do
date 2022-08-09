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

        <div className="flex flex-row justify-end">
          <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24" onClick={archiveItemHandler} className="items-center w-6 mr-4" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" onClick={removeItemHandler} className="items-center w-6 mr-2" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
        </div>
      </div>
      <div className="flex justify-end mr-6">
        <CalenderDate eta={props.date} />
      </div>
    </div>
  );
};

export default ActionItem;
