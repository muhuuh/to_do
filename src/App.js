import { useState } from "react";
import NavBar from "./components/Navigation/NavBar";
import ToDoProvider from "./components/store/ToDoProvider";
import ActionOverview from "./components/ToDo/Actions/ActionOverview";
import AddAction from "./components/ToDo/Actions/AddAction";

const App = () => {
  const [showToDo, setShowToDo] = useState(true);
  const [showExpense, setShowExpense] = useState(false);
  const [showPlans, setShowPlans] = useState(false);
  const [showAddACtion, setShowAddAction] = useState(false);

  const onToDoHandler = () => {
    setShowToDo(true);
    setShowExpense(false);
    setShowPlans(false);

    console.log(showToDo);
  };

  const onExpenseHandler = () => {
    setShowToDo(false);
    setShowExpense(true);
    setShowPlans(false);
  };

  const onPlansHandler = () => {
    setShowToDo(false);
    setShowExpense(false);
    setShowPlans(true);
  };

  const onAddAction = () => {
    setShowAddAction(true);
  };

  const onCloseAction = () => {
    setShowAddAction(false);
  };

  return (
    <ToDoProvider>
      <div className="container mx-auto bg-white h-screen">
        <NavBar
          onToDo={onToDoHandler}
          onExpense={onExpenseHandler}
          onPlans={onPlansHandler}
        />
        {showToDo && <ActionOverview onAddAction={onAddAction} />}
        {showAddACtion && <AddAction onCloseAction={onCloseAction}/>}
      </div>
    </ToDoProvider>
  );
};

export default App;
