import DataList from "@/components/DataList/DataList";
import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { Triangle } from "react-loader-spinner";
import styles from "./PageList.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, CircularProgress } from "@mui/material";
import Link from "next/link";
import { getNameAutocomplete } from "@/redux-toolkit/features/peoples/storeSlice";
import getApiData from "@/services/getApiData";

export const PageListContext = createContext();

function PageList({ category, getCategory, tableData, getApi }) {
  const [triangle, setTriangle] = useState(true);
  const pathName = usePathname().split("/")[1];
  const dispatch = useDispatch();

  const dataList = useSelector((state) => state.storeReducer[category]);

  const [elementByName, setElementByName] = useState([]);

  const [characterExist, setCharacterExist] = useState(false);
  const [characterNoFound, setCharacterNoFound] = useState(false);
  const [noName, setNoName] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleOpenModalCharacterExist = () => setCharacterExist(true);
  const handleCloseModalCharacterExist = () => setCharacterExist(false);
  const handleOpenModalCharacterNoFound = () => setCharacterNoFound(true);
  const handleCloseModalCharacterNoFound = () => setCharacterNoFound(false);
  const handleOpenNoName = () => setNoName(true);
  const handleOpenLoading = () => setNoName(true);
  const handleCloseLoading = () => setNoName(true);
  const handleCloseNoName = () => setNoName(false);

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

  const selectName = async (name) => {
    if (name === "") return handleOpenNoName();

    const nameContain = dataList?.find((element) =>
      element.name.toLowerCase().includes(name.toLowerCase())
    );
    if (nameContain !== undefined) return handleOpenModalCharacterExist();
    setLoading(true);

    let elementByNameApi = await getApi(
      name,
      `https://swapi.dev/api/${category}/`,
      category
    );

    if (!elementByNameApi) {
      setLoading(false);
      handleOpenModalCharacterNoFound();
    } else {
      setElementByName(elementByNameApi);
      setLoading(false);
    }
  };

  useEffect(() => {
    dispatch(getCategory(elementByName));
    setTriangle(false);
  }, [elementByName]);

  useEffect(() => {
    console.log("buscando names");
    async function getApiNames(category) {
      const names = await getApiData(category);
      dispatch(getNameAutocomplete(names));
    }

    getApiNames(pathName);
    return () => {
      dispatch(getNameAutocomplete([]));
    };
  }, []);

  return (
    <div className={styles.divContainerPageList}>
      <h1>
        {pathName === "people"
          ? "Characters"
          : pathName[0].toUpperCase() + pathName.slice(1)}
      </h1>
      <Modal
        open={characterExist}
        onClose={handleCloseModalCharacterExist}
        aria-labelledby="characterExist"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="characterExist" variant="h6" component="h2">
            {`The ${pathName} is included in the list`}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {`Try to add another ${pathName}!`}
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={characterNoFound}
        onClose={handleCloseModalCharacterNoFound}
        aria-labelledby="characterNoFound"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="characterNoFound" variant="h6" component="h2">
            {`The ${pathName} Not Found`}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {`Try to add another ${pathName}!`}
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={noName}
        onClose={handleCloseNoName}
        aria-labelledby="noName"
        aria-describedby="modal-modal-noName"
      >
        <Box sx={style}>
          <Typography id="noName" variant="h6" component="h2">
            {`Complete the ${pathName} name`}
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={loading}
        aria-labelledby="loading"
        aria-describedby="modal-modal-loading"
      >
        <Box sx={style}>
          <CircularProgress />
          <Typography id="noName" variant="h6" component="h2">
            {`Loading ${pathName} data...`}
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
        <PageListContext.Provider value={{ selectName, tableData }}>
          <DataList category={category} tableData={tableData} />
        </PageListContext.Provider>
      )}
      <Link href={"/"}>
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

export default PageList;
