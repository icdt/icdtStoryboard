using icdtStoryBoard.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace icdtStoryBoard.Controllers
{
    public class BusinessLogicController : ApiController
    {
        private StoryBoardContext db = new StoryBoardContext();

        [HttpGet]
        [Route("api/projects/{ppProjects}/stories")]
        public IHttpActionResult GetPhotoByUser(int ppProjects)
        {
            var rrProject = db.Projects.Find(ppProjects);

            if (rrProject == null)
            {
                return BadRequest("No Project~~");
            }

            var rrStories = rrProject.Stories;
            return Ok(rrStories);

        }

        [HttpGet]
        [Route("api/projects/{ppProjects}/stories/{ppStoryId}/scenes")]
        public IHttpActionResult GetPhotoByUser(int ppProjects, int ppStoryId, int ppSceneId)
        {
            var rrProject = db.Projects.Find(ppProjects);

            if (rrProject == null)
            {
                return BadRequest("No Project~~");
            }

            var rrStory = rrProject.Stories.First(s => s.id == ppStoryId);

            if (rrStory == null)
            {
                return BadRequest("No Story~~");
            }

            var rrScenes = rrStory.Scenes;
            return Ok(rrScenes);
        }

    }
}
