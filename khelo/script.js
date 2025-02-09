const username = document.querySelector("#username")
const email = document.querySelector("#email")
const pass = document.querySelector("#password")
const btn  = document.querySelector('button')
const personDetails = {
    username: '',
    usermail: '',
    password: '',
    "id": 0
}
username.addEventListener('input', (e) => {
    personDetails.username = e.target.value
})
email.addEventListener('input', (e) => {
    personDetails.usermail = e.target.value
})
pass.addEventListener('input', (e) => {
    personDetails.password = e.target.value
})
btn.addEventListener('click',()=>[
    // fs.appendFileSync('person.json',personDetails)
    ])
module.exports={personDetails}