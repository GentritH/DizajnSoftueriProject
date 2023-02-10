using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Nxenesit
{
    public class Details
    {
        public class Query : IRequest<Result<Nxenesi>>
        {
            public string Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<Nxenesi>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Nxenesi>> Handle(Query request, CancellationToken cancellationToken)
            {
                var nxenesi = await _context.Nxenesit.FindAsync(request.Id);
                return Result<Nxenesi>.Success(nxenesi);
            }
        }
    }
}