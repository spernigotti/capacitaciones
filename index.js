const { lstatSync, readdirSync, watch, writeFileSync } = require('fs');
const { join } = require('path');
const inquirer = require('inquirer');
const isDirectory = source => lstatSync(source).isDirectory();
const isCourse = dir => !['node_modules', 'slides-src', '.git', 'ignore'].includes(dir);
const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory).filter(isCourse);
const pug = require('pug');
const browserSync = require("browser-sync").create();

const directories = getDirectories('.');

async function start () {
	const answers = await inquirer.prompt([{
		type: 'list',
		name: 'coursePath',
		choices: directories,
		message: 'Seleccione la capacitación:'
	}]);

	const { coursePath: slidesFolder } = answers;

	const slidesFile = join(__dirname, slidesFolder, 'diapositivas.pug');
	const slidesFileDist = join(slidesFolder, 'index.html');

	compileSlides({ slidesFile, slidesFileDist, slidesFolder });
	watch(slidesFile, () => compileSlides({ slidesFile, slidesFileDist, slidesFolder }));	

	browserSync.init({
		server: {
			baseDir: join(__dirname, slidesFolder),
			index: `index.html`
		},
		serveStatic: [{
	        route: '/slides-src',
	        dir: join(__dirname, 'slides-src/')
	    }]
	});

	browserSync.reload('*.html');
	browserSync.watch(slidesFileDist).on('change', browserSync.reload);
}

function compileSlides({ slidesFile, slidesFileDist, slidesFolder }) {
	const options = {
		pretty: true
	};
	const slidesHTML = pug.compileFile(slidesFile, options)();
	
	writeFileSync(slidesFileDist, slidesHTML, () => null);
}

start();