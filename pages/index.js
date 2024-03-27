import { Container, Box, Text, Flex, Select } from '@chakra-ui/react';
import Logo from '../components/logo';
import Search from '../components/search';
import ContentList from '../components/list';
import { useEffect, useState } from 'react';
import coursesData from './courses.json'; // assuming courses.json is in the src folder

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const [availableCourses, setAvailableCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMajor, setSelectedMajor] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedGPA, setSelectedGPA] = useState('');
  const [selectedProfRating, setSelectedProfRating] = useState('');

  const allCourses = coursesData.courses_info.map((course) => {
    return {
        id: course.id,
        courseName: course.name, 
        courseCode: course.code,
        courseDesc: course.description,
        courseGpa: course.gpa,
        courseGpaUrl: course.gpa_url,
        courseProfName: course.professor_name,
        courseAvgEnroll: course.enroll,
        courseRateMyProf: course.rate_my_prof,
        courseRateMyProfUrl: course.rate_my_prof_url,
        courseMajor: course.major,
        courseYear: course.year
    }
  })
  // Filter courses based on the selected filters and search term
  const allFilteredCourses = allCourses.filter((course) => {
    const matchMajor = selectedMajor ? course.courseMajor === selectedMajor : true;
    const matchYear = selectedYear ? course.courseYear === selectedYear : true;
    const matchGPA = selectedGPA ? course.courseGpa >= selectedGPA : true;
    const matchProfRating = selectedProfRating
      ? course.courseRateMyProf >= selectedProfRating
      : true;

    return matchMajor && matchYear && matchGPA && matchProfRating;
  });

  const selectedFilteredCourses = courseList.filter((course) => {
    const matchMajor = selectedMajor ? course.courseMajor === selectedMajor : true;
    const matchYear = selectedYear ? course.courseYear === selectedYear : true;
    const matchGPA = selectedGPA ? course.courseGpa >= selectedGPA : true;
    const matchProfRating = selectedProfRating
      ? course.courseRateMyProf >= selectedProfRating
      : true;

    return matchMajor && matchYear && matchGPA && matchProfRating;
  });


  useEffect(() => {
    // Simulating the fetching of course codes from the JSON data
    const course_codes = coursesData.course_codes;
    const course_options = course_codes.map((course_code) => ({
      value: course_code,
      label: course_code,
    }));
    setAvailableCourses(course_options);
  }, []);

  const handleSelectedItemsChange = (value) => {
    if (value && value.length > 0) {
      // Map over selected values and find corresponding course info from local JSON
      const selected_courses = value.map((selected) => {
        const course_info = coursesData.courses_info.find(course => course.code === selected.value);
        if (!course_info) return null; // If no match found, return null and filter out later
  
        // Assuming each course has only one professor and rating, if not, you would need to adjust this
        return {
          id: course_info.id,
          courseName: course_info.name, 
          courseCode: course_info.code,
          courseDesc: course_info.description,
          courseGpa: course_info.gpa,
          courseGpaUrl: course_info.gpa_url,
          courseProfName: course_info.professor_name,
          courseAvgEnroll: course_info.enroll,
          courseRateMyProf: course_info.rate_my_prof,
          courseRateMyProfUrl: course_info.rate_my_prof_url,
          courseMajor: course_info.major,
          courseYear: course_info.year
        };
      }).filter(Boolean); // Filter out any nulls from missing courses

      selected_courses.filter((course) => {
        const matchMajor = selectedMajor ? course.courseMajor === selectedMajor : true;
        const matchYear = selectedYear ? course.courseYear === selectedYear : true;
        const matchGPA = selectedGPA ? course.courseGpa >= selectedGPA : true;
        const matchProfRating = selectedProfRating
          ? course.courseRateMyProf >= selectedProfRating
          : true;

        return matchMajor && matchYear && matchGPA && matchProfRating;
      })
  
      setCourseList(selected_courses);
    } else {
      setCourseList([]);
    }
  };
  

  return (
    <Box display={'flex'} flexDirection='column'>
      <Container maxW='container.md' height='50%'>
        <Logo />
      </Container>
        <Search availableCourses={availableCourses} courseSelectChange={handleSelectedItemsChange} />
      <Box height='50%' >
        <Box display={'flex'} mb={'1em'}>
          <Text as={'b'} mt={'2em'}>Sort By:&nbsp;</Text>
          <Box mr={2}>
            <Text>Program:</Text>
            <Select maxW={'10em'} height={'3em'} color={'#CEDEFF'} bg={'#2B308B'} placeholder="Program" defaultValue="" onChange={(e) => setSelectedMajor(e.target.value)}>
              <option value="Comp Sci">Comp Sci</option>
              <option value="Commerce">Commerce</option>
              <option value="Engineering">Engineering</option>
            </Select>
          </Box>
          <Box mr={2}>
            <Text >Year:</Text>
            <Select maxW={'10em'} height={'3em'} color={'#CEDEFF'} bg={'#2B308B'} placeholder="Year" mr={2} defaultValue="" onChange={(e) => setSelectedYear(e.target.value)}>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
            </Select>
          </Box>
          <Box mr={2}>
            <Text >Average GPA:</Text>
            <Select maxW={'10em'} height={'3em'} color={'#CEDEFF'} bg={'#2B308B'} placeholder="Average GPA" mr={2} defaultValue="" onChange={(e) => setSelectedGPA(e.target.value)}>
              <option value="1.0">1.0</option>
              <option value="2.0">2.0</option>
              <option value="3.0">3.0</option>
              <option value="4.0">4.0</option>
            </Select>
          </Box>
          <Box>
            <Text >Rate My Prof:</Text>
            <Select maxW={'10em'} height={'3em'} color={'#CEDEFF'} bg={'#2B308B'} placeholder="Rate My Prof" defaultValue="" onChange={(e) => setSelectedProfRating(e.target.value)}>
              <option value="1.0">1.0</option>
              <option value="2.0">2.0</option>
              <option value="3.0">3.0</option>
              <option value="4.0">4.0</option>
              <option value="5.0">5.0</option>
            </Select>
          </Box>
        </Box>
        {
          courseList.length > 0 ? <ContentList courses={selectedFilteredCourses} /> : <ContentList courses={allFilteredCourses} />
        }
        
      </Box>
    </Box>
  );
}
