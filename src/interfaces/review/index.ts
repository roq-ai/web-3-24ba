import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  rating: number;
  comment?: string;
  end_customer_id?: string;
  middle_agent_id?: string;
  created_at?: any;
  updated_at?: any;

  user_review_end_customer_idTouser?: UserInterface;
  user_review_middle_agent_idTouser?: UserInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  comment?: string;
  end_customer_id?: string;
  middle_agent_id?: string;
}
