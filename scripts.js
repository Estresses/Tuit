function cadastrar() {
    let nome = document.getElementById("nome").value;
    let usuario = document.getElementById("usuario").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
  
    console.log("Nome: " + nome);
    console.log("Usuário: " + usuario);
    console.log("E-mail: " + email);
    console.log("Senha: " + senha);
    alert("Olá, " +nome+"! Você foi cadastrado com sucesso, Aproveite o Tuit!")
    window.location.href = "feed.html";
  }
  

function login() {
  let usuario2 = document.getElementById("usuario2").value
  let senha2 = document.getElementById("senha2").value

  if (!isNaN(usuario2) || usuario2.length < 4 || !isNaN(senha2) || senha2.length < 6) {
    alert("Usuário ou senha inválidos!");}
    else{
    window.location.href = "feed.html";
    }
  
}
