import { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [viewMore, setViewMore]: any = useState({
    count: 3,
    status: false,
  });

  const [list, setList] = useState([
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
    },
  ]);

  const [data, setData]: any = useState([]);

  useEffect(() => {
    setData([
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
      },
      {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
      },
      {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
      },
      {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
      },
      {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
      },
      {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
      },
    ]);
  }, []);

  let updatedList = [...list];

  const searchUsers = (e: any) => {
    updatedList = data.filter((val: any) =>
      val.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setList(updatedList);
  };

  const selectDomain = (e: any) => {
    console.log(e.target.value);
    // logika
  };

  return (
    <div>
      <div className="w-full mx-auto mt-5 max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="mb-6 flex items-center gap-1">
          <input
            onChange={(e) => searchUsers(e)}
            placeholder="Search todos"
            type="text"
            id="default-input"
            className="w-[60%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <select
            onChange={(e) => selectDomain(e)}
            id="countries"
            className="w-[40%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {list.map((value: any) => (
              <option
                value={value.email
                  .split("")
                  .splice(value.email.indexOf("@"))
                  .join("")
                  .slice(
                    value.email
                      .split("")
                      .splice(value.email.indexOf("@"))
                      .join("")
                      .indexOf(".")
                  )}
              >
                {value.email
                  .split("")
                  .splice(value.email.indexOf("@"))
                  .join("")
                  .slice(
                    value.email
                      .split("")
                      .splice(value.email.indexOf("@"))
                      .join("")
                      .indexOf(".")
                  )}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Latest Customers
          </h5>
          {viewMore.status === true ? (
            <a
              onClick={() => setViewMore({ count: 3, status: false })}
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Show less
            </a>
          ) : (
            <a
              onClick={() => setViewMore({ count: list.length, status: true })}
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              View all
            </a>
          )}
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {list.slice(0, viewMore.count).map((todo, index) => (
              <li key={index} className="py-3 sm:py-4">
                <Card setList={setList} list={list} {...todo} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
