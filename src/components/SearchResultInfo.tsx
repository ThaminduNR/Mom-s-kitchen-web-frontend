import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
};

const SearchResultInfo = ({ total, city }: Props) => {
  return (
    <div className="text-xl font-bold flex flex-col lg:items-center lg:flex-row justify-between">
      <span>
        {total} restaurants found in {city}
        <Link
          to="/"
          className="text-blue-500 font-semibold cursor-pointer underline ml-2"
        >
          Change Location
        </Link>
      </span>
      Insert sort dropdown here
    </div>
  );
};

export default SearchResultInfo;
