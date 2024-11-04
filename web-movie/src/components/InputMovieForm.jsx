import React, { useState, useEffect } from 'react';
import axios from 'axios';
import http from "../http-common";
import MovieDataService from '../services/movie.service';

const InputMovieForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    year: '',
    country: '',
    synopsis: '',
    platforms: [],
    genres: [],
    actors: [],
    link_trailer: '',
    award: '',
    url_photo: null
  });

  const [options, setOptions] = useState({
    actors: [],
    genres: [],
    platforms: [],
    countries: [],
    awards: []
  });

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [actorsRes, genresRes, platformRes, countriesRes, awardsRes] = await Promise.all([
          http.get('/actors'),
          http.get('/genres'),
          http.get('/platforms'),
          http.get('/countries'),
          http.get('/awards')
        ]);

        setOptions({
          actors: actorsRes.data,
          genres: genresRes.data,
          platforms: platformRes.data,
          countries: countriesRes.data,
          awards: awardsRes.data
        });
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };

    fetchOptions();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, url_photo: e.target.files[0] });
  }

  const handleGenreChange = (genre) => {
    setFormData((prevData) => {
      const genres = prevData.genres.includes(genre)
        ? prevData.genres.filter(g => g !== genre)
        : [...prevData.genres, genre];
      return { ...prevData, genres };
    });
  };

  const handlePlatformChange = (platform) => {
    setFormData((prevData) => {
      const platforms = prevData.platforms.includes(platform)
        ? prevData.platforms.filter(p => p !== platform)
        : [...prevData.platforms, platform];
      return { ...prevData, platforms };
    });
  };

  const handleActorChange = (actor) => {
    setFormData((prevData) => {
      const actors = prevData.actors.includes(actor)
        ? prevData.actors.filter(a => a !== actor)
        : [...prevData.actors, actor];
      return { ...prevData, actors: actors.slice(0, 9) };
    });
  };

  const handleCheckboxChange = (item, field) => {
    setFormData((prevData) => {
      const selectedItems = prevData[field].includes(item)
        ? prevData[field].filter(i => i !== item)
        : [...prevData[field], item];
      return { ...prevData, [field]: selectedItems };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const movieData = new FormData();
    // for (const key in formData) {
    //   if (Array.isArray(formData[key])) {
    //     movieData.append(key, formData[key].join(','));
    //   } else {
    //     movieData.append(key, formData[key]);
    //   }
    // }

    Object.keys(formData).forEach((key) => {
      if (Array.isArray(formData[key])) {
        movieData.append(key, formData[key].join(','));
      } else {
        movieData.append(key, formData[key]);
      }
    });

    // movieData.append('title', formData.title);
    // movieData.append('alternative_title', formData.alternative_title);
    // movieData.append('year', formData.year);
    // movieData.append('country', formData.country);
    // movieData.append('synopsis', formData.synopsis);
    // movieData.append('platforms', formData.platforms.join(','));
    // movieData.append('link_trailer', formData.link_trailer);
    // movieData.append('award', formData.award);
    // movieData.append('url_photo', formData.url_photo);
    // movieData.append('genres', formData.genres.join(','));
    // movieData.append('actors', formData.actors.join(','));

    try {
      MovieDataService.createMovie(movieData)
        .then((response) => {
          alert(response.data.message);
          setFormData({
            title: '',
            year: '',
            country: '',
            synopsis: '',
            platforms: [],
            genres: [],
            actors: [],
            link_trailer: '',
            award: '',
            url_photo: null
          });
        })
        .catch(error => {
          console.error("Error creating movies:", error);
        })
    } catch (error) {
        console.error('Error uploading movie:', error.response ? error.response.data : error.message);
        alert('Error uploading movie');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 p-8 min-h-screen w-full">
      <div>
        <h1 className="text-2xl font-bold mb-4 text-white">Input Movie</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2 justify-self-center">
          <label htmlFor="upload-picture" className="block mb-2">Upload Poster</label>
          <input type="file" className="border rounded p-2 h-72 w-30 bg-gray-700" id="upload-picture" onChange={handleFileChange} />
        </div>

        <div className="space-y-4 col-span-2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="title" className="block mb-2">Title</label>
              <input type="text" id="title" className="w-full p-2 bg-gray-700 rounded" placeholder="Movie Title" value={formData.title} onChange={handleChange} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="year" className="block mb-2">Year</label>
              <input type="number" id="year" className="w-full p-2 bg-gray-700 rounded" placeholder="2024" value={formData.year} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="country" className="block mb-2">Country</label>
              <select id="country" className="w-full p-2 bg-gray-700 rounded" value={formData.country_id} onChange={handleChange}>
                <option value="">Select Country</option>
                {options?.countries?.map((country) => (
                  <option key={country.country_id} value={country.country_id}>{country.country_name}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="synopsis" className="block mb-2">Synopsis</label>
            <textarea id="synopsis" rows="4" className="w-full p-2 bg-gray-700 rounded" placeholder="Synopsis" value={formData.synopsis} onChange={handleChange}></textarea>
          </div>
        </div>
      </div>

      <div className="space-y-4 mt-8">
        <div>
          <label htmlFor="availability" className="block mb-2">Availability</label>
          <div className="grid grid-cols-2 gap-2">
            {options?.platforms?.map(platform => (
              <label key={platform.platform_id} value={platform.platform_id} className="flex items-center">
                <input 
                  type="checkbox" 
                  className="form-checkbox bg-gray-700 text-yellow-500" 
                  onChange={() => handleCheckboxChange(platform.platform, 'platforms')} 
                  checked={formData.platforms.includes(platform.platform)}
                />
                <span className="ml-2">{platform.platform}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <label className="block col-span-4">Genres</label>
          <div className="grid grid-cols-2 gap-2">
            {options?.genres?.map((genre) => (
              <label key={genre.genre_id} value={genre.genre_id} className="flex items-center">
                <input 
                  type="checkbox" 
                  className="form-checkbox bg-gray-700 text-yellow-500" 
                  onChange={() => handleCheckboxChange(genre.genre, 'genres')}
                  checked={formData.genres.includes(genre.genre)}
                />
                <span className="ml-2">{genre.genre}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="add_actor" className="block mb-2">Add Actor (Up to 9)</label>
          <input type="text" id="add_actor" className="w-full p-2 bg-gray-700 rounded" placeholder="Search Actor Name" />
          <div className="flex gap-4 mt-4 mb-4">
            {options.actors.map(actor => (
              <div key={actor.actor_id} className="text-center">
                <img 
                  src={`http://localhost:8080/uploads/actors/${actor.url_photo}`}
                  alt={actor.actor_name}
                  className="w-24 h-36 mx-auto rounded bg-gray-700 object-cover" 
                  onClick={() => handleActorChange(actor.actor_name)}
                />
                <p className="mt-2">{actor.actor_name}</p>
                {formData.actors.includes(actor.actor_name) && <span className="text-green-500">✓</span>}
              </div>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="link_trailer" className="block mb-2">Link Trailer</label>
          <input type="text" id="link_trailer" className="w-full p-2 bg-gray-700 rounded" placeholder="Link Trailer" onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="award" className="block mb-2">Award</label>
          <select id="award" className="w-full p-2 bg-gray-700 rounded" onChange={handleChange}>
            <option value="">Select Award</option>
            {options.awards.map(award => (
              <option key={award.award_id} value={award.award_id}>{award.award_name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button className="bg-green-500 text-white text-xl font-bold py-2 px-4 rounded">Submit</button>
      </div>
    </form>
  );
};

export default InputMovieForm;