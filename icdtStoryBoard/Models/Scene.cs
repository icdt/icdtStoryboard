using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace icdtStoryBoard.Models
{
    public class Scene
    {
        public int id { get; set; }

        public string File { get; set; }

        public virtual Story Story { set; get; }
    }
}