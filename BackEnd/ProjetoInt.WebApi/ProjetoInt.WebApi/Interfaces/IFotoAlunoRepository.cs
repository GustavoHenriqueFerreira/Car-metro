using Microsoft.AspNetCore.Http;
using ProjetoInt.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoInt.WebApi.Interfaces
{
    public interface IFotoAlunoRepository 
    {
        void Atualizar(int idFoto, FotoAluno fotoAluno);

        FotoAluno BuscarPorId(int idFotoAluno);

        void Cadastrar(IFormFile foto, int id);

        void Deletar(int idFotoAluno);

        List<FotoAluno> Listar();
    }
}
