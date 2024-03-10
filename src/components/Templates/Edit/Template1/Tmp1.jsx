import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Footer from './Footer'
import Template1Homepage from './Homepage'
import Samples from './Samples'
import Services from './Services'
import { BodyModal, HeaderModal, SampleModal } from './Modals/ModalStyles'

export default function Template1() {

  const [ edit, setEdit ] = useState(false);
  const [ modalTab, setModalTab ] = useState('');

  const handleModal=(tab)=>{
    setEdit(true);
    setModalTab(tab);
}

  return (
    <Box>
      <Template1Homepage setEdit={setEdit} edit={edit} setModalTab={setModalTab} modalTab={modalTab} handleModal={handleModal}/>
      <Services setEdit={setEdit} edit={edit} setModalTab={setModalTab} modalTab={modalTab} handleModal={handleModal}/>
      <Samples setEdit={setEdit} edit={edit} setModalTab={setModalTab} modalTab={modalTab} handleModal={handleModal}/>
      <Footer setEdit={setEdit} edit={edit} setModalTab={setModalTab} modalTab={modalTab} handleModal={handleModal}/>

      {(edit && modalTab=== 'samples') && <SampleModal setModalTab={setModalTab}/>}
      {(edit && modalTab=== 'header') && <HeaderModal setModalTab={setModalTab}/>}
      {(edit && modalTab=== 'body') && <BodyModal setModalTab={setModalTab}/>}
    </Box>
    )
}
