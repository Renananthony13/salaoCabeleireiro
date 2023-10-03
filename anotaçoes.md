

# ir em back/src/config/bd.js e alterar a conexao
const conection = mysql.createPool({
    host: "...",
    user: "...",
    password: "...",
    database: "..."
})


# comandos utilizados no mysql
-- criando tabela usuarios

CREATE TABLE usuarios(
    idusuario integer primary key AUTO_INCREMENT,
    nome VARCHAR(41) NOT NULL,
    email VARCHAR(254) NOT NULL,
    telefone VARCHAR(14) NOT NULL,
    senha VARCHAR(254) NOT NULL
)


-- criando tabela agendamento


CREATE TABLE agendamentos(
    idagendamento integer primary key AUTO_INCREMENT,
    idusuario integer NOT NULL,
    foreign key(idusuario) references usuarios(idusuario),
    descricao VARCHAR(254) NOT NULL,
    status_agend VARCHAR(21),
    data_agend DATE NOT NULL,
    hora_agend TIME NOT NULL,
    servicos json,
    preco VARCHAR(21) NOT NULL
)

-- inserindo dados na tabela usuarios
INSERT INTO usuarios(nome, email, telefone, senha)
VALUES('juninho', 'junior@gmail.com', '149987342', '12345') 


-- inserindo dados na tabela agendamentos
INSERT INTO agendamentos(idusuario, descricao, status_agend, data_agend, hora_agend)
VALUES (1, 'Corte de cabelo', 'agendado', '27-08-23', '19:58')





# dependencias 
// back-end
npm install express 
npm install bcrypt
npm install cors
npm install mysql2
npm install nodemon

//font end
npm install react-router-dom
npm install axios

# mas e so rodar um npm install que vai instalar as dependencias


# rotas utilizadas api
// novo agendamento
post
http://localhost:8080/agendar/id
ex:
{
    "descricao": "lavar cabelo",
    "status": "agendado",
    "data": "2023-08-29",
    "hora": "21:39",
    "preco": "21.50"
}

//login
post
http://localhost:8080/login
ex: 
{
    "email": "juao@gmail.com",
    "senha": "123"
}

//cadastrar usuario
post
http://localhost:8080/cadastrar
ex:
{
   "nome": "marcos rocha",
    "email": "marcosrocha@gmail.com",
    "telefone": "99716352",
    "senha": "marco123"
}

// alterar agendamento
put
http://localhost:8080/alteraragendamento/id
ex:
{
    "descricao": "rapa tudo",
    "status_agend": "nada"
}

// historico de agendamentos 
get
http://localhost:8080/historico/id


// alterar status
put
http://localhost:8080/alterarstatus/id
ex:
{
    "status": "aprovado"
}





# teste usuario 
rodrigo1@gmail.com
123456789
