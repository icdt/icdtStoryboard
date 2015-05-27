using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace icdtStoryBoard.Models
{
    public class Project
    {
        public int id { get; set; }

        public string Name { get; set; }

        public virtual ICollection<Story> Stories { set; get; }
    }
}