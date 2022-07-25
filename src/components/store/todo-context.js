import React from "react";

const ToDoContext = React.createContext({
    toDos:[],
    totalAmount: 0,
    updateSelection: () => {},
    archiveItem: () => {},
    addItem: (item) => {},
    removeItem: (item) => {},
    filterItem: () => {},
});

export default ToDoContext;
