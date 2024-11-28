import { Box, HStack } from "@chakra-ui/react"
import { RiArrowRightLine, RiMailLine } from "react-icons/ri"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <Box padding="10" rounded="sm" borderWidth="1px">
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
