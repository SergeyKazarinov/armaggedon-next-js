class Api {
  #options
  #ApodUrl //Astronomy Picture of the Day
  #NeowsUrl //Near Earth Object Web Service
  #headers
  #apiKey
  constructor(options) {
    this.#options = options;
    this.#ApodUrl = this.#options.ApodUrl;
    this.#NeowsUrl = this.#options.NeowsUrl;
    this.#headers = this.#options.headers;
    this.#apiKey = this.#options.apiKey;
  }
  
  #checkAnswer(res) {
    if(res.ok) {
      return res.json();
    }else {
      return Promise.reject(`Ошибка ${res.status}: ${res.statusText}`);
    }
  }

  getApodImage() {
    return fetch(`${this.#ApodUrl}?api_key=${this.#apiKey}`, {
      headers: this.#headers
    })
    .then((res) => {
      return this.#checkAnswer(res);
    })
  }

  getInitialAsteroids(date) {
    return fetch(`${this.#NeowsUrl}?start_date=${date.toISOString().split('T')[0]}&end_date=${date.toISOString().split('T')[0]}&api_key=${this.#apiKey}`, {
      headers: this.#headers
    })
      .then((res) => {
        return this.#checkAnswer(res);
      })
  }
}

const api = new Api ({
  ApodUrl: 'https://api.nasa.gov/planetary/apod',
  NeowsUrl: 'http://www.neowsapp.com/rest/v1/feed',
  headers: {
    'Content-Type': 'application/json'
  }, 
  apiKey: 'r6G8CKnPzzOQbhFRHSaaa9WKHSJb3m6NF9wnJn4t'
});

export default api;