/*************************************************************************************************************************************
 * © Musing Solutions
 * Author : Chanakya Sankritayayana
 * Date: 13-April-2021
 * MipDbContext class extends the IdentityDbContext and used in EF for User Management
 */

using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Musing.Identity.Api.Models;
using System;

namespace Musing.Identity.Api.Context
{
    public class MipDbContext : IdentityDbContext<UserModel, RoleModel,Guid>
    {
        public MipDbContext(DbContextOptions<MipDbContext> dbContextOptions) : base(dbContextOptions)
        {
        }
    }
}
