using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.UserStafiAkademik
{
    public class Edit
    {
        public class Command : IRequest 
        {
            public StafiAkademik stafi {get; set;}
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;
            private readonly IMapper mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                this.context = context;
                this.mapper = mapper;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var stafin = await context.StafiA.FindAsync(request.stafi.Id);
                mapper.Map(request.stafi, stafin);
                await context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}