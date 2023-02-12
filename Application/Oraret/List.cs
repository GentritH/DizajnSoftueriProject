using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Oraret
{
    public class List
    {
        public class Query : IRequest<List<Orari>>{}

        public class Handler : IRequestHandler<Query, List<Orari>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Orari>> Handle(Query request, CancellationToken cancellationToken)
            {
                
                return await _context.Oraret.ToListAsync();
            }
        }
    }
}