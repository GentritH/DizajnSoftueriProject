using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Raportet
{
    public class Details
    {
        public class Query : IRequest<Raporti>
        {
            public Guid RaportiId { get; set; }
        }
        public class Handler : IRequestHandler<Query, Raporti>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            
            {
                _context = context;
            }

            public async Task<Raporti> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Raportet.FindAsync(request.RaportiId);
            }
        }
    }
}