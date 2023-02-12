using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
         public static Guid Klasa1 = new Guid();
         public static Guid Klasa2 = new Guid();
          public static Guid Klasa3 = new Guid();
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            await context.SaveChangesAsync();
        }

    

        public static async Task SeedDataStafi(DataContext context, UserManager<StafiAkademik> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<StafiAkademik>
                {
                    new StafiAkademik{Emri = "Bob", UserName = "bob", Email = "bob@test.com"},
                    new StafiAkademik{Emri = "Tom", UserName = "tom", Email = "tom@test.com"},
                    new StafiAkademik{Emri = "Jane", UserName = "jane", Email = "jane@test.com"},
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }
        }

        
        public static async Task SeedDataNxenesi(DataContext context, UserManager<Nxenesi> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<Nxenesi>
                {
                    new Nxenesi{Emri = "bob", UserName = "bob", Email = "bob@student.com"},
                    new Nxenesi{Emri = "tom",UserName = "tom",  Email = "tom@student.com"},
                    new Nxenesi{Emri = "jane",UserName = "jane", Email = "jane@student.com"},
                };

                foreach (var user in users)
                {
                    await  userManager.CreateAsync(user, "Studenti");
                }
            }
        }

        public static async Task SeedDataLenda(DataContext context)
        {
             if(context.Lendet.Any()) return;
            var lendet = new List<Lenda>
            {
                new Lenda
                {
                    EmriLendes = "Gjuhe Shqipe",
                    Pershkrimi="Lorem Ipsum amet...",
                },
                new Lenda
                {
                    EmriLendes = "Matematike",
                    Pershkrimi="Lorem Ipsum amet...",
                },
                new Lenda
                {
                    EmriLendes = "Njeriu dhe natyra",
                    Pershkrimi="Lorem Ipsum amet...",
                }
            };
             await context.Lendet.AddRangeAsync(lendet);
            await context.SaveChangesAsync();        
        }


            
        
           public static async Task SeedDataKlasat(DataContext context)
        {
         
            if (context.KlasatF.Any()) return;
            var klasatF = new List<Klasat>
            {
                new Klasat
                {
                    EmriKlases = "Klasa 10/1",
                    Test = "Test1",
                  
                },
                new Klasat
                {
                    EmriKlases = "Klasa 10/2",
                    Test = "Test1",
                },
                 new Klasat
                {
                    EmriKlases = "Klasa 10/3",
                    Test = "Test1",
                },
                 new Klasat
                {
                    EmriKlases = "Klasa 10/4",
                    Test = "Test1",
                },
                  new Klasat
                {
                    EmriKlases = "Klasa 10/6",
                    Test = "Test1",
                }
            };
                
                  await context.KlasatF.AddRangeAsync(klasatF);
            await context.SaveChangesAsync();
        }

         public static async Task SeedDataNjesia(DataContext context)
        {
             if(context.Njesite.Any()) return;
            var njesite = new List<Njesia>
            {
                new Njesia
                {
                    EmriNjesise = "Lakimi i emrit",
                    Pershkrimi="Njesia e pare",
                },
                new Njesia
                {
                    EmriNjesise = "Zgjedhimi i foljes",
                    Pershkrimi="Njesia e dyte",
                },
                new Njesia
                {
                    EmriNjesise = "Kundrinori i drejte",
                    Pershkrimi="Njesia e trete",
                }
            };
             await context.Njesite.AddRangeAsync(njesite);
            await context.SaveChangesAsync();        
        }

    }

}
    
