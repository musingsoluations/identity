
/*************************************************************************************************************************************
 * © Musing Solutions
 * Author : Chanakya Sankritayayana
 * Date: 13-April-2021
 * UserModel class extends the IdentityUser and used during user authentication
 */

using Microsoft.AspNetCore.Identity;
using System;
using System.ComponentModel.DataAnnotations;

namespace Musing.Identity.Api.Models
{
    public class UserModel: IdentityUser<Guid>
    {
        [MaxLength(50)]
        public string FirstName { get; set; }
        [MaxLength(50)]
        public string LastName { get; set; }
    }
}
