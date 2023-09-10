import { useSelector } from "react-redux";
import Pagination from "@/components/Pagination/Pagination";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";

function DataList({ category, tableHead, dataList, selectName }) {
  //const dataList = useSelector((state) => state.peopleReducer[category]);
  const [elements, setElements] = useState(dataList);

  console.log(dataList);

  const eyesColor =
    tableHead[1].toLowerCase().split(/\s+/)[0].toLowerCase() +
    tableHead[1].toLowerCase().split(/\s+/)[1][0].toUpperCase() +
    tableHead[1].toLowerCase().split(/\s+/)[1].slice(1);

  const hairColor =
    tableHead[2].toLowerCase().split(/\s+/)[0].toLowerCase() +
    tableHead[2].toLowerCase().split(/\s+/)[1][0].toUpperCase() +
    tableHead[2].toLowerCase().split(/\s+/)[1].slice(1);

  const skinColor =
    tableHead[5].toLowerCase().split(/\s+/)[0].toLowerCase() +
    tableHead[5].toLowerCase().split(/\s+/)[1][0].toUpperCase() +
    tableHead[5].toLowerCase().split(/\s+/)[1].slice(1);

  //console.log(eyesColor, hairColor, skinColor);

  ///filter by name

  const filterByName = (nameValue) => {
    if (!nameValue) {
      setElements(dataList);
    } else {
      let elementsCache = [...dataList];
      elementsCache = elementsCache.filter((elementObj) =>
        elementObj.name.toLowerCase().includes(nameValue.toLowerCase())
      );

      setElements(elementsCache);
    }
  };

  useEffect(() => {
    //filterByName(inputFilterByName);
    console.log("effect 62");
  }, [elements, dataList]);

  ///// Pagination

  const [currentPage, setCurrentPage] = useState(1); //Pagina Actual seteada en 1
  const [numberOfPage, setNumberOfPage] = useState(0); //Numero de Paginas seteado en 0

  const indexFirstPageRecipe = () => (currentPage - 1) * 10; // Indice del primer Elemento
  const indexLastPageRecipe = () => indexFirstPageRecipe() + 10; //Indice del segundo elemento

  const handlePageNumber = (number) => {
    //Manejo del numero de pagina
    console.log(number);
    setCurrentPage(number);
  };

  useEffect(() => {
    //Cambio de estado local de Total Recipes indicando los indices que tiene que renderizar en cada pagina
    //console.log(currentPage);
    setElements(dataList.slice(indexFirstPageRecipe(), indexLastPageRecipe()));
    //console.log(peoples);
    dataList && setNumberOfPage(Math.ceil(dataList.length / 9)); // cambiando el estado local de numeros de paginas a renderiza
    //console.log(numberOfPage);
  }, [currentPage, dataList, numberOfPage]);

  /* useEffect(() => {
    setCurrentPage(1); //setea el numero de pagina actual a 1 cuando recipesName Cambia
  }, [nameFilter]); */

  return (
    <>
      <NavBar filterByName={filterByName} />
      <TableContainer
        component={Paper}
        sx={{
          width: "80%",
          heigth: "auto",
        }}
      >
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
            {elements?.map((row, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">
                  {category === "people"
                    ? row.physicalCharacteristics[
                        tableHead[0].toLowerCase()
                      ][0].toUpperCase() +
                      row.physicalCharacteristics[
                        tableHead[0].toLowerCase()
                      ].slice(1)
                    : row[tableHead[0].toLowerCase()][0].toUpperCase() +
                      row[tableHead[0].toLowerCase()].slice(1)}
                </TableCell>
                <TableCell align="center">
                  {category === "people"
                    ? row.physicalCharacteristics[eyesColor][0].toUpperCase() +
                      row.physicalCharacteristics[eyesColor].slice(1)
                    : row[tableHead[1].toLowerCase()][0].toUpperCase() +
                      row[tableHead[1].toLowerCase()].slice(1)}
                </TableCell>
                <TableCell align="center">
                  {category === "people"
                    ? row.physicalCharacteristics[hairColor][0].toUpperCase() +
                      row.physicalCharacteristics[hairColor].slice(1)
                    : row[tableHead[2].toLowerCase()][0].toUpperCase() +
                      row[tableHead[2].toLowerCase()].slice(1)}
                </TableCell>
                <TableCell align="center">
                  {category === "people"
                    ? row.physicalCharacteristics[tableHead[3].toLowerCase()]
                    : row[tableHead[3].toLowerCase()]}
                </TableCell>
                <TableCell align="center">
                  {category === "people"
                    ? row.physicalCharacteristics[tableHead[4].toLowerCase()]
                    : row[tableHead[4].toLowerCase()]}
                </TableCell>
                <TableCell align="center">
                  {category === "people"
                    ? row.physicalCharacteristics[skinColor][0].toUpperCase() +
                      row.physicalCharacteristics[skinColor].slice(1)
                    : row[tableHead[5].toLowerCase()][0].toUpperCase() +
                      row[tableHead[5].toLowerCase()].slice(1)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Pagination
        currentPage={currentPage}
        numberOfPage={numberOfPage}
        handlePageNumber={handlePageNumber}
      />
    </>
  );
}
export default DataList;
