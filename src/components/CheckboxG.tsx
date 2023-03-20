import { Box, Flex, Text, useCheckbox, useCheckboxGroup, chakra, Grid } from '@chakra-ui/react'
import React from 'react'

const CheckboxG = () => {
    function CustomCheckbox(props:any) {
        const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
          useCheckbox(props)

          return (
            <chakra.label
              display='flex'
              alignItems='center'
              gridColumnGap={2}
              px={3}
              py={1}
              cursor='pointer'
              {...htmlProps}
            >
              <input {...getInputProps()} hidden />
              <Flex
                alignItems='center'
                justifyContent='center'
                border='2px solid #bb996b'
                w={4}
                h={4}
                {...getCheckboxProps()}
              >
                {state.isChecked && <Box w={2} h={2} bg='#bb996b' />}
              </Flex>
              <Text color="#fff" {...getLabelProps()}>{props.value}</Text>
            </chakra.label>
          )
        }

        const { value, getCheckboxProps } = useCheckboxGroup({
            defaultValue: ['Central Heating'],
          })
        
          return (
            <Box>
            <Grid templateColumns='repeat(2, 1fr)'>
              <CustomCheckbox {...getCheckboxProps({ value: 'Central Heating' })} />
              <CustomCheckbox {...getCheckboxProps({ value: 'Home Theater' })} />
            </Grid>

            <Grid templateColumns='repeat(3, 1fr)'>
              <CustomCheckbox {...getCheckboxProps({ value: 'Lawn' })}/>
              <CustomCheckbox {...getCheckboxProps({ value: 'Wi-Fi' })}/>
              <CustomCheckbox {...getCheckboxProps({ value: 'Gym' })}/>
            </Grid>
            </Box>
          )
        }

export default CheckboxG