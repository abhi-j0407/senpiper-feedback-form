import { useState, useEffect, useMemo } from "react";
import { useTable, useSortBy } from "react-table/dist/react-table.development";

const TableTwo = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const columnNames = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "E-Mail",
      accessor: "email",
    },
    {
      Header: "Phone",
      accessor: "phone",
    },
    {
      Header: "Host Experience",
      accessor: "hostXp",
    },
    {
      Header: "Beverage Experience",
      accessor: "beverageXp",
    },
    {
      Header: "Cleanliness Experience",
      accessor: "cleanXp",
    },
    {
      Header: "Dining Experience",
      accessor: "diningXp",
    },
  ];

  const groupedColNames = [
    {
      Header: "Contact Info",
      columns: [
        {
          Header: "Name",
          accessor: "name",
        },
        {
          Header: "E-Mail",
          accessor: "email",
        },
        {
          Header: "Phone",
          accessor: "phone",
        },
      ],
    },
    {
      Header: "Experience",
      columns: [
        {
          Header: "Host",
          accessor: "hostXp",
        },
        {
          Header: "Beverage",
          accessor: "beverageXp",
        },
        {
          Header: "Cleanliness",
          accessor: "cleanXp",
        },
        {
          Header: "Dining",
          accessor: "diningXp",
        },
      ],
    },
  ];
  //const columnNames = ['Name', 'E-Mail', 'Phone', 'Host Experience', 'Beverage Experience', 'Cleanliness Experience' , 'Dining Experience']

  const mFeedbacks = useMemo(() => feedbacks, [feedbacks]);
  const mColumns = useMemo(() => groupedColNames, []);

  //Get Feedbacks collection from local storage, if it exists
  useEffect(() => {
    const localFeedbacks = localStorage.getItem("feedbacks");
    if (localFeedbacks) {
      setFeedbacks(JSON.parse(localFeedbacks));
    }
  }, []);

  const tableInstance = useTable({
    columns: mColumns,
    data: mFeedbacks,
  }, useSortBy);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render("Header")}
                      <span>
                          {column.isSorted ? (column.isSortedDesc ? 'A' : 'D') : ''}
                      </span>
                  </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableTwo;
