import { useDispatch, useSelector } from "react-redux";
import { set } from "./actions";
import { useEffect, useState } from "react";

export const SetCounter = () => {
  const countTotal = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(countTotal);
  }, [countTotal]);

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(count));
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          type="number"
          value={count}
          onChange={(event) => {
            event.target.value > 0 ? setCount(event.target.value) : setCount(0);
          }}
        />
        <input type="submit" />
      </form>
    </section>
  );
};
