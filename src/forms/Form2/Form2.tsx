import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { Form, Button } from 'react-bootstrap';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext.ts';
import { fetchFields } from './fetchData/fetch.ts';
import { Field, Form2Data } from '../../types/types.ts';
import WorkPlaceSelect from './components/WorkPlaceSelect.tsx';

const Form2 = () => {
  const { workPlace, address, setFields, setWorkPlace, setAddress } =
    useContext(AppContext)!;
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Form2Data>({
    defaultValues: {
      workPlace,
      address,
    },
  });

  const navigate = useNavigate();

  const {
    data: fields,
    isLoading,
    isError,
  } = useQuery<Field[]>({
    queryKey: ['Fields'],
    queryFn: fetchFields,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (fields) {
      setFields(fields);
    }
  }, [fields, setFields]);

  const onSubmit = (data: Form2Data) => {
    setWorkPlace(data.workPlace);
    setAddress(data.address);
    navigate('/form3');
  };

  const goBack = () => {
    const data = getValues();
    setWorkPlace(data.workPlace);
    setAddress(data.address);
    navigate('/');
  };

  return (
    <div className="w-100">
      <h2 className="border-bottom border-dark mb-4">
        Address and place of work
      </h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formWorkPlace">
          <Form.Label className="fw-semibold">Place of work</Form.Label>
          <WorkPlaceSelect
            fields={fields}
            isLoading={isLoading}
            isError={isError}
            register={register}
            errors={errors}
          />
          <Form.Control.Feedback type="invalid">
            {errors.workPlace?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label className="fw-semibold">Residential address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите адрес"
            {...register('address', { required: 'Адрес обязателен' })}
            isInvalid={!!errors.address}
          />
          <Form.Control.Feedback type="invalid">
            {errors.address?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <div className="d-flex justify-content-between">
          <Button
            className="rounded-4 btn-lg"
            variant="secondary"
            onClick={goBack}
          >
            Back
          </Button>
          <Button className="rounded-4 btn-lg" variant="primary" type="submit">
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Form2;
