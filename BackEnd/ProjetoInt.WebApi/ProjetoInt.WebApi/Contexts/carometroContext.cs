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
        public virtual DbSet<Grade> Grades { get; set; }
        public virtual DbSet<TipoUsuario> TipoUsuarios { get; set; }
        public virtual DbSet<Turma> Turmas { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=NOTE0113D2\\SQLEXPRESS; initial catalog=CAROMETRO; user Id=sa; pwd=Senai@132;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Aluno>(entity =>
            {
                entity.HasKey(e => e.IdAluno)
                    .HasName("PK__aluno__0C5BC8493BF09698");

                entity.ToTable("aluno");

                entity.HasIndex(e => e.NomeAluno, "UQ__aluno__08B0CAE3427DF774")
                    .IsUnique();

                entity.HasIndex(e => e.TelefoneAluno, "UQ__aluno__10F18979C60B5348")
                    .IsUnique();

                entity.HasIndex(e => e.RgAluno, "UQ__aluno__2EA5F545BAE7F456")
                    .IsUnique();

                entity.HasIndex(e => e.FotoAluno, "UQ__aluno__6F1F7C13250A5F96")
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

                entity.Property(e => e.FotoAluno)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("fotoAluno");

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
                    .HasConstraintName("FK__aluno__idTurma__36B12243");
            });

            modelBuilder.Entity<Grade>(entity =>
            {
                entity.HasKey(e => e.IdGrade)
                    .HasName("PK__grade__7AD7DF116C99C34C");

                entity.ToTable("grade");

                entity.HasIndex(e => e.NomeGrade, "UQ__grade__8AD68ADDC63B8593")
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
                    .HasName("PK__tipoUsua__03006BFF545BA782");

                entity.ToTable("tipoUsuario");

                entity.HasIndex(e => e.NomeTipoUsuario, "UQ__tipoUsua__A017BD9F195A9B0D")
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
                    .HasName("PK__turma__AA068310C4081971");

                entity.ToTable("turma");

                entity.HasIndex(e => e.NomeTurma, "UQ__turma__3798BCA69868DAB1")
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
                    .HasName("PK__usuario__645723A682A4E37B");

                entity.ToTable("usuario");

                entity.HasIndex(e => e.Email, "UQ__usuario__AB6E6164B39D3C06")
                    .IsUnique();

                entity.HasIndex(e => e.Senha, "UQ__usuario__D8D98E823BF11260")
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
