using System;

namespace Domain
{
    public class Ora
    {
        
        public Guid Id {get; set;}
        public  Guid NjesiaId  {get; set;}
        public Guid LendaId {get; set;}
        public Lenda Lenda {get; set;}
        public Njesia Njesia{get; set;}

        public string fusha{get; set;}

        public string oramesimore {get; set;}

        public string plani{get; set;}

        public string koment{get; set;}
    }
}