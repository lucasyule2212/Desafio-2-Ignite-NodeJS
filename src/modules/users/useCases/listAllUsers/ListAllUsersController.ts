import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui

    try {
      const { user_id } = request.headers;
      const id: string = user_id as string;

      const users = this.listAllUsersUseCase.execute({ user_id: id });
      return response.status(200).json(users);
    } catch (error) {
      console.log(error.message);
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
