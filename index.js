let personagem = {
    nickname: "Zelda",
    experiencia: 0,
    nivel: "nenhum"
};

if(personagem.experiencia <= 1000){
    personagem.nivel = "Ferro";
}else if(personagem.experiencia <= 2000){
    personagem.nivel = "Bronze";
}else if(personagem.experiencia <= 5000){
    personagem.nivel = "Prata";
}else if(personagem.experiencia <= 7000){
    personagem.nivel = "Ouro";
}else if(personagem.experiencia <= 8000){
    personagem.nivel = "Platina";
}else if(personagem.experiencia <= 9000){
    personagem.nivel = "Ascendente";
}else if(personagem.experiencia <= 10000){
    personagem.nivel = "Imortal";
}else if(personagem.experiencia >= 10001){
    personagem.nivel = "Radiante";
}

console.log("O herói de nome " + personagem.nickname + " " + "está no nível de " + personagem.nivel);