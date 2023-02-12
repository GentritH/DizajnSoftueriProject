using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Activity, Activity>();
            CreateMap<Lenda, Lenda>();
            CreateMap<Klasat, Klasat>();
            CreateMap<StafiAkademik, StafiAkademik>();
            CreateMap<PlanifikimiShkollor, PlanifikimiShkollor>();
            CreateMap<Raporti, Raporti>();
            CreateMap<Orari, Orari>();
            CreateMap<Nxenesi, Nxenesi>();
        }
    }
}