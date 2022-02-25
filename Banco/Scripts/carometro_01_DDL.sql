CREATE DATABASE CAROMETRO;
GO

USE CAROMETRO;
GO

CREATE TABLE tipoUsuario(
   idTipoUsuario smallint PRIMARY KEY IDENTITY(1,1),
   nomeTipoUsuario varchar(100) unique not null,
);
go

CREATE TABLE usuario(
   idUsuario smallint PRIMARY KEY IDENTITY(1,1),
   idTipoUsuario smallint FOREIGN KEY REFERENCES tipoUsuario(idTipoUsuario),
   email varchar(100) unique not null,
   senha varchar(50) unique not null,
   nome varchar (200) not null,
);
go

CREATE TABLE grade(
   idGrade smallint PRIMARY KEY IDENTITY(1,1),
   nomeGrade varchar(100) unique not null,
);
go

CREATE TABLE turma(
   idTurma smallint PRIMARY KEY IDENTITY(1,1),
   idGrade smallint FOREIGN KEY REFERENCES grade(idGrade),
   nomeTurma varchar(150) unique not null,
   turnoTurma varchar (50) not null,
);
go

CREATE TABLE aluno(
   idAluno smallint PRIMARY KEY IDENTITY(1,1),
   idTurma smallint FOREIGN KEY REFERENCES turma(idTurma),
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
    idAluno SMALLINT NOT NULL UNIQUE FOREIGN KEY REFERENCES aluno(idAluno),
    binario VARBINARY(MAX) NOT NULL,
    mimeType VARCHAR(30) NOT NULL,
    nomeArquivo VARCHAR(250) NOT NULL,
    data_inclusao DATETIME DEFAULT GETDATE() NULL
);
GO
