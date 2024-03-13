import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const data = [
  {
    firstName: "Ameya",
    lastName: "Belvalkar",
    age: 26,
  },
  {
    firstName: "John",
    lastName: "Doe",
    age: 35,
  },
  {
    firstName: "Alice",
    lastName: "Smith",
    age: 30,
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    age: 42,
  },
];
const HeadingComponent = () => {
  const [peopleData, setPeopleData] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state to true

  function getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(JSON.stringify(data)); // Return the first item of data array
      }, 2000);
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData();
        const parsedData = JSON.parse(res);
        setPeopleData(parsedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched or if there's an error
      }
    };

    fetchData();
  }, []);

  return (
    <div id="parent">
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        <>
          <ol>
            {peopleData.map((person, index) => (
              <li style={{ fontSize: "20px" }} key={index}>
                {person.firstName} {person.lastName} - Age: {person.age}
              </li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
