import NavBar from "./components/Navigation/NavBar";
import ToDoProvider from "./components/store/ToDoProvider";
import ActionOverview from "./components/ToDo/Actions/ActionOverview";

const App = () => {
  return (
    <ToDoProvider>
      <div className="container mx-auto bg-white">
        <NavBar />
        <ActionOverview />
      </div>
    </ToDoProvider>
  );
};

export default App;
