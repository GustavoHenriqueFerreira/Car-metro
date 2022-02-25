using ProjetoInt.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoInt.WebApi.Interfaces
{
    public interface IUsuarioRepository
    {
        public Usuario Login(string email, string senha);

        public void Atualizar(int idUsuario, Usuario UsuarioAtualizado);

        public Usuario BuscarPorId(int idUsuario);

        public void Cadastrar(Usuario novoUsuario);

        public void Deletar(int idUsuario);

        public List<Usuario> Listar();
    }
}
