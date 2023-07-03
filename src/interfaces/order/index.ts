import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  status: string;
  end_customer_id?: string;
  middle_agent_id?: string;
  created_at?: any;
  updated_at?: any;

  user_order_end_customer_idTouser?: UserInterface;
  user_order_middle_agent_idTouser?: UserInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  end_customer_id?: string;
  middle_agent_id?: string;
}
