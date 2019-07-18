import axios from 'axios';

const KEY = 'AIzaSyC239n0MKLTEOuZJh7KL7h-VYmWx9dcvbE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
