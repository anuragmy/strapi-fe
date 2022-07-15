/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
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
        const newData = res.data.map((item) => ({ ...item, price: 1000 }));
        console.log(newData);
        setData(newData);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Grid container spacing={2} style={{ width: "90vw" }}>
      {data.map((item) => (
        <Grid item xs={12} sm={6} md={4}>
          <Collections
            key={item.id}
            item={item.attributes}
            price={item.price}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Directory;
