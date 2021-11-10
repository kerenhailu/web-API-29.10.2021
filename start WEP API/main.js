// async function webAPI() {
//     try{
//       return await fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//     }
//     catch(err){
//         return err
//     }
// }
// webAPI().then(json => console.log(json)).catch(rej=>console.log(rej))
// ===========================================================
// async function allThePost() {
//   try {
//     return await fetch(`https://jsonplaceholder.typicode.com/posts`)
//       .then((res) => res.json())
//       .then((res) => console.log(res));
//   } catch (error) {
//     console.log(error);
//   }
// }
// allThePost();
// ===========================================================
// async function allthecomment() {
//   try {
//     return await fetch(`https://jsonplaceholder.typicode.com/comments`)
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//       });
//   } catch (err) {
//     console.log(err);
//   }
// }
// allthecomment();
// ===========================================================
// async function fiftyPost() {
//   try {
//     return await fetch(`https://jsonplaceholder.typicode.com/posts/5`)
//       .then((res) => res.json())
//       .then((res) => console.log(res));
//   } catch (err) {
//     console.log(err);
//   }
// }
// fiftyPost();
// ===========================================================
// async function nineCommint() {
//   try {
//     return await fetch(`https://jsonplaceholder.typicode.com/comments/9`)
//       .then((res) => res.json())
//       .then((res) => console.log(res));
//   } catch (err) {
//     console.log(err);
//   }
// }
// nineCommint();
// ===========================================================
// async function allTheAlbum() {
//   try {
//     return await fetch(`https://jsonplaceholder.typicode.com/albums`)
//       .then((res) => res.json())
//       .then((res) => console.log(res));
//   } catch (err) {
//     console.log(err);
//   }
// }
// allTheAlbum();

// ===========================================================
function printDitels(object) {
  for (const key in object) {
    div.innerHTML += `<h3>${key} :</h3> ${object[key]}<br>`;
  }
}
// ===========================================================
// async function therdAlbum() {
//   try {
//     return await fetch(`https://jsonplaceholder.typicode.com/albums/2`)
//       .then((res) => res.json())
//       .then((res) => printDitels(res));
//   } catch (err) {
//     console.log(err);
//   }
// }
// therdAlbum();
// ===========================================================
function printDitelsToObject(object) {
  for (const item of object) {
    for (const key in item) {
      div.innerHTML += `<h2>${key} :</h2>  ${item[key]} <br>`;
    }
  }
}

// async function allTheUsers() {
//   try {
//     return await fetch(`https://jsonplaceholder.typicode.com/users`)
//       .then((res) => res.json())
//       .then((res) => printDitelsToObject(res));
//   } catch (err) {
//     console.log(err);
//   }
// }
// allTheUsers();
// ===========================================================
//!function
// function getDataFromApi(api,userId) {
//   return new Promise(async(resolve, reject) => {
//      fetch(`${api}/${userId}`)
//     .then((res) => res.json())
//     .then(res=>res.id?resolve(res):reject({massage:"not found"}))
//   });
// }

// async function testPromise() {
//   try {
//     return await getDataFromApi("https://jsonplaceholder.typicode.com/users",22)
//   } catch (err) {
//     console.log(err);
//   }
// }
// testPromise()

// ===========================================================
// const userObj = {
//   id: 11,
//   name: "keren",
//   userName: "keren44",
//   email: "keren9@esh.com",
//   phone: "05154",
// };
// const options = {
//   method: `POST`,
//   body: JSON.stringify(userObj),
// };
// async function saveDate() {
//   try {
//     return await fetch(
//       `https://jsonplaceholder.typicode.com/users`,
//       options
//     ).then((res) => res.json());
//   } catch (err) {
//     return err;
//   }
// }
// saveDate().then((res) => console.log(res));

// ===========================================================10
// const user={
//   name:"lili",
//   year:2009,
//   age:25
// }

