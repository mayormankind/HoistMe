import { IconButton } from "@chakra-ui/react"
import { RiEditFill } from "react-icons/ri"

export const EditIcon = ({ section, }) =>{
    return (
        <IconButton icon={<RiEditFill/>} onClick={()=>handleModal('header')} pos='absolute' top='0' isRound variant='outline'/>
    )
}