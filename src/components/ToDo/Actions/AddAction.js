import { useContext, useState } from "react";
import ToDoContext from "../../store/todo-context";
import Modal from "../Modal_Todo/Modal";

const AddAction = (props) => {
  const ctx = useContext(ToDoContext);

  const [nameAction, setNameAction] = useState("");
  const [startAction, setStartAction] = useState("");
  const [dateAction, setDateAction] = useState("");
  const [priorityAction, setPriorityAction] = useState("Low");
  const [showError, setShowError] = useState(false);

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

  const errorMessage = "Please fill in all fields.";

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const startDate = new Date();
    const endDate = new Date(dateAction);
    const diff = (
      (endDate.getTime() - startDate.getTime()) /
      (1000 * 3600 * 24)
    ).toFixed(1);

    if (nameAction === "") {
      setShowError(true);
      return;
    }
    if (startAction === "") {
      setShowError(true);
      return;
    }
    if (dateAction === "") {
      setShowError(true);
      return;
    }

    const newItem = {
      id: Date.now(),
      name: nameAction,
      daysLeft: diff,
      stopDate: dateAction,
      priority: priorityAction,
      done: false,
    };

    ctx.addItem(newItem);
    setNameAction("");
    setShowError(false);
  };

  return (
    <Modal onCloseModalToDo={props.onCloseAction}>
      <form onSubmit={onSubmitHandler}>
        <div className="flex flex-row justify-around mt-6">
          <div className="flex flex-col gap-y-4">
            <label className="text-lg">Name</label>
            <input
              type="text"
              onChange={onNameHandler}
              className="border-2 rounded-lg  w-48"
              value={nameAction}
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <label className="text-lg">Entry Date</label>
            <input
              type="date"
              onChange={onStartHandler}
              placeholder="dd/mm/yyyy"
              className="border-2 rounded-lg w-48"
            />
          </div>
        </div>
        <div className="flex flex-row justify-around mt-10">
          <div className="flex flex-col gap-y-4">
            <label className="text-lg">ETA</label>
            <input
              type="date"
              onChange={onDateHandler}
              placeholder="dd-mm-yyyy"
              className="border-2 rounded-lg w-48"
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <label className="text-lg">Priority</label>
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
        <div className="flex justify-center text-red-500 italic text-sm mt-6">
          {showError && errorMessage}
        </div>
        <div className="flex flex-row justify-center mt-12 mb-6">
          <button
            type="submit"
            className="border-2 rounded-lg shadow-md hover:scale-110 bg-paleOrangeRed hover:bg-brownRed hover:text-white px-6 mr-16"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={props.onCloseAction}
            className="border-2 rounded-lg shadow-md  hover:scale-110 bg-paleOrangeRed hover:bg-brownRed hover:text-white px-6"
          >
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddAction;
