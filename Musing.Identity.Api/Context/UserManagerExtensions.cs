using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Musing.Identity.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Musing.Identity.Api.Context
{
    public static class UserManagerExtensions
    {
        public static async Task<Models.UserModel> FindByPhoneNumber(this UserManager<UserModel> um, string phoneNumber)
        {
            return await um?.Users?.SingleOrDefaultAsync(x => x.PhoneNumber == phoneNumber);
        }
    }
}
