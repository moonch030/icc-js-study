const getMovies = movieName => {
    return new Promise((resolve, reject) => {
        fetch(`http://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
            .then(res => res.json())
            .then(res => {
                if (res.Response === 'False') {
                    reject(res.Error);
                }
                resolve(res);
            })
    });
};

getMovies("avengers")
  .then(movies => {
    console.log("영화 목록:", movies);
  })
  .catch(error => {
    console.log("에러 발생:", error);
  });
