using ProjetoInt.WebApi.Contexts;
using ProjetoInt.WebApi.Domains;
using ProjetoInt.WebApi.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoInt.WebApi.Repositories
{
    public class UsuarioRepository
    {
        private readonly carometroContext ctx;

        public UsuarioRepository(carometroContext appContext)
        {
            ctx = appContext;
        }

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
    }
}
