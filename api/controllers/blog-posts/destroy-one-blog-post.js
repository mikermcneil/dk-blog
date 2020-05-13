module.exports = {


  friendlyName: 'Destroy one blog post',


  description: '',


  inputs: {
    id: { type: 'number', required: true },
  },


  exits: {

    redirect: {
      responseType: 'redirect',
    }

  },


  fn: async function ({ id }) {

    // https://sailsjs.com/documentation/reference/waterline-orm/models/destroy-one
    await BlogPost.archiveOne({
      id: id
    });

    throw {redirect: '/posts'};

  }


};
