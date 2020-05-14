module.exports = {


  friendlyName: 'Update one blog post',


  description: '',


  inputs: {
    id: { type: 'number', required: true },
    title: { type: 'string', required: true },
    detail: { type: 'string', required: true },
    imagename: { type: 'string', required: true }
  },


  exits: {

    redirect: {
      description: 'Updated successfully.',
      responseType: 'redirect',
    }

  },


  fn: async function ({ id, title, detail, imagename }) {

    await BlogPost.updateOne({ id: id })
    .set({
      title: title,
      detail: detail,
      imageName: imagename,
    });

    throw {redirect: '/posts'};

  }


};
