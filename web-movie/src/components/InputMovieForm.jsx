const InputMovieForm = () => {
    return (
      <div className="flex-1 p-8 min-h-screen w-full">
        <div>
          <h1 className="text-2xl font-bold mb-4 text-white">Input Movie</h1>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2 justify-self-center">
            <label htmlFor="upload-picture" className="block mb-2">Upload Poster</label>
            <input type="file" className="border rounded p-2 h-72 w-30 bg-gray-700" id="upload-picture" />
          </div>
  
          <div className="space-y-4 col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="movie_title" className="block mb-2">Title</label>
                <input type="text" id="movie_title" className="w-full p-2 bg-gray-700 rounded" placeholder="Movie Title" />
              </div>
              <div>
                <label htmlFor="alternative_title" className="block mb-2">Alternative Title</label>
                <input type="text" id="alternative_title" className="w-full p-2 bg-gray-700 rounded" placeholder="Alternative Title" />
              </div>
            </div>
  
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="year" className="block mb-2">Year</label>
                <input type="number" id="year" className="w-full p-2 bg-gray-700 rounded" placeholder="2024" />
              </div>
              <div>
                <label htmlFor="country" className="block mb-2">Country</label>
                <input type="text" id="country" className="w-full p-2 bg-gray-700 rounded" placeholder="Country" />
              </div>
            </div>
  
            <div>
              <label htmlFor="synopsis" className="block mb-2">Synopsis</label>
              <textarea id="synopsis" rows="4" className="w-full p-2 bg-gray-700 rounded" placeholder="Synopsis"></textarea>
            </div>
  
            <div>
              <label htmlFor="fansub" className="block mb-2">Fansub</label>
              <input type="text" id="fansub" className="w-full p-2 bg-gray-700 rounded" placeholder="Fansub: @aoisub on X" />
            </div>
  
            <div className="grid grid-cols-4 gap-2">
              <label className="block col-span-4">Genres</label>
              <div>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox bg-gray-700 text-yellow-500" />
                  <span className="ml-2">Adventure</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox bg-gray-700 text-yellow-500" />
                  <span className="ml-2">Romance</span>
                </label>
              </div>
              <div>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox bg-gray-700 text-yellow-500" />
                  <span className="ml-2">Drama</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox bg-gray-700 text-yellow-500" />
                  <span className="ml-2">Slice of Life</span>
                </label>
              </div>
            </div>
  
            <div>
              <label htmlFor="add_actor" className="block mb-2">Add Actor (Up to 9)</label>
              <input type="text" id="add_actor" className="w-full p-2 bg-gray-700 rounded" placeholder="Search Actor Name" />
              <div className="flex gap-4 mt-4 mb-4">
                {/* Example actor images */}
                <div className="text-center">
                  <img src="actor1.png" alt="Actor 1" className="w-24 h-36 mx-auto rounded bg-gray-700 object-cover" />
                  <p className="mt-2">Actor Name</p>
                </div>
                <div className="text-center">
                  <img src="actor2.png" alt="Actor 2" className="w-24 h-36 mx-auto rounded bg-gray-700 object-cover" />
                  <p className="mt-2">Actor Name</p>
                </div>
              </div>
            </div>
  
            <div>
              <label htmlFor="link_trailer" className="block mb-2">Link Trailer</label>
              <input type="text" id="link_trailer" className="w-full p-2 bg-gray-700 rounded" placeholder="Link Trailer" />
            </div>
  
            <div>
              <label htmlFor="award" className="block mb-2">Award</label>
              <input type="text" id="award" className="w-full p-2 bg-gray-700 rounded" placeholder="Award" />
            </div>
          </div>
        </div>
  
        <div className="mt-6 text-center">
          <button className="bg-green-500 text-white text-xl font-bold py-2 px-4 rounded">Submit</button>
        </div>
      </div>
    );
};

export default InputMovieForm;