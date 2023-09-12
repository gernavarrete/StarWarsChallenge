"use client";

import { getPeoples } from "@/redux-toolkit/features/peoples/storeSlice";
import { usePathname } from "next/navigation";
import styles from "./pagePeople.module.css";
import getApiCategory from "@/services/getApiCategory";
import PageList from "@/components/PageList/PageList";

function People() {
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

export default People;
