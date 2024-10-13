import http from "../http-common";

class MovieDataService {
    getAll() {
        return http.get("/movies");
    };

    findByQuery(query) {
        return http.get(`/movies?query=${query}`);
    };

    get(id) {
        return http.get(`/movies/${id}`);
    };
}

export default new MovieDataService();