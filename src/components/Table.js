import { useState, useEffect } from "react";

const Table = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  //const columnNames = ['Name', 'E-Mail', 'Phone', 'Host Experience', 'Beverage Experience', 'Cleanliness Experience' , 'Dining Experience']

  //Get Feedbacks collection from local storage, if it exists
  useEffect(() => {
    const localFeedbacks = localStorage.getItem("feedbacks");
    if (localFeedbacks) {
      setFeedbacks(JSON.parse(localFeedbacks));
    }
  }, []);

  return (
    <div>
      {feedbacks.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th key="name">
                Name
              </th>
              <th key="email">
                E-Mail
              </th>
              <th key="phone">
                Phone
              </th>
              <th key="hostXp">
                Host Experience
              </th>
              <th key="beverageXp">
                Beverage Experience
              </th>
              <th key="cleanXp">
                Cleanliness Experience
              </th>
              <th key="diningXp">
                Dining Experience
              </th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((obj, index) => (
              <tr key={index}>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>{obj.phone}</td>
                <td>{obj.hostXp}</td>
                <td>{obj.beverageXp}</td>
                <td>{obj.cleanXp}</td>
                <td>{obj.diningXp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default Table;
