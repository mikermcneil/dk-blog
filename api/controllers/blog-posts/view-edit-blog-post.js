module.exports = {


  friendlyName: 'View edit blog post',


  description: 'Display "Edit blog post" page.',


  inputs: {

    id: {
      type: 'number',
      description: 'The ID of the blog post to edit.',
      required: true
    }

  },


  exits: {

    success: {
      viewTemplatePath: 'pages/blog-posts/edit-blog-post'
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
