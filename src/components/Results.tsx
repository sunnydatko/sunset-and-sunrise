// components
import Table from "components/core/Table";

// types
import { Result } from "types/LatitudeAndLongitude";

interface Props {
  results: Result[];
}

const Results = ({ results }: Props) => {
  const COLUMNS = ["Latitude", "Longitude", "Sunrise", "Sunset"];

  if (!results.length) {
    return null;
  }

  return (
    <div
      style={{
        marginTop: "8px",
      }}
    >
      {results && <Table columns={COLUMNS} rows={results}></Table>}
    </div>
  );
};

export default Results;
