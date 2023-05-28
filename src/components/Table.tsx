import Button from "./Button";

interface TableProps {
  object: string[];
}

const Table: React.FC<TableProps> = ({ object }) => {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Breed</th>
            <th>Color</th>
            <th>Checked id</th>
            <th>Pet Owner</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {object &&
            object.map((item) => {
              return (
                <tr>
                  <td>td</td>
                  <td>td</td>
                  <td>td</td>
                  <td>td</td>
                  <td>td</td>
                  <td>
                    <Button>check in/out</Button>
                    <Button>del</Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
