require("esbuild").build({
	  entryPoints: ["index.js"],
	  minify: true,
	  sourcemap: "external",  
	  outdir: "dist"
}).catch(function(e){console.error(e);process.exit(1);})
