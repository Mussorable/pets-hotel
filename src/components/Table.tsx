import { Draft } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OwnersProp } from "../store/ownerSlice";
import { PetsProp } from "../store/petSlice";
import Button from "./Button";
import {
  setContent,
  setIsNotification,
  setWarning,
} from "../store/notificationSlice";

interface TableProps {
  object: Draft<PetsProp>[] | Draft<OwnersProp>[];
  IDs: Array<string>;
  subject: "pet" | "owner";
  api: AxiosInstance;
}

const Table: React.FC<TableProps> = ({ object, subject, IDs, api }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsNotification(false));
    if (object.length === 0) {
      dispatch(setContent("Table is empty"));
      dispatch(setIsNotification(true));
      dispatch(setWarning(true));
    }
  }, [object]);

  const handleCheckInClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = (event.target as HTMLButtonElement).getAttribute(
      "data-index"
    );

    if (target) {
      api.get(`pets/${IDs[parseInt(target)]}/petCheckIn.json`).then((resp) => {
        if (resp.data === true) {
          api.patch(`pets/${IDs[parseInt(target)]}.json`, {
            petCheckIn: false,
          });
        } else if (resp.data === false) {
          api.patch(`pets/${IDs[parseInt(target)]}.json`, {
            petCheckIn: true,
          });
        }
      });
    }
  };

  const handleDeleteClick = (
    endpoint: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const target = event.target as HTMLButtonElement;
    api
      .delete(`${endpoint}/${target.id}.json`)
      .catch((error) => console.log(error));
  };

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
                <th>Checked in</th>
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
                  <tr key={IDs[index]}>
                    <td>{item.petName}</td>
                    <td>{item.petBreed}</td>
                    <td>{item.petColor}</td>
                    <td>{!item.petCheckIn && "Not checked in"}</td>
                    <td>{item.petOwner}</td>
                    <td>
                      <Button
                        data-index={index}
                        action={true}
                        table={true}
                        onClick={handleCheckInClick}
                      >
                        {!item.petCheckIn && "check in"}
                        {item.petCheckIn && "check out"}
                      </Button>
                      <Button
                        id={IDs[index]}
                        del={true}
                        table={true}
                        onClick={(event) => handleDeleteClick("pets", event)}
                      >
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
                      <Button
                        id={IDs[index]}
                        table={true}
                        del={true}
                        onClick={(event) => handleDeleteClick("owners", event)}
                      >
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
