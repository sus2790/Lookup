const tryRequire = (path) => {
    try {
        const image = require(`${path}`);
        return image;
    } catch (err) {
        return false;
    }
};

export default {
    questionMark: require('./assets/questionMark.svg'),
    STAFF:
        tryRequire('./assets/STAFF.svg') ||
        require('./assets/questionMark.svg'),
    PARTNER:
        tryRequire('./assets/PARTNER.svg') ||
        require('./assets/questionMark.svg'),
    HYPESQUAD:
        tryRequire('./assets/HYPESQUAD.svg') ||
        require('./assets/questionMark.svg'),
    BUG_HUNTER_LEVEL_1:
        tryRequire('./assets/BUG_HUNTER_LEVEL_1.svg') ||
        require('./assets/questionMark.svg'),
    HYPESQUAD_ONLINE_HOUSE_1:
        tryRequire('./assets/HYPESQUAD_ONLINE_HOUSE_1.svg') ||
        require('./assets/questionMark.svg'),
    HYPESQUAD_ONLINE_HOUSE_2:
        tryRequire('./assets/HYPESQUAD_ONLINE_HOUSE_2.svg') ||
        require('./assets/questionMark.svg'),
    HYPESQUAD_ONLINE_HOUSE_3:
        tryRequire('./assets/HYPESQUAD_ONLINE_HOUSE_3.svg') ||
        require('./assets/questionMark.svg'),
    PREMIUM_EARLY_SUPPORTER:
        tryRequire('./assets/PREMIUM_EARLY_SUPPORTER.svg') ||
        require('./assets/questionMark.svg'),
    BUG_HUNTER_LEVEL_2:
        tryRequire('./assets/BUG_HUNTER_LEVEL_2.svg') ||
        require('./assets/questionMark.svg'),
    VERIFIED_DEVELOPER:
        tryRequire('./assets/VERIFIED_DEVELOPER.svg') ||
        require('./assets/questionMark.svg'),
    CERTIFIED_MODERATOR:
        tryRequire('./assets/CERTIFIED_MODERATOR.svg') ||
        require('./assets/questionMark.svg'),
    ACTIVE_DEVELOPER:
        tryRequire('./assets/ACTIVE_DEVELOPER.svg') ||
        require('./assets/questionMark.svg'),
};
