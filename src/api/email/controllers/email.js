'use strict';

/**
 * A set of functions called "actions" for `email`
 */

module.exports = {
   async index(ctx, next){
    try {
      await strapi.plugins['email'].services.email.send({
        to: 'amjadiqbalkhanniazi@strapi.io',
        from: 'amjad@sonnetsolution.com',
        cc: 'amjadiqbalkhanniazi@gmail.com',
        replyTo: 'amjad@sonnetsolution.com',
        subject: 'Use strapi email provider successfully',
        text: 'Hello world!',
        html: 'Hello world!',
      });
    } catch (err) {
      ctx.body = err;
    }
  }
};
