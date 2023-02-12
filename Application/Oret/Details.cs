using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Oret
{
    public class Details
    {
        public class Query : IRequest<Ora>
        {
            public Guid Id { get; set; }
        }
        public class Handler : IRequestHandler<Query, Ora>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            
            {
                _context = context;
            }

            public async Task<Ora> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Oret.FindAsync(request.Id);
            }
        }
    }
}