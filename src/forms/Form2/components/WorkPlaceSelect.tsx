import { Form, Spinner } from 'react-bootstrap';
import { WorkPlaceSelectProps } from '../../../types/types';

const WorkPlaceSelect = ({
  fields,
  isLoading,
  isError,
  register,
  errors,
}: WorkPlaceSelectProps) => {
  if (isLoading) {
    return <Spinner animation="border" className="spinner-border-sm mx-2" />;
  }
  if (isError) {
    return <p className="text-danger">It's empty now</p>;
  }
  return (
    <Form.Select
      {...register('workPlace', { required: 'Место работы обязательно' })}
      isInvalid={!!errors.workPlace}
    >
      <option value="">Choose...</option>
      {fields?.map((field) => (
        <option key={field.slug} value={field.name}>
          {field.name}
        </option>
      ))}
    </Form.Select>
  );
};

export default WorkPlaceSelect;
