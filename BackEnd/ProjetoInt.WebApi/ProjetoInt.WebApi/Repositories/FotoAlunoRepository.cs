using Microsoft.AspNetCore.Http;
using ProjetoInt.WebApi.Contexts;
using ProjetoInt.WebApi.Domains;
using ProjetoInt.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoInt.WebApi.Repositories
{
    public class FotoAlunoRepository : IFotoAlunoRepository
    {
        carometroContext ctx = new carometroContext();

        public void Atualizar(int idFoto, FotoAluno fotoAluno)
        {
            FotoAluno fotoBuscada = BuscarPorId(idFoto);

            //if (fotoAluno.IdAluno != null)
            //{
            //    fotoBuscada.IdAluno = fotoAluno.IdAluno;
            //}
            if (fotoAluno.NomeArquivo != null)
            {
                fotoBuscada.NomeArquivo = fotoAluno.NomeArquivo;
            }
            if (fotoAluno.MimeType != null)
            {
                fotoBuscada.MimeType = fotoAluno.MimeType;
            }
            if (fotoAluno.Binario != null)
            {
                fotoBuscada.Binario = fotoAluno.Binario;
            }

            ctx.FotoAlunos.Update(fotoAluno);

            ctx.SaveChanges();
        }

        public FotoAluno BuscarPorId(int idFotoAluno)
        {
            return ctx.FotoAlunos.FirstOrDefault(ab => ab.IdFotoAluno == idFotoAluno);
        }

        public void Cadastrar(IFormFile foto, int id)
        {

                FotoAluno novaFoto = new FotoAluno();

                using (var ms = new MemoryStream())
                {
                    foto.CopyTo(ms);
                    novaFoto.NomeArquivo = foto.FileName;
                    novaFoto.MimeType = foto.FileName.Split('.').Last();
                    novaFoto.Binario = ms.ToArray();
                    novaFoto.IdAluno = id;
                }

                FotoAluno fotoexistente = new FotoAluno();
                fotoexistente = ctx.FotoAlunos.FirstOrDefault(i => i.IdAluno == id);

                if (fotoexistente != null)
                {
                    fotoexistente.Binario = novaFoto.Binario;
                    fotoexistente.NomeArquivo = novaFoto.NomeArquivo;
                    fotoexistente.MimeType = novaFoto.MimeType;
                    fotoexistente.IdAluno = id;

                    //atualiza a imagem de perfil do usuario.
                    ctx.FotoAlunos.Update(fotoexistente);
                }
                else
                {
                    ctx.FotoAlunos.Add(novaFoto);
                }
                ctx.SaveChanges();
           
        }

        public void Deletar(int idFotoAluno)
        {
            FotoAluno fotoAluno = BuscarPorId(idFotoAluno);

            ctx.FotoAlunos.Remove(fotoAluno);

            ctx.SaveChanges();
        }

        public List<FotoAluno> Listar()
        {
            return ctx.FotoAlunos.ToList();
        }
    }
}
