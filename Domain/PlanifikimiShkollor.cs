using System;

namespace Domain
{
    public class PlanifikimiShkollor
    {

        public Guid Id {get; set;}
        public  Guid KlasaId  {get; set;}
        public Guid LendaId {get; set;}
        public Lenda Lenda {get; set;}
        public Klasat Klasa {get; set;}
        public DateTime DataeRegjistrimit  {get; set;}

        public string LlojiPlanifikimit {get; set;}

        public string Mesimdhenes {get; set;}

        public string VitiShkollor {get; set;}


    }
}