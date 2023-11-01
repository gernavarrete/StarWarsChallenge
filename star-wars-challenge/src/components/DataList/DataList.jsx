import { useDispatch, useSelector } from "react-redux";
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
    //console.log("keyUpperCase", num, key);
    return key; //de la forma eyesColor
  };

  const keyLowerCase = (num) => {
    const key = tableHead[num].toLowerCase();
    //console.log(num, key);
    return key;
  };

  ///filter by text and id pased

  const [filterText, setFilterText] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const handleFilterBytext = (text, typeFilter) => {
    setFilterText(text);
    setTypeFilter(typeFilter);
  };

  const filterByText = (filterText, typeFilter) => {
    let elementsCache = [...dataList];
    if (!filterText) {
      return dispatch(dataFilter(dataList));
    } else {
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

  const orderByProp = (typeOrder, prop) => {
    let cache = [...dataList];
    setOrder(typeOrder);
    if (typeOrder === "none") return dispatch(dataFilter(dataList));
    // El metodo sort ordena segun el valor mayor, igual o menor que cero dependiendo la funcion comparadora
    console.log(typeOrder, prop, "line 77");
    console.log(cache);
    cache.sort((a, b) => {
      if (parseInt(a[prop]) < parseInt(b[prop])) {
        console.log(parseInt(a[prop]), parseInt(b[prop]));
        return typeOrder === "upward" ? -1 : 1;
      }
      if (parseInt(a[prop]) > parseInt(b[prop])) {
        console.log(parseInt(a[prop]), parseInt(b[prop]));
        return typeOrder === "downward" ? -1 : 1;
      }
      return 0;
    });
    console.log(cache);

    dispatch(dataFilter(cache));
  };

  ///// Pagination

  const [currentPage, setCurrentPage] = useState(1); //Pagina Actual seteada en 1
  const [numberOfPage, setNumberOfPage] = useState(0); //Numero de Paginas seteado en 0

  const indexFirstPageRecipe = () => (currentPage - 1) * 10; // Indice del primer Elemento
  const indexLastPageRecipe = () => indexFirstPageRecipe() + 10; //Indice del segundo elemento

  const handlePageNumber = (number) => {
    //Manejo del numero de pagina

    setCurrentPage(number);
  };

  useEffect(() => {
    dataFiltered &&
      setElements(
        dataFiltered.slice(indexFirstPageRecipe(), indexLastPageRecipe())
      );

    dataFiltered && setNumberOfPage(Math.ceil(dataFiltered.length / 9)); // cambiando el estado local de numeros de paginas a renderiza
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
          "@media(width < 780px)": {
            width: "100%",
          },
        }}
      >
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell key={titleTable + "titleTable"}>
                <b>{titleTable}</b>
              </TableCell>
              {tableHead?.map((name, i) => (
                <TableCell key={i} align="center">
                  <b>{name}</b>
                </TableCell>
              ))}
              {/* <TableCell key={titleTable + "Details"} align="center">
                <b>Details </b>
              </TableCell> */}
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
                {tableHead[0] ? (
                  <TableCell align="center">
                    {row[keyLowerCase(0)][0].toUpperCase() +
                      row[keyLowerCase(0)].slice(1)}
                  </TableCell>
                ) : null}
                {tableHead[1] ? (
                  <TableCell align="center">
                    {/\s/.test(tableHead[1])
                      ? row[keyUpperCase(1)][0].toUpperCase() +
                        row[keyUpperCase(1)].slice(1)
                      : row[keyLowerCase(1)][0].toUpperCase() +
                        row[keyLowerCase(1)].slice(1)}
                  </TableCell>
                ) : null}
                {tableHead[2] ? (
                  <TableCell align="center">
                    {/\s/.test(tableHead[2])
                      ? row[keyUpperCase(2)][0].toUpperCase() +
                        row[keyUpperCase(2)].slice(1)
                      : row[keyLowerCase(2)][0].toUpperCase() +
                        row[keyLowerCase(2)].slice(1)}
                  </TableCell>
                ) : null}
                {tableHead[3] ? (
                  <TableCell align="center">
                    {/\s/.test(tableHead[3])
                      ? row[keyUpperCase(3)]
                      : row[keyLowerCase(3)]}
                  </TableCell>
                ) : null}
                {tableHead[4] ? (
                  <TableCell align="center">
                    {/\s/.test(tableHead[4])
                      ? row[keyUpperCase(4)][0].toUpperCase() +
                        row[keyUpperCase(4)].slice(1)
                      : row[keyLowerCase(4)]}
                  </TableCell>
                ) : null}
                {tableHead[5] ? (
                  <TableCell align="center">
                    {/\s/.test(tableHead[5])
                      ? row[keyUpperCase(5)][0].toUpperCase() +
                        row[keyUpperCase(5)].slice(1)
                      : row[keyLowerCase(5)][0].toUpperCase() +
                        row[keyLowerCase(5)].slice(1)}
                  </TableCell>
                ) : null}
                <TableCell align="center">
                  {/* <Link
                    href={`/${category}/[id].js`}
                    as={`/${category}/${row.url.split("/")[5]}`}
                  >
                    view details
                  </Link> */}
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
