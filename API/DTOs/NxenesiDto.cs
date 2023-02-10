using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class NxenesiDto
    {
        public string Id {get; set;}
        public string Emri { get; set; }
        public string Mbiemri { get; set; }
        public string Username { get; set; }
        public string Token { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string EmriPrindit { get; set; }
        public DateTime DataLindjes { get; set; }
        public string Klasa { get; set; }
        public int VitiRegjistrimit{ get; set; }
        public string NumriTelefonit { get; set; }  
    }
}

