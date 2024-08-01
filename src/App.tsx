import Button from './components/UI/Button';
import Container from './components/UI/Container';
import Input from './components/UI/Input';
import Form, { type FormHandle } from './components/UI/Form';
import { useRef } from 'react';

function App() {
  const customForm = useRef<FormHandle>(null);

  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };

    console.log(extractedData);
    customForm.current?.clear();
  };

  return (
    <main className='flex flex-col gap-3'>
      <Form onSave={handleSave} ref={customForm}>
        <Input id='name' label='Your name' type='text' />
        <Input id='age' label='Your age' type='number' />

        <p>
          <Button>Save</Button>
        </p>
      </Form>
      <p>
        <Button href='something.com'>button</Button>
      </p>
      <p>
        <Container as='button'>click me</Container>
      </p>
    </main>
  );
}

export default App;
