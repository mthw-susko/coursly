import { Box, Container, FormControl, FormHelperText, FormLabel, Select, Text } from "@chakra-ui/react"
import WindowedSelect from 'react-windowed-select'

const Search = ({ availableCourses, courseSelectChange }) => {

  const customStyles = {
    control: (styles) => ({ ...styles, minHeight: '3em', backgroundColor: '#FFAD4D', color: 'white' }),
    input: (styles) => ({
      ...styles,
      color: 'white'
    }),
    multiValue: (styles,) => {
      const color = '#CEDEFF';
      return {
        ...styles,
        backgroundColor: color,
        color: '#2B308B',
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
      fontSize: '1em'
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ':hover': {
        backgroundColor: "#2B308B",
        color: 'white',
      },
    }),
    menuList: (base) => ({
      ...base,
      color: '#5A81FA'
    })
  };


  return (
    <Container maxW='container.md' p={'1em'} display={'flex'} pb={'5em'}>
      <Box flex={1} mr={4}>
        <FormControl>
          <FormLabel as='b'>Course Code</FormLabel>
        <WindowedSelect
          options={availableCourses}
          styles={customStyles}
          onChange={courseSelectChange}
          isMulti
        />
          <FormHelperText>XXXX 123</FormHelperText>
        </FormControl>
      </Box>
      <Box mr={2}>
        <Text >School Year</Text>
        <Select maxW={'7em'} height={'3em'} color={'#CEDEFF'} bg={'#2B308B'} mr={2} mt={2}
        >
          <option value="option1">Fall</option>
          <option value="option2">Winter</option>
          <option value="option3">Summer</option>
        </Select>
        </Box>

      <Box mr={2}>
        <Text>Semester</Text>
        <Select maxW={'7em'} height={'3em'} color={'#CEDEFF'} bg={'#2B308B'} mt={2}>
          <option value="option1">2023</option>
          <option value="option2">2022</option>
          <option value="option3">2021</option>
        </Select>
        </Box>
    </Container>
  )
}

export default Search
