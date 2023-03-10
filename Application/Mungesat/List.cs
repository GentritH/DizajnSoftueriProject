using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Mungesat
{
     public class List
    {
        public class Query : IRequest<List<Mungesa>> { }
        public class Handler : IRequestHandler<Query, List<Mungesa>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Mungesa>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Mungesat.ToListAsync();
            }
        }
    }
}