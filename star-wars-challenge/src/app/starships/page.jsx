"use client";

import { getVehicles } from "@/redux-toolkit/features/peoples/storeSlice";
import styles from "./pageStarships.module.css";
import getApiCategory from "@/services/getApiCategory";
import PageList from "@/components/PageList/PageList";
import { usePathname } from "next/navigation";

function Vehicles() {
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
    titleTable: "Name Vehicles",
  };

  return (
    <div className={styles.divContainer}>
      <PageList
        category={pathName}
        getCategory={getVehicles}
        tableData={tableData}
        getApi={getApiCategory}
      />
    </div>
  );
}

export default Vehicles;
