export const getAllPokemon = (url) =>{
  return new Promise((resolve,reject) =>{
    fetch(url).then((res) =>res.json()).then((res) =>resolve(res));
  })
}
// とってきたデータをjsonにして返している
// 全てのデータを取得する
export const getPokemon = (url) =>{
  return new Promise((resolve,reject) =>{
fetch(url).then((url) =>url.json())
.then((data) =>{resolve(data)}
)})
}
