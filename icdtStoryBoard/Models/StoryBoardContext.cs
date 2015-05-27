using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace icdtStoryBoard.Models
{
    public class StoryBoardContext: DbContext
    {
        public DbSet<Project> Projects { set; get; }
        public DbSet<Story> Stories { set; get; }
        public DbSet<Scene> Scenes { set; get; }

    }
}