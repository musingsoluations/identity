using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Musing.Identity.Api.DTO;
using Musing.Identity.Api.Models;

namespace Musing.Identity.Api.Profiles
{
    public class UserDtoProfile : Profile
    {
        public UserDtoProfile()
        {
            CreateMap<RegisterUserModelDto, UserModel>()
                .ForMember(useDestination => useDestination.UserName, 
                    userOptions => userOptions.MapFrom(userSource => userSource.Email))
                .ReverseMap();
        }
    }
}
