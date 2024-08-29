import * as yup from 'yup';

const createPostValidator = () => {
  return yup.object().shape({
    username: yup
      .string()
      .min(5, 'Post title must be min 5 character')
      .required('You must enter a title'),
  });
};

export default createPostValidator;
