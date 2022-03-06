using ProjetoInt.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoInt.WebApi.Interfaces
{
    public interface IAlunoRepository
    {
        void Atualizar(int id, Aluno Aluno);

        Aluno BuscarPorId(int idAluno);

        //Aluno BuscarPorTurma(int idTurma);

        void Cadastrar(Aluno novoAluno);

        void Deletar(int idAluno);

        List<Aluno> Listar();
    }
}
