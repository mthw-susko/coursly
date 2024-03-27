import { Box, Container, Stack, Text } from '@chakra-ui/react'

const Logo = () => {
  return (
    <Box pt='5em' pb='5em'>
        <Stack direction={['column', 'row']} spacing='4em'>
        <Text fontSize='7xl' as='b'>
            Coursly
        </Text>
        <Text pt='2.75em'>
            Unlock Your Perfect Path: Course Guidance Tailored for Queen's.
        </Text>
        </Stack>
    </Box>
  )
}

export default Logo
