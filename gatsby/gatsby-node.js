const path = require('path');
const del = require('del');
const moveFile = require('move-file');

/**
 * Кастомизация webpack конфига
 */
exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src'),
            },
        },
    });
};

// /**
//  * После сборки проекта
//  */
exports.onPostBuild = async () => {
    const DIST_PATH = path.join(
        __dirname,
        '../../../public/landings/finance/'
    );
    const TEMPLATES_PATH = path.join(
        __dirname,
        '../../../templates/finance/'
    );
    /**
     * Удаление старых файлов
     */
    await del([DIST_PATH], { force: true });
    await del([TEMPLATES_PATH], { force: true });

    /**
     * Копирование индексного файла в templates
     */
    // ru
    await moveFile(
        'public/ru/index.html',
        `${TEMPLATES_PATH}/ru/index.html.twig`
    );
    // en
    await moveFile(
        'public/en/index.html',
        `${TEMPLATES_PATH}/en/index.html.twig`
    );
    /**
     * Копирование файлов в папку public
     */
    await moveFile('public', `${DIST_PATH}`);
};
