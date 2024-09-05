import axios from "axios";
import "./App.css";
import IssueCard from "./components/IssueCard";
import { useQuery } from "@tanstack/react-query";
import { Issue } from "../../backend/server";

async function fetchData(): Promise<Issue[]> {
  const response = await axios.get(`http://localhost:3001/issues/`);

  return response.data;
}

function Issues() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["issues"],
    queryFn: () => fetchData(),
  });
  if (isLoading) return <>Loading</>;

  if (isError) return <>Error {error}</>;

  return (
    <>
      <div>All Issues</div>
      {data?.map((issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </>
  );
}

export default Issues;
