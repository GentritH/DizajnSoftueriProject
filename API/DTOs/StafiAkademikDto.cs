using System;

namespace API.DTOs
{
    public class StafiAkademikDto
    {
       public string Id { get; set; }
        public string Emri { get; set; }
        public string Token { get; set; }
        public string Mbiemri { get; set; }
        public string Image { get; set; }
        public string Email { get; set; }

         public string Numrikontaktues { get; set; }
        public DateTime DataRegjistrimit { get; set; }
        public string Roli { get; set; }
    }   
}


