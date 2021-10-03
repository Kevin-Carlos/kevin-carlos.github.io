var plugins = [{
      name: 'gatsby-plugin-styled-components',
      plugin: require('/Users/kevincarlos/Documents/projects/kevin-carlos.github.io/.yarn/__virtual__/gatsby-plugin-styled-components-virtual-d1baa56549/0/cache/gatsby-plugin-styled-components-npm-4.14.0-fa0eadda26-c21fe6f875.zip/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"topLevelImportPaths":[],"pure":false,"disableVendorPrefixes":false},
    },{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('/Users/kevincarlos/Documents/projects/kevin-carlos.github.io/.yarn/__virtual__/gatsby-plugin-react-helmet-virtual-29e11f01d5/0/cache/gatsby-plugin-react-helmet-npm-4.14.0-93d0b489c1-c5c2150d66.zip/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/Users/kevincarlos/Documents/projects/kevin-carlos.github.io/.yarn/__virtual__/gatsby-plugin-manifest-virtual-ffa146be37/0/cache/gatsby-plugin-manifest-npm-3.14.0-2322bdf147-4abbfe8953.zip/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"icon":"src/images/android-chrome-512x512.png","name":"Kevin Carlos","short_name":"Personal website to host fun side projects.","start_url":"/","background_color":"#ffffff","theme_color":"#ffffff","display":"standalone","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"6e75cb78dc6b7838e295b9f6ac0585b5"},
    },{
      name: 'default-site-plugin',
      plugin: require('/Users/kevincarlos/Documents/projects/kevin-carlos.github.io/packages/kevin-carlos.github.io/gatsby-ssr'),
      options: {"plugins":[]},
    }]
/* global plugins */
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`
  }

  throw err
}

export function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      return
    }

    try {
      const result = apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  })

  return results.length ? results : [defaultReturn]
}

export async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      continue
    }

    try {
      const result = await apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  }

  return results.length ? results : [defaultReturn]
}