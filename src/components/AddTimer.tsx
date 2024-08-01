import { useRef } from 'react';
import Form, { type FormHandle } from './UI/Form';
import Input from './UI/Input';
import Button from './UI/Button';
import { useTimersContext } from '../context/TimersContext';

function AddTimer() {
  const { addTimer } = useTimersContext();
  const customForm = useRef<FormHandle>(null);

  const handleSave = (data: unknown) => {
    const {name, duration} = data as { name: string; duration: string };


    addTimer({name, duration: Number(duration)});

    customForm.current?.clear();
  };

  return (
    <Form onSave={handleSave} ref={customForm} id='add-timer'>
      <Input id='name' label='Name' type='text' />
      <Input id='duration' label='Duration' type='number' />

      <p>
        <Button>Save</Button>
      </p>
    </Form>
  );
}

export default AddTimer;
