import express, { Response, Request } from "express";
import { issues, Issue } from "../server";

export default function createRouter() {
  const router = express.Router();

  router
    .route("/")
    .get(async (req: Request, res: Response) => {
      console.log(issues);
      res.status(200).send(issues);
    })
    .post(async (req: Request, res: Response) => {
      const issue: Issue = req.body;
      issues.push(issue);
      console.log(issue);
      res.status(201).send(issue);
    });

  router
    .route("/:id")
    .get(async (req: Request, res: Response) => {
      const id = parseInt(req.params.id);

      const issueIndex = issues.findIndex((issue) => issue.id === id);
      if (issueIndex !== -1) {
        console.log(issues[issueIndex]);
        res.status(200).send(issues[issueIndex]);
      } else {
        console.error("Issue Not Found!");
        res.status(404).send({ message: "Issue Not Found!" });
      }
    })
    .delete(async (req: Request, res: Response) => {
      const id = parseInt(req.params.id);

      const issueIndex = issues.findIndex((issue) => issue.id === id);
      if (issueIndex !== -1) {
        issues.splice(issueIndex, 1);
        console.log(`Issue with id ${id} Was Deleted`);
        res.status(200).send({ message: `Issue with id ${id} Was Deleted` });
      } else {
        console.error("Issue Not Found!");
        res.status(404).send({ message: "Issue Not Found!" });
      }
    })
    .patch(async (req: Request, res: Response) => {
      const id = parseInt(req.params.id);
      const updatedData = req.body;

      const issueIndex = issues.findIndex((issue) => issue.id === id);
      if (issueIndex !== -1) {
        issues[issueIndex] = { ...issues[issueIndex], ...updatedData };
        console.log(issues[issueIndex]);
        res.status(200).send({ message: `Issue with id ${id} Was Updated` });
      } else {
        console.error("Issue Not Found!");

        res.status(404).send({ message: "Issue Not Found!" });
      }
    });

  return router;
}
