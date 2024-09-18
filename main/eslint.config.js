import pluginVue from 'eslint-plugin-vue'
export default [
    ...pluginVue.configs["flat/essential"],
    ...pluginVue.configs['flat/recommended'],
  {
    rules: {
    }
  }
]