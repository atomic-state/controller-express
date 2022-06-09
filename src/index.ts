import { Request, Response, NextFunction, Router } from "express"

type ControllerType = {
  [k: string]: (req: Request, res: Response, next: NextFunction) => any
}

function Controller(paths: ControllerType = {}) {
  const router = Router()

  for (let route in paths) {
    let [method, url] = route.split(" ")

    router.route(url)[method.toLowerCase()](paths[route])
  }

  return router
}

export { Controller }
