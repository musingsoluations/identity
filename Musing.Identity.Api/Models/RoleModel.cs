
/*************************************************************************************************************************************
 * © Musing Solutions
 * Author : Chanakya Sankritayayana
 * Date: 13-April-2021
 * RoleModel class extends the IdentityRole and used during user authentication
 */

using Microsoft.AspNetCore.Identity;
using System;

namespace Musing.Identity.Api.Models
{
    public class RoleModel : IdentityRole<Guid>
    {
    }
}
