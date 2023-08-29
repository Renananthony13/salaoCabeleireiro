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
