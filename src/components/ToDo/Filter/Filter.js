import { useEffect, useState } from "react";

const Filter = (props) => {
  const [priorityFilter, setPriorityFilter] = useState("");
  const [daysLeftFilter, setDaysLeftFilter] = useState("");
  const [startedFilter, setStartedFilter] = useState("");

  if (priorityFilter === "" && daysLeftFilter === "" && startedFilter === "") {
    const currentFilter = {
      priority: priorityFilter,
      daysLeft: daysLeftFilter,
      started: startedFilter,
    };
    props.updateFilter(currentFilter);
  }

  useEffect(() => {
    const currentFilter = {
      priority: priorityFilter,
      daysLeft: daysLeftFilter,
      started: startedFilter,
    };
    props.updateFilter(currentFilter);
  }, [priorityFilter, daysLeftFilter, startedFilter]);

  const onPriorityFilter = (event) => {
    setPriorityFilter(event.target.value);
  };

  const onDaysFilter = (event) => {
    setDaysLeftFilter(event.target.value);
  };

  const onStartedFilter = (event) => {
    setStartedFilter(event.target.value);
  };

  return (
    <div className="flex flex-row justify-around mt-16">
      <div>Show</div>
      <div>
        <label>Priority</label>
        <select
          id="priority"
          name="priority"
          onChange={onPriorityFilter}
          className="border-2 rounded-lg w-36 ml-4"
        >
          <option value=""></option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div>
        <label>Days left</label>
        <input
          type="number"
          onChange={onDaysFilter}
          className="border-2 rounded-lg w-36 ml-4"
        />
      </div>
      <div>
        <label>Started</label>
        <select
          id="started"
          name="started"
          onChange={onStartedFilter}
          className="border-2 rounded-lg w-36 ml-4"
        >
          <option value=""></option>
          <option value="true">Started</option>
          <option value="false">Not started</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
