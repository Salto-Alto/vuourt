module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/config/_variables.scss";`,
            },
        },
    },
};
