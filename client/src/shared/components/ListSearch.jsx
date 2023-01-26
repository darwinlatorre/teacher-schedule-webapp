import React, { useState, useEffect } from "react";
import "../../styles/style.css";

function ListSearch({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(
      data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, data]);

  return (
    <div id="list">
      <input
        id="search-bar"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredData.map((item) => (
        <div className="list-item" key={item.idDocente}>
          <h2>{item.idDocente}</h2>
          <p>
            {item.nombres} {item.apellidos}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ListSearch;
