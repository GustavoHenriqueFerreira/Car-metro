using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using ProjetoInt.WebApi.Domains;

#nullable disable

namespace ProjetoInt.WebApi.Contexts
{
    public partial class carometroContext : DbContext
    {
        public carometroContext()
        {
        }

        public carometroContext(DbContextOptions<carometroContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Aluno> Alunos { get; set; }
        public virtual DbSet<FotoAluno> FotoAlunos { get; set; }
        public virtual DbSet<Grade> Grades { get; set; }
        public virtual DbSet<TipoUsuario> TipoUsuarios { get; set; }
        public virtual DbSet<Turma> Turmas { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-E81EO80\\SQLEXPRESS; initial catalog=CAROMETRO;Trusted_Connection = True;");
                //optionsBuilder.UseSqlServer("Data Source=NOTE0113C5\\SQLEXPRESS; initial catalog=CAROMETRO; user Id=sa; pwd=Senai@132;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Aluno>(entity =>
            {
                entity.HasKey(e => e.IdAluno)
                    .HasName("PK__aluno__0C5BC849A57EE162");

                entity.ToTable("aluno");

                entity.HasIndex(e => e.NomeAluno, "UQ__aluno__08B0CAE3F9EE0A85")
                    .IsUnique();

                entity.HasIndex(e => e.TelefoneAluno, "UQ__aluno__10F18979E1B8BFC3")
                    .IsUnique();

                entity.HasIndex(e => e.RgAluno, "UQ__aluno__2EA5F545D739EF06")
                    .IsUnique();

                entity.Property(e => e.IdAluno).HasColumnName("idAluno");

                entity.Property(e => e.Aprovado).HasColumnName("aprovado");

                entity.Property(e => e.Comentario)
                    .HasMaxLength(4000)
                    .IsUnicode(false)
                    .HasColumnName("comentario");

                entity.Property(e => e.Comorbidade)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("comorbidade");

                entity.Property(e => e.DataMatricula)
                    .HasColumnType("date")
                    .HasColumnName("dataMatricula");

                entity.Property(e => e.IdTurma).HasColumnName("idTurma");

                entity.Property(e => e.NomeAluno)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("nomeAluno");

                entity.Property(e => e.RgAluno)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("rgAluno");

                entity.Property(e => e.TelefoneAluno)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("telefoneAluno");

                entity.HasOne(d => d.IdTurmaNavigation)
                    .WithMany(p => p.Alunos)
                    .HasForeignKey(d => d.IdTurma)
                    .HasConstraintName("FK__aluno__idTurma__35BCFE0A");
            });

            modelBuilder.Entity<FotoAluno>(entity =>
            {
                entity.HasKey(e => e.IdFotoAluno)
                    .HasName("PK__fotoAlun__C70C681DF323E3BD");

                entity.ToTable("fotoAluno");

                entity.HasIndex(e => e.IdAluno, "UQ__fotoAlun__0C5BC8487CA72D9A")
                    .IsUnique();

                entity.Property(e => e.IdFotoAluno).HasColumnName("idFotoAluno");

                entity.Property(e => e.Binario)
                    .IsRequired()
                    .HasColumnName("binario");

                entity.Property(e => e.DataInclusao)
                    .HasColumnType("datetime")
                    .HasColumnName("data_inclusao")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.IdAluno).HasColumnName("idAluno");

                entity.Property(e => e.MimeType)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("mimeType");

                entity.Property(e => e.NomeArquivo)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("nomeArquivo");

                entity.HasOne(d => d.IdAlunoNavigation)
                    .WithOne(p => p.FotoAluno)
                    .HasForeignKey<FotoAluno>(d => d.IdAluno)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__fotoAluno__idAlu__398D8EEE");
            });

            modelBuilder.Entity<Grade>(entity =>
            {
                entity.HasKey(e => e.IdGrade)
                    .HasName("PK__grade__7AD7DF11C9722BCB");

                entity.ToTable("grade");

                entity.HasIndex(e => e.NomeGrade, "UQ__grade__8AD68ADD1DDB1274")
                    .IsUnique();

                entity.Property(e => e.IdGrade).HasColumnName("idGrade");

                entity.Property(e => e.NomeGrade)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("nomeGrade");
            });

            modelBuilder.Entity<TipoUsuario>(entity =>
            {
                entity.HasKey(e => e.IdTipoUsuario)
                    .HasName("PK__tipoUsua__03006BFFCC0520BB");

                entity.ToTable("tipoUsuario");

                entity.HasIndex(e => e.NomeTipoUsuario, "UQ__tipoUsua__A017BD9F0D29B53E")
                    .IsUnique();

                entity.Property(e => e.IdTipoUsuario).HasColumnName("idTipoUsuario");

                entity.Property(e => e.NomeTipoUsuario)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("nomeTipoUsuario");
            });

            modelBuilder.Entity<Turma>(entity =>
            {
                entity.HasKey(e => e.IdTurma)
                    .HasName("PK__turma__AA0683109A239BC8");

                entity.ToTable("turma");

                entity.HasIndex(e => e.NomeTurma, "UQ__turma__3798BCA6A1A1391F")
                    .IsUnique();

                entity.Property(e => e.IdTurma).HasColumnName("idTurma");

                entity.Property(e => e.IdGrade).HasColumnName("idGrade");

                entity.Property(e => e.NomeTurma)
                    .IsRequired()
                    .HasMaxLength(150)
                    .IsUnicode(false)
                    .HasColumnName("nomeTurma");

                entity.Property(e => e.TurnoTurma)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("turnoTurma");

                entity.HasOne(d => d.IdGradeNavigation)
                    .WithMany(p => p.Turmas)
                    .HasForeignKey(d => d.IdGrade)
                    .HasConstraintName("FK__turma__idGrade__300424B4");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__usuario__645723A6BEDCCF20");

                entity.ToTable("usuario");

                entity.HasIndex(e => e.Email, "UQ__usuario__AB6E6164365CEC4A")
                    .IsUnique();

                entity.HasIndex(e => e.Senha, "UQ__usuario__D8D98E82D2126442")
                    .IsUnique();

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.IdTipoUsuario).HasColumnName("idTipoUsuario");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("nome");

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("senha");

                entity.HasOne(d => d.IdTipoUsuarioNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdTipoUsuario)
                    .HasConstraintName("FK__usuario__idTipoU__29572725");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
