import { Request, Response, NextFunction } from "express";
declare type ControllerType = {
    [k: string]: (req: Request, res: Response, next: NextFunction) => any;
};
declare function Controller(paths?: ControllerType): any;
export { Controller };
