import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { createGoal } from '../features/goals/goalSlice';

const GoalForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const onReset = () => {
    setText('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createGoal({ text }));
    setText('');
  };

  return (
    <VStack as="form" onSubmit={onSubmit} w="full" py="20">
      <FormControl>
        <FormLabel>
          <Heading size="md">Goal</Heading>
        </FormLabel>
        <InputGroup>
          <Input
            isRequired
            size="lg"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Your S.M.A.R.T. goal here"
          />
          {text && text.length > 0 ? (
            <InputRightElement align="center" h="full" px="7">
              <IconButton
                aria-label="Reset goal"
                variant="ghost"
                icon={<FaTimes />}
                onClick={onReset}
              />
            </InputRightElement>
          ) : null}
        </InputGroup>
      </FormControl>
      <Button type="submit" w="full" size="lg">
        Add Goal
      </Button>
    </VStack>
  );
};
export default GoalForm;
