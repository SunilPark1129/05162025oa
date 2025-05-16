import "./App.css";
import DataTable from "./components/DataTable";
import { useEffect, useState } from "react";
import { data } from "./utils/data";
import SelectFilter from "./components/SelectFilter";

const initialFilter = {
  region: "all",
  model: "all",
};

function App() {
  const [lists, setLists] = useState([]);
  const [listFilter, setListFilter] = useState(initialFilter);
  const [totalSales, setTotalSales] = useState([]);

  useEffect(() => {
    // add sales per region
    const tempSales = {};

    const filteredData = data.filter((item) => {
      // check if the current item fits into the filtered categories
      let hasRegion = false;
      let hasModel = false;

      if (listFilter.region === "all") hasRegion = true;
      else if (listFilter.region === item.region) hasRegion = true;

      if (listFilter.model === "all") hasModel = true;
      else if (listFilter.model === item.model) hasModel = true;

      if (hasRegion && hasModel) {
        // calculate sales
        if (tempSales[item.region]) tempSales[item.region] += item.sales;
        else tempSales[item.region] = item.sales;

        // add into the array
        return true;
      }
    });
    setLists(filteredData);
    setTotalSales(tempSales);
  }, [listFilter.region, listFilter.model]);

  return (
    <div className="model">
      <SelectFilter data={data} setListFilter={setListFilter} />
      <DataTable lists={lists} totalSales={totalSales} />
    </div>
  );
}

export default App;
