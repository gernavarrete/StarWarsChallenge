"use client";

import { getFilms } from "@/redux-toolkit/features/peoples/storeSlice";
import styles from "./pageFilms.module.css";
import getApiCategory from "@/services/getApiCategory";
import PageList from "@/components/PageList/PageList";
import { usePathname } from "next/navigation";

function Films() {
  const pathName = usePathname().split("/")[1];
  const tableData = {
    tableHead: ["Introduction", "Director", "Release Date", "Producer"],
    titleTable: "Name Film",
  };

  return (
    <div className={styles.divContainer}>
      <PageList
        category={pathName}
        getCategory={getFilms}
        tableData={tableData}
        getApi={getApiCategory}
      />
    </div>
  );
}

export default Films;
