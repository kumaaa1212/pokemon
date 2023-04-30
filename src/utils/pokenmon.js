export const getAllPokemon = (url) =>{
  return new Promise((resolve,reject) =>{
    fetch(url).then((res) =>res.json()).then((res) =>resolve(res));
  })
}
export const getPokemon = (url) =>{
  return new Promise((resolve,reject) =>{
fetch(url).then((url) =>url.json())
.then((data) =>{resolve(data)}
)})
}
