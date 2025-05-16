import React, { useMemo } from "react";

function SelectFilter({ data, setListFilter }) {
  // counts all property
  // then display in the select option element
  const { regions, models } = useMemo(() => {
    const regions = ["all"];
    const models = ["all"];
    const set = new Set();
    for (let { region, model } of data) {
      if (!set.has(region)) {
        set.add(region);
        regions.push(region);
      }
      if (!set.has(model)) {
        set.add(model);
        models.push(model);
      }
    }
    return { regions, models };
  }, []);

  function changeHandler(e) {
    const { name, value } = e.target;
    setListFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="model__filter">
      <div className="model__select-box">
        <span>Region Filter</span>
        <select onChange={changeHandler} name="region">
          {regions.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="model__select-box">
        <span>Model Filter</span>
        <select onChange={changeHandler} name="model">
          {models.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectFilter;
