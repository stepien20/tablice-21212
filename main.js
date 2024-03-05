const but1=document.querySelector(`#but1`);
const objArr=[
    { imie: "Anna", miasto: "Warszawa", wiek: 28 },
    { imie: "Piotr", miasto: "Kraków", wiek: 35 },
    { imie: "Katarzyna", miasto: "Gdańsk", wiek: 40 },
    { imie: "Marcin", miasto: "Wrocław", wiek: 22 },
    { imie: "Magdalena", miasto: "Poznań", wiek: 31 },
    { imie: "Andrzej", miasto: "Katowice", wiek: 45 },
    { imie: "Ewa", miasto: "Szczecin", wiek: 33 },
    { imie: "Mariusz", miasto: "Łódź", wiek: 29 },
    { imie: "Karolina", miasto: "Białystok", wiek: 26 },
    { imie: "Tomasz", miasto: "Rzeszów", wiek: 38 },
    { imie: "Aleksandra", miasto: "Olsztyn", wiek: 27 },
    { imie: "Michał", miasto: "Bydgoszcz", wiek: 32 },
    { imie: "Izabela", miasto: "Lublin", wiek: 34 },
    { imie: "Łukasz", miasto: "Szczecin", wiek: 36 },
    { imie: "Natalia", miasto: "Gdynia", wiek: 23 },
    { imie: "Wojciech", miasto: "Katowice", wiek: 41 },
    { imie: "Monika", miasto: "Bielsko-Biała", wiek: 30 },
    { imie: "Paweł", miasto: "Częstochowa", wiek: 33 },
    { imie: "Alicja", miasto: "Gliwice", wiek: 28 },
    { imie: "Kamil", miasto: "Sosnowiec", wiek: 27 },
    { imie: "Jolanta", miasto: "Zabrze", wiek: 39 },
    { imie: "Grzegorz", miasto: "Dąbrowa Górnicza", wiek: 37 },
    { imie: "Anna", miasto: "Tychy", wiek: 25 },
    { imie: "Damian", miasto: "Ruda Śląska", wiek: 29 },
    { imie: "Elżbieta", miasto: "Chorzów", wiek: 36 },
    { imie: "Marek", miasto: "Gliwice", wiek: 43 },
    { imie: "Karolina", miasto: "Bytom", wiek: 31 }
];
 
but1.addEventListener(`click`,evt=>{
    evt.preventDefault()
    const name=document.querySelector(`#name`)
    const age=parseInt(document.querySelector(`#age`))
    const city=document.querySelector(`#city`)
    const obiekt={
        name: name,
        city: city,
        age: age
    }
    objArr.push(obiekt)
})
const but2=document.querySelector(`#but2`)
but2.addEventListener(`click`,evt=>{
    evt.preventDefault()
    const opcja=document.querySelector(`input[name="operacja"]:checked`).id
    switch (opcja){
        case "city":
        
        break;

    }
})