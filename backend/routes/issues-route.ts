import express, { Response, Request } from "express";

export default function createRouter() {
  const router = express.Router();

  router
    .route("/")
    .get(async (req: Request, res: Response) => {
      res.status(200);
    })
    .post(async (req: Request, res: Response) => {
      res.status(200);
    });

  router
    .route("/:id")
    .get(async (req: Request, res: Response) => {
      const { id } = req.params;
      res.status(200);
    })
    .delete(async (req: Request, res: Response) => {
      const { id } = req.params;
      res.status(200);
    })
    .patch(async (req: Request, res: Response) => {
      const { id } = req.params;
      res.status(200);
    });

  return router;
}
