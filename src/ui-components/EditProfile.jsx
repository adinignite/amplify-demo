/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
export default function EditProfile(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      position="relative"
      padding="24px 0px 24px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        gap="24px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 24px 0px 24px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
          <Icon
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            type="close"
            fontSize="24px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Icon[0]")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Edit Profile"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[0]")}
          ></Text>
        </Flex>
        <Divider
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Flex.Flex[0].Divider[0]")}
        ></Divider>
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 24px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1]")}
        >
          <Image
            width="96px"
            height="96px"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Image[0]")}
          ></Image>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="22px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            textDecoration="underline"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Upload New Image"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Text[0]")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 24px 0px 24px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[2]")}
        >
          <TextField
            display="flex"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            size="default"
            variation="default"
            {...getOverrideProps(
              overrides,
              "Flex.Flex[0].Flex[2].TextField[0]"
            )}
          ></TextField>
          <TextField
            display="flex"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            size="default"
            variation="default"
            {...getOverrideProps(
              overrides,
              "Flex.Flex[0].Flex[2].TextField[1]"
            )}
          ></TextField>
          <TextField
            display="flex"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            size="default"
            variation="default"
            {...getOverrideProps(
              overrides,
              "Flex.Flex[0].Flex[2].TextField[2]"
            )}
          ></TextField>
        </Flex>
        <Divider
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Flex.Flex[0].Divider[1]")}
        ></Divider>
        <Flex
          gap="10px"
          direction="column"
          shrink="0"
          width="97px"
          position="relative"
          padding="0px 0px 0px 24px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[3]")}
        >
          <Button
            padding="8px 16px 8px 16px"
            display="flex"
            shrink="0"
            width="73px"
            size="default"
            variation="primary"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[3].Button[0]")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
