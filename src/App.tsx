import Button from './components/UI/Button';
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
    </main>
  );
}

export default App;
