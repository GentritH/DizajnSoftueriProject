using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Planifikimet
{
    public class Edit
    {
        public class Command : IRequest
        {
            public PlanifikimiShkollor planifikimi { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var planifikimet = await _context.Planifikimet.FindAsync(request.planifikimi.Id);

                _mapper.Map(request.planifikimi, planifikimet);

                await _context.SaveChangesAsync();

                return Unit.Value;

            }
        }
    }
}