using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace icdtStoryBoard.Models
{
    public class Story
    {
        public int id { get; set; }
        public int ProjectId { set; get; }

        public string Name { get; set; }

        public virtual ICollection<Scene> Scenes { set; get; }

        public virtual Project Project { get; set; }
    }
}