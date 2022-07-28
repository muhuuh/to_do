import { useContext, useState } from "react";
import ToDoContext from "../../store/todo-context";
import Modal from "../Modal_Todo/Modal";

const AddAction = (props) => {
  const ctx = useContext(ToDoContext);

  const [nameAction, setNameAction] = useState("");
  const [startAction, setStartAction] = useState("");
  const [dateAction, setDateAction] = useState("");
  const [priorityAction, setPriorityAction] = useState("");
  // const [isTooLow, setIsTooLow] = useState(false);

  const onNameHandler = (event) => {
    setNameAction(event.target.value);
  };
  const onStartHandler = (event) => {
    setStartAction(event.target.value);
  };
  const onDateHandler = (event) => {
    setDateAction(event.target.value);
  };
  const onPriorityHandler = (event) => {
    setPriorityAction(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const startDate = new Date();
    const endDate = new Date(dateAction);
    const diff = (
      (endDate.getTime() - startDate.getTime()) /
      (1000 * 3600 * 24)
    ).toFixed(1);

    const newItem = {
      id: Date.now(),
      name: nameAction,
      daysLeft: diff,
      stopDate: dateAction,
      priority: priorityAction,
      done: false,
    };

    ctx.addItem(newItem);
  };

  return (
    <Modal onCloseModalToDo={props.onCloseAction}>
      <form onSubmit={onSubmitHandler}>
        <div className="flex flex-row justify-between mt-16">
          <div className="flex flex-col gap-y-2">
            <label>Name</label>
            <input
              type="text"
              onChange={onNameHandler}
              className="border-2 rounded-lg w-48"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label>Entry Date</label>
            <input
              type="date"
              onChange={onStartHandler}
              placeholder="dd/mm/yyyy"
              className="border-2 rounded-lg w-48"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label>ETA</label>
            <input
              type="date"
              onChange={onDateHandler}
              placeholder="dd-mm-yyyy"
              className="border-2 rounded-lg w-48"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label>Priority</label>
            <select
              id="priority"
              name="priority"
              onChange={onPriorityHandler}
              className="border-2 rounded-lg w-48"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <div className="flex flex-row justify-around mt-8">
          <button type="submit" className="border-2 rounded-lg shadow-lg px-6">
            Submit
          </button>
          <button type="button" onClick={props.onCloseAction} className="border-2 rounded-lg shadow-lg px-6">
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddAction;
