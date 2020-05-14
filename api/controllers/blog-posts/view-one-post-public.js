module.exports = {


  friendlyName: 'View One Post Public',


  description: 'View blog post" page.',


  inputs: {

    id: {
      type: 'number',
      description: 'The ID of the blog post to edit.',
      required: true
    }

  },


  exits: {

    success: {
      viewTemplatePath: 'pages/blog-posts/post-view-public'
    }

  },


  fn: async function ({ id }) {

    // Sidebar: Totally unrelated:
    // Here's how you get HTTP headers
    // https://sailsjs.com/documentation/reference/request-req/req-get
    // ```
    // let myHeaderValue = this.req.get('X-My-Custom-Header');
    // ```

    let blogPost = await BlogPost.findOne({
      id: id
    });

    // Respond with view.
    return {
      blogPost: blogPost
    };

  }


};
