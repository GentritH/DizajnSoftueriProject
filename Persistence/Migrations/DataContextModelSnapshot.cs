﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Persistence;

namespace Persistence.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.1");

            modelBuilder.Entity("Domain.Activity", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Category")
                        .HasColumnType("TEXT");

                    b.Property<string>("City")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("Date")
                        .HasColumnType("TEXT");

                    b.Property<string>("Description")
                        .HasColumnType("TEXT");

                    b.Property<string>("Title")
                        .HasColumnType("TEXT");

                    b.Property<string>("Venue")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Activities");
                });

            modelBuilder.Entity("Domain.AppUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Bio")
                        .HasColumnType("TEXT");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("TEXT");

                    b.Property<string>("DisplayName")
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("INTEGER");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("TEXT");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("TEXT");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("TEXT");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("INTEGER");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("TEXT");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("INTEGER");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("Domain.Klasat", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("EmriKlases")
                        .HasColumnType("TEXT");

                    b.Property<string>("Test")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("KlasatF");
                });

            modelBuilder.Entity("Domain.Lenda", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("EmriLendes")
                        .HasColumnType("TEXT");

                    b.Property<string>("Pershkrimi")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Lendet");
                });

            modelBuilder.Entity("Domain.Mungesa", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Arsye")
                        .HasColumnType("TEXT");

                    b.Property<string>("NxenesiId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Paarsye")
                        .HasColumnType("TEXT");

                    b.Property<string>("Periudha")
                        .HasColumnType("TEXT");

                    b.Property<string>("Shenim")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("NxenesiId");

                    b.ToTable("Mungesat");
                });

            modelBuilder.Entity("Domain.Njesia", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("EmriNjesise")
                        .HasColumnType("TEXT");

                    b.Property<string>("Pershkrimi")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Njesite");
                });

            modelBuilder.Entity("Domain.Nxenesi", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("INTEGER");

                    b.Property<string>("ConcurrencyStamp")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DataLindjes")
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Emri")
                        .HasColumnType("TEXT");

                    b.Property<string>("EmriPrindit")
                        .HasColumnType("TEXT");

                    b.Property<string>("Klasa")
                        .HasColumnType("TEXT");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("INTEGER");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("TEXT");

                    b.Property<string>("Mbiemri")
                        .HasColumnType("TEXT");

                    b.Property<string>("NormalizedEmail")
                        .HasColumnType("TEXT");

                    b.Property<string>("NormalizedUserName")
                        .HasColumnType("TEXT");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("TEXT");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("TEXT");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("INTEGER");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("TEXT");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("INTEGER");

                    b.Property<string>("UserName")
                        .HasColumnType("TEXT");

                    b.Property<int>("VitiRegjistrimit")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Nxenesit");
                });

            modelBuilder.Entity("Domain.Ora", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<Guid>("LendaId")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("NjesiaId")
                        .HasColumnType("TEXT");

                    b.Property<string>("fusha")
                        .HasColumnType("TEXT");

                    b.Property<string>("koment")
                        .HasColumnType("TEXT");

                    b.Property<string>("oramesimore")
                        .HasColumnType("TEXT");

                    b.Property<string>("plani")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("LendaId");

                    b.HasIndex("NjesiaId");

                    b.ToTable("Oret");
                });

            modelBuilder.Entity("Domain.Orari", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Enjte1")
                        .HasColumnType("TEXT");

                    b.Property<string>("Enjte2")
                        .HasColumnType("TEXT");

                    b.Property<string>("Enjte3")
                        .HasColumnType("TEXT");

                    b.Property<string>("Enjte4")
                        .HasColumnType("TEXT");

                    b.Property<string>("Enjte5")
                        .HasColumnType("TEXT");

                    b.Property<string>("Enjte6")
                        .HasColumnType("TEXT");

                    b.Property<string>("Hene1")
                        .HasColumnType("TEXT");

                    b.Property<string>("Hene2")
                        .HasColumnType("TEXT");

                    b.Property<string>("Hene3")
                        .HasColumnType("TEXT");

                    b.Property<string>("Hene4")
                        .HasColumnType("TEXT");

                    b.Property<string>("Hene5")
                        .HasColumnType("TEXT");

                    b.Property<string>("Hene6")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("KlasaId")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("LendaId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Marte1")
                        .HasColumnType("TEXT");

                    b.Property<string>("Marte2")
                        .HasColumnType("TEXT");

                    b.Property<string>("Marte3")
                        .HasColumnType("TEXT");

                    b.Property<string>("Marte4")
                        .HasColumnType("TEXT");

                    b.Property<string>("Marte5")
                        .HasColumnType("TEXT");

                    b.Property<string>("Marte6")
                        .HasColumnType("TEXT");

                    b.Property<string>("Merkure1")
                        .HasColumnType("TEXT");

                    b.Property<string>("Merkure2")
                        .HasColumnType("TEXT");

                    b.Property<string>("Merkure3")
                        .HasColumnType("TEXT");

                    b.Property<string>("Merkure4")
                        .HasColumnType("TEXT");

                    b.Property<string>("Merkure5")
                        .HasColumnType("TEXT");

                    b.Property<string>("Merkure6")
                        .HasColumnType("TEXT");

                    b.Property<string>("Premte1")
                        .HasColumnType("TEXT");

                    b.Property<string>("Premte2")
                        .HasColumnType("TEXT");

                    b.Property<string>("Premte3")
                        .HasColumnType("TEXT");

                    b.Property<string>("Premte4")
                        .HasColumnType("TEXT");

                    b.Property<string>("Premte5")
                        .HasColumnType("TEXT");

                    b.Property<string>("Premte6")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("KlasaId");

                    b.HasIndex("LendaId");

                    b.ToTable("Oraret");
                });

            modelBuilder.Entity("Domain.PlanifikimiShkollor", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DataeRegjistrimit")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("KlasaId")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("LendaId")
                        .HasColumnType("TEXT");

                    b.Property<string>("LlojiPlanifikimit")
                        .HasColumnType("TEXT");

                    b.Property<string>("Mesimdhenes")
                        .HasColumnType("TEXT");

                    b.Property<string>("VitiShkollor")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("KlasaId");

                    b.HasIndex("LendaId");

                    b.ToTable("Planifikimet");
                });

            modelBuilder.Entity("Domain.Raporti", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Aktivititeti")
                        .HasColumnType("TEXT");

                    b.Property<string>("Angazhimi")
                        .HasColumnType("TEXT");

                    b.Property<string>("Detyrat")
                        .HasColumnType("TEXT");

                    b.Property<string>("Java")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("KlasaId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Komenti")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("LendaId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Muaji")
                        .HasColumnType("TEXT");

                    b.Property<string>("NxenesiId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Performanca")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("KlasaId");

                    b.HasIndex("LendaId");

                    b.HasIndex("NxenesiId");

                    b.ToTable("Raportet");
                });

            modelBuilder.Entity("Domain.StafiAkademik", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("INTEGER");

                    b.Property<string>("ConcurrencyStamp")
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Emri")
                        .HasColumnType("TEXT");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("INTEGER");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("TEXT");

                    b.Property<string>("Mbiemri")
                        .HasColumnType("TEXT");

                    b.Property<string>("NormalizedEmail")
                        .HasColumnType("TEXT");

                    b.Property<string>("NormalizedUserName")
                        .HasColumnType("TEXT");

                    b.Property<string>("Numrikontaktues")
                        .HasColumnType("TEXT");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("TEXT");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("TEXT");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Roli")
                        .HasColumnType("TEXT");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("TEXT");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("INTEGER");

                    b.Property<string>("UserName")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("StafiA");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("ClaimType")
                        .HasColumnType("TEXT");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("TEXT");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("ClaimType")
                        .HasColumnType("TEXT");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("TEXT");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("TEXT");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<string>("RoleId")
                        .HasColumnType("TEXT");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<string>("Value")
                        .HasColumnType("TEXT");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("Domain.Mungesa", b =>
                {
                    b.HasOne("Domain.Nxenesi", "Nxenesi")
                        .WithMany("Mungesat")
                        .HasForeignKey("NxenesiId");

                    b.Navigation("Nxenesi");
                });

            modelBuilder.Entity("Domain.Ora", b =>
                {
                    b.HasOne("Domain.Lenda", "Lenda")
                        .WithMany("Oret")
                        .HasForeignKey("LendaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Njesia", "Njesia")
                        .WithMany("Oret")
                        .HasForeignKey("NjesiaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Lenda");

                    b.Navigation("Njesia");
                });

            modelBuilder.Entity("Domain.Orari", b =>
                {
                    b.HasOne("Domain.Klasat", "Klasa")
                        .WithMany("Oraret")
                        .HasForeignKey("KlasaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Lenda", "Lenda")
                        .WithMany("Oraret")
                        .HasForeignKey("LendaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Klasa");

                    b.Navigation("Lenda");
                });

            modelBuilder.Entity("Domain.PlanifikimiShkollor", b =>
                {
                    b.HasOne("Domain.Klasat", "Klasa")
                        .WithMany("Planifikimet")
                        .HasForeignKey("KlasaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Lenda", "Lenda")
                        .WithMany("Planifikimet")
                        .HasForeignKey("LendaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Klasa");

                    b.Navigation("Lenda");
                });

            modelBuilder.Entity("Domain.Raporti", b =>
                {
                    b.HasOne("Domain.Klasat", "Klasa")
                        .WithMany("Raportet")
                        .HasForeignKey("KlasaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Lenda", "Lenda")
                        .WithMany("Raportet")
                        .HasForeignKey("LendaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Nxenesi", "Nxenesi")
                        .WithMany("Raportet")
                        .HasForeignKey("NxenesiId");

                    b.Navigation("Klasa");

                    b.Navigation("Lenda");

                    b.Navigation("Nxenesi");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Domain.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Domain.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Domain.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Domain.Klasat", b =>
                {
                    b.Navigation("Oraret");

                    b.Navigation("Planifikimet");

                    b.Navigation("Raportet");
                });

            modelBuilder.Entity("Domain.Lenda", b =>
                {
                    b.Navigation("Oraret");

                    b.Navigation("Oret");

                    b.Navigation("Planifikimet");

                    b.Navigation("Raportet");
                });

            modelBuilder.Entity("Domain.Njesia", b =>
                {
                    b.Navigation("Oret");
                });

            modelBuilder.Entity("Domain.Nxenesi", b =>
                {
                    b.Navigation("Mungesat");

                    b.Navigation("Raportet");
                });
#pragma warning restore 612, 618
        }
    }
}