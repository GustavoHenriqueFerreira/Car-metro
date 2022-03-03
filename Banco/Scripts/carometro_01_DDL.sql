CREATE DATABASE CAROMETRO;
GO

USE CAROMETRO;
GO

CREATE TABLE tipoUsuario(
   idTipoUsuario int PRIMARY KEY IDENTITY(1,1),
   nomeTipoUsuario varchar(100) unique not null,
);
go

CREATE TABLE usuario(
   idUsuario int PRIMARY KEY IDENTITY(1,1),
   idTipoUsuario int FOREIGN KEY REFERENCES tipoUsuario(idTipoUsuario),
   email varchar(100) unique not null,
   senha varchar(255) unique not null,
   nome varchar (200) not null,
);
go

CREATE TABLE grade(
   idGrade int PRIMARY KEY IDENTITY(1,1),
   nomeGrade varchar(100) unique not null,
);
go

CREATE TABLE turma(
   idTurma int PRIMARY KEY IDENTITY(1,1),
   idGrade int FOREIGN KEY REFERENCES grade(idGrade),
   nomeTurma varchar(150) unique not null,
   turnoTurma varchar (50) not null,
);
go

CREATE TABLE aluno(
   idAluno int PRIMARY KEY IDENTITY(1,1),
   idTurma int FOREIGN KEY REFERENCES turma(idTurma),
   nomeAluno varchar(200) unique not null,
   rgAluno varchar (20) unique not null,
   telefoneAluno varchar (50) unique not null,
   dataMatricula date not null,
   comorbidade varchar (100) not null,
   comentario varchar (4000),
   aprovado bit,
);
go

CREATE TABLE fotoAluno (
    idFotoAluno INT PRIMARY KEY IDENTITY(1,1),
    idAluno INT NOT NULL UNIQUE FOREIGN KEY REFERENCES aluno(idAluno),
    binario VARBINARY(MAX) NOT NULL,
    mimeType VARCHAR(30) NOT NULL,
    nomeArquivo VARCHAR(250) NOT NULL,
    data_inclusao DATETIME DEFAULT GETDATE() NOT NULL
);
GO