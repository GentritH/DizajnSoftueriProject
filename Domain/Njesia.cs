using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Njesia
    {
        public Guid Id {get; set;}
        public string EmriNjesise { get; set; }
        public string Pershkrimi {get; set;}

        public ICollection<Ora> Oret {get; set;}
    }
}