import { Container, Button } from 'react-bootstrap';
import axios from 'axios';

const url = process.env.REACT_APP_DB_URL;

export const Admin = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const axiosHandler = async (items) => {
    await axios.post(`${url}/themes/test2.json`, items);
    console.log('fetched');
  };

  return (
    <Container className='py-3 text-center' fluid>
      <form onSubmit={submitHandler}>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </form>
      <Button
        className='mt-5'
        variant='warning'
        // onClick={() => axiosHandler()}
      >
        Perform axios operation
      </Button>
    </Container>
  );
};
