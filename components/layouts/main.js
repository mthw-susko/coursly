import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Nav from '../nav'
import WindowedSelect from "react-windowed-select";


const Main = ({ children }) => {
  return (
    <>
    <Box as='main' style={{display:'flex',minHeight:'100vh', flexDirection:'column',  backgroundImage: 'linear-gradient(to right, #1a205c, #0d113d)', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}>
      <Head>
          <meta name="viewport" content="width=device-width, initail-scale=1" />
          <title>Course Find</title>
      </Head>
      {/* <Nav/> */}
      <Container maxW="full" style={{display:'flex',minHeight:'100vh', flexDirection:'column', justifyContent:'space-between'}}>
        {children}
      </Container>
    </Box>
      </>
  )
}

export default Main