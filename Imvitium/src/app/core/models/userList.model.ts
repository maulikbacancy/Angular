import { UserModel } from "./user.model";

export class UserListModel {
    data: {
      current_page: number;
      data:UserModel[]; 
      last_page: number;
      total: number;
    };
}