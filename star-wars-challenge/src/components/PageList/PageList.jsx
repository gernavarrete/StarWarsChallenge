import DataList from "@/components/DataList/DataList";
import { getPeoples } from "@/redux-toolkit/features/peoples/storeSlice";
import getApiData from "@/services/getApiData";
import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { Triangle } from "react-loader-spinner";
import styles from "./PageList.module.css";
import NavBar from "@/components/NavBar/NavBar";
import Pagination from "@/components/Pagination/Pagination";
import getApiCharacter from "@/services/getApiCharacter";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export const PageListContext = createContext();

function PageList({ category, getCategory, tableHead, getApi }) {
  const [triangle, setTriangle] = useState(true);
  const pathName = usePathname().split("/")[1];
  const dispatch = useDispatch();

  const dataList = useSelector((state) => state.peopleReducer[category]);
  const [elements, setElements] = useState(dataList);
  const [elementByName, setElementByName] = useState([]);

  const [characterExist, setCharacterExist] = useState(false);
  const [characterNoFound, setCharacterNoFound] = useState(false);
  const handleOpenModalCharacterExist = () => setCharacterExist(true);
  const handleCloseModalCharacterExist = () => setCharacterExist(false);
  const handleOpenModalCharacterNoFound = () => setCharacterNoFound(true);
  const handleCloseModalCharacterNoFound = () => setCharacterNoFound(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  //useEffect(() => {
  //async function fetchData() {
  //try {
  //const data = await getApiData(pathName);
  //setCharacters(data);
  //dispatch(getPeoples(data));
  //setTriangle(false);
  //console.log("renderiza");
  //} catch (error) {
  //console.error("Error fetching data:", error);
  //}
  //}
  //fetchData();
  //}, [character, setTriangle]);

  const selectName = async (name) => {
    if (name === "") return alert("Complete Character Name");

    console.log(dataList, name);
    const nameContain = dataList?.find(
      (element) => element.name.toLowerCase() === name.toLowerCase()
    );
    if (nameContain !== undefined) return handleOpenModalCharacterExist();

    let elementByNameApi = await getApi(
      name,
      `https://swapi.dev/api/${category}/?page=1&format=json`
    );

    if (!elementByNameApi) return handleOpenModalCharacterNoFound();
    console.log(elementByNameApi);
    setElementByName(elementByNameApi);
  };

  useEffect(() => {
    dispatch(getCategory(elementByName));
    setTriangle(false);
  }, [elementByName, getCategory]);

  return (
    <div className={styles.divContainerPageList}>
      <h1>{pathName === "people" ? "Characters" : pathName}</h1>
      {/* <NavBar
        category={dataList}
        selectName={selectName}
        filterByName={filterByName}
      /> */}
      <Modal
        open={characterExist}
        onClose={handleCloseModalCharacterExist}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            The character is included in the list
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Try to add another character!
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={characterNoFound}
        onClose={handleCloseModalCharacterNoFound}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            The character Not Found
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Try to add another character!
          </Typography>
        </Box>
      </Modal>

      {triangle ? (
        <Triangle
          height="200"
          width="200"
          color="#2B4169"
          ariaLabel="triangle-loading"
          wrapperStyle={{ marginTop: "10rem" }}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        <PageListContext.Provider value={{ selectName, tableHead }}>
          <DataList
            category={category}
            tableHead={tableHead}
            dataList={elements}
          />
        </PageListContext.Provider>
      )}
    </div>
  );
}

export default PageList;
