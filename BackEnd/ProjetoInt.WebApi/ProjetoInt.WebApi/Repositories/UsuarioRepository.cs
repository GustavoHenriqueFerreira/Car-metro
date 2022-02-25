using ProjetoInt.WebApi.Contexts;
using ProjetoInt.WebApi.Domains;
using ProjetoInt.WebApi.Interfaces;
using ProjetoInt.WebApi.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoInt.WebApi.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        carometroContext ctx = new carometroContext();

        public Usuario Login(string email, string senha)
        {
            var usuario = ctx.Usuarios.FirstOrDefault(u => u.Email == email);
            var usuario2 = ctx.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);


            if (usuario2 != null)
            {
                if (usuario2.Senha.Length != 60)
                {
                    usuario2.Senha = Criptografia.GerarHash(senha);

                    ctx.Usuarios.Update(usuario2);

                    ctx.SaveChanges();

                    return usuario2;
                }
            }

            if (usuario != null)
            {
                bool comparado = Criptografia.Comparar(senha, usuario.Senha);
                if (comparado)
                {
                    return usuario;
                }
            }
            return null;
        }

        public void Atualizar(int idUsuario, Usuario UsuarioAtualizado)
        {
            Usuario usuarioBusc = BuscarPorId(idUsuario);

            if (UsuarioAtualizado.Nome != null)
            {
                usuarioBusc.Nome = UsuarioAtualizado.Nome;
            }
            if (UsuarioAtualizado.Senha != null)
            {
                usuarioBusc.Senha = UsuarioAtualizado.Senha;
            }
            if (UsuarioAtualizado.Email != null)
            {
                usuarioBusc.Email = UsuarioAtualizado.Email;
            }

            ctx.Usuarios.Update(usuarioBusc);

            ctx.SaveChanges();
        }

        public Usuario BuscarPorId(int idUsuario)
        {
            return ctx.Usuarios.FirstOrDefault(ab => ab.IdUsuario == idUsuario);
        }

        public void Cadastrar(Usuario novoUsuario)
        {
            ctx.Usuarios.Add(novoUsuario);

            ctx.SaveChanges();
        }

        public void Deletar(int idUsuario)
        {
            Usuario userBuscado = BuscarPorId(idUsuario);

            ctx.Usuarios.Remove(userBuscado);

            ctx.SaveChanges();
        }

        public List<Usuario> Listar()
        {
            return ctx.Usuarios.ToList();
        }
    }
}
