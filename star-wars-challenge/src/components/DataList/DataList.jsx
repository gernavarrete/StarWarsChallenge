import { useDispatch, useSelector } from "react-redux";
import Pagination from "@/components/Pagination/Pagination";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext, useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { dataFilter } from "@/redux-toolkit/features/peoples/storeSlice";

function DataList({ category, tableData }) {
  const dispatch = useDispatch();
  const dataList = useSelector((state) => state.storeReducer[category]);
  const dataFiltered = useSelector((state) => state.storeReducer.dataFilter);
  const [elements, setElements] = useState(dataList);
  const { tableHead, titleTable } = tableData;

  const keyUpperCase = (num) => {
    const key =
      tableHead[num].toLowerCase().split(/\s+/)[0].toLowerCase() +
      tableHead[num].toLowerCase().split(/\s+/)[1][0].toUpperCase() +
      tableHead[num].toLowerCase().split(/\s+/)[1].slice(1);
    console.log(key);
    return key; //de la forma eyesColor
  };

  //console.log(eyesColor, hairColor, skinColor);

  ///filter by text and id pased

  const [filterText, setFilterText] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const handleFilterBytext = (text, typeFilter) => {
    setFilterText(text);
    setTypeFilter(typeFilter);
  };

  const filterByText = (filterText, typeFilter) => {
    //console.log(filterText);
    let elementsCache = [...dataList];
    if (!filterText) {
      return dispatch(dataFilter(dataList));
    } else {
      //console.log(typeFilter);
      if (typeFilter === "name") {
        elementsCache = elementsCache.filter((elementObj) =>
          elementObj.name.toLowerCase().includes(filterText.toLowerCase())
        );
      } else {
        elementsCache = elementsCache.filter((elementObj) =>
          elementObj[typeFilter]
            .toLowerCase()
            .includes(filterText.toLowerCase())
        );
      }
      return dispatch(dataFilter(elementsCache));
    }
  };

  useEffect(() => {
    filterByText(filterText, typeFilter);
  }, [filterText, typeFilter, dataList]);

  ///// order by Prop const orderByProp = () => {

  const [order, setOrder] = useState("");
  /*const [propObj, setPropObj] = useState("");

  const handleOrder = (typeOrder, prop) => {
    setOrder(typeOrder);
    setPropObj(prop);
  }; */

  const orderByProp = (typeOrder, prop) => {
    let cache = [...dataList];
    setOrder(typeOrder);
    //console.log(typeOrder, prop);

    if (typeOrder === "none") return dispatch(dataFilter(dataList));
    // El metodo sort ordena segun el valor mayor, igual o menor que cero dependiendo la funcion comparadora
    cache.sort((a, b) => {
      if (parseInt(a[prop]) < parseInt(b[prop]))
        return typeOrder === "upward" ? -1 : 1;
      if (parseInt(a[prop]) > parseInt(b[prop]))
        return typeOrder === "upward" ? 1 : -1;
      return 0;
    });
    //console.log(cache);
    dispatch(dataFilter(cache));
  };

  /* useEffect(() => {
    orderByProp(order, propObj);
  }, [order, propObj]); */

  ///// Pagination

  const [currentPage, setCurrentPage] = useState(1); //Pagina Actual seteada en 1
  const [numberOfPage, setNumberOfPage] = useState(0); //Numero de Paginas seteado en 0

  const indexFirstPageRecipe = () => (currentPage - 1) * 10; // Indice del primer Elemento
  const indexLastPageRecipe = () => indexFirstPageRecipe() + 10; //Indice del segundo elemento

  const handlePageNumber = (number) => {
    //Manejo del numero de pagina
    //console.log(number);
    setCurrentPage(number);
  };

  useEffect(() => {
    //Cambio de estado local de Total Recipes indicando los indices que tiene que renderizar en cada pagina
    //console.log(dataFiltered, indexFirstPageRecipe(), indexLastPageRecipe());

    dataFiltered &&
      setElements(
        dataFiltered.slice(indexFirstPageRecipe(), indexLastPageRecipe())
      );

    dataFiltered && setNumberOfPage(Math.ceil(dataFiltered.length / 9)); // cambiando el estado local de numeros de paginas a renderiza
    //console.log(elements, numberOfPage);
  }, [currentPage, dataList, dataFiltered]);

  useEffect(() => {
    setCurrentPage(1); //setea el numero de pagina actual a 1 cuando recipesName Cambia
  }, [order, filterText, dataFiltered]);

  return (
    <>
      <NavBar
        handleFilterBytext={handleFilterBytext}
        orderByProp={orderByProp}
      />
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
                <b>{titleTable}</b>
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
                  {row[tableHead[0].toLowerCase()][0].toUpperCase() +
                    row[tableHead[0].toLowerCase()].slice(1)}
                </TableCell>
                <TableCell align="center">
                  {category === "people"
                    ? row[keyUpperCase(1)][0].toUpperCase() +
                      row[keyUpperCase(1)].slice(1)
                    : row[tableHead[1].toLowerCase()][0].toUpperCase() +
                      row[tableHead[1].toLowerCase()].slice(1)}
                </TableCell>
                <TableCell align="center">
                  {category === "people"
                    ? row[keyUpperCase(2)][0].toUpperCase() +
                      row[keyUpperCase(2)].slice(1)
                    : row[keyUpperCase(2)][0].toUpperCase() +
                      row[keyUpperCase(2)].slice(1)}
                </TableCell>
                <TableCell align="center">
                  {row[tableHead[3].toLowerCase()]}
                </TableCell>
                <TableCell align="center">
                  {row[tableHead[4].toLowerCase()]}
                </TableCell>
                <TableCell align="center">
                  {category === "people"
                    ? row[keyUpperCase(5)][0].toUpperCase() +
                      row[keyUpperCase(5)].slice(1)
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
