import React from "react";

import { Flex, Box } from "@chakra-ui/react";

const TableWrapper = (props: any) => {
  return (
    <>
      <Flex>
        <Box
          bg="white"
          borderRadius="15px"
          justifyContent="center"
          alignItems="center"
          m={4}
          w="150vw"
        >
          {props.children}
        </Box>
      </Flex>
    </>
  );
};

export default TableWrapper;
