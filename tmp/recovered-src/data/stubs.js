function _typeof(o){return typeof o;}
function _regeneratorRuntime(){return {mark(f){return f;},wrap(f){return function(){return {next:()=>({value:undefined,done:true})};};},await:v=>v,async:f=>function(){return Promise.resolve(f&&f.apply(this,arguments));},isGeneratorFunction(){return false;},keys(){return {}}};}
function _defineProperty(o,k,v){o[k]=v;return o;}
function _createForOfIteratorHelper(o){let i=0;const arr=Array.from(o||[]);return {s(){i=0;},n(){return {value:arr[i],done:i++>=arr.length};},e(){},f(){}};}
const u=()=>[];
function customRequire(p){
  if(p.includes('typeof'))return _typeof;
  if(p.includes('regeneratorRuntime'))return _regeneratorRuntime;
  if(p.includes('defineProperty'))return _defineProperty;
  if(p.includes('createForOfIteratorHelper'))return _createForOfIteratorHelper;
  if(p.includes('unsupportedIterableToArray'))return u;
  if(p.includes('toPrimitive'))return ()=>{};
  if(p.includes('arrayLikeToArray'))return (a,n)=>{if(n==null||n>a.length)n=a.length;const r=new Array(n);for(let i=0;i<n;i++)r[i]=a[i];return r;};
  if(p.includes('Objectentries'))return e=>Object.entries(e);
  if(p.includes('Arrayincludes'))return Array.prototype.includes;
  throw new Error('require '+p);
}
function make(System){
const wx={getSystemInfoSync(){return {platform:'devtools',SDKVersion:'3.0.0',system:'iOS 16',version:'8.0.0',pixelRatio:3,screenWidth:375,screenHeight:812,windowWidth:375,windowHeight:812,safeArea:{top:44,bottom:778,left:0,right:375,width:375,height:734},brand:'devtools',model:'devtools'};},getMenuButtonBoundingClientRect(){return {top:44,left:295,right:365,bottom:77,width:70,height:33};},onShow(){},onHide(){},onShareAppMessage(){},onMemoryWarning(){},getLaunchOptionsSync(){return {scene:1001,query:{}};},getUpdateManager(){return {onCheckForUpdate(){},onUpdateReady(){},onUpdateFailed(){},applyUpdate(){}};},createInnerAudioContext(){return {play(){},pause(){},stop(){},destroy(){},seek(){},onCanplay(){},onPlay(){},onEnded(){},onError(){},offEnded(){},volume:1,loop:false,src:'',node:{}};},getFileSystemManager(){return {readFileSync(){return '';},writeFileSync(){},access(){},mkdir(){},unlink(){},readdir(){return [];},stat(){},copyFileSync(){},rmdir(){}};},setStorage(){},setStorageSync(){},getStorageSync(){return '';},removeStorageSync(){},login(){},getUserInfo(){},createCanvas(){return {getContext(){return {};},width:0,height:0};},createImage(){return {};},onAudioInterruptionBegin(){},onAudioInterruptionEnd(){},onError(){},env:{USER_DATA_PATH:'/tmp'},getOpenDataContext(){return {postMessage(){},canvas:{}};},openDataContext:{postMessage(){}},request(){return {abort(){}};},showShareMenu(){},hideShareMenu(){},showToast(){},showModal(){},vibrateShort(){},vibrateLong(){},setKeepScreenOn(){},onShareTimelineMessage(){},getStorage(){},setUserCloudStorage(){},getFriendCloudStorage(){},createRewardedVideoAd(){return {load(){},show(){},onLoad(){},onError(){},onClose(){},offClose(){}};},createInterstitialAd(){return {load(){},show(){},onLoad(){},onError(){},onClose(){}};},createBannerAd(){return {show(){},destroy(){},hide(){},onError(){},onLoad(){},onResize(){}};},navigateToMiniProgram(){},setClipboardData(){},getClipboardData(){},onWindowResize(){},offWindowResize(){},triggerGC(){},getPerformance(){return {now(){return Date.now();}};},base64ToArrayBuffer(s){return Buffer.from(s,'base64');},arrayBufferToBase64(b){return Buffer.from(b).toString('base64');},reportEvent(){},reportMonitor(){},onWindowResize(){},getDeviceInfo(){return {};},getWindowInfo(){return {};},getAppBaseInfo(){return {};},getSystemSetting(){return {};},getAppAuthorizeSetting(){return {};}};
const sandbox={require:customRequire,System,console,wx,setTimeout,setInterval,clearTimeout,clearInterval};
sandbox.global=sandbox;sandbox.GameGlobal=sandbox;sandbox.window=sandbox;sandbox.globalThis=sandbox;
return sandbox;
}
module.exports={make};
