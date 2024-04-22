import{_ as o}from"./index-CJJTxTvJ.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-CCL7M0rA.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-CCL7M0rA.js","assets/index-CJJTxTvJ.js","assets/index-BdCjq2u7.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
