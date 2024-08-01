import Button from './components/UI/Button';
import Container from './components/UI/Container';
import Input from './components/UI/Input';
import Form from './components/UI/Form';

function App() {
  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };

    console.log(extractedData);
  };

  return (
    <main className='flex flex-col gap-3'>
      <Form onSave={handleSave}>
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
