
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
        [MaxLength(100)]
        public string Name { get; set; }


        public UserModel findUserByPhone()
        {
            return new UserModel();
            // Method intentionally left empty.
        }
    }
}
