module.exports = {


  friendlyName: 'View new blog post',


  description: 'Display "New blog post" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/blog-posts/new-blog-post/' 
    }

  },


  fn: async function () {

    let newBlog = await BlogPost.create({title: " ", detail: " ", category: "general", imagename: " "}).fetch();
    
    return {
      newBlog
    };

  }


};
