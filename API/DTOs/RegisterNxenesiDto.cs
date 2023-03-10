using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    // 
     public class RegisterNxenesiDto
    {
        [Required]
        public string Emri { get; set; }

        [Required]
        public string Mbiemri { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
      //  [RegularExpression("(?=.*\\d) (?=.*[a-z]) (?=.*[A-Z]).{4,8}$", ErrorMessage = "Password must be complex")]
        public string Password { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string EmriPrindit { get; set; }

        [Required]
        public DateTime DataLindjes { get; set;}

        [Required]
        public string Klasa { get; set; }

        [Required]
        public int VitiRegjistrimit{ get; set;}
        [Required]
        public string NumriTelefonit { get; set; }
    }
}