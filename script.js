let arrayMembriTeam = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg",
    },
]

stampaArrayConsole(arrayMembriTeam);

stampaArrayDom(arrayMembriTeam);




function stampaArrayConsole(array){
    for (let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}

function stampaArrayDom (array){
    for (let i = 0; i < array.length; i++){
        document.getElementById("membri-team").innerHTML += "<p>" + array[i].nome + "<br>" + array[i].ruolo + "<br>" + array[i].foto + "</p>";
    }
}