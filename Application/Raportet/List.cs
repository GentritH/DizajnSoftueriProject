using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Raportet
{
    public class List
    {
        public class Query : IRequest<List<Raporti>> { }
        public class Handler : IRequestHandler<Query, List<Raporti>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Raporti>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Raportet.ToListAsync();
            }
        }
    }
}