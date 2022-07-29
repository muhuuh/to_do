import Button from "../UI/Button";

const NavBar = (props) => {

  return (
    <div className="flex justify-between px-10 py-12">
      <h2 className="text-3xl font-bold text-brownRed">Leval</h2>
      <div className="flex gap-x-10">
        <Button label="To Do" onClick={props.onToDo}/>
        <Button label="Expense" onClick={props.onExpense}/>
        <Button label="Plans" onClick={props.onPlans}/>
      </div>
      <div>Cart</div>
    </div>
  );
};

export default NavBar;
