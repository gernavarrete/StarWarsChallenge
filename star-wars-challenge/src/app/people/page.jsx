"use client";

import PeopleList from "@/components/DataList/DataList";
import { getPeoples } from "@/redux-toolkit/features/peoples/storeSlice";
import getApiData from "@/services/getApiData";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { Triangle } from "react-loader-spinner";
import styles from "./pagePeople.module.css";
import NavBar from "@/components/NavBar/NavBar";
import Pagination from "../../components/Pagination/Pagination";
import getApiCharacter from "@/services/getApiCharacter";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PageList from "@/components/PageList/PageList";

function People() {
  const tableHead = [
    "Gender",
    "Eyes Color",
    "Hair Color",
    "Height",
    "Mass",
    "Skin Color",
  ];
  /* const [triangle, setTriangle] = useState(true);
  const pathName = usePathname().split("/")[1];
  const dispatch = useDispatch();

  const peoples = useSelector((state) => state.peopleReducer.peoples);
  const [character, setCharacter] = useState([]);
  const [characters, setCharacters] = useState(peoples);
  const [nameFilter, setNameFilter] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); */

  /* const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  }; */

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

  //const selectName = async (name) => {
  //console.log(peoples, name);
  //const nameContain = peoples?.find(
  //(character) => character.name.toLowerCase() === name.toLowerCase()
  //);
  //console.log(nameContain);
  // if (nameContain !== undefined) return handleOpen();

  //let characterByName = await getApiCharacter(
  // name,
  //"https://swapi.dev/api/people/?page=1&format=json"
  //);
  //console.log(characterByName);
  //setCharacter(characterByName);
  /* if (!name) {
      setCharacters(peoples);
      setNameFilter("");
    } else setNameFilter(name); */
  //};

  //useEffect(() => {
  // dispatch(getPeoples(character));
  //setTriangle(false);
  //}, [character, getPeoples]);

  /* const filterByName = (nameValue) => {
    let charactersCache = [...peoples];
    charactersCache = charactersCache.filter((characterObj) =>
      characterObj.name.toLowerCase().includes(nameValue.toLowerCase())
    );

    setCharacters(charactersCache);
  }; */

  /* useEffect(() => {
    filterByName(nameFilter);
    console.log("effect 62");
  }, [nameFilter, peoples]); */

  //const [currentPage, setCurrentPage] = useState(1); //Pagina Actual seteada en 1
  //const [numberOfPage, setNumberOfPage] = useState(0); //Numero de Paginas seteado en 0

  //const indexFirstPageRecipe = () => (currentPage - 1) * 10; // Indice del primer Elemento
  //const indexLastPageRecipe = () => indexFirstPageRecipe() + 10; //Indice del segundo elemento

  //const handlePageNumber = (number) => {
  //Manejo del numero de pagina
  //console.log(number);
  //setCurrentPage(number);
  //};

  //useEffect(() => {
  //Cambio de estado local de Total Recipes indicando los indices que tiene que renderizar en cada pagina
  //console.log(currentPage);
  //setCharacters(peoples.slice(indexFirstPageRecipe(), indexLastPageRecipe()));
  //console.log(peoples);
  //peoples && setNumberOfPage(Math.ceil(peoples.length / 9)); // cambiando el estado local de numeros de paginas a renderiza
  //console.log(numberOfPage);
  //}, [currentPage, triangle, numberOfPage]);

  //useEffect(() => {
  //setCurrentPage(1); //setea el numero de pagina actual a 1 cuando recipesName Cambia
  //}, [nameFilter]);

  return (
    <div className={styles.divContainerPeople}>
      <PageList
        category={"people"}
        getCategory={getPeoples}
        tableHead={tableHead}
        getApi={getApiCharacter}
      />
    </div>
  );
}

export default People;
