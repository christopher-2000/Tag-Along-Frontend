import{_ as i}from"./index-CJJTxTvJ.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-I898chjb.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-I898chjb.js","assets/ValueWithRandom-b8FJDvNX.js","assets/index-CJJTxTvJ.js","assets/index-BdCjq2u7.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
