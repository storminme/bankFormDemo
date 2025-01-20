import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useMutation } from '@tanstack/react-query';
import { AppContext } from '../../context/AppContext.ts';
import { Form3Data } from '../../types/types.ts';

const Form3 = () => {
  const { firstName, lastName, amount, term, setAmount, setTerm } =
    useContext(AppContext)!;
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm<Form3Data>({
    defaultValues: {
      amount,
      term,
    },
  });

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const visibleAmount = watch('amount');
  const visibleTerm = watch('term');

  const mutation = useMutation({
    mutationFn: async (data: { title: string }) => {
      const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('The server did not respond');
      }
      return response.json();
    },
    onSuccess: () => {
      setShowModal(true);
    },
  });

  const onSubmit = (data: Form3Data) => {
    setAmount(data.amount);
    setTerm(data.term);
    const payload = {
      title: `${firstName} ${lastName}`,
    };
    mutation.mutate(payload);
  };

  const goBack = () => {
    const data = getValues();
    setAmount(data.amount);
    setTerm(data.term);
    navigate('/form2');
  };

  return (
    <div className="w-100">
      <h2 className="border-bottom border-dark mb-4">Amount and term</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label className="mb-3 fw-semibold">Loan amount</Form.Label>
          <div className="d-flex align-items-center">
            <Form.Control
              type="range"
              className="rounded-5 w-75"
              min={200}
              max={1000}
              step={100}
              {...register('amount', { required: 'This field is required' })}
              isInvalid={!!errors.amount}
            />
            <span className="ms-3">{visibleAmount}$</span>
          </div>
          <Form.Text>Choose an amount from $200 to $1000</Form.Text>
          <Form.Control.Feedback type="invalid">
            {errors.amount?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label className="my-3 fw-semibold">Loan term</Form.Label>
          <div className="d-flex align-items-center">
            <Form.Control
              type="range"
              className="rounded-5 w-75"
              min={10}
              max={30}
              step={1}
              {...register('term', { required: 'This field is required' })}
              isInvalid={!!errors.term}
            />
            <span className="ms-3 text-nowrap">{visibleTerm} days</span>
          </div>
          <Form.Text className="text-muted">
            Choose a period from 10 to 30 days
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            {errors.term?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <div className="d-flex justify-content-between mt-2">
          <Button
            className="rounded-4 btn-lg"
            variant="secondary"
            onClick={goBack}
          >
            Back
          </Button>
          <Button className="rounded-4 btn-lg" type="submit" variant="primary">
            Submit a request
          </Button>
        </div>
      </Form>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Congratulations!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Congratulations, {lastName} {firstName}. You have been approved{' '}
          {amount}$ for {term} days.
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="rounded-4 btn-lg"
            variant="secondary"
            onClick={() => setShowModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Form3;
