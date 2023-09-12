"use client";

import { getStarships } from "@/redux-toolkit/features/peoples/storeSlice";
import styles from "./pageStarships.module.css";
import getApiCategory from "@/services/getApiCategory";
import PageList from "@/components/PageList/PageList";
import { usePathname } from "next/navigation";

function Vehicles() {
  const pathName = usePathname().split("/")[1];

  const tableData = {
    tableHead: [
      "Model",
      "Passengers",
      "Starship Class",
      "Crew",
      "Length",
      "Manufacturer",
    ],
    titleTable: "Name Starships",
  };

  return (
    <div className={styles.divContainer}>
      <PageList
        category={pathName}
        getCategory={getStarships}
        tableData={tableData}
        getApi={getApiCategory}
      />
    </div>
  );
}

export default Vehicles;