// const option={
//   method:`POST`,
//   body:JSON.stringify(user)
// }
// async function reqestTodos(){
//   try{
//     return await fetch(`https://jsonplaceholder.typicode.com/todos`,option)
//     .then(res=>res.json())
//     .then(res=>console.log(res))
//   }
//   catch(err){
//     console.log(err);
//   }
// }
// reqestTodos()
// ===========================================================11
// 11.	צרו פונקציה אסיכרונית ששולחת בקשת POST ל API של posts.
// const user1={
//   name:"kerennnnn",
//   lname:"hailuuuuu",
//   age:22
// }
// const options1={
//   method:`POST`,
//   body:JSON.stringify(user1)
// }
// async function reqestPosts(){
//   try{
//     return await fetch(`https://jsonplaceholder.typicode.com/posts`)
//   }
//   catch(err){
//     console.log(err);
//   }
// }
// reqestPosts()

// ===========================================================12
// 12.	צרו פונקציה אסיכרונית ששולחת בקשת POST עם אובייקט ל API של albums.

// const user2={
//   name:"shiraz",
//   lname:"lakau",
//   age:23
// }
// const option2={
//   method:`POST`,
//   body:JSON.stringify(user2)
// }
// async function returnOpt2(){
//   try{
//     return await fetch(`https://jsonplaceholder.typicode.com/albums`,option2)
//     .then(res=>res.json())
//     .then(res=>console.log(res))
//   }
//   catch(err){
//     console.log(err);
//   }
// }
// returnOpt2()
// יי
// ===========================================================13
// 13.	צרו פונקציה אסיכרונית ששולחת בקשת POST עם אובייקט ל API של users.
// const user3={
//   name:"yoni",
//   lname:"levi",
//   age:30
// }
// const option3={
//   method:`POST`,
//   body:JSON.stringify(user3)
// }
// async function returnUser4() {
//   try{
//     return await fetch(`https://jsonplaceholder.typicode.com/users`,option3)
//     .then(res=>res.json())
//     .then(res=>console.log(res))
//   }
//   catch(error){
//     console.log(error);
//   }
// }
// returnUser4()

// ===========================================================14
// צרו פונקציה אסיכרונית גנרית ששולחת בקשת POST עם אובייקט ל API.
// const user4={
//   name:"eyal",
//   lname:"hailu",
//   age:21
// }
// const option4={
//   method:`POST`,
//   body:JSON.stringify(user4)
// }
// async function returnUser4(api){
//   try{
//     return await fetch(`${api}`,option4)
//     .then(res=>res.json())
//     .then(res=>console.log(res))
//   }
//   catch(error){
//     console.log(error);
//   }
// }
// returnUser4(`https://jsonplaceholder.typicode.com/users`)
// ===========================================================15
// צרו טופס שמקבל מהמשתמש נתונים לאובייקט לבחירתכן/ם ושלחו אותו לשרת.
// ===========================================================16
// הוסיפו אפשרות למשתמש להחליט לאן לשלוח את האובייקט.
//!15+16
//!buttan
const objectFromUser={
  name:Name.value,
  lname:lname.value,
  age:age.value
}
btn.onclick=()=>{
}
const optionUser={
  method:`POST`,
  body:JSON.stringify(objectFromUser) 
}
async function inputReturn(addressAPI){
  try{
    return await fetch(`https://jsonplaceholder.typicode.com/${addressAPI}`,optionUser)
    .then(res=>res.json())
    .then(res=>console.log(res))
  }
  catch(err){
    console.log(err);
  }
}

btn.onclick=()=>{
inputReturn(API.value)}
// ===========================================================
//!תשובה לשאלה במבחן
//!פונקציה אסינכרונית עם fetch
// function apiPromise(api) {
//   return new Promise((resolve,reject)=>{
//     fetch(api).then(res=>res.json())
//   .then(res=>{
//     res(.data).length>0?resolve(res):reject({massage:"error"})
//   })
//   })
// }
// async function getDataFromApi(api) {
//   try{
//     return await apiPromise(api)

//   }
//   catch(err){
//     return err
//   }
// }
// getDataFromApi(`api`) 


