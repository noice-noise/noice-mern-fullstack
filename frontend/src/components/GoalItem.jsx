import { Button, Flex, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/goals/goalSlice';

export const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();
  const [isHidden, setIsHidden] = useState(false);

  const handleClick = (e) => {
    dispatch(deleteGoal(goal._id));
    setIsHidden(true);
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      border="1px"
      borderColor="gray.300"
      w="full"
      p="4"
      rounded="lg"
      hidden={isHidden}
    >
      <VStack align="start">
        <Text>{goal.text}</Text>
        <Text size="sm">
          {new Date(goal.createdAt).toLocaleString('en-US')}
        </Text>
      </VStack>
      <Button size="sm" variant="ghost" onClick={handleClick}>
        X
      </Button>
    </Flex>
  );
};
