"use client";

import { getPlanets } from "@/redux-toolkit/features/peoples/storeSlice";
import styles from "./pagePlanets.module.css";
import getApiCategory from "@/services/getApiCategory";
import PageList from "@/components/PageList/PageList";
import { usePathname } from "next/navigation";

function Planets() {
  const pathName = usePathname().split("/")[1];
  console.log(pathName);

  const tableData = {
    tableHead: [
      "Terrain",
      "Diameter",
      "Climate",
      "Gravity",
      "Population",
      "Surface Water",
    ],
    titleTable: "Name Planets",
  };

  return (
    <div className={styles.divContainer}>
      <PageList
        category={pathName}
        getCategory={getPlanets}
        tableData={tableData}
        getApi={getApiCategory}
      />
    </div>
  );
}

export default Planets;
