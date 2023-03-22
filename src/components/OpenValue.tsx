import React from 'react'
import { Flex, Icon, Text } from '@chakra-ui/react'
import CheckboxG from './CheckboxG'
import { BsFillPlusCircleFill, AiFillMinusCircle } from "@/utils/icons";

const OpenValue = () => {
  const ref: any = React.useRef()
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  return (
    <>
      {isModalOpen ? (
        <Flex
          ref={ref}
          flexDirection={'row-reverse'}
          height={'70px'}
          border={'4px solid #494953'}
          align-items={'flex-start'}
          w={'380px'}
        >
          <Icon onClick={() => setIsModalOpen(false)} as={AiFillMinusCircle} ml={'10px'} color='#fffffe' fontSize={'30px'} />
          <CheckboxG />
        </Flex>
      ) : (
        <Flex
          onClick={() => setIsModalOpen(true)}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
          height={'40px'}
          border={'4px solid #494953'}
          w={'380px'}
        >
          <Text
            color={'#fff'}
            p={'3px 0 0 8px'}
          >Look for certain features</Text>
          <Icon
            p={'2px 0 0 0'}
            as={BsFillPlusCircleFill}
            ml={'10px'}
            color='#fffffe'
            fontSize={'28px'} />
        </Flex>
      )}
    </>
  )
}

export default OpenValue