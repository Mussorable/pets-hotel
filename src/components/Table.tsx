interface TableProps {
  object: string[];
}

const Table: React.FC<TableProps> = ({ object }) => {
  return (
    <div className="table-wrapper">
      <table>
        <th>Name</th>
        <th>Breed</th>
        <th>Color</th>
        <th>Checked id</th>
        <th>Pet Owner</th>
        <th>Action</th>
      </table>
      {object &&
        object.map((item) => {
          return (
            <tr>
              <td>td</td>
              <td>td</td>
              <td>td</td>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
          );
        })}
    </div>
  );
};

export default Table;
