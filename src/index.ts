import { GameDocumentInterface, Videogame } from "./models/Videogame.js";
import "./db/mongoose.js"

const nfs = new Videogame({
  title: "nfs",
  developer: "ea",
  publisher: "ea",
  genre: ["action", "adventure"],
  platform: ["ps5", "pc"],
  releaseDate: new Date(2021, 5, 1),
  price: 70,
  score: 90,
  multiplayer: true,
  dlcs: ["",]
})

const brawl = new Videogame({
  title: "brawl stars",
  developer: "supercel",
  publisher: "supercel",
  genre: ["action"],
  platform: ["mobile"],
  releaseDate: new Date(2019, 5, 1),
  price: 0,
  score: 70,
  multiplayer: true,
  dlcs: ["",]
})



const createVideogame = (myGame: GameDocumentInterface): Promise<GameDocumentInterface> => {
  return new Promise((resolve, reject) => {
    const myVideogame = new Videogame(myGame)
    myVideogame.save()
      .then((game) => {
        console.log("Juego guardado con éxito:");
        resolve(game)
      })
      .catch((error) => {
        console.error("No se pudo guardar el juego:", error.message);
        reject(error)
      });

  })
}

const getById = (id: string): Promise<GameDocumentInterface> => {
  return new Promise((resolve, reject) => {
    
    Videogame.findById(id).then((game) => {
      const myGame = new Videogame(game)
      console.log(game)
      resolve(myGame)
    }).catch((error) => {
        console.error("No se pudo obtener el juego", error.message);
        reject(error)
      });
  })
}

const deleteById = (id: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    Videogame.findByIdAndDelete(id).then(() => {
      resolve()
    }).catch((error) => {
        console.error("No se pudo borrar el juego", error.message);
        reject(error)
      });
  })
}

createVideogame(nfs)
.then((game) => {
  console.log(`guardado ${game}`)
})
.catch((err) => {
  console.log(err)
})
createVideogame(brawl)
.then((game) => {
  console.log(`guardado ${game}`)
})
.catch((err) => {
  console.log(err)
})

getById("69f1e598f40d1d060fcdd4b8")
.then((game) => {
  console.log(`${game}`)
})
.catch((err) => {
  console.log(err)
})

getById("69f1e598f40d1d060fcdd4b9")
.then((game) => {
  console.log(`${game}`)
})
.catch((err) => {
  console.log(err)
})

// deleteById("69f1e598f40d1d060fcdd4b9")
// .then(() => {
//   console.log(`borrado juego`)
// })
// .catch((err) => {
//   console.log(err)
// })