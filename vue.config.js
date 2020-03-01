module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/config/variables.scss";`,
            },
        },
    },
};
