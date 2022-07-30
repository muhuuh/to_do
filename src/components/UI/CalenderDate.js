const CalenderDate = (props) => {
  const weekday = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const eta = new Date(props.eta);
  const etaDay = eta.getDate()
  // const etaDay = weekday[eta.getDay()];
  const etaMonth = month[eta.getMonth()];
  const etaYear = eta.getFullYear();

  return (
    <div className="flex flex-col items-center border-2 border-white shadow-md rounded-lg text-white bg-orangeRed opacity-80 w-20 px-4 py-2">
      <span className="font-bold ">{etaDay}</span>
      <span className="text-sm">{etaMonth}</span>
      <span className="text-sm">{etaYear}</span>
    </div>
  );
};

export default CalenderDate;
