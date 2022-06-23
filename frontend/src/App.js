import { useState } from "react";
import useFetchJobs from "./fetchs/useFetchJobs";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap/";
import { Job } from "./components";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs();

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try refreshing.</h1>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
    </Container>
  );
}

export default App;
