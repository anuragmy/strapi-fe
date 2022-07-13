/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import MenuItems from "../MenuItems";
import "./directory.styles.scss";
import { apiClient } from "../../api/apiClient";
import Collections from "../Collections";

const Directory = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    apiClient
      .getMensChlothes()
      .then((res) => {
        console.log("this", res);
        setData([]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Grid container spacing={2} style={{ width: "90vw" }}>
      {data.map((item) => {
        console.log(item);
        return <div>hi</div>;
      })}
    </Grid>
  );
};

export default Directory;
