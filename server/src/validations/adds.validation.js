const joi = require('joi');

const createAdd = {
    body: {
        provider_name: joi.string().required(),
        provider_app_id: joi.string().required(),
        placement_id: joi.string().required(),
      
        package_name: joi.string().required(),
        app_name: joi.string().required(),
    },
};

const updateAdd = {
    body: {
        provider_name: joi.string().required(),
        provider_app_id: joi.string().required(),
        placement_id: joi.string().required(),
        status: joi.string().required(),
        package_name: joi.string().required(),
        app_name: joi.string().required(),
    },
};

const getAdds = {
    query: {
        page: joi.number().required(),
        limit: joi.number().required(),

    },
};

const getAdd = {
    params: {
        id: joi.string().required(),
    },
};

const deleteAdd = {
    params: {
        id: joi.string().required(),
    },
};

module.exports = {
    createAdd,
    updateAdd,
    getAdds,

    getAdd,
    deleteAdd,
};
