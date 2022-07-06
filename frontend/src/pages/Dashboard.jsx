import { Flex, Heading, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import GoalForm from '../components/GoalForm';
import { getGoals, reset } from '../features/goals/goalSlice';
import { GoalItem } from '../components/GoalItem';

function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { goals, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.goal
  );

  useEffect(() => {
    if (isError) {
      console.log('error!', message);
    }

    if (!user) {
      navigate('/login');
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  return (
    <>
      <VStack w="full">
        <Heading as="h1">Welcome {user && user.name} </Heading>
        <Heading size="md">Goals Dashboard</Heading>
        <GoalForm />

        <VStack as="section" w="full" spacing="3">
          {goals && goals.length > 0 ? (
            <Flex w="full" gap="3" flexWrap={'wrap'}>
              {goals.map((goal) => (
                <GoalItem key={goal._id} goal={goal} />
              ))}
            </Flex>
          ) : (
            <p>No goals yet. You poor lil fella.</p>
          )}
        </VStack>
      </VStack>
    </>
  );
}

export default Dashboard;
