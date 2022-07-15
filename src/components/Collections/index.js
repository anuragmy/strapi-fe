import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions";
import { CustomButton } from "../CustomButton";
import "./collection-item.styles.scss";

const Collections = ({ item, price }) => {
  const dispatch = useDispatch();

  const { image } = item;

  return (
    <>
      <div className="collection-item">
        <div
          className="image"
          style={{
            height: 400,
            background: `url(${image.data[0].attributes.url})`,
            backgroundRepeat: "no-repeat",

            backgroundSize: "cover",
          }}
        >
          <CustomButton
            onClick={() => {
              const data = {
                ...item,
                price,
                image: image.data[0].attributes.formats.small.url,
              };
              console.log(data);

              dispatch(addItem(data));
            }}
          >
            ADD TO CART
          </CustomButton>
        </div>
      </div>
      <div className="collection-footer">
        <span style={{ fontWeight: "lighter", color: "black" }}>
          &#x20B9; {price}
        </span>
        <span style={{ fontWeight: "lighter", color: "black" }}>
          {item.Name}
        </span>
      </div>
    </>
  );
};

export default Collections;
