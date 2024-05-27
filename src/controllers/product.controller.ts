import { NextFunction, Request, Response } from 'express';


export class ProductController {

    public getProducts = async (req: Request, res: Response, next: NextFunction) => {
        try {
          const findAllUsersData: User[] = await this.user.findAllUser();
    
          res.status(200).json({ data: findAllUsersData, message: 'findAll' });
        } catch (error) {
          next(error);
        }
      };
}
