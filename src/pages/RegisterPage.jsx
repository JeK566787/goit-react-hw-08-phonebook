import { Center } from '@chakra-ui/react';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <section>
      <div>
        <Center textStyle="h2" mt="50px">
          Please register
        </Center>
        <RegisterForm />
      </div>
    </section>
  );
};

export default RegisterPage;
