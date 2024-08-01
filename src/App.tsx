import { useRef } from 'react';
import Button from './components/UI/Button';
import Container from './components/UI/Container';
import Input from './components/UI/Input';

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <main className='flex flex-col gap-3'>
      <Input id='name' label='Your name' type='text' />
      <Input id='age' label='Your age' type='number' ref={inputRef} />

      <p>
        <Button>button</Button>
      </p>
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
