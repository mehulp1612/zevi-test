const Table = ({ config, data }) => {
    const renderData = ({ rowData, key, type, rounding }) => {
      switch (type) {
        case "float":
          return rowData[key].toFixed(rounding).toLocaleString();
        case "number":
          return rowData[key].toLocaleString();
        default:
          return rowData[key];
      }
    };
  
    return (
      <table>
        <thead>
          {config.map(({ header, key, type, rounding }) => (
            <th>{header}</th>
          ))}
        </thead>
        <tbody>
          {data.map((rowData) => (
            <tr>
              {config.map(({ key, type, rounding }) => (
                <td>{renderData({ rowData, key, type, rounding })}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;
  