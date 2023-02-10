using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Activities",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Title = table.Column<string>(type: "TEXT", nullable: true),
                    Date = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: true),
                    Category = table.Column<string>(type: "TEXT", nullable: true),
                    City = table.Column<string>(type: "TEXT", nullable: true),
                    Venue = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Activities", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "TEXT", nullable: false),
                    DisplayName = table.Column<string>(type: "TEXT", nullable: true),
                    Bio = table.Column<string>(type: "TEXT", nullable: true),
                    UserName = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "INTEGER", nullable: false),
                    PasswordHash = table.Column<string>(type: "TEXT", nullable: true),
                    SecurityStamp = table.Column<string>(type: "TEXT", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "TEXT", nullable: true),
                    PhoneNumber = table.Column<string>(type: "TEXT", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "INTEGER", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "INTEGER", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "TEXT", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "INTEGER", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "KlasatF",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    EmriKlases = table.Column<string>(type: "TEXT", nullable: true),
                    Test = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KlasatF", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Lendet",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    EmriLendes = table.Column<string>(type: "TEXT", nullable: true),
                    Pershkrimi = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lendet", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Njesite",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    EmriNjesise = table.Column<string>(type: "TEXT", nullable: true),
                    Pershkrimi = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Njesite", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Nxenesit",
                columns: table => new
                {
                    Id = table.Column<string>(type: "TEXT", nullable: false),
                    Emri = table.Column<string>(type: "TEXT", nullable: true),
                    Mbiemri = table.Column<string>(type: "TEXT", nullable: true),
                    EmriPrindit = table.Column<string>(type: "TEXT", nullable: true),
                    DataLindjes = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Klasa = table.Column<string>(type: "TEXT", nullable: true),
                    VitiRegjistrimit = table.Column<int>(type: "INTEGER", nullable: false),
                    UserName = table.Column<string>(type: "TEXT", nullable: true),
                    NormalizedUserName = table.Column<string>(type: "TEXT", nullable: true),
                    Email = table.Column<string>(type: "TEXT", nullable: true),
                    NormalizedEmail = table.Column<string>(type: "TEXT", nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "INTEGER", nullable: false),
                    PasswordHash = table.Column<string>(type: "TEXT", nullable: true),
                    SecurityStamp = table.Column<string>(type: "TEXT", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "TEXT", nullable: true),
                    PhoneNumber = table.Column<string>(type: "TEXT", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "INTEGER", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "INTEGER", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "TEXT", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "INTEGER", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Nxenesit", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "StafiA",
                columns: table => new
                {
                    Id = table.Column<string>(type: "TEXT", nullable: false),
                    Emri = table.Column<string>(type: "TEXT", nullable: true),
                    Mbiemri = table.Column<string>(type: "TEXT", nullable: true),
                    Roli = table.Column<string>(type: "TEXT", nullable: true),
                    Numrikontaktues = table.Column<string>(type: "TEXT", nullable: true),
                    UserName = table.Column<string>(type: "TEXT", nullable: true),
                    NormalizedUserName = table.Column<string>(type: "TEXT", nullable: true),
                    Email = table.Column<string>(type: "TEXT", nullable: true),
                    NormalizedEmail = table.Column<string>(type: "TEXT", nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "INTEGER", nullable: false),
                    PasswordHash = table.Column<string>(type: "TEXT", nullable: true),
                    SecurityStamp = table.Column<string>(type: "TEXT", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "TEXT", nullable: true),
                    PhoneNumber = table.Column<string>(type: "TEXT", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "INTEGER", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "INTEGER", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "TEXT", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "INTEGER", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StafiA", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    RoleId = table.Column<string>(type: "TEXT", nullable: false),
                    ClaimType = table.Column<string>(type: "TEXT", nullable: true),
                    ClaimValue = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UserId = table.Column<string>(type: "TEXT", nullable: false),
                    ClaimType = table.Column<string>(type: "TEXT", nullable: true),
                    ClaimValue = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "TEXT", nullable: false),
                    ProviderKey = table.Column<string>(type: "TEXT", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "TEXT", nullable: true),
                    UserId = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "TEXT", nullable: false),
                    RoleId = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "TEXT", nullable: false),
                    LoginProvider = table.Column<string>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Value = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Oraret",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    LendaId = table.Column<Guid>(type: "TEXT", nullable: false),
                    KlasaId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Hene1 = table.Column<string>(type: "TEXT", nullable: true),
                    Hene2 = table.Column<string>(type: "TEXT", nullable: true),
                    Hene3 = table.Column<string>(type: "TEXT", nullable: true),
                    Hene4 = table.Column<string>(type: "TEXT", nullable: true),
                    Hene5 = table.Column<string>(type: "TEXT", nullable: true),
                    Hene6 = table.Column<string>(type: "TEXT", nullable: true),
                    Marte1 = table.Column<string>(type: "TEXT", nullable: true),
                    Marte2 = table.Column<string>(type: "TEXT", nullable: true),
                    Marte3 = table.Column<string>(type: "TEXT", nullable: true),
                    Marte4 = table.Column<string>(type: "TEXT", nullable: true),
                    Marte5 = table.Column<string>(type: "TEXT", nullable: true),
                    Marte6 = table.Column<string>(type: "TEXT", nullable: true),
                    Merkure1 = table.Column<string>(type: "TEXT", nullable: true),
                    Merkure2 = table.Column<string>(type: "TEXT", nullable: true),
                    Merkure3 = table.Column<string>(type: "TEXT", nullable: true),
                    Merkure4 = table.Column<string>(type: "TEXT", nullable: true),
                    Merkure5 = table.Column<string>(type: "TEXT", nullable: true),
                    Merkure6 = table.Column<string>(type: "TEXT", nullable: true),
                    Enjte1 = table.Column<string>(type: "TEXT", nullable: true),
                    Enjte2 = table.Column<string>(type: "TEXT", nullable: true),
                    Enjte3 = table.Column<string>(type: "TEXT", nullable: true),
                    Enjte4 = table.Column<string>(type: "TEXT", nullable: true),
                    Enjte5 = table.Column<string>(type: "TEXT", nullable: true),
                    Enjte6 = table.Column<string>(type: "TEXT", nullable: true),
                    Premte1 = table.Column<string>(type: "TEXT", nullable: true),
                    Premte2 = table.Column<string>(type: "TEXT", nullable: true),
                    Premte3 = table.Column<string>(type: "TEXT", nullable: true),
                    Premte4 = table.Column<string>(type: "TEXT", nullable: true),
                    Premte5 = table.Column<string>(type: "TEXT", nullable: true),
                    Premte6 = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Oraret", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Oraret_KlasatF_KlasaId",
                        column: x => x.KlasaId,
                        principalTable: "KlasatF",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Oraret_Lendet_LendaId",
                        column: x => x.LendaId,
                        principalTable: "Lendet",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Planifikimet",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    KlasaId = table.Column<Guid>(type: "TEXT", nullable: false),
                    LendaId = table.Column<Guid>(type: "TEXT", nullable: false),
                    DataeRegjistrimit = table.Column<DateTime>(type: "TEXT", nullable: false),
                    LlojiPlanifikimit = table.Column<string>(type: "TEXT", nullable: true),
                    Mesimdhenes = table.Column<string>(type: "TEXT", nullable: true),
                    VitiShkollor = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Planifikimet", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Planifikimet_KlasatF_KlasaId",
                        column: x => x.KlasaId,
                        principalTable: "KlasatF",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Planifikimet_Lendet_LendaId",
                        column: x => x.LendaId,
                        principalTable: "Lendet",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Oret",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    NjesiaId = table.Column<Guid>(type: "TEXT", nullable: false),
                    LendaId = table.Column<Guid>(type: "TEXT", nullable: false),
                    fusha = table.Column<string>(type: "TEXT", nullable: true),
                    oramesimore = table.Column<string>(type: "TEXT", nullable: true),
                    plani = table.Column<string>(type: "TEXT", nullable: true),
                    koment = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Oret", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Oret_Lendet_LendaId",
                        column: x => x.LendaId,
                        principalTable: "Lendet",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Oret_Njesite_NjesiaId",
                        column: x => x.NjesiaId,
                        principalTable: "Njesite",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Mungesat",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    NxenesiId = table.Column<string>(type: "TEXT", nullable: true),
                    Periudha = table.Column<string>(type: "TEXT", nullable: true),
                    Arsye = table.Column<string>(type: "TEXT", nullable: true),
                    Paarsye = table.Column<string>(type: "TEXT", nullable: true),
                    Shenim = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Mungesat", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Mungesat_Nxenesit_NxenesiId",
                        column: x => x.NxenesiId,
                        principalTable: "Nxenesit",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Raportet",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    KlasaId = table.Column<Guid>(type: "TEXT", nullable: false),
                    LendaId = table.Column<Guid>(type: "TEXT", nullable: false),
                    NxenesiId = table.Column<string>(type: "TEXT", nullable: true),
                    Muaji = table.Column<string>(type: "TEXT", nullable: true),
                    Java = table.Column<string>(type: "TEXT", nullable: true),
                    Detyrat = table.Column<string>(type: "TEXT", nullable: true),
                    Angazhimi = table.Column<string>(type: "TEXT", nullable: true),
                    Performanca = table.Column<string>(type: "TEXT", nullable: true),
                    Aktivititeti = table.Column<string>(type: "TEXT", nullable: true),
                    Komenti = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Raportet", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Raportet_KlasatF_KlasaId",
                        column: x => x.KlasaId,
                        principalTable: "KlasatF",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Raportet_Lendet_LendaId",
                        column: x => x.LendaId,
                        principalTable: "Lendet",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Raportet_Nxenesit_NxenesiId",
                        column: x => x.NxenesiId,
                        principalTable: "Nxenesit",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Mungesat_NxenesiId",
                table: "Mungesat",
                column: "NxenesiId");

            migrationBuilder.CreateIndex(
                name: "IX_Oraret_KlasaId",
                table: "Oraret",
                column: "KlasaId");

            migrationBuilder.CreateIndex(
                name: "IX_Oraret_LendaId",
                table: "Oraret",
                column: "LendaId");

            migrationBuilder.CreateIndex(
                name: "IX_Oret_LendaId",
                table: "Oret",
                column: "LendaId");

            migrationBuilder.CreateIndex(
                name: "IX_Oret_NjesiaId",
                table: "Oret",
                column: "NjesiaId");

            migrationBuilder.CreateIndex(
                name: "IX_Planifikimet_KlasaId",
                table: "Planifikimet",
                column: "KlasaId");

            migrationBuilder.CreateIndex(
                name: "IX_Planifikimet_LendaId",
                table: "Planifikimet",
                column: "LendaId");

            migrationBuilder.CreateIndex(
                name: "IX_Raportet_KlasaId",
                table: "Raportet",
                column: "KlasaId");

            migrationBuilder.CreateIndex(
                name: "IX_Raportet_LendaId",
                table: "Raportet",
                column: "LendaId");

            migrationBuilder.CreateIndex(
                name: "IX_Raportet_NxenesiId",
                table: "Raportet",
                column: "NxenesiId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Activities");

            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "Mungesat");

            migrationBuilder.DropTable(
                name: "Oraret");

            migrationBuilder.DropTable(
                name: "Oret");

            migrationBuilder.DropTable(
                name: "Planifikimet");

            migrationBuilder.DropTable(
                name: "Raportet");

            migrationBuilder.DropTable(
                name: "StafiA");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "Njesite");

            migrationBuilder.DropTable(
                name: "KlasatF");

            migrationBuilder.DropTable(
                name: "Lendet");

            migrationBuilder.DropTable(
                name: "Nxenesit");
        }
    }
}
