using System;
using System.ComponentModel.DataAnnotations;
namespace API.DTOs
{
    public class RegisterStafiDto
    {

        [Required]
        public string Emri { get; set; }

        [Required]
       
        public string Mbiemri { get; set; }

        [Required]
        //[RegularExpression("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$", ErrorMessage = "Password must be complex")]
        public string Password { get; set; }

        [Required]
        public string Email { get; set; }



         [Required]
        public string UserName { get; set; }
        [Required]
        public DateTime DataRegjistrimit { get; set; }

        [Required]
        public string Roli { get; set; }
    }
}