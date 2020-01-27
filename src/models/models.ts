export type User = {
    id: number;
    nickname: string;
    email: string;
    password: string;
    created_at: string;
    updated_at: string;
  };
  
  export type PayCardProps = {
    id: number;
    title: string;
    content: string;
    nparticipants: number;
    amount: number;
    author: User;
    author_id: number;
    created_at: string;
    updated_at: string;
  };

  export type Participant = {
    id: number;
    participant:string;
    partofpayment: number;
  };

  export type Pays = {
    id: number;
    title: string;
    content: string;
    nparticipants: number;
    amount: number;
    author: {
      id: number;
      nickname: string;
      email: string;
      password: string;
      created_at: string;
      updated_at: string;
    };
    author_id: number;
    created_at: string;
    updated_at: string;
  };