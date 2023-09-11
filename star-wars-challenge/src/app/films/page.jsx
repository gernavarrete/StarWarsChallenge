"use client";

import { getPeoples } from "@/redux-toolkit/features/peoples/storeSlice";
import styles from "./pageFilms.module.css";
import getApiCategory from "@/services/getApiCategory";
import PageList from "@/components/PageList/PageList";
import { usePathname } from "next/navigation";

function Films() {
  const pathName = usePathname().split("/")[1];
  const tableData = {
    tableHead: [
      "Gender",
      "Eyes Color",
      "Hair Color",
      "Height",
      "Mass",
      "Skin Color",
    ],
    titleTable: "Name Character",
  };

  return (
    <div className={styles.divContainer}>
      <PageList
        category={pathName}
        getCategory={getPeoples}
        tableData={tableData}
        getApi={getApiCategory}
      />
    </div>
  );
}

export default Films;
