import http from "../http-common";

class MovieDataService {
    getAll() {
        return http.get("/movies");
    }

    findByTitle(title) {
        return http.get(`/movies?title=${title}`);
    }
}

export default new MovieDataService();