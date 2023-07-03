import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  rating: yup.number().integer().required(),
  comment: yup.string(),
  end_customer_id: yup.string().nullable(),
  middle_agent_id: yup.string().nullable(),
});
