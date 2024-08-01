import { useRef } from 'react';
import Form, { type FormHandle } from './UI/Form';
import Input from './UI/Input';
import Button from './UI/Button';

function AddTimer() {
  const customForm = useRef<FormHandle>(null);

  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };

    console.log(extractedData);
    customForm.current?.clear();
  };

  return (
    <Form onSave={handleSave} ref={customForm}>
      <Input id='name' label='Your name' type='text' />
      <Input id='age' label='Your age' type='number' />

      <p>
        <Button>Save</Button>
      </p>
    </Form>
  );
}

export default AddTimer;
