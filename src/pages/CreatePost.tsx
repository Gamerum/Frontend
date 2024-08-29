import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import createPostValidator from '../utils/validators/createPost';

const CreatePost = () => {
  interface FormValues {
    username: string;
  }

  const schema = createPostValidator();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Form submitted>>>>', data);
  };

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="p-fluid w-1/2">
        <div className="field">
          <label htmlFor="username">Username</label>
          <InputText
            id="username"
            {...register('username')}
            className={errors.username ? 'p-invalid' : ''}
          />
          {errors.username && (
            <Message severity="error" text={errors.username.message} />
          )}
        </div>

        <Button label="Submit" type="submit" className="p-button-primary" />
      </form>
    </div>
  );
};

export default CreatePost;
