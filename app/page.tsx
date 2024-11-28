import { Box, HStack, Text } from "@chakra-ui/react"
import { RiArrowRightLine, RiMailLine } from "react-icons/ri"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <Box padding="10" rounded="sm" borderWidth="1px">
      <Text fontSize="5xl">Hello World</Text>

      <HStack>
        <Button colorPalette="teal" variant="solid">
          <RiMailLine /> Email
        </Button>
        <Button colorPalette="teal" variant="outline">
          Call us <RiArrowRightLine />
        </Button>
      </HStack>
    </Box>
  )
}
