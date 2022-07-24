import Button from "../UI/Button";

const NavBar = () => {
  return (
    <div className="flex justify-between px-10 py-6">
      <h2 className="text-2xl font-bold">Leval</h2>
      <div className="flex gap-x-10">
        <Button label="Tab 1" />
        <Button label="Tab 2" />
        <Button label="Tab 3" />
      </div>
      <div>Cart</div>
    </div>
  );
};

export default NavBar;
