const btn = document.querySelector('.btn');
const joke = document.querySelector('.joke');

// then()
function httpRequests() {
  return fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json',
    },
  }).then(response => {
    return response.json().then(responseData => {
      joke.querySelector('p').textContent = responseData.joke;
    });
  });
}

httpRequests();

btn.addEventListener('click', httpRequests);

// async/await
// async function jokeGen() {
//   const config = {
//     headers: {
//       'Accept': 'application/json',
//     },
//   };

//   const myJoke = await fetch('https://icanhazdadjoke.com/', config);
//   const package = await myJoke.json();

//   joke.querySelector('p').textContent = package.joke;
// }

// jokeGen();

// btn.addEventListener('click', jokeGen);
