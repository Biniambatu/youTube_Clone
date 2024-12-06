
import { useParams } from 'react-router-dom';

const SearchPage = () => {
  const { query } = useParams();

  return (
    <div>
      <h1>Search Results for: {query}</h1>
    </div>
  );
};

export default SearchPage;
