"use strict";

const Hash = use("Hash");

const UserHook = (module.exports = {});

/**
 * Hash using password as a hook.
 *
 * @method
 *
 * @param  {Object} userInstance
 *
 * @return {void}
 */
UserHook.hashPassword = async user => {
  user.password = await Hash.make(user.password);
};
