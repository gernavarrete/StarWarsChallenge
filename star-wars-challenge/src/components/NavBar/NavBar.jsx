"use client";

import { TextField, Autocomplete, Button } from "@mui/material";
import style from "./NavBar.module.css";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";

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

function NavBar({ category, selectName }) {
  const categoryOptions = category?.map((obj) => obj.name);
  //console.log(categoryOptions);
  const [name, setName] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    selectName(name);
    console.log(name);
  };

  return (
    <div className={style.divContainerNavBar}>
      <Box
        sx={{
          display: "flex",
          width: "40%",
          maxWidth: "100%",
          minWidth: "30%",
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
          }}
        >
          <CssTextField
            fullWidth
            label="fullWidth"
            id="fullWidth"
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
          }}
        >
          <CssTextField
            fullWidth
            label="Gender"
            id="gender"
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
          }}
        >
          <CssTextField
            fullWidth
            label="fullWidth"
            id="fullWidth"
            InputLabelProps={{
              style: {
                color: "#E4D9E0",
              },
            }}
          />
        </Box>
      </div>
      {/* <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        options={categoryOptions}
        renderInput={(params) => (
          <CssTextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: "search",
              style: {
                color: "#E4D9E0",
              },
            }}
            InputLabelProps={{
              ...params.InputLabelProps,
              style: {
                color: "#E4D9E0",
              },
            }}
          />
        )}
        onChange={(e, value) => handleClick(e, value)}
      /> */}
    </div>
  );
}
export default NavBar;
