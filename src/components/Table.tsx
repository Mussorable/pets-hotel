import { Draft } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { OwnersProp, setOwners, setIDsOwners } from "../store/ownerSlice";
import { PetsProp, setIDs, setPets } from "../store/petSlice";
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
  const getTime = new Date();
  const checkInRef = useRef<HTMLButtonElement[]>([]);
  const checkInTimeText = useRef<any[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (subject === "pet") {
      api.get("pets.json").then((resp) => {
        Object.values(resp.data).forEach((pet, index) => {
          if (isPetsProp(pet)) {
            if (pet.petCheckIn === false) {
              checkInRef.current[index].textContent = "check in";
            } else if (pet.petCheckIn === true) {
              checkInRef.current[index].textContent = "check out";
            }
          }
        });
      });
    }
  }, []);

  useEffect(() => {
    dispatch(setIsNotification(false));
    if (object.length > 0) {
      dispatch(setIsNotification(false));
    } else if (object.length === 0) {
      dispatch(setContent("Table is empty"));
      dispatch(setIsNotification(true));
      dispatch(setWarning(true));
    }
  }, [object]);

  const handleCheckInClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const targetIndex = (event.target as HTMLButtonElement).getAttribute(
      "data-index"
    );
    const target = event.target as HTMLButtonElement;

    if (targetIndex) {
      api
        .get(`pets/${IDs[parseInt(targetIndex)]}/petCheckIn.json`)
        .then((resp) => {
          if (resp.data === true) {
            api
              .patch(`pets/${IDs[parseInt(targetIndex)]}.json`, {
                petCheckIn: false,
              })
              .then(() => {
                api
                  .patch(`pets/${IDs[parseInt(targetIndex)]}.json`, {
                    timeCheckIn: `Checked out at ${getTime.getHours()}:${getTime.getMinutes()}`,
                  })
                  .then(() => {
                    checkInTimeText.current[
                      parseInt(targetIndex)
                    ].textContent = `Checked out at ${getTime.getHours()}:${getTime.getMinutes()}`;
                  });
                target.textContent = "check in";
              });
          } else if (resp.data === false) {
            api
              .patch(`pets/${IDs[parseInt(targetIndex)]}.json`, {
                petCheckIn: true,
              })
              .then(() => {
                api
                  .patch(`pets/${IDs[parseInt(targetIndex)]}.json`, {
                    timeCheckIn: `Checked in at ${getTime.getHours()}:${getTime.getMinutes()}`,
                  })
                  .then(() => {
                    checkInTimeText.current[
                      parseInt(targetIndex)
                    ].textContent = `Checked in at ${getTime.getHours()}:${getTime.getMinutes()}`;
                  });
                target.textContent = "check out";
              });
          }
        });
    }
  };

  function isPetsProp(obj: unknown): obj is PetsProp {
    return (
      typeof obj === "object" &&
      obj !== null &&
      "petName" in obj &&
      "petBreed" in obj &&
      "petColor" in obj &&
      "petOwner" in obj &&
      "petCheckIn" in obj
    );
  }

  function isOwnerProp(obj: unknown): obj is OwnersProp {
    return (
      typeof obj === "object" &&
      obj !== null &&
      "ownerName" in obj &&
      "ownerEmail" in obj
    );
  }

  const handleDeleteClick = (
    endpoint: string,
    event: React.MouseEvent<HTMLButtonElement>,
    subject: "pet" | "owner"
  ) => {
    const target = event.target as HTMLButtonElement;
    api
      .delete(`${endpoint}/${target.id}.json`)
      .then(() => {
        if (subject === "pet") {
          dispatch(setIDs(IDs.filter((id) => id !== target.id)));
          const getPosition = IDs.indexOf(target.id);
          const updatedArray: PetsProp[] = [...object] as PetsProp[];
          const filteredArray: PetsProp[] = updatedArray.filter(
            (_, index) => index !== getPosition
          );
          if (filteredArray.every(isPetsProp)) {
            dispatch(setPets(filteredArray));
          }
        } else if (subject === "owner") {
          dispatch(setIDsOwners(IDs.filter((id) => id !== target.id)));
          const getPosition = IDs.indexOf(target.id);
          const updatedArray: OwnersProp[] = [...object] as OwnersProp[];
          const filteredArray: OwnersProp[] = updatedArray.filter(
            (_, index) => index !== getPosition
          );
          if (filteredArray.every(isOwnerProp)) {
            dispatch(setOwners(filteredArray));
          }
        }
      })
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
                    <td ref={(ref) => (checkInTimeText.current[index] = ref!)}>
                      {item.timeCheckIn}
                    </td>
                    <td>{item.petOwner}</td>
                    <td>
                      <Button
                        ref={(ref) => (checkInRef.current[index] = ref!)}
                        data-index={index}
                        action={true}
                        table={true}
                        onClick={handleCheckInClick}
                      />
                      <Button
                        id={IDs[index]}
                        del={true}
                        table={true}
                        onClick={(event) =>
                          handleDeleteClick("pets", event, "pet")
                        }
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
                    <td>{index}</td>
                    <td>{item.ownerName}</td>
                    <td>{item.ownerEmail}</td>
                    <td>count</td>
                    <td>
                      <Button
                        id={IDs[index]}
                        table={true}
                        del={true}
                        onClick={(event) =>
                          handleDeleteClick("owners", event, "owner")
                        }
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
