using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Lendet
{
    public class Edit
    {
        public class Command : IRequest 
        {
            public Lenda Lenda {get; set;}
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
                var lenda = await context.Lendet.FindAsync(request.Lenda.Id);
                mapper.Map(request.Lenda, lenda);
                await context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}