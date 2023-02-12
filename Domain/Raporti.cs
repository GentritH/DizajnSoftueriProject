using System;

namespace Domain
{
    public class Raporti
    {

        public Guid Id {get; set;}
        public Guid KlasaId  {get; set;}
        public Guid LendaId {get; set;}
        public Lenda Lenda {get; set;}
        public Klasat Klasa {get; set;}
        public string NxenesiId {get; set;}
        public Nxenesi Nxenesi {get; set;}
        public string Muaji {get; set;}
        public string Java {get; set;}
        public string Detyrat {get; set;}
        public string Angazhimi {get; set;}
        public string Performanca {get; set;}
        public string Aktivititeti {get; set;}
        public string Komenti {get; set;}


    }
}