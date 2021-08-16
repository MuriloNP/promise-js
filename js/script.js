// Create Promises
function myPromises(myName) {
  return new Promise((resolve, reject) => {
    if (myName === "Murilo") {
      resolve(`Usuário encontrado: ${myName}`);
    } else {
      reject(`Usuário não  encontrado: ${myName}`);
    }
  });
}

myPromises("Murilo").then((data) => {
  console.log(data);
});

// Encadeamento e then's
function myPromisesTwo(myName) {
  return new Promise((resolve, reject) => {
    if (myName === "Murilo") {
      resolve(`Usuário encontrado: ${myName}`);
    } else {
      reject(`Usuário não  encontrado: ${myName}`);
    }
  });
}

myPromisesTwo("Murilo")
  .then((data) => {
    return data.toLowerCase();
  })
  .then((returnModifile) => {
    console.log(returnModifile);
  });

// Promise com retorno do catch
function myPromisesThree(myName) {
  return new Promise((resolve, reject) => {
    if (myName === "Murilo") {
      resolve(`Usuário encontrado: ${myName}`);
    } else {
      reject(`Usuário <${myName}> não encontrado!`);
    }
  });
}

myPromisesThree("Teste")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(`Erro: ${error}`);
  });

// Resolve multiplas promise com All
// Meu objeto com varias promises
const myPromisesAll = {
  p1: function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Uma Callback sendo sincrona
        resolve("P1 ok!");
      }, 2000);
    });
  },
  p2: function () {
    return new Promise((resolve, reject) => {
      resolve("P2 ok!");
    });
  },
  p3: function () {
    return new Promise((resolve, reject) => {
      resolve("P3 ok!");
    });
  },
};

const resolveAll = Promise.all([
  myPromisesAll.p1(),
  myPromisesAll.p2(),
  myPromisesAll.p3(),
]).then((data) => {
  console.log(data);
});

// Resolve multiplas promise com All
const myPromisesAllRace = {
  p4: function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Uma Callback sendo sincrona
        resolve("P4 ok!");
      }, 2000);
    });
  },
  p5: function () {
    return new Promise((resolve, reject) => {
      resolve("P5 ok!");
    });
  },
  p6: function () {
    return new Promise((resolve, reject) => {
      resolve("P6 ok!");
    });
  },
};

const resolveAllRace = Promise.race([
  myPromisesAllRace.p4(),
  myPromisesAllRace.p5(),
  myPromisesAllRace.p6(),
]).then((data) => {
  console.log(data);
});

// Fetch request na API do GitHub
// Fetch API
const userName = "MuriloNP";
const myBodyHtml = document.querySelector("body");
//fetch retorna uma promise
fetch(`https://api.github.com/users/${userName}`, {
  method: "GET",
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
})
  .then((response) => {
    console.log(typeof response);
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const arrayInfos = [
      data.name,
      data.location,
      data.bio,
      data.followers,
      data.following,
      data.public_repos,
      data.url,
    ];
    const myUl = document.createElement("ul");
    myBodyHtml.appendChild(myUl);

    for (let index = 0; index < arrayInfos.length; index++) {
      const myLi = document.createElement("li");
      myUl.appendChild(myLi);

      const myText = document.createTextNode(arrayInfos[index]);
      myLi.appendChild(myText);
    }
  })
  .catch((error) => {
    console.log(`Erro: ${error}`);
  });
