import { GameDocumentInterface, Videogame } from "./models/Videogame.js";
import "./db/mongoose.js"

const brawl = new Videogame({
  title: "Brawl Stars",
  developer: "Supercell",
  publisher: "Supercell",
  genre: ["action", "rpg", "adventure"],
  platform: ["mobile", "pc"],
  releaseDate: new Date(2022, 5, 1),
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
// const getAllVideogames = (): Promise<GameDocumentInterface> => {
//   return new Promise((resolve, reject) => {
//     const videogames: Videogame[]

//   })
// }

// createVideogame(brawl)
// .then((game) => {
//   console.log(`guardado ${game}`)
// })
// .catch((err) => {
//   console.log(err)
// })

getById("69f1df2fc4af809c4cec9490")
.then((game) => {
  console.log(`${game}`)
})
.catch((err) => {
  console.log(err)
})