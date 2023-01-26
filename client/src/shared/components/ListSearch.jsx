import React, { useState, useEffect } from "react";
import "../../styles/style.css";

function ListSearch({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  console.log(data);

  useEffect(() => {
    setFilteredData(
      data.filter((item) =>
        item.nombres.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, data]);

  return (
    <div id="list-search">
      <input
        id="search-bar"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div id="list">
        {filteredData.map((data) => (
          <div className="list-item" key={data.idDocente}>
            <h2>{data.idDocente}</h2>
            <p>
              {data.nombres} {data.apellidos}
            </p>
            <button>Editar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListSearch;
