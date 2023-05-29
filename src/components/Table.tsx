import { Draft } from "@reduxjs/toolkit";
import Button from "./Button";

interface ObjectProp {
  petName: string;
  petBreed: string;
  petColor: string;
  petOwner: string;
}

interface TableProps {
  object: Draft<ObjectProp>[];
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
            object.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.petName}</td>
                  <td>{item.petBreed}</td>
                  <td>{item.petColor}</td>
                  <td>td</td>
                  <td>{item.petOwner}</td>
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
