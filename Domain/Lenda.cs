using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Lenda
    {
        public Guid Id {get; set;}
        public string EmriLendes { get; set; }
        public string Pershkrimi {get; set;}
         public ICollection<PlanifikimiShkollor> Planifikimet {get; set;}
         public ICollection <Ora> Oret {get; set;}
         public ICollection <Orari> Oraret {get; set;}
        public ICollection<Raporti> Raportet {get; set;}
    }
}