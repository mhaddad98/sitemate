import { Issue } from "../../../backend/server";

interface Props {
  issue: Issue;
}
function IssueCard({ issue }: Props) {
  return (
    <>
      <div>id {issue.id}</div>
      <div>title {issue.title}</div>
      <div>description {issue.description}</div>
    </>
  );
}

export default IssueCard;
