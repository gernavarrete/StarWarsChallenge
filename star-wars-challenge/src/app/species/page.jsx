"use client";

import { getSpecies } from "@/redux-toolkit/features/peoples/storeSlice";
import styles from "./pageSpecies.module.css";
import getApiCategory from "@/services/getApiCategory";
import PageList from "@/components/PageList/PageList";
import { usePathname } from "next/navigation";

function Species() {
  const pathName = usePathname().split("/")[1];

  const tableData = {
    tableHead: [
      "Classification",
      "Average Lifespan",
      "Designation",
      "Language",
      "Average Height",
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
