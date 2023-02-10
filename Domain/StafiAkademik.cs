using System;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;


namespace Domain
{
    public class StafiAkademik : IdentityUser
    {   
        
        public string Emri { get; set; }
        
        public string Mbiemri {get; set;}

        public string Roli{get; set;}

        public string Numrikontaktues { get; set; }

        
        
    }
}