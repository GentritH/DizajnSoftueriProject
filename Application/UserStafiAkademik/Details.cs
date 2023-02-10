using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.UserStafiAkademik
{
    public class Details
    {
        public class Query : IRequest<Result<StafiAkademik>>
        {
            public string Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<StafiAkademik>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<StafiAkademik>> Handle(Query request, CancellationToken cancellationToken)
            {
                var stafiA = await _context.StafiA.FindAsync(request.Id);

                return Result<StafiAkademik>.Success(stafiA);
            }
        }
    }
}