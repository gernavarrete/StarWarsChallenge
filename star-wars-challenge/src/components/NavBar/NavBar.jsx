"use client";

import { TextField, Button, Autocomplete } from "@mui/material";
import style from "./NavBar.module.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { useContext, useEffect, useState } from "react";
import { PageListContext } from "../PageList/PageList";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#E0E3E7",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },

    "&.css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
      color: "white",
    },
  },
});

function NavBar({ handleFilterBytext, orderByProp }) {
  const pathName = usePathname().split("/")[1];
  const [name, setName] = useState("");
  const [inputByName, setInputByName] = useState("");
  const [inputByOtherString, setInputByOtherString] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [ascendingOrder, setAscendingOrder] = useState("");
  const { selectName, tableData } = useContext(PageListContext);
  const { tableHead } = tableData;
  const dataNames = useSelector(
    (state) => state.storeReducer.namesAutocomplete
  );

  const handleSearch = (e) => {
    e.preventDefault();
    selectName(name);
    setName("");
  };

  const handleByText = (e) => {
    e.preventDefault();

    if (e.target.id.toLowerCase() === "name") {
      setTypeFilter("name");
      setInputByName(e.target.value);
    } else if (e.target.id.toLowerCase() === tableHead[0].toLowerCase()) {
      setTypeFilter(e.target.id.toLowerCase());
      setInputByOtherString(e.target.value);
    }
  };

  useEffect(() => {
    if (typeFilter === "name") {
      handleFilterBytext(inputByName, typeFilter);
    } else if (typeFilter === tableHead[0].toLowerCase()) {
      handleFilterBytext(inputByOtherString, typeFilter);
    }
  }, [inputByName, inputByOtherString, typeFilter]);

  const handleChangeOrder = (e) => {
    e.preventDefault();
    setAscendingOrder(e.target.value);
  };

  useEffect(() => {
    if (pathName === "films")
      orderByProp(ascendingOrder, tableHead[2].toLowerCase());
    else orderByProp(ascendingOrder, tableHead[4].toLowerCase());
  }, [ascendingOrder]);

  return (
    <div className={style.divContainerNavBar}>
      <Box
        sx={{
          display: "flex",
          width: "40%",
          maxWidth: "100%",
          minWidth: "30%",
          "@media(width < 780px)": {
            width: "100%",
          },
        }}
        component="form"
        onSubmit={handleSearch}
      >
        <CssTextField
          fullWidth
          label="Search Character"
          id="searchCaracter"
          sx={{ width: "80%" }}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          InputProps={{
            style: {
              color: "#E4D9E0",
            },
          }}
          InputLabelProps={{
            style: {
              color: "#E4D9E0",
            },
          }}
        />
        <Button
          type="submit"
          variant="outline"
          sx={{
            width: "20%",
            marginLeft: "1rem",
            border: "1px solid white",
            "&:hover": {
              backgroundColor: "#D3DAEE",
              borderColor: "#0062cc",
              boxShadow: "none",
              color: "#32285B",
              fontWeight: 700,
            },
          }}
        >
          {" "}
          Search
        </Button>
      </Box>
      {/* <Box
        sx={{
          display: "flex",
          width: "40%",
          maxWidth: "100%",
          minWidth: "30%",
          "@media(width < 780px)": {
            width: "100%",
          },
        }}
        component="form"
        onSubmit={handleSearch}
      >
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          options={dataNames}
          sx={{ width: 300, marginY: "1rem" }}
          renderInput={(params) => (
            <CssTextField
              {...params}
              label="Search Character"
              InputProps={{
                ...params.InputProps,
                type: "text",
                style: {
                  color: "#E4D9E0",
                },
              }}
              InputLabelProps={{
                style: {
                  color: "#E4D9E0",
                },
              }}
            />
          )}
          onChange={(e, value) => (!value ? "" : setName(value))}
        />
        <Button
          type="submit"
          variant="outline"
          sx={{
            width: "20%",
            height: "60%",
            marginTop: "1rem",
            marginLeft: "1rem",
            border: "1px solid white",
            "&:hover": {
              backgroundColor: "#D3DAEE",
              borderColor: "#0062cc",
              boxShadow: "none",
              color: "#32285B",
              fontWeight: 700,
            },
          }}
        >
          {" "}
          Search
        </Button>
      </Box> */}
      {/* <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={categoryOptions}
        sx={{ width: 300, marginY: "1rem" }}
        renderInput={(params) => (
          <CssTextField
            {...params}
            label="Search Character"
            InputProps={{
              ...params.InputProps,
              type: "text",
              style: {
                color: "#E4D9E0",
              },
            }}
            InputLabelProps={{
              style: {
                color: "#E4D9E0",
              },
            }}
          />
        )}
        onChange={(e, value) => handleClick(e, value)}
      /> */}
      <div className={style.divContainerFilter}>
        <Box
          sx={{
            width: "30%",
            maxWidth: "100%",
            minWidth: "30%",
            "@media(width < 780px)": {
              width: "100%",
            },
          }}
          //onChange={(e) => handleByText(e)}
        >
          <CssTextField
            fullWidth
            label="Filter By Name"
            id="name"
            type="text"
            value={inputByName}
            onChange={(e) => handleByText(e)}
            InputProps={{
              style: {
                color: "#E4D9E0",
              },
            }}
            InputLabelProps={{
              style: {
                color: "#E4D9E0",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            width: "30%",
            maxWidth: "100%",
            minWidth: "30%",
            "@media(width < 780px)": {
              width: "100%",
            },
          }}
          //onChange={handleByText}
        >
          <CssTextField
            fullWidth
            label={`Filter By ${
              tableHead[0].toLowerCase()[0].toUpperCase() +
              tableHead[0].toLowerCase().slice(1)
            }`}
            id={`${tableHead[0]}`}
            type="text"
            value={inputByOtherString}
            onChange={(e) => handleByText(e)}
            InputProps={{
              style: {
                color: "#E4D9E0",
              },
            }}
            InputLabelProps={{
              style: {
                color: "#E4D9E0",
              },
            }}
          />
        </Box>
        {tableHead[4] ? (
          <FormControl
            sx={{
              width: "30%",
              maxWidth: "100%",
              minWidth: "30%",
              "@media(width < 780px)": {
                width: "100%",
              },
            }}
          >
            <InputLabel
              id="ascendingOrder"
              sx={{
                color: "white",
              }}
            >{`Order By ${
              tableHead[4].toLowerCase()[0].toUpperCase() +
              tableHead[4].toLowerCase().slice(1)
            }`}</InputLabel>
            <Select
              labelId="ascendingOrder"
              id={`${tableHead[4]}`}
              value={ascendingOrder}
              label={`Filter By ${
                tableHead[4].toLowerCase()[0].toUpperCase() +
                tableHead[4].toLowerCase().slice(1)
              }`}
              onChange={handleChangeOrder}
              sx={{
                color: "white",
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(228, 219, 233, 1)",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(228, 219, 233, 1)",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(228, 219, 233, 1)",
                },
                ".MuiSvgIcon-root ": {
                  fill: "white !important",
                },
              }}
            >
              <MenuItem value={"none"}>None</MenuItem>
              <MenuItem value={"upward"}>Increasing Order</MenuItem>
              <MenuItem value={"downward"}>Decreasing Order</MenuItem>
            </Select>
          </FormControl>
        ) : null}
      </div>
    </div>
  );
}
export default NavBar;
