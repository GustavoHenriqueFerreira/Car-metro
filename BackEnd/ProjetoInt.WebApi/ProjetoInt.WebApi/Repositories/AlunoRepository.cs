using ProjetoInt.WebApi.Contexts;
using ProjetoInt.WebApi.Domains;
using ProjetoInt.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoInt.WebApi.Repositories
{
    public class AlunoRepository : IAlunoRepository
    {
        carometroContext ctx = new carometroContext();

        public void Atualizar(int idAluno, Aluno AlunoAtualizado)
        {
            Aluno AlunoBusc = BuscarPorId(idAluno);

            if (AlunoAtualizado.Aprovado != null)
            {
                AlunoBusc.NomeAluno = AlunoAtualizado.NomeAluno;
            }
            if (AlunoAtualizado.RgAluno != null)
            {
                AlunoBusc.RgAluno = AlunoAtualizado.RgAluno;
            }
            if (AlunoAtualizado.TelefoneAluno != null)
            {
                AlunoBusc.TelefoneAluno = AlunoAtualizado.TelefoneAluno;
            }
            if (AlunoAtualizado.Comentario != null)
            {
                AlunoBusc.Comentario = AlunoAtualizado.Comentario;
            }
            if (AlunoAtualizado.Comorbidade != null)
            {
                AlunoBusc.Comorbidade = AlunoAtualizado.Comorbidade;
            }
            if (AlunoAtualizado.IdTurma != null)
            {
                AlunoBusc.IdTurma = AlunoAtualizado.IdTurma;
            }

            ctx.Alunos.Update(AlunoBusc);

            ctx.SaveChanges();
        }

        public Aluno BuscarPorId(int idAluno)
        {
            return ctx.Alunos.FirstOrDefault(ab => ab.IdAluno == idAluno);
        }

        public Aluno BuscarPorTurma(int idTurma)
        {
            return ctx.Alunos.FirstOrDefault(ab => ab.IdTurma == idTurma); ;
        }

        public void Cadastrar(Aluno novoAluno)
        {
            ctx.Alunos.Add(novoAluno);

            ctx.SaveChanges();
        }

        public void Deletar(int idAluno)
        {
            Aluno userBuscado = BuscarPorId(idAluno);

            ctx.Alunos.Remove(userBuscado);

            ctx.SaveChanges();
        }

        public List<Aluno> Listar()
        {
            return ctx.Alunos.ToList();
        }
    }
}
