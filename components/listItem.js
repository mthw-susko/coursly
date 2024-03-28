import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Box, Text, Stack, Divider, Link, Highlight, Badge } from '@chakra-ui/react'

const ListItem = ({ course }) => {
    const courseHeader = `${String(course.courseCode)} - ${String(course.courseName)}` 
    const profDisplay = []

    if (Array.isArray(course.courseRateMyProfUrl)) {
        for(var i = 0; i < course.courseRateMyProfUrl.length; i++) {
            profDisplay.unshift(
                <>
                    {course.courseRateMyProf[i] != "N/A" 
                        ? <><Link color={"#FFAD4D"} href={course.courseRateMyProfUrl[i]} isExternal>
                            <Badge variant='subtle' fontSize={'0.9em'} color={'#FFAD4D'}>{course.courseRateMyProf[i]}<ExternalLinkIcon pb={'0.2em'}/></Badge>
                            </Link>&nbsp;</>
                        : <Text color={"#FFAD4D"}>{course.courseRateMyProf[i]}&nbsp;</Text>
                    }
                </>
            )
        }
    } else {
        profDisplay.unshift(
            <>
                {course.courseRateMyProf != "N/A" 
                    ? <><Link color={"#FFAD4D"} href={course.courseRateMyProfUrl} isExternal>
                        <Badge variant='subtle' fontSize={'0.9em'} color={'#FFAD4D'}>{course.courseRateMyProf}<ExternalLinkIcon pb={'0.2em'}/></Badge>
                        </Link>&nbsp;</>
                    : <Text color={"#FFAD4D"}>{course.courseRateMyProf}</Text>
                }
            </>
        )
    }
    

  return (
    <Container 
    maxW={'container.lg'} bgColor="#2B308B" 
    style={{borderRadius:'7px'}} p={'1em'}  mb={'1em'}
    _hover={{ boxShadow: "outline", outlineColor:'#5A81FA'}}
    >
        <Stack direction={'row'}>
            <Box style={{float:'left'}} width='60%'> 
                <Text fontSize={'2xl'} top='0' as='b'>
                    <Highlight query={course.courseCode} styles={{ color:'#FFAD4D'}}>
                        {courseHeader}
                    </Highlight>
                </Text>
                <Text>{course.courseDesc}</Text>
                <h1 style={{color:'#FFAD4D'}}>Comments</h1>
                <Text>{course.courseComment}</Text>
            </Box>
            <Box float={'left'}>
            <Divider orientation='vertical' borderColor={'#CEDEFF'} borderWidth='2px' borderRadius={'7px'} />
            </Box>
            <Box style={{float:'left'}} width='40%'>
                <Stack direction={'column'} alignContent={'center'} display={'inline'}>
                    <Text fontSize={'xl'}>
                        GPA:&nbsp;
                        {course.courseGpaUrl != "N/A" 
                            ?<Link color={"#FFAD4D"} href={course.courseGpaUrl} isExternal>
                                <Badge variant='subtle' fontSize={'0.9em'} color={'#FFAD4D'}>{course.courseGpa}<ExternalLinkIcon pb={'0.2em'}/></Badge>
                            </Link>
                            :<Text color={"#FFAD4D"}>{course.courseGpa}</Text>
                        }
                    </Text>
                    <Text fontSize={'xl'}>
                        Average Enrollment: <Box as='span' color={"#FFAD4D"}>{course.courseAvgEnroll}</Box>
                    </Text>
                    <Text fontSize={'xl'}>
                        Professor Name(s): 
                        <Box as='span' color={"#FFAD4D"}> {course.courseProfName}</Box>
                            
                    </Text>
                    <Text fontSize={'xl'}>
                        Rate My Prof:&nbsp;
                        {
                            profDisplay.map((elem) => elem)
                        }
                    </Text>
                    <Text fontSize={'xl'}>
                        Course Location: 
                        <Box as='span' color={"#FFAD4D"}> {course.courseLocation}</Box>
                            
                    </Text>
                    <Text fontSize={'xl'}>
                        Course time: 
                        <Box as='span' color={"#FFAD4D"}> {course.courseTime}</Box>
                            
                    </Text>
                </Stack>
            </Box>
        </Stack>
    </Container>
  )
}

export default ListItem