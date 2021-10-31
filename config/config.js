import config from 'dotenv';
config.config();

const env = {
    mongoUSER: process.env.MONGODB_USER || 'monte',
    mongoPASS: process.env.MONGODB_PASS || 'sarasa',
    mongoDbCluster: process.env.MONGODB_CLUSTER || 'cluster',
    mongoDbDavinci: process.env.MONGODB_DAVINCI || 'Ninguna',
    mongoDbTestimonios: process.env.MONGODB_TESTIMONIOS || 'Papa',
    PORT: process.env.PORT || '8080'
};

export default {
    env
};