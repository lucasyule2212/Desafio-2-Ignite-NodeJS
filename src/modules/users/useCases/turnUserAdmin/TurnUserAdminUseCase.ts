import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const findUserById = this.usersRepository.findById(user_id);

    if (!findUserById) {
      throw new Error("User not found");
    }

    const user = this.usersRepository.turnAdmin(findUserById);

    return user;
  }
}

export { TurnUserAdminUseCase };
