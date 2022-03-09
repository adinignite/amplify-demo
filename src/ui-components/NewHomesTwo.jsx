/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import CardG from "./CardG";
import { Collection } from "@aws-amplify/ui-react";
export default function NewHomesTwo(props) {
  const { items, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Collection
      type="list"
      direction="column"
      alignItems="stretch"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <CardG
          height="auto"
          width="auto"
          margin="2rem 2rem 2rem 2rem"
          key={item.id}
          {...getOverrideProps(overrides, "Collection.CardG[0]")}
        ></CardG>
      )}
    </Collection>
  );
}
