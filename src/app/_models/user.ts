export class User {

  static readonly GENDER_MALE = 1;
  static readonly GENDER_FEMALE = 2;

  id: number;
  username: string;
  email: string;
  password: string;
  auth_key: string;
  password_reset_token: string;
  full_name: string;
  job: string;
  bio: string;
  avatar: string;
  phone: string;
  birth_date: string;
  gender: number;
  status: number;
  facebook_url: string;
  role: number;
  created_at: string;
  updated_at: string;

}
