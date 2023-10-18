import {Container, VStack, Heading, Input, Button, Text, Link, Avatar} from '@chakra-ui/react';
import React from 'react';

const Signup = () => {
  return (
    <Container macW={"container.xl"} h={"120vh"} p={"16"}>
        <form>
            <VStack 
            alignItems={"stretch"}
            spacing={'8'}
            w={['full', '96']}
            m={'auto'}
            my={'16'} 
            >
                <Heading>VIDEO HUB</Heading>
                <Avatar alignSelf={"center"} />
                
                <Input 
                placeholder={"Name"} 
                type={"text"} 
                required focusBorderColor={"green.500"} 
                />

                <Input 
                placeholder={"Email"} 
                type={"email"} 
                required focusBorderColor={"green.500"} 
                />

                <Input 
                placeholder={"Password"} 
                type={"password"} 
                required focusBorderColor={"green.500"} 
                />

                
                <Button colorScheme={'green'} type={'submit'} >
                    Sign UP
                </Button>

                <Text textAlign={'right'}>Already Signed Up?{" "}
                <Button variant={"link"} colorScheme='green'>
                   <Link to={'/login'}>Log In</Link>
                </Button></Text>
                

            </VStack>

        </form>
    </Container>
  );
}


export default Signup;