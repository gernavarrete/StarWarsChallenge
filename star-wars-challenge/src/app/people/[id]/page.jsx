"use client";

import Link from "next/link";
import styles from "../pagePeople.module.css";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getDataCharacter } from "@/redux-toolkit/features/peoples/storeSlice";
import CharacterDetail from "@/components/CharacterDetail/CharacterDetail";

function PeopleId() {
  const dispatch = useDispatch();
  const dataCharacter = useSelector(
    (state) => state.storeReducer.dataCharacter
  );
  const idCharacter = useParams();

  useEffect(() => {
    if (dataCharacter === null) {
      async function getCharacterDataApi(id) {
        const response = await fetch(
          `https://swapi.dev/api/people/${id}/?format=json`
        );
        const data = await response.json();
        console.log(data);
        dispatch(getDataCharacter(data));
      }
      getCharacterDataApi(idCharacter.id);
    }
  }, [idCharacter]);

  return (
    <div className={styles.divContainer}>
      <h1>{dataCharacter?.name}</h1>
      <CharacterDetail />
      <Link href={"/people"}>
        <Button
          variant="outlined"
          sx={{
            scale: "1.2",
            margin: "1rem",
            backgroundColor: "white",
            color: "black",
            "&:hover": {
              backgroundColor: "#D3DAEE",
              borderColor: "#0062cc",
              boxShadow: "none",
              color: "#32285B",
              fontWeight: 700,
            },
          }}
        >
          Back
        </Button>
      </Link>
    </div>
  );
}
export default PeopleId;
