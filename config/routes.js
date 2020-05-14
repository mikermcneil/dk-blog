/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  'GET /':      { action: 'blog-posts-public/view-blog-posts-public' },
  'GET /posts': { action: 'blog-posts/view-blog-posts' },
  'GET /posts/:id': { action: 'blog-posts/view-edit-blog-post' },

  'POST /api/v1/blog-posts/:id':          { action: 'blog-posts/update-one-blog-post' },
  'POST /api/v1/blog-posts/:id/destroy':  { action: 'blog-posts/destroy-one-blog-post' },
  'POST /api/v1/blog-posts/new' :         { action: 'blog-posts/view-new-blog-post'},
  'GET /api/v1/blog-posts/view/:id' :    { action: 'blog-posts/view-one-post-public'}

};
