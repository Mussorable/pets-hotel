import { Draft } from "@reduxjs/toolkit";
import { OwnersProp } from "../store/ownerSlice";
import { PetsProp } from "../store/petSlice";
import Button from "./Button";

interface ObjectProp {
  petName: string;
  petBreed: string;
  petColor: string;
  petOwner: string;
}

interface TableProps {
  object: Draft<PetsProp>[] | Draft<OwnersProp>[];
  subject: "pet" | "owner";
}

const Table: React.FC<TableProps> = ({ object, subject }) => {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            {subject === "pet" && (
              <>
                <th>Name</th>
                <th>Breed</th>
                <th>Color</th>
                <th>Checked id</th>
                <th>Pet Owner</th>
                <th>Action</th>
              </>
            )}
            {subject === "owner" && (
              <>
                <th>ID</th>
                <th>Owner Name</th>
                <th>Email</th>
                <th>Pets</th>
                <th>Action</th>
              </>
            )}
          </tr>
        </thead>

        <tbody>
          {object &&
            object.map((item, index) => {
              if ("petName" in item) {
                return (
                  <tr key={index}>
                    <td>{item.petName}</td>
                    <td>{item.petBreed}</td>
                    <td>{item.petColor}</td>
                    <td>td</td>
                    <td>{item.petOwner}</td>
                    <td>
                      <Button action={true} table={true}>
                        check in/out
                      </Button>
                      <Button del={true} table={true}>
                        del
                      </Button>
                    </td>
                  </tr>
                );
              }
              if ("ownerName" in item) {
                return (
                  <tr key={index}>
                    <td>id</td>
                    <td>{item.ownerName}</td>
                    <td>{item.ownerEmail}</td>
                    <td>count</td>
                    <td>
                      <Button action={true} table={true} del={true}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              }
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
