import { useReducer } from "react";
import ToDoContext from "./todo-context";

const defaultToDoState = {
  toDoItems: [],
  totalAmount: 0,
  indexItems: [],
};

const toDoReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedToDos;
    updatedToDos = state.toDoItems.concat(action.newItem);

    const totalAmount = updatedToDos.length;

    return {
      toDoItems: updatedToDos,
      totalAmount: totalAmount,
      indexItems: state.indexItems,
    };
  }

  if (action.type === "REMOVE") {
    
    const removeIndex = state.toDoItems.findIndex(item => item.id === action.oldItemId);

    if(removeIndex < 0){
        return {
            toDoItems: state.toDoItems,
            totalAmount: state.totalAmount,
            indexItems: state.indexItems,
          };
    }
    const updatedToDos = state.toDoItems;
    updatedToDos.splice(removeIndex, 1);

    const totalAmount = updatedToDos.length;

    return {
      toDoItems: updatedToDos,
      totalAmount: totalAmount,
      indexItems: state.indexItems,
    };
  }
 
  if(action.type === "STARTED"){
    const startedIndex = state.toDoItems.findIndex(item => item.id === action.startedId);
    
    let currentItems;
    currentItems = state.toDoItems;
    let updatedItem;
    updatedItem = state.toDoItems[startedIndex];
    updatedItem.done = !updatedItem.done;
    currentItems[startedIndex] = updatedItem;

    return {
        toDoItems: currentItems,
        totalAmount: state.totalAmount,   
        indexItems: state.indexItems,    
    }
  }

  if(action.type === "ARCHIVE"){
    const achiveIndex = state.toDoItems.findIndex(item => item.id === action.achiveId);

    const updatedToDos = state.toDoItems;
    const indexedItem = updatedToDos.splice(achiveIndex, 1);
    const indexedItems = state.indexItems.concat(indexedItem);

    const totalAmount = updatedToDos.length;

    return {
      toDoItems: updatedToDos,
      totalAmount: totalAmount,
      indexItems: indexedItems,
    };
  }

  if(action.type === ""){
    let filter_1;
    let filter_2;

    console.log(action.filter.priority)
    if(action.filter.priority === ""){
        filter_1= state.toDoItems
    } else {
        filter_1 = state.toDoItems.filter(todo => todo.priority === action.filter.priority);
    }
    
    console.log(filter_1)

    if(action.filter.daysLeft === ""){
        filter_2 = filter_1
    } else {
        filter_2 = filter_1.filter(todo => todo.daysLeft < action.filter.daysLeft);
    }
    
    return {
        toDoItems: filter_2,
        // toDoItems: state.toDoItems,
        totalAmount: state.totalAmount,   
        indexItems: state.indexItems,    
    }
  }

  return defaultToDoState;
};

const ToDoProvider = (props) => {
  const [toDoState, dispatchToDoAction] = useReducer(
    toDoReducer,
    defaultToDoState
  );

  const addItemHandler = (newItem) => {
    dispatchToDoAction({ type: "ADD", newItem: newItem });
  };

  const removeItemHandler = (oldItemId) => {
    dispatchToDoAction({ type: "REMOVE", oldItemId: oldItemId });
  };

  const updateStartedHandler = (startedId) => {
    dispatchToDoAction({type: "STARTED", startedId: startedId});
  };

  const archiveItemHandler = (achiveId) => {
    dispatchToDoAction({type: "ARCHIVE", achiveId: achiveId});
  };

  const filterItemHandler = (filter) => {
    dispatchToDoAction({type: "FILTER", filter: filter});
  };

  const toDoContext = {
    //toDos: toDoActions,
    toDos: toDoState.toDoItems,
    totalAmount: toDoState.totalAmount,
    updateStarted: updateStartedHandler,
    archiveItem: archiveItemHandler,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    filterItem: filterItemHandler,
  };

  return (
    <ToDoContext.Provider value={toDoContext}>
      {props.children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;
