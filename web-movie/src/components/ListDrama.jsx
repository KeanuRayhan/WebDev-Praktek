function ListDrama() {
    // Daftar drama contoh, bisa diganti dengan data dinamis
    const dramas = [
      {
        title: "Title of drama 1",
        year: "2024",
        genres: ["Genre 1", "Genre 2", "Genre 3"],
        actors: ["Aktor 1", "Aktor 2", "Aktor 3"],
        views: 16,
      },
      
    ];
  
    return (
      <div className="p-4 space-y-5">
        {dramas.map((drama, index) => (
          <div key={index} className="bg-gray-800 px-5 py-6 rounded-lg flex items-start">
            <div className="w-32 h-40 bg-gray-400 rounded-lg mr-10"></div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold">{drama.title}</h2>
                <div className="mt-1">{drama.year}</div>
                <div className="mt-1">{drama.genres.join(", ")}</div>
                <div className="mt-1">{drama.actors.join(", ")}</div>
              </div>
              <div className="text-sm text-right">view {drama.views}</div>
            </div>
          </div>
        ))}
      </div>
    );
}
export default ListDrama;