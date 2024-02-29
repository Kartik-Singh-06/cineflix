import axios from "axios";
  
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2ZlMzlhOWIxOTA2NzI5OWZlZDBhZmU5MTZiOWFmZCIsInN1YiI6IjY1YzgzYTVmY2U2YzRjMDE3Y2I5ZmJiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BmKE8Nj9nsRoLfLh63KxwYHVx6rCC7R1CViW3m4Z0rc',
      }
})

export default instance; 