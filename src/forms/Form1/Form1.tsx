import { useContext } from 'react';
import { AppContext } from '../../context/AppContext.ts';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Form, Button } from 'react-bootstrap';
import { Form1Data } from '../../types/types.ts';

const Form1 = () => {
  const {
    firstName,
    lastName,
    phone,
    gender,
    setFirstName,
    setLastName,
    setPhone,
    setGender,
  } = useContext(AppContext)!;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form1Data>({
    defaultValues: {
      phone,
      firstName,
      lastName,
      gender,
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data: Form1Data) => {
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setPhone(data.phone);
    setGender(data.gender);
    navigate('/form2');
  };

  return (
    <div className="w-100">
      <h2 className="border-bottom border-dark mb-4">Personal information</h2>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label className="fw-semibold">Phone number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="0XXX XXX XXX"
            {...register('phone', {
              required: 'Phone number required',
              pattern: {
                value: /^0\d{3} \d{3} \d{3}$/,
                message: 'Enter the phone number in the format 0XXX XXX XXX',
              },
            })}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label className="fw-semibold">First name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a first name"
            {...register('firstName', { required: 'First name is required' })}
            isInvalid={!!errors.firstName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.firstName?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label className="fw-semibold">Last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a last name"
            {...register('lastName', { required: 'Last name is required' })}
            isInvalid={!!errors.lastName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.lastName?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGender">
          <Form.Label className="fw-semibold">Gender</Form.Label>
          <Form.Select
            {...register('gender', { required: 'Пол обязателен' })}
            isInvalid={!!errors.gender}
          >
            <option value="">Choose...</option>
            <option value="Мужской">Male</option>
            <option value="Женский">Female</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {errors.gender?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <div className="d-flex flex-row-reverse">
          <Button className="rounded-4 btn-lg" variant="primary" type="submit">
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Form1;
