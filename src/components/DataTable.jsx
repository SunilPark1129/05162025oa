import React from "react";

// model
//   {
//     region: "CA",
//     model: "D",
//     sales: 400
//   }

function DataTable({ lists, totalSales }) {
  const data = [];
  let currRegion = "";

  // add a new row with "sum" and "total sales" to a new array
  for (let i = 0; i < lists.length; i++) {
    if (currRegion !== lists[i].region) {
      data.push({
        region: lists[i].region,
        model: "sum",
        sales: totalSales[lists[i].region],
      });
      currRegion = lists[i].region;
    }
    data.push(lists[i]);
  }

  return (
    <table className="model__table">
      <thead>
        <tr>
          <th>Region</th>
          <th>Model</th>
          <th>Sales</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ region, model, sales }, index) => (
          <tr
            key={index}
            className={`${model === "sum" && "model__table-highlight"}`}
          >
            <td>{region}</td>
            <td>{model}</td>
            <td>{sales}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
