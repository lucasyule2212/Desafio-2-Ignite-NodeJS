import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const findUserById = this.usersRepository.findById(user_id);
    if (!findUserById) {
      throw new Error("User not found");
    }
    if (findUserById.admin === false) {
      throw new Error("User is not admin");
    }
    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };
