//Array dos participantes
let participantes = [
    {
    nome: "Lawan Santos",
    email: "lawan@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 3, 25, 20, 1)
    },
    {
        nome: "Ana Carolina",
        email: "anac@gmail.com",
        dataInscricao: new Date(2024, 1, 10, 16, 20),
        dataCheckIn: new Date(2024, 3, 13, 9, 10)
    },
    {
        nome: "João Silva",
        email: "joaosilva@gmail.com",
        dataInscricao: new Date(2024, 0, 5, 10, 30),
        dataCheckIn: new Date(2024, 3, 20, 15, 45)
    },
    {
        nome: "Maria Oliveira",
        email: "maria.o@gmail.com",
        dataInscricao: new Date(2024, 2, 15, 14, 0),
        dataCheckIn: new Date(2024, 3, 18, 11, 20)
    },
    {
        nome: "Pedro Henrique",
        email: "pedrohenrique@gmail.com",
        dataInscricao: new Date(2024, 1, 28, 9, 45),
        dataCheckIn: new Date(2024, 3, 22, 8, 55)
    },
    {
        nome: "Camila Costa",
        email: "camilacosta@gmail.com",
        dataInscricao: new Date(2024, 3, 1, 18, 15),
        dataCheckIn: new Date(2024, 3, 24, 13, 30)
    },
    {
        nome: "Lucas Oliveira",
        email: "lucasoliveira@gmail.com",
        dataInscricao: new Date(2024, 0, 20, 11, 10),
        dataCheckIn: new Date(2024, 3, 15, 19, 5)
    },
    {
        nome: "Amanda Souza",
        email: "amandasouza@gmail.com",
        dataInscricao: new Date(2024, 2, 5, 13, 25),
        dataCheckIn: new Date(2024, 3, 19, 16, 40)
    },
    {
        nome: "Carlos Santos",
        email: "carlossantos@gmail.com",
        dataInscricao: new Date(2024, 1, 15, 8, 0),
        dataCheckIn: new Date(2024, 3, 23, 10, 15)
    },
    {
        nome: "Juliana Lima",
        email: "julianalima@gmail.com",
        dataInscricao: new Date(2024, 2, 10, 17, 50),
        dataCheckIn: new Date(2024, 3, 21, 14, 20)
    }
]

const novoParticipante = function(participante) {
    const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao);
    const dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn);

    return `
    <tr>
        <td>
            <strong>
                ${participante.nome}
            </strong>
            <br>
            <small>
                ${participante.email}
            </small>
        </td>
        <td>
            ${dataInscricao}
        </td>
        <td>
            ${dataCheckIn}
        </td>
    </tr>
    `
}

const atualizarLista = function(participantes) {
    let output = ""
    //loop
    for(let participante of participantes) {
        output = output + novoParticipante(participante)
    }
    
    //substituir informações do HTML
    document.querySelector('tbody').innerHTML = output;
}

atualizarLista(participantes);