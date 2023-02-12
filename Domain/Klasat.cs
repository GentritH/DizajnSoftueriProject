using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Klasat
    {
        public Guid Id { get; set; }
        
        public string EmriKlases  { get; set; }
        
        public ICollection<PlanifikimiShkollor> Planifikimet {get; set;}
        public ICollection <Orari> Oraret {get; set;}

        public ICollection<Raporti> Raportet {get; set;}

        public string Test {get; set;}

    }
}  