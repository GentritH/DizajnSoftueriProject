using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.UserStafiAkademik
{
    public class List
    {
        public class Query : IRequest<Result<List<StafiAkademik>>> { }

        public class Handler : IRequestHandler<Query, Result<List<StafiAkademik>>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<List<StafiAkademik>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<StafiAkademik>>.Success(await _context.StafiA.ToListAsync(cancellationToken));
            }
        }
    }
}