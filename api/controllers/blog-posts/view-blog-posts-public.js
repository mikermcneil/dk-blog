module.exports = {


  friendlyName: 'View blog posts',


  description: 'Display "Blog posts" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/blog-posts/list-public'
    }

  },


  fn: async function () {

    let blogPosts = await BlogPost.find();

    // example of fetching just one:
    // let blogPost = await BlogPost.findOne({
    //   title: { contains: 'yoga' }
    // });

    // Respond with view.
    return {
      blogPosts
    };

  }


};
