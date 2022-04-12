/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Divider,
  Flex,
  Icon,
  Image,
  Rating,
  Text,
} from "@aws-amplify/ui-react";
export default function CardF(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="0"
      direction="row"
      width="960px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Image
        width="320px"
        height="385px"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Image[0]")}
      ></Image>
      <Flex
        gap="24px"
        direction="column"
        width="640px"
        grow="1"
        basis="640px"
        height="385px"
        position="relative"
        padding="32px 32px 32px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="40px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Classic Long Sleeve T-Shirt"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          width="247px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
          <Rating
            display="flex"
            shrink="0"
            height="36px"
            size="large"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Rating[0]")}
          ></Rating>
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
            width="19px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="72"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[0]")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          width="243px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1]")}
        >
          <Badge
            padding="4px 8px 4px 8px"
            display="flex"
            shrink="0"
            height="28px"
            size="small"
            variation="default"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Badge[0]")}
          ></Badge>
          <Badge
            padding="4px 8px 4px 8px"
            display="flex"
            shrink="0"
            height="28px"
            size="small"
            variation="default"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Badge[1]")}
          ></Badge>
          <Badge
            padding="4px 8px 4px 8px"
            display="flex"
            shrink="0"
            height="28px"
            size="small"
            variation="default"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Badge[2]")}
          ></Badge>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Information about this product."
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[1]")}
        ></Text>
        <Flex
          gap="16px"
          direction="row"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[2]")}
        >
          <Icon
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            type="chat"
            fontSize="24px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[2].Icon[0]")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            width="536px"
            grow="1"
            basis="536px"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="“This is a quote.“"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[2].Text[0]")}
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
          gap="32px"
          direction="row"
          alignItems="flex-start"
          shrink="0"
          width="286px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[3]")}
        >
          <Flex
            gap="16px"
            direction="row"
            alignItems="flex-start"
            shrink="0"
            height="24px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[3].Flex[0]")}
          >
            <Icon
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              type="check"
              fontSize="24px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[3].Flex[0].Icon[0]"
              )}
            ></Icon>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Fast"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[3].Flex[0].Text[0]"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            alignItems="flex-start"
            shrink="0"
            height="24px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[3].Flex[1]")}
          >
            <Icon
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              type="check"
              fontSize="24px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[3].Flex[1].Icon[0]"
              )}
            ></Icon>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Fun"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[3].Flex[1].Text[0]"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            alignItems="flex-start"
            shrink="0"
            height="24px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[3].Flex[2]")}
          >
            <Icon
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              type="check"
              fontSize="24px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[3].Flex[2].Icon[0]"
              )}
            ></Icon>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Flirty"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[3].Flex[2].Text[0]"
              )}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
