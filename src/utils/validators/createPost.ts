import * as yup from 'yup';

const createPostValidator = () => {
  return yup.object().shape({
    username: yup
      .string()
      .min(10, 'Post title must be min 10 character')
      .required('You must enter a title'),
  });
};
