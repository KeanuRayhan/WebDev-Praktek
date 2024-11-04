import { Link } from "react-router-dom";

const DramaTable = ({ movies }) => {
    return (
      <table className="min-w-full bg-gray-800 shadow-md rounded">
        <thead className="bg-slate-800">
          <tr>
            <th className="py-2 px-4 text-left">No</th>
            <th className="py-2 px-4 text-left w-2/12">Movie</th>
            <th className="py-2 px-4 text-left w-2/12">Actors</th>
            <th className="py-2 px-4 text-left w-2/12">Genres</th>
            <th className="py-2 px-4 text-left w-3/12">Synopsis</th>
            <th className="py-2 px-4 text-left w-2/12">Status</th>
            <th className="py-2 px-4 text-left w-1/12">Action</th>
          </tr>
        </thead>
        <tbody>
          {movies && movies.map((movie, index) => (
            <tr className="border-t">
              <td className="p-4">{index + 1}</td>
              <td className="p-4">
                <p>{movie.title}</p>
              </td>
              <td className="p-4">
                <span>{movie.Actors.map(actor => actor.actor_name).join(', ')}</span>
              </td>
              <td className="p-4">
                <p>{movie.Genres.map(genre => genre.genre).join(', ')}</p>
              </td>
              <td className="p-4">
                <p>{movie.synopsis}</p>
              </td>
              <td className="p-4">
                <p>{movie.status}</p>
              </td>
              <td className="p-4">
                <Link to="/validate-movie" className="text-blue-500 hover:underline mr-4">Edit</Link>
                <a href="#" className="text-red-500 hover:underline">Delete</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
};

export default DramaTable;