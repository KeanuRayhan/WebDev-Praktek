import { Link } from "react-router-dom";

const DramaTable = () => {
    const dramaData = [
      {
        id: 1,
        title: '[2024] Japan - Eye Love You',
        actors: 'Takuya Kimura, Takeuchi Yuko, Neinen Reina',
        genres: 'Romance, Adventures, Comedy',
        synopsis: 'I love this drama. It taught me a lot about money and finance...',
        status: 'Unapproved',
      },
      {
        id: 2,
        title: '[2024] Japan - Eye Love You',
        actors: 'Takuya Kimura, Takeuchi Yuko, Neinen Reina',
        genres: 'Romance, Adventures, Comedy',
        synopsis: 'I love this drama. It taught me a lot about money and finance...',
        status: 'Unapproved',
      }
      // Add more data if necessary
    ];
  
    return (
      <table className="min-w-full bg-gray-800 shadow-md rounded">
        <thead className="bg-slate-800">
          <tr>
            <th className="py-2 px-4 text-left"></th>
            <th className="py-2 px-4 text-left w-2/12">Drama</th>
            <th className="py-2 px-4 text-left w-2/12">Actors</th>
            <th className="py-2 px-4 text-left w-2/12">Genres</th>
            <th className="py-2 px-4 text-left w-3/12">Synopsis</th>
            <th className="py-2 px-4 text-left w-2/12">Status</th>
            <th className="py-2 px-4 text-left w-1/12">Action</th>
          </tr>
        </thead>
        <tbody>
          {dramaData.map((drama) => (
            <tr className="border-t" key={drama.id}>
              <td className="p-4">{drama.id}</td>
              <td className="p-4">
                <p>{drama.title}</p>
              </td>
              <td className="p-4">
                <span>{drama.actors}</span>
              </td>
              <td className="p-4">
                <p>{drama.genres}</p>
              </td>
              <td className="p-4">
                <p>{drama.synopsis}</p>
              </td>
              <td className="p-4">
                <p>{drama.status}</p>
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