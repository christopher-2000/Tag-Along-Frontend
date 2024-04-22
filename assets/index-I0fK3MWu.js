import{_ as o}from"./index-CJJTxTvJ.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-BQYF5hV3.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-BQYF5hV3.js","assets/index-CJJTxTvJ.js","assets/index-BdCjq2u7.css","assets/ValueWithRandom-b8FJDvNX.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
