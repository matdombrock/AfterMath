import defaultConfig from '../data/default-config.json';
const configManager = {
  defaultConfig: defaultConfig,// Export for access
  get configValues(){
    const out = {}
    for(let [name,data] of Object.entries(defaultConfig)){
      out[name] = data.value || false;
    }
    return out;
  }
}

export default configManager;