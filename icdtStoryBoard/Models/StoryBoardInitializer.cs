using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace icdtStoryBoard.Models
{
    public class StoryBoardInitializer : DropCreateDatabaseAlways<StoryBoardContext>
    {
        protected override void Seed(StoryBoardContext context)
        {
            base.Seed(context);
        }

    }
}