

const display = document.getElementById('display')
const name = document.getElementById('txt1')
const surname = document.getElementById('txt2')
const age = document.getElementById('txt3')
const email = document.getElementById('txt4')
const job = document.getElementById('txt5')
const displayForm = document.getElementById('sign')
const next = document.getElementById('next')
const prev = document.getElementById('prev')


displayForm.addEventListener('click', async (e)=>{
    display.style.transition = '1.3s ease-out';
    display.style.opacity = '1'
})

next.onclick = async (e)=>{
    e.preventDefault()
    let res = await fetch('https://raw.githubusercontent.com/MzamomtshaPrimary/website/master/test.json')
     .then(res => res.json())
     .then(data => {
         if(name.value !== '' || surname.value !== '' || age.value!== '' || email.value !== '' || job.value !== '' ){
            name.value= data[0].name
            surname.value= data[0].surname
            age.value=data[0].age
            email.value=data[0].email
            job.value =data[0].jobDescription
         }
        
        

     }
     
     )
}
