import { useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";

function PeopleCard() {
  const peoples = useSelector((state) => state.peopleReducer.peoples);
  //console.log(peoples);
  const tableHead = [
    "Gender",
    "Eyes Color",
    "Hair Color",
    "Height",
    "Mass",
    "Skin Color",
  ];

  /* const selectName = (name) => {
    if (!name) {
      setCharacters(peoples);
      setNameFilter("");
    } else setNameFilter(name);
  };

  const filterByName = (nameValue) => {
    let charactersCache = [...peoples];
    charactersCache = charactersCache.filter((characterObj) =>
      characterObj.name.toLowerCase().includes(nameValue.toLowerCase())
    );

    setCharacters(charactersCache);
  };

  useEffect(() => {
    filterByName(nameFilter);
  }, [nameFilter, peoples]); */

  return (
    <>
      {/*       <NavBar category={peoples} selectName={selectName} /> */}

      <TableContainer component={Paper} sx={{ width: "80%" }}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell key="namecharacter">
                <b>Name Character</b>
              </TableCell>
              {tableHead?.map((name, i) => (
                <TableCell key={i} align="center">
                  <b>{name}</b>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {peoples?.map((row) => (
              <TableRow
                key={row.url.split("/")[5]}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">
                  {row.physicalCharacteristics.gender}
                </TableCell>
                <TableCell align="center">
                  {row.physicalCharacteristics.eyesColor}
                </TableCell>
                <TableCell align="center">
                  {row.physicalCharacteristics.hairColor}
                </TableCell>
                <TableCell align="center">
                  {row.physicalCharacteristics.height}
                </TableCell>
                <TableCell align="center">
                  {row.physicalCharacteristics.mass}
                </TableCell>
                <TableCell align="center">
                  {row.physicalCharacteristics.skinColor}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/*       <div className={styles.divContainerPeopleCard}>
        <NavBar category={peoples} />
        {peoples.map((people) => (
          <ul>
            <li>{people.name}</li>
            <li>{people.films}</li>
          </ul>
        ))}
      </div> */}
    </>
  );
}
export default PeopleCard;
