import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import "express-async-errors";

dotenv.config();

// Routes Imports
import issuesRouter from "./routes/issues-route";

// Types
export interface Issue {
  id: number;
  title: string;
  description: string;
}

// Data
export const issues: Issue[] = [
  { id: 1, title: "Issue 1", description: "description1" },
  { id: 2, title: "Issue 2", description: "description2" },
];

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.use("/issues", issuesRouter());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
