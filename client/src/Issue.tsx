import { useParams } from "react-router-dom";
import "./App.css";
import IssueCard from "./components/IssueCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Issue as IssueType } from "../../backend/server";

async function fetchData(id: number): Promise<IssueType> {
  const response = await axios.get(`http://localhost:3001/issues/${id}`);

  return response.data;
}

function Issue() {
  const { id } = useParams();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["issues"],
    queryFn: () => fetchData(parseInt(id)),
  });

  if (isLoading) return <>Loading</>;

  if (isError) return <>Error {error}</>;

  return (
    <>
      <div>All Issues</div>
      <IssueCard issue={data} />
    </>
  );
}

export default Issue;
