"use client";

import {
  getSpecies,
  getVehicles,
} from "@/redux-toolkit/features/peoples/storeSlice";
import styles from "./pageSpecies.module.css";
import getApiCategory from "@/services/getApiCategory";
import PageList from "@/components/PageList/PageList";
import { usePathname } from "next/navigation";

function Species() {
  const pathName = usePathname().split("/")[1];
  console.log(pathName);

  const tableData = {
    tableHead: [
      "Model",
      "Passengers",
      "Vehicle Class",
      "Length",
      "Crew",
      "Manufacturer",
    ],
    titleTable: "Name Species",
  };

  return (
    <div className={styles.divContainer}>
      <PageList
        category={pathName}
        getCategory={getSpecies}
        tableData={tableData}
        getApi={getApiCategory}
      />
    </div>
  );
}

export default Species;
