import Button from './components/UI/Button';
import Container from './components/UI/Container';
import Input from './components/UI/Input';

function App() {
  return (
    <main>
      <Input id='name' label='Your name' type='text' />
      <Input id='age' label='Your age' type='number' />

      <p>
        <Button>button</Button>
      </p>
      <p>
        <Button href='something.com'>button</Button>
      </p>
      <Container as='button' />
    </main>
  );
}

export default App;
