import {Container, VStack, Heading, Input, Button, Text, Link} from '@chakra-ui/react';
import React from 'react';

const Login = () => {
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
                <Heading>Welcom Back</Heading>
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

                <Button variant={"link"} alignSelf={"flex-end"}>
                   <Link to={'/forgetpassword'}>Forget Password?</Link>
                </Button>

                <Button colorScheme={'green'} type={'submit'} >
                    Log In
                </Button>

                <Text textAlign={'right'}>New User?{" "}
                <Button variant={"link"} colorScheme='green'>
                   <Link to={'/signup'}>Sign Up</Link>
                </Button></Text>
                

            </VStack>

        </form>
    </Container>
  );
};

export default Login;