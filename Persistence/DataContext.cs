using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<Activity> Activities { get; set; }
        public DbSet<StafiAkademik> StafiA {get; set;}
        public DbSet<Lenda> Lendet {get; set;}
        public DbSet<Klasat> KlasatF { get; set; } 
        public DbSet<PlanifikimiShkollor> Planifikimet {get; set;}
        public DbSet<Nxenesi> Nxenesit {get;set;}
        public DbSet<Njesia> Njesite {get; set;}
        public DbSet<Ora> Oret{get; set;}
        public DbSet<Orari> Oraret{get;set;}
        public DbSet<Raporti> Raportet{get;set;}
         public DbSet<Mungesa> Mungesat{get;set;}
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

                 builder.Entity<PlanifikimiShkollor>()
                .HasKey(pk => new { pk.Id });

                builder.Entity<PlanifikimiShkollor>()
                .HasOne(p => p.Klasa)
                .WithMany(p => p.Planifikimet)
                .HasForeignKey(pp => pp.KlasaId);

                builder.Entity<PlanifikimiShkollor>()
                .HasOne(p => p.Lenda)
                .WithMany(p => p.Planifikimet)
                .HasForeignKey(pp => pp.LendaId);

                 builder.Entity<Raporti>()
                .HasKey(pk => new { pk.Id });

                 builder.Entity<Raporti>()
                .HasOne(p => p.Klasa)
                .WithMany(p => p.Raportet)
                .HasForeignKey(pp => pp.KlasaId);

                builder.Entity<Raporti>()
                .HasOne(p => p.Lenda)
                .WithMany(p => p.Raportet)
                .HasForeignKey(pp => pp.LendaId);

                builder.Entity<Raporti>()
                .HasOne(p => p.Nxenesi)
                .WithMany(p => p.Raportet)
                .HasForeignKey(pp => pp.NxenesiId);

           
                builder.Entity<Ora>()
                .HasKey(pk => new { pk.Id });

                 builder.Entity<Ora>()
                .HasOne(p => p.Lenda)
                .WithMany(p => p.Oret)
                .HasForeignKey(pp => pp.LendaId);

                 builder.Entity<Ora>()
                .HasOne(p => p.Njesia)
                .WithMany(p => p.Oret)
                .HasForeignKey(pp => pp.NjesiaId);

                builder.Entity<Orari>()
                .HasKey(pk => new { pk.Id });

                builder.Entity<Orari>()
                .HasOne(p => p.Klasa)
                .WithMany(p => p.Oraret)
                .HasForeignKey(pp => pp.KlasaId);

                builder.Entity<Orari>()
                .HasOne(p => p.Lenda)
                .WithMany(p => p.Oraret)
                .HasForeignKey(pp => pp.LendaId);

                builder.Entity<Mungesa>()
                .HasKey(pk => new { pk.Id });

                 builder.Entity<Mungesa>()
                .HasOne(p => p.Nxenesi)
                .WithMany(p => p.Mungesat)
                .HasForeignKey(pp => pp.NxenesiId);




    }
    
    }
}