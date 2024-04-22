import{_ as c}from"./index-CJJTxTvJ.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-DyULyo9Y.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-DyULyo9Y.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-CJJTxTvJ.js","assets/index-BdCjq2u7.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
