using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Oret
{
    public class List
    {
        public class Query : IRequest<List<Ora>> { }
        public class Handler : IRequestHandler<Query, List<Ora>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Ora>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Oret.ToListAsync();
            }
        }
    }
}