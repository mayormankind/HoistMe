import { AbsoluteCenter, Box, Button, Divider, Flex, Heading, IconButton, Input } from "@chakra-ui/react"
import { RiArrowGoBackFill, RiGalleryFill } from "react-icons/ri"

export const HeaderModal = ({ setModalTab }) =>{
    return(
        <BackDrop>
            <Flex flexDir='column' gap='20px' w='100%'>
                <ArrowHeader heading={'Edit Header'} setModalTab={setModalTab}/>
                <Flex flexDir='column' gap='20px'>
                    <Input type='file' display='none' id='logo' placeholder="Enter your text here"/>
                    <label htmlFor="logo">
                        <Button leftIcon={<RiGalleryFill/>} w='100%' variant='customOutline'>Add your Brand Logo</Button>
                    </label>
                    <Box p='10px'>
                        <Divider/>
                        <AbsoluteCenter>OR</AbsoluteCenter>
                    </Box>
                    <Input type='text' placeholder="Type in Your brand name"/>
                    <Button variant='with-bg'>Save changes</Button>
                </Flex>
            </Flex>
        </BackDrop>
    )
}

export const BodyModal = ({ setModalTab }) =>{
    return(
        <BackDrop>
            <Flex flexDir='column' gap='20px' w='100%'>
                <ArrowHeader heading={'Edit Body'} setModalTab={setModalTab}/>
                <Flex flexDir='column' gap='10px'>
                    <Input type='text' placeholder="Enter your body heading here"/>
                    <Input type='text' placeholder="Enter your Body text here"/>
                    <Button variant='with-bg'>Save changes</Button>
                </Flex>
            </Flex>
        </BackDrop>
    )
}

export const SampleModal = ({ setModalTab }) =>{
    return(
        <BackDrop>
            <Flex flexDir='column' gap='20px' w='100%'>
                <ArrowHeader heading={'Edit Samples'} setModalTab={setModalTab}/>
                <Flex flexDir='column' gap='10px'>
                    <Button leftIcon={<RiGalleryFill/>} as='label' htmlFor="img1">Add Sample one</Button>
                    <Button leftIcon={<RiGalleryFill/>} as='label' htmlFor="img2">Add Sample 2</Button>
                    <Button leftIcon={<RiGalleryFill/>} as='label' htmlFor="img3">Add Sample 3</Button>
                    <Button leftIcon={<RiGalleryFill/>} as='label' htmlFor="img4">Add Sample 4</Button>
                    <Button leftIcon={<RiGalleryFill/>} as='label' htmlFor="img5">Add Sample 5</Button>
                    <Button leftIcon={<RiGalleryFill/>} as='label' htmlFor="img6">Add Sample 6</Button>
                    <Input type='file' id='img1' display='none'/>
                    <Input type='file' id='img2' display='none'/>
                    <Input type='file' id='img3' display='none'/>
                    <Input type='file' id='img4' display='none'/>
                    <Input type='file' id='img5' display='none'/>
                    <Input type='file' id='img6' display='none'/>
                    <Button variant='with-bg'>Save changes</Button>
                </Flex>
            </Flex>
        </BackDrop>
    )
}

export const BackArrow = ({ setModalTab }) =>{
    return(
        <IconButton icon={<RiArrowGoBackFill/>} variant='ghost' onClick={()=>setModalTab('')}/>
    ) 
}

export const ArrowHeader = ({ setModalTab, heading }) =>{
    return(
        <Flex gap='30px' align='center'>
            <BackArrow setModalTab={setModalTab}/>
            <Heading fontSize='lg'>{heading}</Heading>
        </Flex>
    ) 
}

export const BackDrop = ({ children }) =>{
    return(
        <Flex bg='rgba(0,0,0,0.6)' h='100%' w='100%' pos='fixed' zIndex='400' top='0' left='0' bottom='0' right='0'>
            <Flex m='auto' w='100%' maxW='500px' p='30px' bg='white' overflowY='scroll' color='black'>{children}</Flex>
        </Flex>
    )
}