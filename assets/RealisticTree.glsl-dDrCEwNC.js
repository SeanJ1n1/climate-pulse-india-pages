import{an as fi,ao as mr,x as p,y as v,z as lt,u as fr,s as Y,t as ct,dV as vr,ds as _s,P as zi,a5 as bs,dW as ws,dX as ys,aj as Ms,c2 as Ke,K as Ts,h as Ss,dY as $s,bQ as Cs,bP as gr,d4 as ti,ai as Es,dZ as Rs,v as Ps,bW as Ne,a_ as Fr,ap as Oo,bM as Os,_ as xr}from"./index-C7pZXnFk.js";import{Y as Q,E as w,G as sr,T as Dt,N as ri,S as As,O as Li,D as Dr,C as Ir,U as Fs,_ as Ds,A as Is,R as Ao,n as Ns}from"./enums-CVsE7NBb.js";import{l as zs,s as W,g as nr,h as Ls,o as ir,m as Vs,T as ii,f as Vi,J as Bi,p as Bs,y as js,I as ji}from"./BufferView-CeaL5uGq.js";import{o as q,r as J,P as pe,g as ie,u as vi,I as lr,v as Gs,c as me,_ as ve,R as je,s as re,A as Ce,E as Ge,q as ze,H as Ie,p as Fo,Z as Gi,X as oi,K as Do,y as Us,N as ks}from"./vec32-DLzpJE4S.js";import{v as _,a5 as ce,cy as It,a6 as yt,hm as rt,iK as Hs,iL as Ws,aQ as qs,iM as Io,iN as No,a4 as _r,cB as ne,cY as ai,cP as Xs,gv as Ys,gh as Zs,dz as Lt,dt as Xe,fR as si,cX as Ui,cN as Ks,P as he,d4 as qe,iO as Mt,bS as Js,ak as Qs,_ as ni,bR as en,aw as tn,dB as li,cW as Nr,V as ki,a0 as Hi,N as zr,a2 as Ht,cA as Lr,c_ as rn,iP as on,iQ as an,iH as sn,iR as nn,iS as Wi,iT as ln,dw as Wt,cv as qi,iU as cn,iV as un,iW as dn,bF as at,eS as ci,bo as zo,iX as hn,iY as pn,bp as ge,c3 as ui,gQ as Lo,eT as br,dA as mn,a8 as fn,dk as vn,U as gn,eU as xn,fS as _n,p as Vo,fU as st,b1 as di}from"./report-store-ta5zAhil.js";import{s as Bo,P as wr,I as jo,V as Go,b as Uo,f as bn,k as ko,c as wn,e as yn}from"./sphere-axKX7CVP.js";import{v as Ho,h as Wo,x as Mn,y as qo,m as Tn,k as Sn,S as $n,w as Cn,O as En,d as Rn,q as Pn,a as On,b as An}from"./frustum-DCrLHMq0.js";import"./vectorStacks-BSB7m7IL.js";import{Q as gi,t as Xi}from"./InterleavedLayout-DWN_jlf_.js";import{a as Fn,r as Xo,t as Yi,n as Gt}from"./vec2f64-DCcDeJvX.js";import{n as Yo,t as Zo,a as Dn}from"./VertexAttributeLocations-W6y2attr.js";import{t as d,n as L}from"./glsl-B5bJgrnA.js";import{n as qt}from"./time-ClENgjgA.js";import{a as In,r as Nn}from"./Cyclical-BLQWg6rV.js";import{n as Zi}from"./projectVectorToVector-BeV2CQQr.js";import{G as zn,K as Ln}from"./orientedBoundingBox-Fx1iDPDU.js";import{i as Ki}from"./projectPointToVector-CKMfOVRK.js";import{L as Vn,U as Ji,j as Qi,O as eo,Z as Bn,k as jn}from"./plane-BHKw8pto.js";import{A as Gn}from"./normalizeUtils-D_QZfZvM.js";function Zh(t,e=!1){return t<=fi?e?new Array(t).fill(0):new Array(t):new Float32Array(t)}function Kh(t){return(Array.isArray(t)?t.length:t.byteLength/8)<=fi?Array.from(t):new Float32Array(t)}function Un(t,e){const r=Math.sqrt(e[0]*e[0]+e[4]*e[4]+e[8]*e[8]),i=Math.sqrt(e[1]*e[1]+e[5]*e[5]+e[9]*e[9]),o=Math.sqrt(e[2]*e[2]+e[6]*e[6]+e[10]*e[10]);return q(t,r,i,o),t}function kn(t,e,r,i=_()){const o=J(t),a=J(e),s=pe(t,e)/(o*a);if(s<.9999999999999999){const n=Math.acos(s),l=((1-r)*o+r*a)/Math.sin(n),c=l/o*Math.sin((1-r)*n),u=l/a*Math.sin(r*n);return ie(to,t,c),ie(ro,e,u),vi(i,to,ro)}return lr(i,t,e,r)}const to=_(),ro=_();let X=class extends mr{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};p([v()],X.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),p([v()],X.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),p([v()],X.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),p([v()],X.prototype,"DECONFLICTOR_SHOW_GRID",void 0),p([v()],X.prototype,"LABELS_SHOW_BORDER",void 0),p([v()],X.prototype,"TEXT_SHOW_BASELINE",void 0),p([v()],X.prototype,"TEXT_SHOW_BORDER",void 0),p([v()],X.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),p([v()],X.prototype,"OVERLAY_SHOW_CENTER",void 0),p([v()],X.prototype,"SHOW_POI",void 0),p([v()],X.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),p([v()],X.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),p([v()],X.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),p([v()],X.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),p([v()],X.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),p([v()],X.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),p([v()],X.prototype,"I3S_TREE_SHOW_TILES",void 0),p([v()],X.prototype,"I3S_SHOW_MODIFICATIONS",void 0),p([v()],X.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),p([v()],X.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),p([v()],X.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),p([v()],X.prototype,"LINE_WIREFRAMES",void 0),X=p([lt("esri.views.3d.support.debugFlags")],X);const Qh=new X,Hn=()=>ct.getLogger("esri.views.webgl.checkWebGLError");function Wn(t){switch(t.getError()){case t.NO_ERROR:return null;case t.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case t.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case t.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case t.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case t.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case t.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const qn=!!fr("enable-feature:webgl-debug");function hi(){return qn}function Je(t,e=hi()){if(e){const r=Wn(t);if(r){const i=new Error().stack;Hn().error(new Y("webgl-error","WebGL error occurred",{message:r,stack:i}))}}}function ep(t){switch(t){case 6406:case 6409:case 6403:case 36244:case 6402:case 34041:return 1;case 6410:case 33319:case 33320:return 2;case 6407:case 36248:return 3;case 6408:case 36249:return 4}return 0}function Xn(t){switch(t){case 6406:case 6409:case 6403:case 36244:case w.R8:case w.R8I:case w.R8UI:case w.R8_SNORM:case 36168:return 1;case 6410:case 33319:case 33320:case w.RGBA4:case w.R16F:case w.R16I:case w.R16UI:case w.RG8:case w.RG8I:case w.RG8UI:case w.RG8_SNORM:case w.RGB565:case w.RGB5_A1:case Dt.DEPTH_COMPONENT16:return 2;case 6407:case 36248:case w.RGB8:case w.RGB8I:case w.RGB8UI:case w.RGB8_SNORM:case w.SRGB8:case Dt.DEPTH_COMPONENT24:return 3;case 6408:case 36249:case w.RGBA8:case w.R32F:case w.R11F_G11F_B10F:case w.RG16F:case w.R32I:case w.R32UI:case w.RG16I:case w.RG16UI:case w.RGBA8I:case w.RGBA8UI:case w.RGBA8_SNORM:case w.SRGB8_ALPHA8:case w.RGB9_E5:case w.RGB10_A2UI:case w.RGB10_A2:case Dt.DEPTH_COMPONENT32F:case sr.DEPTH24_STENCIL8:return 4;case sr.DEPTH32F_STENCIL8:return 5;case w.RGB16F:case w.RGB16I:case w.RGB16UI:return 6;case w.RG32F:case w.RG32I:case w.RG32UI:case w.RGBA16F:case w.RGBA16I:case w.RGBA16UI:return 8;case w.RGB32F:case w.RGB32I:case w.RGB32UI:return 12;case w.RGBA32F:case w.RGBA32I:case w.RGBA32UI:return 16;case Q.COMPRESSED_RGB_S3TC_DXT1_EXT:case Q.COMPRESSED_RGBA_S3TC_DXT1_EXT:return .5;case Q.COMPRESSED_RGBA_S3TC_DXT3_EXT:case Q.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case Q.COMPRESSED_R11_EAC:case Q.COMPRESSED_SIGNED_R11_EAC:case Q.COMPRESSED_RGB8_ETC2:case Q.COMPRESSED_SRGB8_ETC2:case Q.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case Q.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return .5;case Q.COMPRESSED_RG11_EAC:case Q.COMPRESSED_SIGNED_RG11_EAC:case Q.COMPRESSED_RGBA8_ETC2_EAC:case Q.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}let Ko=class{constructor(e=0,r=e){this.width=e,this.height=r,this.type=0,this.target=3553,this.pixelFormat=6408,this.dataType=ri.UNSIGNED_BYTE,this.samplingMode=9729,this.wrapMode=10497,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.compareEnabled=!1,this.linearFilterDepth=!1,this.depth=1,this.isImmutable=!1}};function Yn(t){return t.width<=0||t.height<=0||t.depth<=0?0:Math.round(t.width*t.height*t.depth*(t.hasMipmap?4/3:1)*(t.internalFormat==null?4:Xn(t.internalFormat))*(t.target===34067?6:1))}const St=()=>ct.getLogger("esri/views/webgl/textureUtils");function $t(t){const{width:e,height:r,depth:i}=t;(e!=null&&e<0||r!=null&&r<0||i!=null&&i<0)&&St().error("Negative dimension parameters are not allowed!");const{internalFormat:o}=t;if(o&&(Jo(o)||Qo(o))){const{linearFilterDepth:a,compareEnabled:s,samplingMode:n,hasMipmap:l}=t;l&&St().error("Depth textures cannot have mipmaps"),a?n!==9729&&n!==9728&&St().error("Depth textures cannot sample mipmaps"):(n!==9728&&St().error("Depth textures without filtering must use NEAREST filtering"),s&&St().error("Depth textures without filtering cannot use compare function"))}}function Zn(t){return As.includes(t)}function Jo(t){return vr(Dt,t)}function Qo(t){return vr(sr,t)}function Kn(t){return t!=null&&vr(Q,t)}function mt(t){return t!=null&&"type"in t&&t.type==="compressed"}function Jn(t){return t!=null&&"byteLength"in t}function io(t){return t!=null&&!mt(t)&&!Jn(t)}function ht(t){return t===32879||t===35866}function oo(t,e,r,i=1){let o=Math.max(e,r);return t===32879&&(o=Math.max(o,i)),Math.floor(Math.log2(o))+1}function Xt(t){if(t.internalFormat!=null)return t.internalFormat;switch(t.dataType){case ri.FLOAT:switch(t.pixelFormat){case 6408:return w.RGBA32F;case 6407:return w.RGB32F;default:throw new Y("texture:unknown-format","Unable to derive format")}case ri.UNSIGNED_BYTE:switch(t.pixelFormat){case 6408:return w.RGBA8;case 6407:return w.RGB8}}const{pixelFormat:e}=t;return t.internalFormat=e===34041?sr.DEPTH24_STENCIL8:e===6402?Dt.DEPTH_COMPONENT24:e,t.internalFormat}function Qn(t){let e="width"in t?t.width:t.codedWidth,r="height"in t?t.height:t.codedHeight;return t instanceof HTMLVideoElement&&(e=t.videoWidth,r=t.videoHeight),{width:e,height:r,depth:1}}let el=class ea extends Ko{constructor(e,r){switch(super(),this.context=e,Object.assign(this,r),this.internalFormat){case w.R16F:case w.R32F:case w.R8_SNORM:case w.R8:this.pixelFormat=6403;break;case w.R8I:case w.R8UI:case w.R16I:case w.R16UI:case w.R32I:case w.R32UI:this.pixelFormat=36244}}static validate(e,r){return new ea(e,r)}};const tl=!!fr("esri-tests-disable-gpu-memory-measurements"),Pe=()=>ct.getLogger("esri/views/webgl/Texture");var K;let ta=(K=class{constructor(e,r=null,i=null){if(this.type=1,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._shadowFilterDirty=!1,this._wasImmutablyAllocated=!1,"context"in e)this._descriptor=e,i=r;else{const o=el.validate(e,r);if(!o)throw new Y("texture:invalid-descriptor","Texture descriptor invalid");this._descriptor=o}this._descriptor.target===34067?this._setDataCubeMap(i):this.setData(i)}get glName(){return this._glName}get descriptor(){return this._descriptor}get usedMemory(){return tl?0:Yn(this._descriptor)}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty||this._shadowFilterDirty}get hasWebGLTextureObject(){return!!this._glName}dispose(){this.abortCompression(),this.hasWebGLTextureObject&&this._descriptor.context?.gl&&(this._descriptor.context.instanceCounter.decrement(Li.Texture,this),this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null,this._descriptor=null)}release(){this.dispose()}[Symbol.dispose](){this.dispose()}resize(e,r){const i=this._descriptor;if(i.width!==e||i.height!==r){if(this._wasImmutablyAllocated)throw new Y("texture:immutable-resize","Immutable textures can't be resized!");i.width=e,i.height=r,this._descriptor.target===34067?this._setDataCubeMap(null):this.setData(null)}}enableCompression(e){this._descriptor.compress=e}disableCompression(){this._descriptor.compress=void 0}setData(e){this.abortCompression(),!mt(e)&&this._descriptor.internalFormat&&vr(Q,this._descriptor.internalFormat)&&(this._descriptor.internalFormat=void 0),this._setData(e),!mt(e)&&this._descriptor.compress&&this._compressOnWorker(e)}updateData(e,r,i,o,a,s,n=0){s||Pe().error("An attempt to use uninitialized data!"),this.hasWebGLTextureObject||Pe().error("An attempt to update uninitialized texture!");const l=this._descriptor;l.internalFormat=Xt(l);const{context:c,pixelFormat:u,dataType:h,target:f,isImmutable:g}=l;if(g&&!this._wasImmutablyAllocated)throw new Y("texture:uninitialized","Cannot update immutable texture before allocation!");const m=c.bindTexture(this,K.TEXTURE_UNIT_FOR_UPDATES,!0);(r<0||i<0||r+o>l.width||i+a>l.height)&&Pe().error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:x}=c;n&&(o&&a||Pe().warn("Must pass width and height if `UNPACK_SKIP_ROWS` is used"),x.pixelStorei(x.UNPACK_SKIP_ROWS,n)),io(s)?x.texSubImage2D(f,e,r,i,o,a,u,h,s):mt(s)?x.compressedTexSubImage2D(f,e,r,i,o,a,l.internalFormat,s.levels[e]):x.texSubImage2D(f,e,r,i,o,a,u,h,s),n&&x.pixelStorei(x.UNPACK_SKIP_ROWS,0),c.bindTexture(m,K.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(e,r,i,o,a,s,n,l){l||Pe().error("An attempt to use uninitialized data!"),this.hasWebGLTextureObject||Pe().error("An attempt to update an uninitialized texture!");const c=this._descriptor;c.internalFormat=Xt(c);const{context:u,pixelFormat:h,dataType:f,isImmutable:g,target:m}=c;if(g&&!this._wasImmutablyAllocated)throw new Y("texture:uninitialized","Cannot update immutable texture before allocation!");ht(m)||Pe().warn("Attempting to set 3D texture data on a non-3D texture");const x=u.bindTexture(this,K.TEXTURE_UNIT_FOR_UPDATES);u.setActiveTexture(K.TEXTURE_UNIT_FOR_UPDATES),(r<0||i<0||o<0||r+a>c.width||i+s>c.height||o+n>c.depth)&&Pe().error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:b}=u;if(mt(l))l=l.levels[e],b.compressedTexSubImage3D(m,e,r,i,o,a,s,n,c.internalFormat,l);else{const T=l;b.texSubImage3D(m,e,r,i,o,a,s,n,h,f,T)}u.bindTexture(x,K.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;if(e.width===0||e.height===0)return;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new Y("texture:immutable-change","Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,$t(e)}e.samplingMode===9729?(this._samplingModeDirty=!0,e.samplingMode=9985):e.samplingMode===9728&&(this._samplingModeDirty=!0,e.samplingMode=9984);const r=this._descriptor.context.bindTexture(this,K.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(K.TEXTURE_UNIT_FOR_UPDATES),this._descriptor.context.gl.generateMipmap(e.target),this._descriptor.context.bindTexture(r,K.TEXTURE_UNIT_FOR_UPDATES)}clearMipmap(){const e=this._descriptor;if(e.hasMipmap){if(this._wasImmutablyAllocated)throw new Y("texture:immutable-change","Cannot delete mipmaps to immutable texture after allocation");e.hasMipmap=!1,this._samplingModeDirty=!0,$t(e)}e.samplingMode===9985?(this._samplingModeDirty=!0,e.samplingMode=9729):e.samplingMode===9984&&(this._samplingModeDirty=!0,e.samplingMode=9728)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,$t(this._descriptor),this._wrapModeDirty=!0)}setShadowFiltering(e){e!==this._descriptor.linearFilterDepth&&(this._descriptor.linearFilterDepth=this._descriptor.compareEnabled=e,this.setSamplingMode(e?9729:9728),$t(this._descriptor),this._shadowFilterDirty=!0)}applyChanges(){this._samplingModeDirty&&(this._applySamplingMode(),this._samplingModeDirty=!1),this._wrapModeDirty&&(this._applyWrapMode(),this._wrapModeDirty=!1),this._shadowFilterDirty&&(this._applyShadowMode(),this._shadowFilterDirty=!1)}abortCompression(){this._compressionAbortController=_s(this._compressionAbortController)}_setData(e,r){const i=this._descriptor,o=i.context?.gl;if(!o)return;Je(o),this.hasWebGLTextureObject||(this._glName=o.createTexture(),i.context.instanceCounter.increment(Li.Texture,this)),$t(i);const a=i.context.bindTexture(this,K.TEXTURE_UNIT_FOR_UPDATES);i.context.setActiveTexture(K.TEXTURE_UNIT_FOR_UPDATES),this._configurePixelStorage(),Je(o);const s=r??i.target,n=ht(s);if(io(e))this._setDataFromTexImageSource(e,s);else{const{width:l,height:c,depth:u}=i;if(l==null||c==null)throw new Y("texture:missing-size","Width and height must be specified!");if(n&&u==null)throw new Y("texture:missing-depth","Depth must be specified!");if(i.internalFormat=Xt(i),i.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(s,i.internalFormat,i.hasMipmap,l,c,u),mt(e)){if(!Kn(i.internalFormat))throw new Y("texture:format-mismatch","Attempting to use compressed data with an uncompressed format!");this._setDataFromCompressedSource(e,i.internalFormat,s)}else this._texImage(s,0,i.internalFormat,l,c,u,e),Je(o),i.hasMipmap&&this.generateMipmap()}this._applySamplingMode(),this._applyWrapMode(),this._applyAnisotropicFilteringParameters(),this._applyShadowMode(),Je(o),i.context.bindTexture(a,K.TEXTURE_UNIT_FOR_UPDATES)}_setDataCubeMap(e=null){for(let r=34069;r<=34074;r++)this._setData(e,r)}_configurePixelStorage(){const e=this._descriptor.context.gl,{unpackAlignment:r,flipped:i,preMultiplyAlpha:o}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,r),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,i?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o?1:0)}_setDataFromTexImageSource(e,r){const{gl:i}=this._descriptor.context,o=this._descriptor;o.internalFormat=Xt(o);const a=ht(r),{width:s,height:n,depth:l}=Qn(e);o.width&&o.height,o.width||(o.width=s),o.height||(o.height=n),a&&o.depth,a&&(o.depth=l),o.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(r,o.internalFormat,o.hasMipmap,s,n,l),this._texImage(r,0,o.internalFormat,s,n,l,e),Je(i),o.hasMipmap&&(this.generateMipmap(),Je(i))}_setDataFromCompressedSource(e,r,i){const o=this._descriptor,{width:a,height:s,depth:n}=o,l=e.levels,c=oo(i,a,s,n),u=Math.min(c,l.length)-1;this._descriptor.context.gl.texParameteri(o.target,33085,u),this._forEachMipmapLevel((h,f,g,m)=>{const x=l[Math.min(h,l.length-1)];this._compressedTexImage(i,h,r,f,g,m,x)},u)}_texStorage(e,r,i,o,a,s){const{gl:n}=this._descriptor.context;if(!Zn(r)&&!Jo(r)&&!Qo(r))throw new Y("texture:missing-format","Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const l=i?oo(e,o,a,s):1;if(ht(e)){if(s==null)throw new Y("texture:missing-depth","Missing depth dimension for 3D texture upload");n.texStorage3D(e,l,r,o,a,s)}else n.texStorage2D(e,l,r,o,a);this._wasImmutablyAllocated=!0}_texImage(e,r,i,o,a,s,n){const l=this._descriptor.context.gl,c=ht(e),{isImmutable:u,pixelFormat:h,dataType:f}=this._descriptor;if(u){if(n!=null){const g=n;if(c){if(s==null)throw new Y("texture:missing-depth","Missing depth dimension for 3D texture upload");l.texSubImage3D(e,r,0,0,0,o,a,s,h,f,g)}else l.texSubImage2D(e,r,0,0,o,a,h,f,g)}}else{const g=n;if(c){if(s==null)throw new Y("texture:missing-depth","Missing depth dimension for 3D texture upload");l.texImage3D(e,r,i,o,a,s,0,h,f,g)}else l.texImage2D(e,r,i,o,a,0,h,f,g)}}_compressedTexImage(e,r,i,o,a,s,n){const l=this._descriptor.context.gl,c=ht(e);if(this._descriptor.isImmutable){if(n!=null)if(c){if(s==null)throw new Y("texture:missing-depth","Missing depth dimension for 3D texture upload");l.compressedTexSubImage3D(e,r,0,0,0,o,a,s,i,n)}else l.compressedTexSubImage2D(e,r,0,0,o,a,i,n)}else if(c){if(s==null)throw new Y("texture:missing-depth","Missing depth dimension for 3D texture upload");l.compressedTexImage3D(e,r,i,o,a,s,0,n)}else l.compressedTexImage2D(e,r,i,o,a,0,n)}async _compressOnWorker(e){const{width:r,height:i,context:o,flipped:a,preMultiplyAlpha:s,hasMipmap:n}=this._descriptor,l=this._descriptor.compress?.compressionTracker,c=this._descriptor.compress?.compressionCallback,{compressedTextureETC:u,compressedTextureS3TC:h}=o.capabilities;if(!K.compressionWorkerHandle?.isCompressible(e,this._descriptor)||!u&&!h)return;this.abortCompression();const f=new AbortController;let g;this._compressionAbortController=f,l?.increment();try{e instanceof Uint8Array?g=e.buffer:(g=await createImageBitmap(e,{imageOrientation:a?"flipY":"none"}),zi(f));const m={data:g,width:r,height:i,needsFlip:e instanceof Uint8Array&&this.descriptor.flipped,components:this._descriptor.pixelFormat===6408?4:3,preMultiplyAlpha:s,hasMipmap:n,hasETC:!!u,hasS3TC:!!h},x=await K.compressionWorkerHandle.invoke(m,f.signal,"low");if(zi(f),x.compressedTexture&&this.hasWebGLTextureObject){const b=this.usedMemory;this._descriptor.internalFormat=x.internalFormat,this._setData(x.compressedTexture),c?.(b-this.usedMemory)}}catch(m){bs(m)||Pe().error("Texture compression failed!")}finally{l?.decrement(),this._compressionAbortController?.signal.aborted&&(this._compressionAbortController=null),g instanceof ImageBitmap&&g.close()}}_forEachMipmapLevel(e,r=1/0){let{width:i,height:o,depth:a,hasMipmap:s,target:n}=this._descriptor;const l=n===32879;if(i==null||o==null||l&&a==null)throw new Y("texture:missing-size","Missing texture dimensions for mipmap calculation");for(let c=0;e(c,i,o,a),s&&(i!==1||o!==1||l&&a!==1)&&!(c>=r);++c)i=Math.max(1,i>>1),o=Math.max(1,o>>1),l&&(a=Math.max(1,a>>1))}_applySamplingMode(){const e=this._descriptor,r=e.context?.gl;let i=e.samplingMode,o=e.samplingMode;i===9985||i===9987?(i=9729,e.hasMipmap||(o=9729)):i!==9984&&i!==9986||(i=9728,e.hasMipmap||(o=9728)),r.texParameteri(e.target,r.TEXTURE_MAG_FILTER,i),r.texParameteri(e.target,r.TEXTURE_MIN_FILTER,o)}_applyWrapMode(){const e=this._descriptor,r=e.context?.gl;typeof e.wrapMode=="number"?(r.texParameteri(e.target,r.TEXTURE_WRAP_S,e.wrapMode),r.texParameteri(e.target,r.TEXTURE_WRAP_T,e.wrapMode)):(r.texParameteri(e.target,r.TEXTURE_WRAP_S,e.wrapMode.s),r.texParameteri(e.target,r.TEXTURE_WRAP_T,e.wrapMode.t))}_applyShadowMode(){const e=this._descriptor,r=e.context?.gl,i=e.compareEnabled?r.COMPARE_REF_TO_TEXTURE:r.NONE;r.texParameteri(e.target,r.TEXTURE_COMPARE_MODE,i),e.compareEnabled&&r.texParameteri(e.target,r.TEXTURE_COMPARE_FUNC,r.GREATER),Je(r)}_applyAnisotropicFilteringParameters(){const e=this._descriptor,r=e.context.capabilities.textureFilterAnisotropic;r&&e.context.gl.texParameterf(e.target,r.TEXTURE_MAX_ANISOTROPY,e.maxAnisotropy??1)}},K.TEXTURE_UNIT_FOR_UPDATES=0,K.compressionWorkerHandle=null,K);const Yt=()=>ct.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),rl=542327876,il=131072,ol=4;function xi(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function al(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const sl=xi("DXT1"),nl=xi("DXT3"),ll=xi("DXT5"),cl=31,ul=0,dl=1,hl=2,pl=3,ml=4,fl=7,vl=20,gl=21;function rp(t,e,r){const i=xl(r,e.hasMipmap??!1);if(i==null)throw new Error("DDS texture data is null");const{textureData:o,internalFormat:a,width:s,height:n}=i;return e.samplingMode=o.levels.length>1?9987:9729,e.hasMipmap=o.levels.length>1,e.internalFormat=a,e.width=s,e.height=n,new ta(t,e,o)}function xl(t,e){const r=new Int32Array(t.buffer,t.byteOffset,cl);if(r[ul]!==rl)return Yt().error("Invalid magic number in DDS header"),null;if(!(r[vl]&ol))return Yt().error("Unsupported format, must contain a FourCC code"),null;const i=r[gl];let o,a;switch(i){case sl:o=8,a=Q.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case nl:o=16,a=Q.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case ll:o=16,a=Q.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Yt().error("Unsupported FourCC code:",al(i)),null}let s=1,n=r[ml],l=r[pl];(3&n||3&l)&&(Yt().warn("Rounding up compressed texture size to nearest multiple of 4."),n=n+3&-4,l=l+3&-4);const c=n,u=l;let h,f;r[hl]&il&&e!==!1&&(s=Math.max(1,r[fl]));let g=t.byteOffset+r[dl]+4;const m=[];for(let x=0;x<s;++x)f=(n+3>>2)*(l+3>>2)*o,h=new Uint8Array(t.buffer,g,f),m.push(h),g+=f,n=Math.max(1,n>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:m},internalFormat:a,width:c,height:u}}function ip(t){if(t.length<fi)return Array.from(t);if(Array.isArray(t))return Float64Array.from(t);if(!("BYTES_PER_ELEMENT"in t))return Array.from(t);switch(t.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(t);case 2:return ws(t)?zs().from(t):ys(t)?Uint16Array.from(t):Int16Array.from(t);case 4:return Float32Array.from(t);default:return Float64Array.from(t)}}let op=class ra{get center(){return ce(this._data[0],this._data[1],this._data[2])}get radius(){return this._data[3]}get bbMin(){return ce(this._data[4],this._data[5],this._data[6])}get bbMax(){return ce(this._data[7],this._data[8],this._data[9])}constructor(e,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=r,this.position=i,this._data=[.1,0,0,0,0,0,0,0,0,0],this._children=void 0,W(e.length>=1),W(i.size===3||i.size===4);const{data:o,size:a,indices:s}=i;W(s.length%this._numIndexPerPrimitive===0),W(s.length>=e.length*this._numIndexPerPrimitive);const n=e.length;let l=a*s[this._numIndexPerPrimitive*e[0]];Qe.clear(),Qe.push(l);const c=ce(o[l],o[l+1],o[l+2]),u=It(c);for(let m=0;m<n;++m){const x=this._numIndexPerPrimitive*e[m];for(let b=0;b<this._numIndexPerPrimitive;++b){l=a*s[x+b],Qe.push(l);let T=o[l];c[0]=Math.min(T,c[0]),u[0]=Math.max(T,u[0]),T=o[l+1],c[1]=Math.min(T,c[1]),u[1]=Math.max(T,u[1]),T=o[l+2],c[2]=Math.min(T,c[2]),u[2]=Math.max(T,u[2])}}for(let m=0;m<3;++m)this._data[4+m]=c[m],this._data[7+m]=u[m];const h=lr(_(),this.bbMin,this.bbMax,.5);let f=.5*Math.max(Math.max(u[0]-c[0],u[1]-c[1]),u[2]-c[2]),g=f*f;for(let m=0;m<Qe.length;++m){l=Qe.at(m);const x=o[l]-h[0],b=o[l+1]-h[1],T=o[l+2]-h[2],E=x*x+b*b+T*T;if(E<=g)continue;const S=Math.sqrt(E),$=.5*(S-f);f+=$,g=f*f;const O=$/S;h[0]+=x*O,h[1]+=b*O,h[2]+=T*O}this._data[3]=f;for(let m=0;m<3;++m)this._data[0+m]=h[m];Qe.clear()}getChildren(){if(this._children||Gs(this.bbMin,this.bbMax)<=1)return this._children;const e=lr(_(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,i=new Uint8Array(r),o=new Array(8);for(let u=0;u<8;++u)o[u]=0;const{data:a,size:s,indices:n}=this.position;for(let u=0;u<r;++u){let h=0;const f=this._numIndexPerPrimitive*this.primitiveIndices[u];let g=s*n[f],m=a[g],x=a[g+1],b=a[g+2];for(let T=1;T<this._numIndexPerPrimitive;++T){g=s*n[f+T];const E=a[g],S=a[g+1],$=a[g+2];E<m&&(m=E),S<x&&(x=S),$<b&&(b=$)}m<e[0]&&(h|=1),x<e[1]&&(h|=2),b<e[2]&&(h|=4),i[u]=h,++o[h]}let l=0;for(let u=0;u<8;++u)o[u]>0&&++l;if(l<2)return;const c=new Array(8);for(let u=0;u<8;++u)c[u]=o[u]>0?new Uint32Array(o[u]):void 0;for(let u=0;u<8;++u)o[u]=0;for(let u=0;u<r;++u){const h=i[u];c[h][o[h]++]=this.primitiveIndices[u]}this._children=new Array;for(let u=0;u<8;++u)c[u]!==void 0&&this._children.push(new ra(c[u],this._numIndexPerPrimitive,this.position));return this._children}static prune(){Qe.prune()}};const Qe=new Ms({deallocator:null});function _l(t){return t?{p0:It(t.p0),p1:It(t.p1),p2:It(t.p2)}:{p0:_(),p1:_(),p2:_()}}function ap(t,e,r){return me(Vr,e,t),me(ao,r,t),.5*J(ve(Vr,Vr,ao))}new Bo(Ho);new Bo(()=>_l());const Vr=_(),ao=_();function or(t){return t===4||t===5||t===6||t===7||t===8}function Br(t){return Ml(t)||t===3}function bl(t){return t===9||t===10}function wl(t){return t===0}function Ue(t){return wl(t)||_i(t)}function yl(t){return Ue(t)||bl(t)}function Ml(t){return yl(t)||ia(t)}function ia(t){return t===2}function _i(t){return t===1}function Tl(t){return ia(t)||or(t)}let Sl=class{constructor(e){this._material=e.material,this._techniques=e.techniques,this._output=e.output}dispose(){}get _stippleTextures(){return this._techniques.context?.stippleTextures}get _markerTextures(){return this._techniques.context?.markerTextures}getTechnique(e,r){return this._techniques.get(e,this._material.getConfiguration(this._output,r))}ensureResources(e){return 2}},$l=class{};const Ut=$l;let Cl=class extends Sl{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this.updateTexture(e.textureId),this._acquire(e.normalTextureId,r=>this._textureNormal=r),this._acquire(e.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(e.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(e.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){super.dispose(),this._texture=Ke(this._texture),this._textureNormal=Ke(this._textureNormal),this._textureEmissive=Ke(this._textureEmissive),this._textureOcclusion=Ke(this._textureOcclusion),this._textureMetallicRoughness=Ke(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?2:1}get textureBindParameters(){return new Rl(this._texture?.glTexture??null,this._textureNormal?.glTexture??null,this._textureEmissive?.glTexture??null,this._textureOcclusion?.glTexture??null,this._textureMetallicRoughness?.glTexture??null)}updateTexture(e){this._texture!=null&&e===this._texture.id||(this._texture=Ke(this._texture),this._acquire(e,r=>this._texture=r))}_acquire(e,r){if(e==null)return void r(null);const i=this._textures.acquire(e);if(Ts(i))return++this._numLoading,void i.then(o=>{if(this._disposed)return Ke(o),void r(null);r(o)}).finally(()=>--this._numLoading);r(i)}},El=class extends Ut{constructor(e=null){super(),this.textureEmissive=e}},Rl=class extends El{constructor(e,r,i,o,a,s,n){super(i),this.texture=e,this.textureNormal=r,this.textureOcclusion=o,this.textureMetallicRoughness=a,this.scale=s,this.normalTextureTransformMatrix=n}},Pl=class{constructor(e){this._bits=[...e]}equals(e){return Ss(this._bits,e.bits)}get code(){return this._code??=String.fromCharCode(...this._bits),this._code}get bits(){return this._bits}},Ol=class extends Ut{constructor(){super(),this._parameterBits=this._parameterBits?.map(()=>0)??[],this._parameterNames??=[]}get key(){return this._key??=new Pl(this._parameterBits),this._key}decode(e=this.key){const r=this._parameterBits;this._parameterBits=[...e.bits];const i=this._parameterNames.map(o=>`    ${o}: ${this[o]}`).join(`
`);return this._parameterBits=r,i}};function I(t={}){return(e,r)=>{e.hasOwnProperty("_parameterNames")||Object.defineProperty(e,"_parameterNames",{value:e._parameterNames?.slice()??[],configurable:!0,writable:!0}),e.hasOwnProperty("_parameterBits")||Object.defineProperty(e,"_parameterBits",{value:e._parameterBits?.slice()??[0],configurable:!0,writable:!0}),e._parameterNames.push(r);const i=t.count||2,o=Math.ceil(Math.log2(i)),a=e._parameterBits;let s=0;for(;a[s]+o>16;)s++,s>=a.length&&a.push(0);const n=a[s],l=(1<<o)-1<<n;a[s]+=o,t.count?Object.defineProperty(e,r,{get(){return(this._parameterBits[s]&l)>>n},set(c){if(this[r]!==c){if(this._key=null,this._parameterBits[s]=this._parameterBits[s]&~l|+c<<n&l,typeof c!="number")throw new Y("internal:invalid-shader-configuration",`Configuration value for ${r} must be a number, got ${typeof c}`);if(t.count==null)throw new Y("internal:invalid-shader-configuration",`Configuration value for ${r} must provide a count option`)}}}):Object.defineProperty(e,r,{get(){return!!((this._parameterBits[s]&l)>>n)},set(c){if(this[r]!==c&&(this._key=null,this._parameterBits[s]=this._parameterBits[s]&~l|+c<<n&l,typeof c!="boolean"))throw new Y("internal:invalid-shader-configuration",`Configuration value for ${r} must be boolean, got ${typeof c}`)}})}}let Al=class extends Ol{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}},ft=class extends Al{constructor(){super(...arguments),this.output=0,this.oitPass=0,this.hasSlicePlane=!1,this.hasHighlightMixTexture=!1,this.bindType=1,this.instanced=!1,this.writeDepth=!0}};p([I({count:11})],ft.prototype,"output",void 0),p([I({count:3})],ft.prototype,"oitPass",void 0),p([I()],ft.prototype,"hasSlicePlane",void 0),p([I()],ft.prototype,"hasHighlightMixTexture",void 0);let pi=class{constructor(){this._scale=0,this._angleFactor=0,this._minScale=0}update(e,r,i,o){i?(this._scale=Math.min(i.divisor/(r-i.offset),1),this._angleFactor=Fl(e),this._minScale=o!=null?Math.min(i.minPixelSize/o,1):0):(this._scale=1,this._minScale=1,this._angleFactor=1)}apply(e){const{_scale:r,_angleFactor:i,_minScale:o}=this;return e*yt(rt(r,1,i),o,1)}applyVec2(e,r){e[0]=this.apply(r[0]),e[1]=this.apply(r[1])}},vp=class{constructor(){this.evaluator=new pi,this.alignmentEvaluator=new pi}update(e,r,i,o,a,s){this.evaluator.update(e,r,i,o),this.alignmentEvaluator.update(e,r,a??i,(a?s:null)??o)}};function Fl(t){return Math.abs(t)**3}function Dl(t,e,r,i,o,a){let s=r.screenLength*t.pixelRatio;o!=null&&(no.update(i,e,o,a),s=no.apply(s));const n=s*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return yt(n*e,r.minWorldLength,r.maxWorldLength)}const Il=$s();function so(t,e){let r=!1;for(const i in e){const o=e[i];o!==void 0&&(Array.isArray(o)?Array.isArray(t[i])&&Il(o,t[i])||(t[i]=o.slice(),r=!0):t[i]!==o&&(r=!0,t[i]=o))}return r}const Nt={multiply:1,ignore:2,replace:3,tint:4},no=new pi;let Nl=class{constructor(e,r){this.id=Cs(),this.supportsEdges=!1,this._renderPriority=0,this._parameters=new r,so(this._parameters,e),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,r=!0){so(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this._parametersChanged())}validateParameters(e){}shouldRender(e){return this.visible&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bind.decorations)&&(this.parameters.renderOccluded&e.renderOccludedMask)!==0}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this._parametersChanged())}_parametersChanged(){this.repository?.materialChanged(this)}get renderOccludedFlags(){return this.visible?this.parameters.renderOccluded:0}get hasEmissions(){return!1}getConfiguration(e,r,i=new ft){return i.output=e,i.hasHighlightMixTexture=e===9&&r.highlightMixTexture!=null,i}};function yr(t,e,r=32774,i=[0,0,0,0]){return{srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function bi(t,e,r,i,o=32774,a=32774,s=[0,0,0,0]){return{srcRgb:t,srcAlpha:e,dstRgb:r,dstAlpha:i,opRgb:o,opAlpha:a,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}yr(0,771);yr(1,0);yr(1,1);const oa=yr(1,771),zl=bi(770,1,771,771);bi(0,0,768,1);const Ll={face:1029,mode:2305},Vl={face:1028,mode:2305},Bl=t=>t===2?Ll:t===1?Vl:null,jl={zNear:0,zFar:1},Mr={r:!0,g:!0,b:!0,a:!0};function Gl(t){return Kl.intern(t)}function Ul(t){return Jl.intern(t)}function kl(t){return Ql.intern(t)}function Hl(t){return ec.intern(t)}function Wl(t){return tc.intern(t)}function ql(t){return rc.intern(t)}function Xl(t){return ic.intern(t)}function Yl(t){return oc.intern(t)}function Zl(t){return ac.intern(t)}function Tr(t){return sc.intern(t)}let Ee=class{constructor(e,r){this._makeKey=e,this._makeRef=r,this._interns=new Map}intern(e){if(!e)return null;const r=this._makeKey(e),i=this._interns;return i.has(r)||i.set(r,this._makeRef(e)),i.get(r)??null}};function Re(t){return"["+t.join(",")+"]"}const Kl=new Ee(aa,t=>({__tag:"Blending",...t}));function aa(t){return t?Re([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const Jl=new Ee(sa,t=>({__tag:"Culling",...t}));function sa(t){return t?Re([t.face,t.mode]):null}const Ql=new Ee(na,t=>({__tag:"PolygonOffset",...t}));function na(t){return t?Re([t.factor,t.units]):null}const ec=new Ee(la,t=>({__tag:"DepthTest",...t}));function la(t){return t?Re([t.func]):null}const tc=new Ee(ca,t=>({__tag:"StencilTest",...t}));function ca(t){return t?Re([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const rc=new Ee(ua,t=>({__tag:"DepthWrite",...t}));function ua(t){return t?Re([t.zNear,t.zFar]):null}const ic=new Ee(da,t=>({__tag:"ColorWrite",...t}));function da(t){return t?Re([t.r,t.g,t.b,t.a]):null}const oc=new Ee(ha,t=>({__tag:"StencilWrite",...t}));function ha(t){return t?Re([t.mask]):null}const ac=new Ee(pa,t=>({__tag:"DrawBuffers",...t}));function pa(t){return t?Re(t.buffers):null}const sc=new Ee(nc,t=>({blending:Gl(t.blending),culling:Ul(t.culling),polygonOffset:kl(t.polygonOffset),depthTest:Hl(t.depthTest),stencilTest:Wl(t.stencilTest),depthWrite:ql(t.depthWrite),colorWrite:Xl(t.colorWrite),stencilWrite:Yl(t.stencilWrite),drawBuffers:Zl(t.drawBuffers)}));function nc(t){return t?Re([aa(t.blending),sa(t.culling),na(t.polygonOffset),la(t.depthTest),ca(t.stencilTest),ua(t.depthWrite),da(t.colorWrite),ha(t.stencilWrite),pa(t.drawBuffers)]):null}const lc=bi(1,0,1,771);function cc(t,e=!1){switch(t){case 0:return e?oa:zl;case 1:return lc;case 2:case 3:return null}}function uc(t){if(t.draped)return null;switch(t.oitPass){case 0:case 2:return t.writeDepth?jl:null;case 1:case 3:return null}}const dc=5e5,hc={factor:-1,units:-2};function pc({oitPass:t,enableOffset:e}){return e&&t===1?hc:null}function mc(t,e=513){return t===0||t===2?e:515}function fc(t,e){const r=_i(e);return t===1?r?{buffers:[Dr,Ir,Fs]}:{buffers:[Dr,Ir]}:r?{buffers:[Dr,Ir]}:null}let vc=class{constructor(e=0,r=!1,i=!0){this.tolerance=e,this.isVerticalRay=r,this.normalRequired=i}};const Zt=qs();function gc(t,e,r,i,o,a){if(!t.visible)return;const s=je(Pc,i,r),n=(u,h,f)=>a(u,f,h),{tolerance:l}=e,c=new vc(l,!1,e.options.normalRequired);if(t.boundingInfo)W(t.type===0),ma(t.boundingInfo,r,s,l,o,c,n);else{const u=t.positionAttribute,h=u.indices;wc(r,s,0,h.length/3,h,u.data,u.stride,o,c,n)}}const xc=_();function ma(t,e,r,i,o,a,s){if(t==null)return;const n=$c(r,xc);if(Hs(Zt,t.bbMin),Ws(Zt,t.bbMax),o?.applyToAabb(Zt),Cc(Zt,e,n,i)){const{primitiveIndices:l,position:c}=t,u=l?l.length:c.indices.length/3;if(u>Rc){const h=t.getChildren();if(h!==void 0){for(const f of h)ma(f,e,r,i,o,a,s);return}}bc(e,r,0,u,c.indices,c.data,c.stride,l,o,a,s)}}const vt=_();function _c(t,e,r,i,o,a,s,n){const l=t[0],c=t[1],u=t[2],h=e[0],f=e[1],g=e[2];for(let m=r;m<i;++m){const x=3*m,b=x+1,T=x+2,E=a*x,S=o[E],$=o[E+1],O=o[E+2],B=a*b,A=a*T,C=o[B]-S,M=o[B+1]-$,F=o[B+2]-O,y=o[A]-S,R=o[A+1]-$,P=o[A+2]-O,V=f*P-R*g,j=g*y-P*h,U=h*R-y*f,H=C*V+M*j+F*U;if(Math.abs(H)<=va)continue;const ee=l-S,de=c-$,xe=u-O,oe=ee*V+de*j+xe*U;if(H>0){if(oe<0||oe>H)continue}else if(oe>0||oe<H)continue;const fe=de*F-M*xe,Me=xe*C-F*ee,Te=ee*M-C*de,_e=h*fe+f*Me+g*Te;if(H>0){if(_e<0||oe+_e>H)continue}else if(_e>0||oe+_e<H)continue;const ae=(y*fe+R*Me+P*Te)/H;ae>=0&&n(ae,m,s?fa(C,M,F,y,R,P,vt):null)}}function bc(t,e,r,i,o,a,s,n,l,c,u){const h=t[0],f=t[1],g=t[2],m=e[0],x=e[1],b=e[2],{normalRequired:T}=c;for(let E=r;E<i;++E){const S=n[E],$=3*S,O=s*o[$];let B=a[O],A=a[O+1],C=a[O+2];const M=s*o[$+1];let F=a[M],y=a[M+1],R=a[M+2];const P=s*o[$+2];let V=a[P],j=a[P+1],U=a[P+2];l!=null&&([B,A,C]=l.applyToVertex(B,A,C,E),[F,y,R]=l.applyToVertex(F,y,R,E),[V,j,U]=l.applyToVertex(V,j,U,E));const H=F-B,ee=y-A,de=R-C,xe=V-B,oe=j-A,fe=U-C,Me=x*fe-oe*b,Te=b*xe-fe*m,_e=m*oe-xe*x,ae=H*Me+ee*Te+de*_e;if(Math.abs(ae)<=va)continue;const ut=h-B,Or=f-A,Ar=g-C,dt=ut*Me+Or*Te+Ar*_e;if(ae>0){if(dt<0||dt>ae)continue}else if(dt>0||dt<ae)continue;const Fi=Or*de-ee*Ar,Di=Ar*H-de*ut,Ii=ut*ee-H*Or,kt=m*Fi+x*Di+b*Ii;if(ae>0){if(kt<0||dt+kt>ae)continue}else if(kt>0||dt+kt<ae)continue;const Ni=(xe*Fi+oe*Di+fe*Ii)/ae;Ni>=0&&u(Ni,S,T?fa(H,ee,de,xe,oe,fe,vt):null)}}function wc(t,e,r,i,o,a,s,n,l,c){const u=e,h=Oc,f=Math.abs(u[0]),g=Math.abs(u[1]),m=Math.abs(u[2]),x=f>=g?f>=m?0:2:g>=m?1:2,b=x,T=u[b]<0?2:1,E=(x+T)%3,S=(x+(3-T))%3,$=u[E]/u[b],O=u[S]/u[b],B=1/u[b],A=yc,C=Mc,M=Tc,{normalRequired:F}=l;for(let y=r;y<i;++y){const R=3*y,P=s*o[R];q(h[0],a[P+0],a[P+1],a[P+2]);const V=s*o[R+1];q(h[1],a[V+0],a[V+1],a[V+2]);const j=s*o[R+2];q(h[2],a[j+0],a[j+1],a[j+2]),n&&(re(h[0],n.applyToVertex(h[0][0],h[0][1],h[0][2],y)),re(h[1],n.applyToVertex(h[1][0],h[1][1],h[1][2],y)),re(h[2],n.applyToVertex(h[2][0],h[2][1],h[2][2],y))),je(A,h[0],t),je(C,h[1],t),je(M,h[2],t);const U=A[E]-$*A[b],H=A[S]-O*A[b],ee=C[E]-$*C[b],de=C[S]-O*C[b],xe=M[E]-$*M[b],oe=M[S]-O*M[b],fe=xe*de-oe*ee,Me=U*oe-H*xe,Te=ee*H-de*U;if((fe<0||Me<0||Te<0)&&(fe>0||Me>0||Te>0))continue;const _e=fe+Me+Te;if(_e===0)continue;const ae=fe*(B*A[b])+Me*(B*C[b])+Te*(B*M[b]);if(ae*Math.sign(_e)<0)continue;const ut=ae/_e;ut>=0&&c(ut,y,F?Sc(h):null)}}const yc=_(),Mc=_(),Tc=_();function fa(t,e,r,i,o,a,s){return q(cr,t,e,r),q(ur,i,o,a),ve(s,cr,ur),Ce(s,s),s}function Sc(t){return je(cr,t[1],t[0]),je(ur,t[2],t[0]),ve(vt,cr,ur),Ce(vt,vt),vt}const cr=_(),ur=_();function $c(t,e){return q(e,1/t[0],1/t[1],1/t[2])}function Cc(t,e,r,i){return Ec(t,e,r,i,1/0)}function Ec(t,e,r,i,o){const a=(t[0]-i-e[0])*r[0],s=(t[3]+i-e[0])*r[0];let n=Math.min(a,s),l=Math.max(a,s);const c=(t[1]-i-e[1])*r[1],u=(t[4]+i-e[1])*r[1];if(l=Math.min(l,Math.max(c,u)),l<0||(n=Math.max(n,Math.min(c,u)),n>l))return!1;const h=(t[2]-i-e[2])*r[2],f=(t[5]+i-e[2])*r[2];return l=Math.min(l,Math.max(h,f)),!(l<0)&&(n=Math.max(n,Math.min(h,f)),!(n>l)&&n<o)}const Rc=1e3,va=1e-7,Pc=_(),Oc=[_(),_(),_()];let Ac=class{constructor(e=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=_(),this._tmpMbs=wr(),this._tmpObb=new zn,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=J(e)}applyToVertex(e,r,i){const o=q(ga,e,r,i),a=q(Ic,e,r,i+this.componentLocalOriginLength),s=this._totalOffset/J(a);return ze(this._tmpVertex,o,a,s),this._tmpVertex}applyToAabb(e){const r=this.componentLocalOriginLength,i=e[0],o=e[1],a=e[2]+r,s=e[3],n=e[4],l=e[5]+r,c=Math.abs(i),u=Math.abs(o),h=Math.abs(a),f=Math.abs(s),g=Math.abs(n),m=Math.abs(l),x=.5*(1+Math.sign(i*s))*Math.min(c,f),b=.5*(1+Math.sign(o*n))*Math.min(u,g),T=.5*(1+Math.sign(a*l))*Math.min(h,m),E=Math.max(c,f),S=Math.max(u,g),$=Math.max(h,m),O=Math.sqrt(x*x+b*b+T*T),B=Math.sign(c+i),A=Math.sign(u+o),C=Math.sign(h+a),M=Math.sign(f+s),F=Math.sign(g+n),y=Math.sign(m+l),R=this._totalOffset;if(O<R)return e[0]-=(1-B)*R,e[1]-=(1-A)*R,e[2]-=(1-C)*R,e[3]+=M*R,e[4]+=F*R,e[5]+=y*R,e;const P=R/Math.sqrt(E*E+S*S+$*$),V=R/O,j=V-P,U=-j;return e[0]+=i*(B*U+V),e[1]+=o*(A*U+V),e[2]+=a*(C*U+V),e[3]+=s*(M*j+P),e[4]+=n*(F*j+P),e[5]+=l*(y*j+P),e}applyToMbs(e){const r=jo(e),i=J(r),o=this._totalOffset/i,a=ze(xa,r,r,o),s=e[3]+e[3]*this._totalOffset/i;return Go(this._tmpMbs,a,s),this._tmpMbs}applyToObb(e){return Ln(e,this._totalOffset,this._totalOffset,1,this._tmpObb),this._tmpObb}},Fc=class{constructor(e=0){this.offset=e,this.sphere=wr(),this.tmpVertex=_()}applyToVertex(e,r,i){const o=this.objectTransform.transform,a=q(ga,e,r,i),s=Ge(a,a,o),n=this.offset/J(s);ze(s,s,s,n);const l=this.objectTransform.inverse;return Ge(this.tmpVertex,s,l),this.tmpVertex}applyToMinMax(e,r){const i=this.offset/J(e);ze(e,e,e,i);const o=this.offset/J(r);ze(r,r,r,o)}applyToAabb(e){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*i,e[4]+=e[4]*i,e[5]+=e[5]*i,e}applyToBoundingSphere(e){const r=jo(e),i=J(r),o=this.offset/i,a=ze(xa,r,r,o),s=e[3]+e[3]*this.offset/i;return Go(this.sphere,a,s),this.sphere}};const lo=new Fc;function Dc(t){return t!=null?(lo.offset=t,lo):null}new Ac;const ga=_(),Ic=_(),xa=_();function Mp(t,e,r,i=1){const{data:o,indices:a}=t,s=e.typedBuffer,n=e.typedBufferStride,l=a.length;if(r*=n,i===1)for(let c=0;c<l;++c)s[r]=o[a[c]],r+=n;else for(let c=0;c<l;++c){const u=o[a[c]];for(let h=0;h<i;h++)s[r]=u,r+=n}}function jr(t,e,r){const{data:i,indices:o}=t,a=e.typedBuffer,s=e.typedBufferStride,n=o.length;r*=s;for(let l=0;l<n;++l){const c=2*o[l];a[r]=i[c],a[r+1]=i[c+1],r+=s}}function wi(t,e,r,i=1){const{data:o,indices:a}=t,s=e.typedBuffer,n=e.typedBufferStride,l=a.length;if(r*=n,i===1)for(let c=0;c<l;++c){const u=3*a[c];s[r]=o[u],s[r+1]=o[u+1],s[r+2]=o[u+2],r+=n}else for(let c=0;c<l;++c){const u=3*a[c];for(let h=0;h<i;++h)s[r]=o[u],s[r+1]=o[u+1],s[r+2]=o[u+2],r+=n}}function _a(t,e,r,i=1){const{data:o,indices:a}=t,s=e.typedBuffer,n=e.typedBufferStride,l=a.length;if(r*=n,i===1)for(let c=0;c<l;++c){const u=4*a[c];s[r]=o[u],s[r+1]=o[u+1],s[r+2]=o[u+2],s[r+3]=o[u+3],r+=n}else for(let c=0;c<l;++c){const u=4*a[c];for(let h=0;h<i;++h)s[r]=o[u],s[r+1]=o[u+1],s[r+2]=o[u+2],s[r+3]=o[u+3],r+=n}}function Tp(t,e,r){const i=t.typedBuffer,o=t.typedBufferStride;e*=o;for(let a=0;a<r;++a)i[e]=0,i[e+1]=0,i[e+2]=0,i[e+3]=0,e+=o}function Nc(t,e,r,i,o=1){if(!e)return void wi(t,r,i,o);const{data:a,indices:s}=t,n=r.typedBuffer,l=r.typedBufferStride,c=s.length,u=e[0],h=e[1],f=e[2],g=e[4],m=e[5],x=e[6],b=e[8],T=e[9],E=e[10],S=e[12],$=e[13],O=e[14];i*=l;let B=0,A=0,C=0;const M=Io(e)?F=>{B=a[F]+S,A=a[F+1]+$,C=a[F+2]+O}:F=>{const y=a[F],R=a[F+1],P=a[F+2];B=u*y+g*R+b*P+S,A=h*y+m*R+T*P+$,C=f*y+x*R+E*P+O};if(o===1)for(let F=0;F<c;++F)M(3*s[F]),n[i]=B,n[i+1]=A,n[i+2]=C,i+=l;else for(let F=0;F<c;++F){M(3*s[F]);for(let y=0;y<o;++y)n[i]=B,n[i+1]=A,n[i+2]=C,i+=l}}function zc(t,e,r,i,o=1){if(!e)return void wi(t,r,i,o);const{data:a,indices:s}=t,n=e,l=r.typedBuffer,c=r.typedBufferStride,u=s.length,h=n[0],f=n[1],g=n[2],m=n[4],x=n[5],b=n[6],T=n[8],E=n[9],S=n[10],$=!No(n),O=1e-6,B=1-O;i*=c;let A=0,C=0,M=0;const F=Io(n)?y=>{A=a[y],C=a[y+1],M=a[y+2]}:y=>{const R=a[y],P=a[y+1],V=a[y+2];A=h*R+m*P+T*V,C=f*R+x*P+E*V,M=g*R+b*P+S*V};if(o===1)if($)for(let y=0;y<u;++y){F(3*s[y]);const R=A*A+C*C+M*M;if(R<B&&R>O){const P=1/Math.sqrt(R);l[i]=A*P,l[i+1]=C*P,l[i+2]=M*P}else l[i]=A,l[i+1]=C,l[i+2]=M;i+=c}else for(let y=0;y<u;++y)F(3*s[y]),l[i]=A,l[i+1]=C,l[i+2]=M,i+=c;else for(let y=0;y<u;++y){if(F(3*s[y]),$){const R=A*A+C*C+M*M;if(R<B&&R>O){const P=1/Math.sqrt(R);A*=P,C*=P,M*=P}}for(let R=0;R<o;++R)l[i]=A,l[i+1]=C,l[i+2]=M,i+=c}}function Lc(t,e,r,i,o=1){if(!e)return void _a(t,r,i,o);const{data:a,indices:s}=t,n=e,l=r.typedBuffer,c=r.typedBufferStride,u=s.length,h=n[0],f=n[1],g=n[2],m=n[4],x=n[5],b=n[6],T=n[8],E=n[9],S=n[10],$=!No(n),O=1e-6,B=1-O;if(i*=c,o===1)for(let A=0;A<u;++A){const C=4*s[A],M=a[C],F=a[C+1],y=a[C+2],R=a[C+3];let P=h*M+m*F+T*y,V=f*M+x*F+E*y,j=g*M+b*F+S*y;if($){const U=P*P+V*V+j*j;if(U<B&&U>O){const H=1/Math.sqrt(U);P*=H,V*=H,j*=H}}l[i]=P,l[i+1]=V,l[i+2]=j,l[i+3]=R,i+=c}else for(let A=0;A<u;++A){const C=4*s[A],M=a[C],F=a[C+1],y=a[C+2],R=a[C+3];let P=h*M+m*F+T*y,V=f*M+x*F+E*y,j=g*M+b*F+S*y;if($){const U=P*P+V*V+j*j;if(U<B&&U>O){const H=1/Math.sqrt(U);P*=H,V*=H,j*=H}}for(let U=0;U<o;++U)l[i]=P,l[i+1]=V,l[i+2]=j,l[i+3]=R,i+=c}}function Vc(t,e,r,i,o=1){const{data:a,indices:s}=t,n=r.typedBuffer,l=r.typedBufferStride,c=s.length;if(i*=l,e===a.length&&e===4){n[i]=a[0],n[i+1]=a[1],n[i+2]=a[2],n[i+3]=a[3];const u=new Uint32Array(r.typedBuffer.buffer,r.start),h=l/4,f=u[i/=4];i+=h;const g=c*o;for(let m=1;m<g;++m)u[i]=f,i+=h;return}if(o!==1)if(e!==4)for(let u=0;u<c;++u){const h=3*s[u];for(let f=0;f<o;++f)n[i]=a[h],n[i+1]=a[h+1],n[i+2]=a[h+2],n[i+3]=255,i+=l}else for(let u=0;u<c;++u){const h=4*s[u];for(let f=0;f<o;++f)n[i]=a[h],n[i+1]=a[h+1],n[i+2]=a[h+2],n[i+3]=a[h+3],i+=l}else{if(e===4){for(let u=0;u<c;++u){const h=4*s[u];n[i]=a[h],n[i+1]=a[h+1],n[i+2]=a[h+2],n[i+3]=a[h+3],i+=l}return}for(let u=0;u<c;++u){const h=3*s[u];n[i]=a[h],n[i+1]=a[h+1],n[i+2]=a[h+2],n[i+3]=255,i+=l}}}function Bc(t,e,r){const{data:i,indices:o}=t,a=e.typedBuffer,s=e.typedBufferStride,n=o.length,l=i[0];r*=s;for(let c=0;c<n;++c)a[r]=l,r+=s}function jc(t,e,r,i,o=1){const a=e.typedBuffer,s=e.typedBufferStride;if(i*=s,o===1)for(let n=0;n<r;++n)a[i]=t[0],a[i+1]=t[1],a[i+2]=t[2],a[i+3]=t[3],i+=s;else for(let n=0;n<r;++n)for(let l=0;l<o;++l)a[i]=t[0],a[i+1]=t[1],a[i+2]=t[2],a[i+3]=t[3],i+=s}function Gc(t,e,r,i,o,a,s){let n={numItems:0,numVerticesPerItem:0};for(const l of r.fields.keys()){const c=t.get(l),u=c?.indices;if(c&&u)l==="position"&&(n={numItems:1,numVerticesPerItem:u.length}),Uc(l,c,i,o,a,s);else if(l==="olidColor"&&e!=null){const h=t.get("position")?.indices;if(h){const f=h.length;jc(e,a.getField(l,nr),f,s)}}}return n}function Uc(t,e,r,i,o,a){switch(t){case"position":{W(e.size===3);const s=o.getField(t,ir);W(!!s,`No buffer view for ${t}`),Nc(e,r,s,a);break}case"normal":{W(e.size===3);const s=o.getField(t,ir);W(!!s,`No buffer view for ${t}`),zc(e,i,s,a);break}case"normalCompressed":case"profileRight":case"profileUp":{W(e.size===2);const s=o.getField(t,Bi);W(!!s,`No buffer view for ${t}`),jr(e,s,a);break}case"uv0":{W(e.size===2);const s=o.getField(t,Bs)??o.getField(t,js);W(!!s,`No buffer view for ${t}`),jr(e,s,a);break}case"uvi":{W(e.size===2);const s=o.getField(t,Bi);W(!!s,`No buffer view for ${t}`),jr(e,s,a);break}case"color":case"symbolColor":{const s=o.getField(t,nr);W(!!s,`No buffer view for ${t}`),W(e.size===3||e.size===4),Vc(e,e.size,s,a);break}case"colorFeatureAttribute":case"opacityFeatureAttribute":case"sizeFeatureAttribute":{const s=o.getField(t,Vi)??o.getField(t,Vi);W(!!s,`No buffer view for ${t}`),W(e.size===1),Bc(e,s,a);break}case"tangent":{W(e.size===4);const s=o.getField(t,ii);W(!!s,`No buffer view for ${t}`),Lc(e,r,s,a);break}case"profileVertexAndNormal":{W(e.size===4);const s=o.getField(t,Vs)??o.getField(t,ii);W(!!s,`No buffer view for ${t}`),_a(e,s,a);break}case"profileAuxData":{W(e.size===3);const s=o.getField(t,Ls)??o.getField(t,ir);W(!!s,`No buffer view for ${t}`),wi(e,s,a);break}}}let kc=class{constructor(e){this.layout=e}elementCount(e){return e.get("position").indices.length}write(e,r,i,o,a,s){return Gc(i,o,this.layout,e,r,a,s)}intersect(e,r,i,o,a,s,n){const l=this.layout.createView(e).getField("position",ir);if(l==null)return;const c=je(Hc,s,a),u=0,h=l.count/3,f=o.options.normalRequired,g=(m,x,b)=>n(m,b,x);_c(a,c,u,h,l.typedBuffer,l.typedBufferStride,f,g)}};const Hc=_();function Sr(t,e){switch(t.fragment.code.add(d`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`),e.normalType){case 1:t.attributes.add("normalCompressed","vec2"),t.vertex.code.add(d`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case 0:t.attributes.add("normal","vec3"),t.vertex.code.add(d`vec3 normalModel() {
return normal;
}`);break;default:gr(e.normalType);case 2:case 3:}}let k=class{constructor(e,r,i,o,a=null){if(this.name=e,this.type=r,this.arraySize=a,this.bind={0:null,1:null,2:null},o)switch(i){case void 0:break;case 0:this.bind[0]=o;break;case 1:this.bind[1]=o;break;case 2:this.bind[2]=o}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}},Ye=class extends k{constructor(e,r,i){super(e,"float",0,(o,a)=>o.setUniform1f(e,r(a),i))}};function Wc({code:t,uniforms:e},r){e.add(new Ye("dpDummy",()=>1)),t.add(d`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 hiD = hiA + hiB;
vec3 loD = loA + loB;
return  dpDummy * hiD + loD;
}`)}let $e=class extends k{constructor(e,r,i){super(e,"vec3",2,(o,a,s,n)=>o.setUniform3fv(e,r(a,s,n),i))}},le=class extends k{constructor(e,r,i){super(e,"vec3",1,(o,a,s)=>o.setUniform3fv(e,r(a,s),i))}},qc=class extends k{constructor(e,r,i){super(e,"mat3",2,(o,a,s)=>o.setUniformMatrix3fv(e,r(a,s),i))}},He=class extends k{constructor(e,r,i){super(e,"mat3",1,(o,a,s)=>o.setUniformMatrix3fv(e,r(a,s),i))}},Xc=class extends k{constructor(e,r,i){super(e,"mat4",1,(o,a,s)=>o.setUniformMatrix4fv(e,r(a,s),i))}},Yc=class extends Ut{constructor(){super(...arguments),this.transformWorldFromViewTH=_(),this.transformWorldFromViewTL=_(),this.transformViewFromCameraRelativeRS=_r(),this.transformProjFromView=ne()}};function ba(t,e){switch(e.normalType){case 0:case 1:t.include(Sr,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add(new qc("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new He("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)).code.add(d`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case 2:t.vertex.code.add(d`void forwardNormal() {}`);break;default:gr(e.normalType);case 3:}}let Zc=class extends Yc{constructor(){super(...arguments),this.transformNormalViewFromGlobal=_r()}},$r=class{constructor(e,r){this._module=e,this._load=r}get(){return this._module}async reload(){return this._module=await this._load(),this._module}},co=class{constructor(e,r,i){this._context=e,this.locations=i,this._textures=new Map,this.source=hi()?r:null,r.attributeNames.forEach(o=>{i.has(o)||console.error(`Missing VertexAttributeLocation for ${o} used in shader`)}),this._glProgram=e.programCache.acquire(r.generate("vertex",!0),r.generate("fragment",!0),i),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bind=r.generateBind(this),this.bindPass=r.generateBindPass(this),this.bindDraw=r.generateBindDraw(this)}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(e,r){this._glProgram.setUniform1i(e,r?1:0)}setUniform1i(e,r){this._glProgram.setUniform1i(e,r)}setUniform1f(e,r,i){this._glProgram.setUniform1f(e,r,i)}setUniform2fv(e,r,i){this._glProgram.setUniform2fv(e,r,i)}setUniform3fv(e,r,i){this._glProgram.setUniform3fv(e,r,i)}setUniform4fv(e,r,i){this._glProgram.setUniform4fv(e,r,i)}setUniformMatrix3fv(e,r,i){this._glProgram.setUniformMatrix3fv(e,r,!1,i)}setUniformMatrix4fv(e,r,i){this._glProgram.setUniformMatrix4fv(e,r,!1,i)}setUniformMatrices4fv(e,r,i){this._glProgram.setUniformMatrices4fv(e,r,!1,i)}setUniform1fv(e,r,i){this._glProgram.setUniform1fv(e,r,i)}setUniform1iv(e,r){this._glProgram.setUniform1iv(e,r)}setUniform2iv(e,r){this._glProgram.setUniform2iv(e,r)}setUniform3iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform4iv(e,r){this._glProgram.setUniform4iv(e,r)}assertCompatibleVertexAttributeLocations(e,r){let i=e.locations;if(r){const o=new Map(i);r.forEach((a,s)=>o.set(s,i.size+a)),i=o}i.size!==this.locations.size&&console.error(`VertexAttributeLocations are incompatible: ${i}, ${this.locations}`),this.locations.forEach((o,a)=>{i.get(a)!==o&&console.error(`VertexAttributeLocations are incompatible: Program has ${a} at position ${o}, VAO has it at position ${i.get(a)}.`)})}stop(){this._textures.clear()}bindTexture(e,r){r?.glName||(hi()&&console.error(`Texture sampler ${e} has no given Texture in ${new Error().stack} `),r=this._context.emptyTexture);const i=this._ensureTextureUnit(e,r);this._context.useProgram(this),this.setUniform1i(e,i.unit),this._context.bindTexture(r,i.unit)}_ensureTextureUnit(e,r){let i=this._textures.get(e);return i==null?(i={texture:r,unit:this._textures.size},this._textures.set(e,i)):i.texture=r,i}};const Kc=()=>ct.getLogger("esri.views.3d.webgl.ShaderTechnique");let yi=class{constructor(e,r,i,o){this.primitiveType=Ds.TRIANGLES,this.key=r.key,this._program=new co(e.rctx,i.get().build(r),o),this._pipeline=this.initializePipeline(r),this.reload=async a=>{a&&await i.reload(),this.key.equals(r.key)||Kc().warn("Configuration was changed after construction, cannot reload shader.",i),ti(this._program),this._program=new co(e.rctx,i.get().build(r),o),this._pipeline=this.initializePipeline(r)}}destroy(){this._program=ti(this._program),this._pipeline=null}get program(){return this._program}get compiled(){return this.program.compiled}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}getPipeline(e,r){return this._pipeline}initializePipeline(e){return Tr({blending:oa,colorWrite:Mr})}};function Jc(t,e){return Tl(t)?{buffers:[Is]}:e??null}function wa(){return!!fr("enable-feature:objectAndLayerId-rendering")}const Qc={mask:255},eu={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},tu={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};fr("esri-tests-disable-gpu-memory-measurements");class uo{constructor(e){this.localTransform=e.localTransform,this.globalTransform=e.globalTransform,this.modelOrigin=e.modelOrigin,this.model=e.instanceModel,this.modelNormal=e.instanceModelNormal,this.modelScaleFactors=e.modelScaleFactors,this.boundingSphere=e.boundingSphere,this.featureAttribute=e.getField("instanceFeatureAttribute",ii),this.color=e.getField("instanceColor",nr),this.olidColor=e.getField("instanceOlidColor",nr),this.state=e.getField("state",ji),this.lodLevel=e.getField("lodLevel",ji)}}let Ct=class extends mr{constructor(e,r){super(e),this.events=new Es,this._capacity=0,this._size=0,this._next=0,this._highlightOptionsMap=new Map,this._highlightOptionsMapPrev=new Map,this._layout=ou(r),this._capacity=po,this._buffer=this._layout.createBuffer(this._capacity),this._view=new uo(this._buffer)}get capacity(){return this._capacity}get size(){return this._size}get view(){return this._view}addInstance(){this._size+1>this._capacity&&this._grow();const e=this._findSlot();return this._view.state.set(e,1),this._size++,this.events.emit("instances-changed"),e}removeInstance(e){const r=this._view.state;W(e>=0&&e<this._capacity&&!!(1&r.get(e)),"invalid instance handle"),this._getStateFlag(e,18)?this._setStateFlags(e,32):this.freeInstance(e),this.events.emit("instances-changed")}freeInstance(e){const r=this._view.state;W(e>=0&&e<this._capacity&&!!(1&r.get(e)),"invalid instance handle"),r.set(e,0),this._size--}setLocalTransform(e,r,i=!0){this._view.localTransform.setMat(e,r),i&&this.updateModelTransform(e)}getLocalTransform(e,r){this._view.localTransform.getMat(e,r)}setGlobalTransform(e,r,i=!0){this._view.globalTransform.setMat(e,r),i&&this.updateModelTransform(e)}getGlobalTransform(e,r){this._view.globalTransform.getMat(e,r)}updateModelTransform(e){const r=this._view,i=se,o=be;r.localTransform.getMat(e,ho),r.globalTransform.getMat(e,Gr);const a=ai(Gr,Gr,ho);q(i,a[12],a[13],a[14]),r.modelOrigin.setVec(e,i),Xs(o,a),r.model.setMat(e,o);const s=Un(se,a);s.sort(),r.modelScaleFactors.set(e,0,s[1]),r.modelScaleFactors.set(e,1,s[2]),Ys(o,o),Zs(o,o),r.modelNormal.setMat(e,o),this._setStateFlags(e,64),this.events.emit("instance-transform-changed",{index:e})}getModelTransform(e,r){const i=this._view;i.model.getMat(e,be),i.modelOrigin.getVec(e,se),r[0]=be[0],r[1]=be[1],r[2]=be[2],r[3]=0,r[4]=be[3],r[5]=be[4],r[6]=be[5],r[7]=0,r[8]=be[6],r[9]=be[7],r[10]=be[8],r[11]=0,r[12]=se[0],r[13]=se[1],r[14]=se[2],r[15]=1}applyShaderTransformation(e,r){this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,r)}getCombinedModelTransform(e,r){return this.getModelTransform(e,r),this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,r),r}getCombinedLocalTransform(e,r){this._view.localTransform.getMat(e,r),this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,r)}getCombinedMaxScaleFactor(e){let r=this._view.modelScaleFactors.get(e,1);return this.shaderTransformation!=null&&(this.shaderTransformation.scaleFactor(se,this,e),r*=Math.max(se[0],se[1],se[2])),r}getCombinedMedianScaleFactor(e){let r=this._view.modelScaleFactors.get(e,0);return this.shaderTransformation!=null&&(this.shaderTransformation.scaleFactor(se,this,e),r*=ru(se[0],se[1],se[2])),r}getModel(e,r){this._view.model.getMat(e,r)}setFeatureAttribute(e,r){this._view.featureAttribute?.setVec(e,r)}getFeatureAttribute(e,r){this._view.featureAttribute?.getVec(e,r)}setColor(e,r){this._view.color?.setVec(e,r)}setObjectAndLayerIdColor(e,r){this._view.olidColor?.setVec(e,r)}setVisible(e,r){r!==this.getVisible(e)&&(this._setStateFlag(e,4,r),this.events.emit("instance-visibility-changed",{index:e}))}getVisible(e){return this._getStateFlag(e,4)}setHighlight(e,r){const{_highlightOptionsMap:i}=this,o=i.get(e);r?r!==o&&(i.set(e,r),this._setStateFlag(e,8,!0),this.events.emit("instance-highlight-changed")):o&&(i.delete(e),this._setStateFlag(e,8,!1),this.events.emit("instance-highlight-changed"))}get highlightOptionsMap(){return this._highlightOptionsMap}getHighlightStateFlag(e){return this._getStateFlag(e,8)}geHighlightOptionsPrev(e){const r=this._highlightOptionsMapPrev.get(e)??null;return this._highlightOptionsMapPrev.delete(e),r}getHighlightName(e){const r=this.highlightOptionsMap.get(e)??null;return r?this._highlightOptionsMapPrev.set(e,r):this._highlightOptionsMapPrev.delete(e),r}getState(e){return this._view.state.get(e)}getLodLevel(e){return this._view.lodLevel.get(e)}countFlags(e){let r=0;for(let i=0;i<this._capacity;++i)this.getState(i)&e&&++r;return r}_setStateFlags(e,r){const i=this._view.state;r=i.get(e)|r,i.set(e,r)}_clearStateFlags(e,r){const i=this._view.state;r=i.get(e)&~r,i.set(e,r)}_setStateFlag(e,r,i){i?this._setStateFlags(e,r):this._clearStateFlags(e,r)}_getStateFlag(e,r){return!!(this._view.state.get(e)&r)}_grow(){this._capacity=Math.max(po,Math.floor(this._capacity*Rs)),this._buffer=this._layout.createBuffer(this._capacity).copyFrom(this._buffer),this._view=new uo(this._buffer)}_findSlot(){const e=this._view.state;let r=this._next;for(;1&e.get(r);)r=r+1===this._capacity?0:r+1;return this._next=r+1===this._capacity?0:r+1,r}};function ru(t,e,r){return Math.max(Math.min(t,e),Math.min(Math.max(t,e),r))}p([v({constructOnly:!0})],Ct.prototype,"shaderTransformation",void 0),p([v()],Ct.prototype,"_size",void 0),p([v({readOnly:!0})],Ct.prototype,"size",null),Ct=p([lt("esri.views.3d.webgl-engine.lib.lodRendering.InstanceData")],Ct);const iu=gi().mat4f64("localTransform").mat4f64("globalTransform").vec4f64("boundingSphere").vec3f64("modelOrigin").mat3f("instanceModel").mat3f("instanceModelNormal").vec2f("modelScaleFactors");function ou(t){return ya(iu.clone(),t).u8("state").u8("lodLevel")}function ya(t,e){return e.instancedFeatureAttribute&&t.vec4f("instanceFeatureAttribute"),e.instancedColor&&t.vec4u8("instanceColor"),wa()&&t.vec4u8("instanceOlidColor"),t}const se=_(),be=_r(),ho=ne(),Gr=ne(),po=64,au=gi().vec3f("instanceModelOriginHi").vec3f("instanceModelOriginLo").mat3f("instanceModel").mat3f("instanceModelNormal");function su(t){return ya(au.clone(),t)}function Vp({normalTexture:t,metallicRoughnessTexture:e,metallicFactor:r,roughnessFactor:i,emissiveTexture:o,emissiveFactor:a,occlusionTexture:s}){return t==null&&e==null&&o==null&&(a==null||Ie(a,Xe))&&s==null&&(i==null||i===1)&&(r==null||r===1)}const nu=Lt(1,1,.5),Bp=Lt(0,.6,.2),jp=Lt(0,1,.2);function Ma(t){t.vertex.code.add(d`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function gt(t,e){cu(t,e,new $e("slicePlaneOrigin",(r,i)=>Ea(e,r,i)),new $e("slicePlaneBasis1",(r,i)=>dr(e,r,i,i.slicePlane?.basis1)),new $e("slicePlaneBasis2",(r,i)=>dr(e,r,i,i.slicePlane?.basis2)))}function Gp(t,e){Ta(t,e,new $e("slicePlaneOrigin",(r,i)=>Ea(e,r,i)),new $e("slicePlaneBasis1",(r,i)=>dr(e,r,i,i.slicePlane?.basis1)),new $e("slicePlaneBasis2",(r,i)=>dr(e,r,i,i.slicePlane?.basis2)))}const lu=d`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
bool rejectBySlice(vec3 pos) {
return sliceByPlane(pos);
}`;function Ta(t,e,...r){e.hasSlicePlane?(t.uniforms.add(...r),t.code.add(lu)):t.code.add("bool rejectBySlice(vec3 pos) { return false; }")}function cu(t,e,...r){Ta(t,e,...r),e.hasSlicePlane?t.code.add(`
    void discardBySlice(vec3 pos) {
      if (sliceByPlane(pos)) {
        discard;
      }
    }

    vec4 applySliceOutline(vec4 color, vec3 pos) {
      SliceFactors factors = calculateSliceFactors(pos);

      factors.front /= 2.0 * fwidth(factors.front);
      factors.side0 /= 2.0 * fwidth(factors.side0);
      factors.side1 /= 2.0 * fwidth(factors.side1);
      factors.side2 /= 2.0 * fwidth(factors.side2);
      factors.side3 /= 2.0 * fwidth(factors.side3);

      // return after calling fwidth, to avoid aliasing caused by discontinuities in the input to fwidth
      if (sliceByFactors(factors)) {
        return color;
      }

      float outlineFactor = (1.0 - step(0.5, factors.front))
        * (1.0 - step(0.5, factors.side0))
        * (1.0 - step(0.5, factors.side1))
        * (1.0 - step(0.5, factors.side2))
        * (1.0 - step(0.5, factors.side3));

      return mix(color, vec4(vec3(0.0), color.a), outlineFactor * 0.3);
    }

    vec4 applySlice(vec4 color, vec3 pos) {
      return sliceEnabled() ? applySliceOutline(color, pos) : color;
    }
  `):t.code.add(d`void discardBySlice(vec3 pos) { }
vec4 applySlice(vec4 color, vec3 pos) { return color; }`)}function Sa(t,e,r){return t.instancedDoublePrecision?q(uu,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function $a(t,e){return t!=null?me(hr,e.origin,t):e.origin}function Ca(t,e,r){return t.hasSliceTranslatedView?e!=null?si(du,r.camera.viewMatrix,e):r.camera.viewMatrix:null}function Ea(t,e,r){if(r.slicePlane==null)return Xe;const i=Sa(t,e,r),o=$a(i,r.slicePlane),a=Ca(t,i,r);return a!=null?Ge(hr,o,a):o}function dr(t,e,r,i){if(i==null||r.slicePlane==null)return Xe;const o=Sa(t,e,r),a=$a(o,r.slicePlane),s=Ca(t,o,r);return s!=null?(vi(Et,i,a),Ge(hr,a,s),Ge(Et,Et,s),me(Et,Et,hr)):i}const uu=_(),hr=_(),Et=_(),du=ne();function hu(t){t.varyings.add("linearDepth","float",{invariant:!0})}function pu(t,e){hu(t),t.vertex.code.add(d`
    void forwardLinearDepth(float _linearDepth) { ${L(e,"linearDepth = _linearDepth;")} }
  `)}let Cr=class extends k{constructor(e,r,i){super(e,"vec2",0,(o,a)=>o.setUniform2fv(e,r(a),i))}};function mu(t){t.vertex.uniforms.add(new Cr("nearFar",e=>e.camera.nearFar))}function fu(t){t.vertex.code.add(d`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function xt(t){fu(t),t.vertex.code.add(d`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),t.vertex.code.add(d`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}function Ze(t){t.code.add(d`struct MaskedColor {
vec4 color;
bvec4 mask;
};`)}function Ra(t){t.include(Ze),t.code.add(d`
    MaskedColor createMaskedFromUInt8NaNColor(vec4 color) {
      return MaskedColor(color * ${d.float(1/254)}, equal(color, vec4(255)));
    }
  `)}function Mi(t){t.include(Ze),t.code.add(d`vec4 maskedColorSelectOrOne(MaskedColor color) {
return vec4(
color.mask.r ? 1.0 : color.color.r,
color.mask.g ? 1.0 : color.color.g,
color.mask.b ? 1.0 : color.color.b,
color.mask.a ? 1.0 : color.color.a
);
}
MaskedColor multiplyMaskedColors(MaskedColor color1, MaskedColor color2) {
vec4 masked1 = maskedColorSelectOrOne(color1);
vec4 masked2 = maskedColorSelectOrOne(color2);
return MaskedColor(masked1 * masked2, bvec4(ivec4(color1.mask) & ivec4(color2.mask)));
}`)}function Ti(t){t.include(Ze),t.code.add(d`MaskedColor createMaskedFromNaNColor(vec4 color) {
return MaskedColor(color, isnan(color));
}`)}function Pa(t,e){e.instancedColor?(t.attributes.add("instanceColor","vec4"),t.vertex.include(Ze),t.vertex.include(Ra),t.vertex.include(Mi),t.vertex.code.add(d`
      MaskedColor applyInstanceColor(MaskedColor color) {
        return multiplyMaskedColors( color, createMaskedFromUInt8NaNColor(${"instanceColor"}));
      }
    `)):t.vertex.code.add(d`MaskedColor applyInstanceColor(MaskedColor color) {
return color;
}`)}let nt=class extends k{constructor(e,r,i){super(e,"vec3",0,(o,a)=>o.setUniform3fv(e,r(a),i))}},ar=class extends k{constructor(e,r,i){super(e,"mat4",0,(o,a)=>o.setUniformMatrix4fv(e,r(a),i))}},vu=class extends k{constructor(e,r,i){super(e,"mat4",2,(o,a,s)=>o.setUniformMatrix4fv(e,r(a,s),i))}};function Vt(t,e){e.instancedDoublePrecision?t.constants.add("cameraPosition","vec3",Xe):t.uniforms.add(new $e("cameraPosition",(r,i)=>q(Oa,i.camera.viewInverseTransposeMatrix[3]-r.origin[0],i.camera.viewInverseTransposeMatrix[7]-r.origin[1],i.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function _t(t,e){if(!e.instancedDoublePrecision)return void t.uniforms.add(new ar("proj",i=>i.camera.projectionMatrix),new vu("view",(i,o)=>si(mo,o.camera.viewMatrix,i.origin)),new $e("localOrigin",i=>i.origin));const r=({camera:i})=>q(Oa,i.viewInverseTransposeMatrix[3],i.viewInverseTransposeMatrix[7],i.viewInverseTransposeMatrix[11]);t.uniforms.add(new ar("proj",i=>i.camera.projectionMatrix),new ar("view",i=>si(mo,i.camera.viewMatrix,r(i))),new nt("localOrigin",i=>r(i)))}const mo=ne(),Oa=_();function gu(t){t.uniforms.add(new ar("viewNormal",e=>e.camera.viewInverseTransposeMatrix))}function qp(t){t.uniforms.add(new Ye("pixelRatio",e=>e.camera.pixelRatio/e.overlayStretch))}function xu(t,e){const r=t.length;for(let i=0;i<r;++i)bt[0]=t[i],e[i]=bt[0];return e}function _u(t,e){const r=t.length;for(let i=0;i<r;++i)bt[0]=t[i],bt[1]=t[i]-bt[0],e[i]=bt[1];return e}const bt=new Float32Array(2),fo=_r();function Aa(t,e){const{hasModelTransformation:r,instancedDoublePrecision:i,instanced:o,output:a,hasVertexTangents:s}=e;r&&(t.vertex.uniforms.add(new Xc("model",l=>l.modelTransformation??Ui)),t.vertex.uniforms.add(new He("normalLocalOriginFromModel",l=>(Ks(fo,l.modelTransformation??Ui),fo)))),o&&i&&(t.attributes.add("instanceModelOriginHi","vec3"),t.attributes.add("instanceModelOriginLo","vec3"),t.attributes.add("instanceModel","mat3"),t.attributes.add("instanceModelNormal","mat3"));const n=t.vertex;i&&(n.include(Wc,e),n.uniforms.add(new nt("viewOriginHi",l=>xu(q(Kt,l.camera.viewInverseTransposeMatrix[3],l.camera.viewInverseTransposeMatrix[7],l.camera.viewInverseTransposeMatrix[11]),Kt)),new nt("viewOriginLo",l=>_u(q(Kt,l.camera.viewInverseTransposeMatrix[3],l.camera.viewInverseTransposeMatrix[7],l.camera.viewInverseTransposeMatrix[11]),Kt)))),n.code.add(d`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?i?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":i?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${i?d`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),n.code.add(d`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?i?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":i?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),a===3&&(gu(n),n.code.add(d`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?i?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":i?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),s&&n.code.add(d`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?i?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":i?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const Kt=_();let bu=class extends k{constructor(e,r){super(e,"int",1,(i,o,a)=>i.setUniform1i(e,r(o,a)))}};function Fa(t,e){t.varyings.add("colorMixMode","int"),t.varyings.add("opacityMixMode","int"),t.vertex.uniforms.add(new bu("symbolColorMixMode",r=>Nt[r.colorMixMode])),e.hasSymbolColors?(t.vertex.include(Ze),t.vertex.include(Ra),t.vertex.include(Mi),t.attributes.add("symbolColor","vec4"),t.vertex.code.add(d`
    MaskedColor applySymbolColor(MaskedColor color) {
      return multiplyMaskedColors(color, createMaskedFromUInt8NaNColor(${"symbolColor"}));
    }
  `)):t.vertex.code.add(d`MaskedColor applySymbolColor(MaskedColor color) {
return color;
}`),t.vertex.code.add(d`
    void forwardColorMixMode(bvec4 mask) {
      colorMixMode = mask.r ? ${d.int(Nt.ignore)} : symbolColorMixMode;
      opacityMixMode = mask.a ? ${d.int(Nt.ignore)} : symbolColorMixMode;
    }
  `)}function it(t,e){switch(e.textureCoordinateType){case 1:return t.attributes.add("uv0","vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(d`void forwardTextureCoordinates() { vuv0 = uv0; }`);case 2:return t.attributes.add("uv0","vec2"),t.attributes.add("uvRegion","vec4"),t.varyings.add("vuv0","vec2"),t.varyings.add("vuvRegion","vec4"),void t.vertex.code.add(d`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:gr(e.textureCoordinateType);case 0:return void t.vertex.code.add(d`void forwardTextureCoordinates() {}`);case 3:return}}function Da(t,e){e.hasVertexColors?(t.attributes.add("color","vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(d`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(d`
      void forwardNormalizedVertexColor() { vColor = color * ${d.float(1/255)}; }
    `)):t.vertex.code.add(d`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function wu(t){t.vertex.code.add(d`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(d`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),t.vertex.code.add(d`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return size * clamp(mix(factor.x, 1.0, factor.y), factor.z, 1.0);
}`),t.vertex.code.add(d`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(d`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return size * clamp(mix(factor.x, 1.0, factor.y), factor.z, 1.0);
}`),t.vertex.code.add(d`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function Yp(t){t.uniforms.add(new le("screenSizePerspective",e=>Ia(e.screenSizePerspective,e.screenSizePerspectiveMinPixelReferenceSize)))}function yu(t){t.uniforms.add(new le("screenSizePerspectiveAlignment",e=>Ia(e.screenSizePerspectiveAlignment||e.screenSizePerspective,e.screenSizePerspectiveAlignment?null:e.screenSizePerspectiveMinPixelReferenceSize)))}function Ia(t,e){const r=e!=null&&t!=null?Math.min(t.minPixelSize/e,1):0;return t?q(vo,t.divisor,t.offset,r):q(vo,0,0,0)}const vo=_();let Er=class extends k{constructor(e,r,i){super(e,"vec4",1,(o,a,s)=>o.setUniform4fv(e,r(a,s),i))}};function Na(t,e){const r=t.vertex;e.hasVerticalOffset?(Tu(r),e.hasScreenSizePerspective&&(t.include(wu),yu(r),Vt(t.vertex,e)),r.code.add(d`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical?d`vec3 worldNormal = normalize(worldPos + localOrigin);`:d`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective?d`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:d`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(d`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const Mu=qe();function Tu(t){t.uniforms.add(new Er("verticalOffset",(e,r)=>{const{minWorldLength:i,maxWorldLength:o,screenLength:a}=e.verticalOffset,s=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),n=r.camera.pixelRatio||1;return he(Mu,a*n,s,i,o)}))}function Su(t,e){if(e.output!==10)return t.vertex.code.add(d`void forwardObjectAndLayerIdColor() {}`),void t.fragment.code.add(d`void outputObjectAndLayerIdColor() {}`);const r=e.instanced;t.varyings.add("objectAndLayerIdColorVarying","vec4");const i=r?"instanceOlidColor":"olidColor";t.attributes.add(i,"vec4"),t.vertex.code.add(d`
    void forwardObjectAndLayerIdColor() {
      objectAndLayerIdColorVarying = ${i} * 0.003921568627451;
    }`),t.fragment.code.add(d`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`)}function $u(t,e){switch(e.output){case 4:case 5:case 6:case 7:t.fragment.code.add(d`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth){
float fragDepth = _calculateFragDepth(_linearDepth);
gl_FragDepth = fragDepth;
}`);break;case 8:t.fragment.code.add(d`void outputDepth(float _linearDepth){
gl_FragDepth = _linearDepth;
}`)}}function Cu(t){const{fragment:e}=t;e.code.add(d`uint readChannelBits(uint channel, int highlightLevel) {
int llc = (highlightLevel & 3) << 1;
return (channel >> llc) & 3u;
}
uint readChannel(uvec2 texel, int highlightLevel) {
int lic = (highlightLevel >> 2) & 1;
return texel[lic];
}
uint readLevelBits(uvec2 texel, int highlightLevel) {
return readChannelBits(readChannel(texel, highlightLevel), highlightLevel);
}`)}let Eu=class extends k{constructor(e,r){super(e,"ivec2",0,(i,o)=>i.setUniform2iv(e,r(o)))}},za=class extends k{constructor(e,r){super(e,"int",0,(i,o)=>i.setUniform1i(e,r(o)))}},Si=class extends k{constructor(e,r){super(e,"sampler2D",0,(i,o)=>i.bindTexture(e,r(o)))}},Ru=class extends k{constructor(e,r){super(e,"usampler2D",0,(i,o)=>i.bindTexture(e,r(o)))}};function La(t,e){const{fragment:r}=t,{output:i,draped:o,hasHighlightMixTexture:a}=e;i===9?(r.uniforms.add(new za("highlightLevel",s=>s.highlightLevel??0),new Eu("highlightMixOrigin",s=>s.highlightMixOrigin)),t.outputs.add("fragHighlight","uvec2",0),t.include(Cu),a?r.uniforms.add(new Ru("highlightMixTexture",s=>s.highlightMixTexture)).code.add(d`uvec2 getAccumulatedHighlight() {
return texelFetch(highlightMixTexture, ivec2(gl_FragCoord.xy) - highlightMixOrigin, 0).rg;
}
void outputHighlight(bool occluded) {
if (highlightLevel == 0) {
uint bits = occluded ? 3u : 1u;
fragHighlight = uvec2(bits, 0);
} else {
int ll = (highlightLevel & 3) << 1;
int li = (highlightLevel >> 2) & 3;
uint bits;
if (occluded) {
bits = 3u << ll;
} else {
bits = 1u << ll;
}
uvec2 combinedHighlight = getAccumulatedHighlight();
combinedHighlight[li] |= bits;
fragHighlight = combinedHighlight;
}
}`):r.code.add(d`void outputHighlight(bool occluded) {
uint bits = occluded ? 3u : 1u;
fragHighlight = uvec2(bits, 0);
}`),o?r.code.add(d`bool isHighlightOccluded() {
return false;
}`):r.uniforms.add(new Si("depthTexture",s=>s.mainDepth)).code.add(d`bool isHighlightOccluded() {
float sceneDepth = texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x;
return gl_FragCoord.z > sceneDepth + 5e-7;
}`),r.code.add(d`void calculateOcclusionAndOutputHighlight() {
outputHighlight(isHighlightOccluded());
}`)):r.code.add(d`void calculateOcclusionAndOutputHighlight() {}`)}let Pu=class extends k{constructor(e,r,i,o){super(e,"vec4",1,(a,s,n)=>a.setUniform4fv(e,r(s,n),o),i)}},Ou=class extends k{constructor(e,r,i,o){super(e,"float",1,(a,s,n)=>a.setUniform1fv(e,r(s,n),o),i)}};const Ur=8;function zt(t,e){const{vertex:r,attributes:i}=t;e.hasVVInstancing&&(e.hasVVSize||e.hasVVColor)&&i.add("instanceFeatureAttribute","vec4"),e.hasVVSize?(r.uniforms.add(new le("vvSizeMinSize",o=>o.vvSize.minSize)),r.uniforms.add(new le("vvSizeMaxSize",o=>o.vvSize.maxSize)),r.uniforms.add(new le("vvSizeOffset",o=>o.vvSize.offset)),r.uniforms.add(new le("vvSizeFactor",o=>o.vvSize.factor)),r.uniforms.add(new le("vvSizeFallback",o=>o.vvSize.fallback)),r.uniforms.add(new He("vvSymbolRotationMatrix",o=>o.vvSymbolRotationMatrix)),r.uniforms.add(new le("vvSymbolAnchor",o=>o.vvSymbolAnchor)),r.code.add(d`vec3 vvScale(vec4 _featureAttribute) {
if (isnan(_featureAttribute.x)) {
return vvSizeFallback;
}
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(d`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 scale = max(vvScale(_featureAttribute), eps);
        return vec4(vvSymbolRotationMatrix * _normal / scale, 1.0);
      }

      ${e.hasVVInstancing?d`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(d`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vertex.include(Ze),e.hasVVColor?(r.constants.add("vvColorNumber","int",Ur),r.uniforms.add(new Ou("vvColorValues",o=>o.vvColor.values,Ur),new Pu("vvColorColors",o=>o.vvColor.colors,Ur),new Er("vvColorFallback",o=>o.vvColor.fallback,{supportsNaN:!0})),e.hasVVInstancing&&(t.vertex.include(Mi),t.vertex.include(Ti)),r.code.add(d`
      vec4 interpolateVVColor(float value) {
        if (isnan(value)) {
          return vvColorFallback;
        }

        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${e.hasVVInstancing?d`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }

            MaskedColor applyVVColor(MaskedColor color) {
              return multiplyMaskedColors(color, createMaskedFromNaNColor(vvColor()));
            }
            `:d`
            vec4 vvColor() {
              return vec4(1.0);
            }

            MaskedColor applyVVColor(MaskedColor color) {
              return color;
            }
            `}
    `)):r.code.add(d`vec4 vvColor() {
return vec4(1.0);
}
MaskedColor applyVVColor(MaskedColor color) {
return color;
}`)}let Au=class extends k{constructor(e,r,i){super(e,"float",2,(o,a,s)=>o.setUniform1f(e,r(a,s),i))}},ke=class extends k{constructor(e,r,i){super(e,"float",1,(o,a,s)=>o.setUniform1f(e,r(a,s),i))}};const Tt=1/255.5;function wt(t,e){Fu(t,e,new ke("textureAlphaCutoff",r=>r.textureAlphaCutoff))}function Fu(t,e,r){const i=t.fragment,o=e.alphaDiscardMode,a=o===0;o!==2&&o!==3||i.uniforms.add(r),i.code.add(d`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${o===1?"color.a = 1.0;":`if (color.a < ${a?d.float(Tt):"textureAlphaCutoff"}) {
              discard;
             } ${L(o===2,"else { color.a = 1.0; }")}`}
    }
  `)}let ue=class extends k{constructor(e,r){super(e,"sampler2D",1,(i,o,a)=>i.bindTexture(e,r(o,a)))}};function Va(t,e){const{vertex:r,fragment:i,varyings:o}=t,{hasColorTexture:a,alphaDiscardMode:s}=e,n=a&&s!==1,{output:l,normalType:c,hasColorTextureTransform:u}=e;switch(l){case 2:_t(r,e),t.include(xt),i.include(gt,e),t.include(it,e),n&&i.uniforms.add(new ue("tex",h=>h.texture)),r.main.add(d`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),t.include(wt,e),i.main.add(d`
        discardBySlice(vpos);
        ${L(n,d`vec4 texColor = texture(tex, ${u?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case 4:case 5:case 6:case 7:case 10:_t(r,e),t.include(xt),t.include(it,e),t.include(zt,e),t.include($u,e),i.include(gt,e),t.include(Su,e),mu(t),o.add("depth","float",{invariant:!0}),n&&i.uniforms.add(new ue("tex",h=>h.texture)),r.main.add(d`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),t.include(wt,e),i.main.add(d`
        discardBySlice(vpos);
        ${L(n,d`vec4 texColor = texture(tex, ${u?"colorUV":"vuv0"});
               discardOrAdjustAlpha(texColor);`)}
        ${l===10?d`outputObjectAndLayerIdColor();`:d`outputDepth(depth);`}`);break;case 3:{_t(r,e),t.include(xt),t.include(Sr,e),t.include(ba,e),t.include(it,e),t.include(zt,e),n&&i.uniforms.add(new ue("tex",f=>f.texture)),c===2&&o.add("vPositionView","vec3",{invariant:!0});const h=c===0||c===1;r.main.add(d`
        vpos = getVertexInLocalOriginSpace();
        ${h?d`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:d`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),i.include(gt,e),t.include(wt,e),i.main.add(d`
        discardBySlice(vpos);
        ${L(n,d`vec4 texColor = texture(tex, ${u?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${c===2?d`vec3 normal = screenDerivativeNormal(vPositionView);`:d`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case 9:_t(r,e),t.include(xt),t.include(it,e),t.include(zt,e),n&&i.uniforms.add(new ue("tex",h=>h.texture)),r.main.add(d`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),i.include(gt,e),t.include(wt,e),t.include(La,e),i.main.add(d`
        discardBySlice(vpos);
        ${L(n,d`vec4 texColor = texture(tex, ${u?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function Du(t){t.fragment.code.add(d`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function $i(t,e){const{textureCoordinateType:r}=e;if(r===0||r===3)return;t.include(it,e);const i=r===2;i&&t.include(Du),t.fragment.code.add(d`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${i?"textureAtlasLookup(tex, uv, vuvRegion)":"texture(tex, uv)"};
    }
  `)}let Ba=class extends k{constructor(e,r,i){super(e,"vec2",1,(o,a,s)=>o.setUniform2fv(e,r(a,s),i))}},Bt=class extends k{constructor(e,r){super(e,"sampler2D",2,(i,o,a)=>i.bindTexture(e,r(o,a)))}};function Iu(t,e){const r=t.fragment,{hasVertexTangents:i,doubleSidedMode:o,hasNormalTexture:a,textureCoordinateType:s,bindType:n,hasNormalTextureTransform:l}=e;i?(t.attributes.add("tangent","vec4"),t.varyings.add("vTangent","vec4"),o===2?r.code.add(d`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(d`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(d`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),a&&s!==0&&(t.include($i,e),r.uniforms.add(n===1?new ue("normalTexture",c=>c.textureNormal):new Bt("normalTexture",c=>c.textureNormal)),l&&(r.uniforms.add(new Ba("scale",c=>c.scale??Fn)),r.uniforms.add(new He("normalTextureTransformMatrix",c=>c.normalTextureTransformMatrix??Mt))),r.code.add(d`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),l&&r.code.add(d`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add(d`return tangentSpace * rawNormal;
}`))}let et=class extends Js{constructor(e){super(e),this.row=0,this.column=0,this.rows=1,this.columns=1}equals(e){return e!=null&&this.row===e.row&&this.rows===e.rows&&this.column===e.column&&this.columns===e.columns}};p([v({type:Number,nonNullable:!0,json:{read:!1,write:!1}})],et.prototype,"row",void 0),p([v({type:Number,nonNullable:!0,json:{read:!1,write:!1}})],et.prototype,"column",void 0),p([v({type:Number,nonNullable:!0,json:{read:!1,write:!1}})],et.prototype,"rows",void 0),p([v({type:Number,nonNullable:!0,json:{read:!1,write:!1}})],et.prototype,"columns",void 0),et=p([lt("esri.CameraLayout")],et);const ja=et;let Oe=class extends Qs(Ps){constructor(...t){super(...t),this.position=new ni([0,0,0]),this.heading=0,this.tilt=0,this.fov=55,this.layout=new ja}normalizeCtorArgs(t,e,r,i){if(t&&typeof t=="object"&&("x"in t||Array.isArray(t))){const o={position:t};return e!=null&&(o.heading=e),r!=null&&(o.tilt=r),i!=null&&(o.fov=i),o}return t}writePosition(t,e,r,i){const o=t.clone();o.x=Ne(t.x||0),o.y=Ne(t.y||0),o.z=t.hasZ?Ne(t.z||0):t.z,e[r]=o.write({},i)}readPosition(t,e){const r=new ni;return r.read(t,e),r.x=Ne(r.x||0),r.y=Ne(r.y||0),r.z=r.hasZ?Ne(r.z||0):r.z,r}equals(t){return t!=null&&this.tilt===t.tilt&&this.heading===t.heading&&this.fov===t.fov&&this.position.equals(t.position)&&this.layout.equals(t.layout)}};p([v({type:ni,json:{write:{isRequired:!0}}})],Oe.prototype,"position",void 0),p([en("position")],Oe.prototype,"writePosition",null),p([tn("position")],Oe.prototype,"readPosition",null),p([v({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),Fr(t=>In.normalize(Ne(t)))],Oe.prototype,"heading",void 0),p([v({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),Fr(t=>yt(Ne(t),-180,180))],Oe.prototype,"tilt",void 0),p([v({type:Number,nonNullable:!0,json:{default:55,write:!0}}),Fr(t=>yt(Ne(t,55),1,170))],Oe.prototype,"fov",void 0),p([v({type:ja,nonNullable:!0,json:{read:!1,write:!1}})],Oe.prototype,"layout",void 0),Oe=p([lt("esri.Camera")],Oe);function Nu(t,e,r){return 2*Math.atan(Math.sqrt(e*e+r*r)*Math.tan(.5*t)/e)}function zu(t,e,r){return 2*Math.atan(Math.sqrt(e*e+r*r)*Math.tan(.5*t)/r)}function Lu(t,e,r){return 2*Math.atan(e*Math.tan(.5*t)/Math.sqrt(e*e+r*r))}function Vu(t,e,r){return 2*Math.atan(r*Math.tan(.5*t)/Math.sqrt(e*e+r*r))}var mi;let D=mi=class extends mr{constructor(t){super(t),this._ray=Uo(),this._viewport=li(0,0,1,1),this._padding=li(0,0,0,0),this._fov=55/180*Math.PI,this._nearFar=Xo(1,1e3),this._viewDirty=!0,this._viewMatrix=ne(),this._viewProjectionDirty=!0,this._viewProjectionMatrix=ne(),this._viewInverseTransposeMatrixDirty=!0,this._viewInverseTransposeMatrix=ne(),this._frustumDirty=!0,this._frustum=Wo(),this._fullViewport=qe(),this._pixelRatio=1,this.row=0,this.column=0,this._rows=1,this._columns=1,this._center=_(),this._up=_(),this.relativeElevation=0}get pixelRatio(){return this._pixelRatio}set pixelRatio(t){this._pixelRatio=t>0?t:1}get rows(){return this._rows}set rows(t){this._rows=Math.max(1,t)}get columns(){return this._columns}set columns(t){this._columns=Math.max(1,t)}get eye(){return this._ray.origin}set eye(t){this._compareAndSetView(t,this._ray.origin)}get center(){return this._center}set center(t){this._compareAndSetView(t,this._center,"_center")}get ray(){return me(this._ray.direction,this.center,this.eye),this._ray}get up(){return this._up}set up(t){this._compareAndSetView(t,this._up,"_up")}get viewMatrix(){return this._ensureViewClean(),this._viewMatrix}set viewMatrix(t){Nr(this._viewMatrix,t),this.notifyChange("_viewMatrix"),this._viewDirty=!1,this._viewInverseTransposeMatrixDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0}get viewForward(){return this._ensureViewClean(),q(_(),-this._viewMatrix[2],-this._viewMatrix[6],-this._viewMatrix[10])}get viewUp(){return this._ensureViewClean(),q(_(),this._viewMatrix[1],this._viewMatrix[5],this._viewMatrix[9])}get viewRight(){return this._ensureViewClean(),q(_(),this._viewMatrix[0],this._viewMatrix[4],this._viewMatrix[8])}get nearFar(){return this._nearFar}get near(){return this._nearFar[0]}set near(t){this._nearFar[0]!==t&&(this._nearFar[0]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_nearFar"))}get far(){return this._nearFar[1]}set far(t){this._nearFar[1]!==t&&(this._nearFar[1]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_nearFar"))}get viewport(){return this._viewport}set viewport(t){this.x=t[0],this.y=t[1],this.width=t[2],this.height=t[3]}get screenViewport(){if(this.pixelRatio===1)return this._viewport;const t=ki(qe(),this._viewport,1/this.pixelRatio),e=this._get("screenViewport");return e&&Hi(t,e)?e:t}get screenPadding(){if(this.pixelRatio===1)return this._padding;const t=ki(qe(),this._padding,1/this.pixelRatio),e=this._get("screenPadding");return e&&Hi(t,e)?e:t}get x(){return this._viewport[0]}set x(t){t+=this._padding[3],this._viewport[0]!==t&&(this._viewport[0]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_viewport"))}get y(){return this._viewport[1]}set y(t){t+=this._padding[2],this._viewport[1]!==t&&(this._viewport[1]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_viewport"))}get width(){return this._viewport[2]}set width(t){this._viewport[2]!==t&&(this._viewport[2]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_viewport"))}get height(){return this._viewport[3]}set height(t){this._viewport[3]!==t&&(this._viewport[3]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_viewport"))}get fullWidth(){return this._viewport[2]+this._padding[1]+this._padding[3]}set fullWidth(t){this.width=t-(this._padding[1]+this._padding[3])}get fullHeight(){return this._viewport[3]+this._padding[0]+this._padding[2]}set fullHeight(t){this.height=t-(this._padding[0]+this._padding[2])}get fullViewport(){return this._fullViewport[0]=this._viewport[0]-this._padding[3],this._fullViewport[1]=this._viewport[1]-this._padding[2],this._fullViewport[2]=this.fullWidth,this._fullViewport[3]=this.fullHeight,this._fullViewport}get _aspect(){return this.width/this.height}get padding(){return this._padding}set padding(t){zr(this._padding,t)||(this._viewport[0]+=t[3]-this._padding[3],this._viewport[1]+=t[2]-this._padding[2],this._viewport[2]-=t[1]+t[3]-(this._padding[1]+this._padding[3]),this._viewport[3]-=t[0]+t[2]-(this._padding[0]+this._padding[2]),Ht(this._padding,t),this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_padding"),this.notifyChange("_viewport"))}get viewProjectionMatrix(){return this._viewProjectionDirty&&(ai(this._viewProjectionMatrix,this.projectionMatrix,this.viewMatrix),this._viewProjectionDirty=!1),this._viewProjectionMatrix}get projectionMatrix(){return this._projectionMatrixInternal}get inverseProjectionMatrix(){return Lr(ne(),this.projectionMatrix)||this._get("inverseProjectionMatrix")||ne()}get fov(){return this._fov}set fov(t){this._fov=t,this._viewProjectionDirty=!0,this._frustumDirty=!0}get fovX(){return Lu(this._fov,this.width,this.height)}set fovX(t){this._fov=Nu(t,this.width,this.height),this._viewProjectionDirty=!0,this._frustumDirty=!0}get fovY(){return Vu(this._fov,this.width,this.height)}set fovY(t){this._fov=zu(t,this.width,this.height),this._viewProjectionDirty=!0,this._frustumDirty=!0}get distance(){return Fo(this.center,this.eye)}get frustum(){return this._recomputeFrustum(),this._frustum}get viewInverseTransposeMatrix(){return(this._viewInverseTransposeMatrixDirty||this._viewDirty)&&(Lr(this._viewInverseTransposeMatrix,this.viewMatrix),rn(this._viewInverseTransposeMatrix,this._viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1),this._viewInverseTransposeMatrix}depthNDCToWorld(t){const{near:e,far:r}=this;return 2*e*r/(r+e-t*(r-e))}get perRenderPixelRatio(){return Math.tan(this.fovX/2)/(this.width/2)}get perScreenPixelRatio(){return this.perRenderPixelRatio*this.pixelRatio}get aboveGround(){return this.relativeElevation!=null&&this.relativeElevation>=0}get _projectionMatrixInternal(){const t=this.width,e=this.height,r=this.near*Math.tan(this.fovY/2)*2,i=r*this._aspect,o=r/this.rows,a=i/this.columns,s=-i/2+this.column*a,n=s+a,l=-r/2+this.row*o,c=l+o,u=on(ne(),s*(1+2*this._padding[3]/t),n*(1+2*this._padding[1]/t),l*(1+2*this._padding[2]/e),c*(1+2*this._padding[0]/e),this.near,this.far),h=this._get("projectionMatrix");return h&&an(h,u)?h:u}copyFrom(t){re(this._ray.origin,t.eye),this.center=t.center,this.up=t.up,Ht(this._viewport,t.viewport),this.notifyChange("_viewport"),Ht(this._padding,t.padding),this.notifyChange("_padding"),sn(this._nearFar,t.nearFar),this.notifyChange("_nearFar"),this._fov=t.fov,this.row=t.row,this.column=t.column,this.rows=t.rows,this.columns=t.columns,this.relativeElevation=t.relativeElevation;const e=t;return this._viewDirty=e._viewDirty,this._viewDirty||(Nr(this._viewMatrix,t.viewMatrix),this.notifyChange("_viewMatrix")),this._viewProjectionDirty=!0,this._frustumDirty=e._frustumDirty,this._frustumDirty||(Mn(this._frustum,t.frustum),this._frustumDirty=!1),e._viewInverseTransposeMatrixDirty?this._viewInverseTransposeMatrixDirty=!0:(Nr(this._viewInverseTransposeMatrix,t.viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1),Ht(this._fullViewport,t.fullViewport),this.pixelRatio=t.pixelRatio,this}copyViewFrom(t){this.eye=t.eye,this.center=t.center,this.up=t.up,this.fov=t.fov}clone(){return new mi().copyFrom(this)}equals(t){return Ie(this.eye,t.eye)&&Ie(this.center,t.center)&&Ie(this.up,t.up)&&zr(this._viewport,t.viewport)&&zr(this._padding,t.padding)&&nn(this.nearFar,t.nearFar)&&this._fov===t.fov&&this.pixelRatio===t.pixelRatio&&this.relativeElevation===t.relativeElevation&&this.row===t.row&&this.column===t.column&&this.rows===t.rows&&this.columns===t.columns}almostEquals(t){const e=Math.max(1,1/this.pixelRatio,1/t.pixelRatio);if(Math.abs(t.fov-this._fov)>=.001||Wi(t.screenPadding,this.screenPadding)>=e||Wi(this.screenViewport,t.screenViewport)>=e||this.row!==t.row||this.column!==t.column||this.rows!==t.rows||this.columns!==t.columns)return!1;je(Z,t.eye,t.center),je(Se,this.eye,this.center);const r=pe(Z,Se),i=Gi(Z),o=Gi(Se),a=5e-4;return r*r>=(1-1e-10)*i*o&&oi(t.eye,this.eye)<Math.max(i,o)*a*a}computeRenderPixelSizeAt(t){return this.computeRenderPixelSizeAtDist(this._viewDirectionDistance(t))}computeRenderPixelSizeAtDist(t){return t*this.perRenderPixelRatio}computeScreenPixelSizeAt(t){return this.computeScreenPixelSizeAtDist(this._viewDirectionDistance(t))}_viewDirectionDistance(t){return Math.abs(bn(this.viewForward,me(Z,t,this.eye)))}computeScreenPixelSizeAtDist(t){return t*this.perScreenPixelRatio}computeDistanceFromRadius(t,e){return t/Math.tan(Math.min(this.fovX,this.fovY)/(2*(e||1)))}getScreenCenter(t=ln()){return t[0]=(this.padding[3]+this.width/2)/this.pixelRatio,t[1]=(this.padding[0]+this.height/2)/this.pixelRatio,t}getRenderCenter(t,e=.5,r=.5){return t[0]=this.padding[3]+this.width*e,t[1]=this.padding[2]+this.height*r,t[2]=.5,t}setGLViewport(t){const e=this.viewport,r=this.padding;t.setViewport(e[0]-r[3],e[1]-r[2],e[2]+r[1]+r[3],e[3]+r[0]+r[2])}applyProjection(t,e){t!==N&&re(N,t),N[3]=1,Wt(N,N,this.projectionMatrix);const r=Math.abs(N[3]);ie(N,N,1/r);const i=this.fullViewport;e[0]=rt(0,i[0]+i[2],.5+.5*N[0]),e[1]=rt(0,i[1]+i[3],.5+.5*N[1]),e[2]=.5*(N[2]+1),e[3]=r}unapplyProjection(t,e){const r=this.fullViewport;N[0]=(t[0]/(r[0]+r[2])*2-1)*t[3],N[1]=(t[1]/(r[1]+r[3])*2-1)*t[3],N[2]=(2*t[2]-1)*t[3],N[3]=t[3],this.inverseProjectionMatrix!=null&&(Wt(N,N,this.inverseProjectionMatrix),e[0]=N[0],e[1]=N[1],e[2]=N[2])}projectToScreen(t,e){return this.projectToRenderScreen(t,kr),this.renderToScreen(kr,e),e}projectToRenderScreen(t,e){if(N[0]=t[0],N[1]=t[1],N[2]=t[2],N[3]=1,Wt(N,N,this.viewProjectionMatrix),N[3]===0)return null;const r=N;ie(r,r,1/Math.abs(N[3]));const i=this.fullViewport,o=rt(0,i[0]+i[2],.5+.5*r[0]),a=rt(0,i[1]+i[3],.5+.5*r[1]);return"x"in e?(e.x=o,e.y=a):(e[0]=o,e[1]=a,e.length>2&&(e[2]=.5*(r[2]+1))),e}unprojectFromScreen(t,e){return this.unprojectFromRenderScreen(this.screenToRender(t,kr),e)}unprojectFromRenderScreen(t,e){if(ai(Jt,this.projectionMatrix,this.viewMatrix),!Lr(Jt,Jt))return null;const r=this.fullViewport;return N[0]=2*(t[0]-r[0])/r[2]-1,N[1]=2*(t[1]-r[1])/r[3]-1,N[2]=2*t[2]-1,N[3]=1,Wt(N,N,Jt),N[3]===0?null:(e[0]=N[0]/N[3],e[1]=N[1]/N[3],e[2]=N[2]/N[3],e)}constrainWindowSize(t,e,r,i){const o=t*this.pixelRatio,a=e*this.pixelRatio,s=Math.max(o-r/2,0),n=Math.max(this.fullHeight-a-i/2,0),l=-Math.min(o-r/2,0),c=-Math.min(this.fullHeight-a-i/2,0),u=r-l- -Math.min(this.fullWidth-o-r/2,0),h=i-c- -Math.min(a-i/2,0);return[Math.round(s),Math.round(n),Math.round(u),Math.round(h)]}computeUp(t){t===1?this._computeUpGlobal():this._computeUpLocal()}screenToRender(t,e){const r=t[0]*this.pixelRatio,i=this.fullHeight-t[1]*this.pixelRatio;return e[0]=r,e[1]=i,e}renderToScreen(t,e){const r=t[0]/this.pixelRatio,i=(this.fullHeight-t[1])/this.pixelRatio;e[0]=r,e[1]=i}_computeUpGlobal(){me(Z,this.center,this.eye);const t=J(this.center);t<1?Ie(this._up,qi)&&(re(this._up,qi),this._markViewDirty(),this.notifyChange("_up")):Math.abs(pe(Z,this.center))>.9999*J(Z)*t||(ve(Se,Z,this.center),ve(Se,Se,Z),Ce(Se,Se),Ie(this._up,Se)||(re(this._up,Se),this.notifyChange("_up"),this._markViewDirty()))}_computeUpLocal(){Do(Z,this.eye,this.center),Math.abs(Z[2])<=.9999&&(ie(Z,Z,Z[2]),q(Z,-Z[0],-Z[1],1-Z[2]),Ce(Z,Z),Ie(this._up,Z)||(re(this._up,Z),this.notifyChange("_up"),this._markViewDirty()))}_compareAndSetView(t,e,r=""){typeof t[0]=="number"&&isFinite(t[0])&&typeof t[1]=="number"&&isFinite(t[1])&&typeof t[2]=="number"&&isFinite(t[2])?Ie(t,e)||(re(e,t),this._markViewDirty(),r.length&&this.notifyChange(r)):ct.getLogger("esri.views.3d.webgl-engine.lib.RenderCamera").warn("RenderCamera vector contains invalid number, ignoring value")}_markViewDirty(){this._viewDirty=!0,this._frustumDirty=!0,this._viewProjectionDirty=!0}_recomputeFrustum(){this._frustumDirty&&(qo(this.viewMatrix,this.projectionMatrix,this._frustum),this._frustumDirty=!1)}_ensureViewClean(){this._viewDirty&&(cn(this._viewMatrix,this.eye,this.center,this.up),this.notifyChange("_viewMatrix"),this._viewDirty=!1,this._viewInverseTransposeMatrixDirty=!0)}};p([v()],D.prototype,"_viewport",void 0),p([v()],D.prototype,"_padding",void 0),p([v()],D.prototype,"_fov",void 0),p([v()],D.prototype,"_nearFar",void 0),p([v()],D.prototype,"_viewDirty",void 0),p([v()],D.prototype,"_viewMatrix",void 0),p([v()],D.prototype,"_pixelRatio",void 0),p([v()],D.prototype,"pixelRatio",null),p([v()],D.prototype,"row",void 0),p([v()],D.prototype,"column",void 0),p([v()],D.prototype,"_rows",void 0),p([v()],D.prototype,"rows",null),p([v()],D.prototype,"_columns",void 0),p([v()],D.prototype,"columns",null),p([v()],D.prototype,"eye",null),p([v()],D.prototype,"center",null),p([v()],D.prototype,"_center",void 0),p([v()],D.prototype,"up",null),p([v()],D.prototype,"_up",void 0),p([v()],D.prototype,"viewMatrix",null),p([v({readOnly:!0})],D.prototype,"viewForward",null),p([v({readOnly:!0})],D.prototype,"viewUp",null),p([v({readOnly:!0})],D.prototype,"viewRight",null),p([v({readOnly:!0})],D.prototype,"nearFar",null),p([v()],D.prototype,"near",null),p([v()],D.prototype,"far",null),p([v()],D.prototype,"viewport",null),p([v({readOnly:!0})],D.prototype,"screenViewport",null),p([v({readOnly:!0})],D.prototype,"screenPadding",null),p([v()],D.prototype,"x",null),p([v()],D.prototype,"y",null),p([v()],D.prototype,"width",null),p([v()],D.prototype,"height",null),p([v()],D.prototype,"fullWidth",null),p([v()],D.prototype,"fullHeight",null),p([v({readOnly:!0})],D.prototype,"_aspect",null),p([v()],D.prototype,"padding",null),p([v({readOnly:!0})],D.prototype,"projectionMatrix",null),p([v({readOnly:!0})],D.prototype,"inverseProjectionMatrix",null),p([v()],D.prototype,"fov",null),p([v()],D.prototype,"fovX",null),p([v()],D.prototype,"fovY",null),p([v()],D.prototype,"viewInverseTransposeMatrix",null),p([v({readOnly:!0})],D.prototype,"_projectionMatrixInternal",null),p([v()],D.prototype,"relativeElevation",void 0),D=mi=p([lt("esri.views.3d.webgl.RenderCamera")],D);const N=qe(),Jt=ne(),Z=_(),Se=_(),kr=un();var Le;let cm=(Le=class{constructor(e=1/0,r=-1/0){this.near=e,this.far=r}set(e,r){this.near=e,this.far=r}union(e){e!=null&&(this.near=Math.min(this.near,e.near),this.far=Math.max(this.far,e.far))}within(e){return this.near<=e&&e<=this.far}equals(e){return this.near===e.near&&this.far===e.far}},Le.Zero=new Le(0,0),Le.Infinite=new Le,Le);function Bu(t,e){const r=[],i=[];return Qt(r,t,e,0),Qt(i,r,e,1),Qt(r,i,e,2),Qt(i,r,e,3),i}function Qt(t,e,r,i){const o=ju(r,i);if(t.length=0,e.length){o(er,e[0],e[0])===1&&Rt(t,e[0]);for(let a=0;a<e.length;a++){const s=e[a===e.length-1?0:a+1];switch(o(er,e[a],s)){case 1:Rt(t,s);break;case 3:Rt(t,Yi(er));break;case 2:Rt(t,Yi(er)),Rt(t,s)}}}}function Rt(t,e){t.length!==0&&dn(t.at(-1),e)||t.push(e)}function ju(t,e){const r=e===0||e===2?0:1,i=t[e],o=e===0||e===1?1:-1,a=r===0?1:0;return(s,n,l)=>{if(n[r]<i&&l[r]<i)return o===1?0:1;if(n[r]>i&&l[r]>i)return o===1?1:0;const c=(l[a]-n[a])/(l[r]-n[r]),u=n[a]+c*(i-n[r]);return s[r]=i,s[a]=u,(n[r]<i?1:-1)*o>0?2:3}}const er=Gt(),Gu=_(),tr=_();function Ga(){return{direction:_(),up:_()}}function Ua(t,e,r,i,o){let a=Ce(Gu,t),s=pe(a,i);const n=s>0;s=Math.abs(s),s>.99&&(s=Math.abs(pe(e,i)),s<.99?(re(a,e),n&&ie(a,a,-1)):a=null);let l=0;if(a){ie(tr,i,pe(i,a)),me(a,a,tr);const u=pe(a,o)/(J(a)*J(o));ve(tr,a,o),l=(pe(tr,i)>0?1:-1)*at(ci(u))}const c=at(ci(-pe(i,t)/J(t)));return r?(r.heading=l,r.tilt=c,r):{heading:l,tilt:c}}function ka(t,e,r,i){me(go,r,e),Vn(i,Tn(e,go),t)||t===r||re(t,r)}const go=_(),Ha=ce(0,1,0),Wa=ce(0,0,1),Pt=ne(),Ae=_(),Fe=_();function qa(t,e,r,i=Ga()){const{direction:o,up:a}=i;return hn(Pt,-ge(e)),pn(Pt,Pt,ge(r)),Ge(o,Wa,Pt),ie(o,o,-1),Ge(a,Ha,Pt),i}function Uu(t,e,r,i){return Ua(e,r,i,Wa,Ha)}function ku(t,e,r,i){const o=qa(t,r,i),a=_();return ie(a,o.direction,-e),vi(a,a,t),{up:o.up,eye:a,heading:r,tilt:i}}function Hu(t){return at(t)}function Wu(t){return ge(t)}function qu(t,e,r,i,o){const a=t.renderSpatialReference,s=t.spatialReference??e.spatialReference;return Ki(e,Ae,a),Ki(e,Fe,a),Ae[0]-=r/2,Fe[0]+=r/2,Ae[1]-=i/2,Fe[1]+=i/2,Zi(Ae,a,Ae,s),Zi(Fe,a,Fe,s),o?(o.xmin=Ae[0],o.ymin=Ae[1],o.xmax=Fe[0],o.ymax=Fe[1],o.spatialReference=s):o=new zo(Ae[0],Ae[1],Fe[0],Fe[1],s),o}function Xu(t,e){const r=t.frustum,{renderCoordsHelper:i}=t,o=i.getAltitude(e),a=t.spatialReference,s=t.state.camera.eye,n=[],l=r.planes[5];for(let c=0;c<4;c++){const u=r.lines[c];i.intersectInfiniteManifold(ko(u.origin,u.direction),o,ye)||Yu(ye,r,i,u.endpoint,o),ka(ye,s,ye,l),n.push(Xo(ye[0],ye[1]))}return Zu(Bu(n,i.extent),i,a)}function Yu(t,e,r,i,o){const a=e.lines[11].direction,s=(o-r.getAltitude(i))/a[2];ze(t,i,a,s)}function Zu(t,e,r){const i=t.map(o=>(q(ye,o[0],o[1],0),e.fromRenderCoords(ye,ye,r),[ye[0],ye[1]]));return i.length<=2?new ui({spatialReference:r}):(i.push(i[0].slice()),Lo(i)||i.reverse(),new ui({rings:[i],spatialReference:r}))}const ye=_();Object.freeze(Object.defineProperty({__proto__:null,directionToHeadingTilt:Uu,eyeForCenterWithHeadingTilt:ku,eyeTiltToLookAtTilt:Wu,headingTiltToDirectionUp:qa,lookAtTiltToEyeTilt:Hu,toArea:Xu,toExtent:qu},Symbol.toStringTag,{value:"Module"}));var ot;let Ku=(ot=class{get planes(){return this.frustum}get points(){return this._points}get mutablePoints(){return this._points}get direction(){return this._direction}get origin(){return this._origin}constructor(e){this.renderCoordsHelper=e,this.frustum=Wo(),this._points=Sn(),this.lines=new Array(12),this._origin=_(),this._direction=_(),this._altitude=null;for(let r=0;r<12;r++)this.lines[r]={origin:null,direction:_(),endpoint:null}}update(e){qo(e.viewMatrix,e.projectionMatrix,this.frustum,this._points),re(this._origin,e.eye),re(this._direction,e.viewForward),this._altitude=this.renderCoordsHelper.getAltitude(this._origin),this._updateLines()}updatePoints(e){for(let r=0;r<this._points.length;r++)re(this._points[r],e[r]);$n(this.frustum,this._points),this._updateLines()}get altitude(){return this._altitude}intersectsSphere(e){return Cn(this.frustum,e)}intersectsRay(e){return En(this.frustum,e)}intersectsLineSegment(e,r){return Rn(this.frustum,e,r)}intersectsPoint(e){return Pn(this.frustum,e)}_updateLines(){const e=this._points;for(let r=0;r<4;r++){const i=r+4;Hr(this.lines[r],e[r],e[i]),Hr(this.lines[r+4],e[r],r===3?e[0]:e[r+1]),Hr(this.lines[r+8],e[i],r===3?e[4]:e[i+1])}}},ot.planePointIndices=On,ot.nearFarLineIndices=[[0,4],[1,5],[2,6],[3,7]],ot);function Hr(t,e,r){t.origin=e,t.endpoint=r,Do(t.direction,e,r)}const Wr=ce(parseFloat(5802e-9.toFixed(6)),parseFloat(13558e-9.toFixed(6)),parseFloat(331e-7.toFixed(6))),qr=3,Xr=ce(qr*parseFloat(65e-8.toFixed(6)),qr*parseFloat(1881e-9.toFixed(6)),qr*parseFloat(85e-9.toFixed(6)));ce(parseFloat(Number(Wr[0]+Xr[0]).toFixed(6)),parseFloat(Number(Wr[1]+Xr[1]).toFixed(6)),parseFloat(Number(Wr[2]+Xr[2]).toFixed(6)));const Ju=2;wr();Uo();function Qu(t,e,r){t.worldUpAtPosition(e,xo),me(Yr,r,e);const i=J(Yr);return i===0?0:ci(pe(Yr,xo)/i)}const xo=_(),Yr=_();function ed(t,e,r){const i=e/r,o=ge(t),a=Math.sin(i/2),s=Math.cos(o),n=2*br(Math.sqrt(a*a/(s*s)));return at(n)}const Xa=ce(0,0,1),Ya=Ce(_(),ce(1,1,1)),Ot=ne(),We=_(),pt=_();function Za(t,e,r,i=Ga()){ve(We,t,Xa),pe(We,We)===0&&ve(We,t,Ya),xn(Ot,-ge(e),t),_n(Ot,Ot,-ge(r),We);const{up:o,direction:a}=i;return ve(o,We,t),Ce(o,o),Ge(o,o,Ot),Ce(a,t),Us(a,a),Ge(a,a,Ot),i}function td(t,e,r,i){const o=We,a=pt;return Ce(o,t),ve(pt,o,Xa),pe(pt,pt)===0&&ve(pt,o,Ya),ve(a,pt,o),Ua(e,r,i,o,a)}function rd(t,e,r,i){const o={eye:_(),up:null,tilt:i,heading:r},a=We;a[0]=t[0],a[1]=t[2],a[2]=-t[1];const s=e,n=ge(r),l=ge(i),c=Math.sin(n),u=Math.cos(n),h=Math.sin(l),f=Math.cos(l),g=J(a);let m;if(Math.abs(l)<1e-8)m=s+g;else{const U=g/h,H=br(s/U),ee=Math.PI-l-H;m=U*Math.sin(ee)}const x=f*s,b=s*s*(h*h),T=u*u*b,E=m-x,S=E*E,$=T*(T+S-a[1]*a[1]);if($<0)return ie(o.eye,a,m/g),o.tilt=0,rr(o,t);const O=Math.sqrt($),B=a[1]*E,A=T+S;let C;if(C=u>0?-O+B:O+B,Math.abs(A)<1e-8)return g<1e-8?(o.eye[0]=0,o.eye[1]=0,o.eye[2]=s):ie(o.eye,a,m/g),o.tilt=0,Zr(o.eye),rr(o,t);o.eye[1]=C/A;const M=c*c*b,F=h*s,y=u*F*o.eye[1],R=o.eye[1]*o.eye[1],P=1-R,V=Math.sqrt(P),j=T*R+M-2*y*V*E+P*S;return Math.abs(j)<1e-8?(ie(o.eye,a,m/g),o.tilt=0,Zr(o.eye),rr(o,t)):(o.eye[0]=(P*(m*a[0]-x*a[0])-F*V*(a[0]*o.eye[1]*u+a[2]*c))/j,o.eye[2]=(P*(m*a[2]-x*a[2])-F*V*(a[2]*o.eye[1]*u-a[0]*c))/j,ie(o.eye,o.eye,m),Zr(o.eye),rr(o,t))}function Zr(t){const e=t[1];t[1]=-t[2],t[2]=e}function rr(t,e){const r=Za(e,t.heading,t.tilt);return t.up=r.up,t}function id(t,e,r){const i=J(e),o=Math.sqrt(r*r+i*i-2*r*i*Math.cos(Math.PI-t)),a=br(r/(o/Math.sin(t)));return at(t-a)}function od(t,e,r){const i=ge(t),o=J(e);return br(r/(o/Math.sin(i)))+i}function ad(t,e,r,i,o){let a,s,n,l;const c=e.latitude,u=mn(t.spatialReference).radius,h=e.longitude,f=ed(c,r,u)/2;a=h-f,s=h+f;const g=ge(c),m=(1+Math.sin(g))/(1-Math.sin(g)),x=(m+1)*Math.tan(i/u/2),b=x*x;function T(S){const $=Math.PI/2;return(S=Nn.normalize(S,-$))>$&&(S=Math.PI-S),S}if(n=1.5*Math.PI-2*Math.atan(.5*(x+Math.sqrt(4*m+b))),l=n+i/u,n=T(n),l=T(l),l<n){const S=l;l=n,n=S}if(n=Math.max(at(n),-90),l=Math.min(at(l),90),s=Gn.monotonic(a,s),s-a>180){const S=(s-a-180)/2;a+=S,s-=S}const E=t.spatialReference&&t.spatialReference.isGeographic?t.spatialReference:fn.WGS84;return o?(o.xmin=a,o.ymin=n,o.xmax=s,o.ymax=l,o.spatialReference=E):o=new zo(a,n,s,l,E),t.spatialReference&&t.spatialReference.isWebMercator&&vn(o,!1,o),o}function sd(t,e){const{renderCoordsHelper:r}=t,i=t.state.camera.clone(),o=new Ku(r);i.near=Ju,o.update(i);const a=r.getAltitude(e),s=t.spatialReference,n=r.referenceEllipsoid.radius,l=i.eye,c=1+Fo(l,e)/(n+a),u=Math.sqrt(c*c-1),{minCurvature:h,maxCurvature:f,minSamples:g,maxSamples:m}=ud,x=cd(t),b=yt((u-h)/(f-h),0,1),T=Math.round(rt(g,m,b)),E=i.aboveGround,S=o.planes[5],$=[],O=Ji(Xe,dd,Qi()),B=Ji(Xe,hd,Qi());he(Kr,0,0,0,0);const A=M=>{};for(let M=0;M<4;M++){const F=M===1&&!E||M===3&&E?1-x:0,y=M===1&&E||M===3&&!E?x:1,R=o.lines[M],P=o.lines[M===3?0:M+1];for(let V=0;V<T;V++){const j=V/T,U=V===0?0:rt(F,y,M===1?1-(1-j)**2:M===3?j**2:j),H=lr(md,R.origin,P.origin,U),ee=kn(R.direction,P.direction,U,pd);r.intersectManifoldClosestSilhouette(ko(H,ee),a,te),ka(te,l,te,S),$.push(It(te)),$.length!==0&&A(oi($.at(-1),te));const de=(eo(O,te)?1:0)|(eo(B,te)?2:0);Kr[de]=1}}$.length>2&&A(oi($[0],$.at(-1)));const C=nd(gn(Kr)>1?ld(Ka($,O),B):[$],r,s);return new ui({rings:C,spatialReference:s})}function nd(t,e,r){const i=2*Vo();return t.map(o=>{const a=[];let s=!1;for(const n of o)e.fromRenderCoords(n,te,r),Math.abs(n[0])<i&&Math.abs(n[1])<i?(a.push([null,te[1]]),a.push([null,te[1]]),s=!0):a.push([te[0],te[1]]);if(s)for(let n=0;n<a.length;n++){const l=a[n];if(l[0]!=null)continue;const c=a[n+1],u=a.at(n===0?-1:n-1);l[0]=u[0],n++;const h=a.at(n===a.length-1?0:n+1);c[0]=h[0]}return a.push(a[0]),Lo(a)||a.reverse(),a})}function ld(t,e){const r=[];for(const i of t)r.push(...Ka(i,e));return r}function Ka(t,e){const r=[],i=[],o=Vo();for(let s=0;s<t.length;s++){const n=t[s],l=s===t.length-1?t[0]:t[s+1],c=An(n,l,fd),u=Bn(e,c.origin,c.vector,0,te);switch(u){case 2:r.push(n);break;case 3:i.push(n);break;case 0:case 1:{const[h,f,g]=u===0?[1,r,i]:[-1,i,r],m=jn(e),x=ze(_(),te,m,h*o),b=ze(_(),te,m,h*-o);f.push(n),f.push(x),g.push(b)}}}const a=[];return r.length&&a.push(r),i.length&&a.push(i),a}function cd(t){const{renderCoordsHelper:e,state:{camera:r}}=t,{center:i,eye:o}=r,a=Math.abs(e.getAltitude(i)),s=Math.abs(Math.PI/2-Qu(e,i,o));return wn(_o,e.referenceEllipsoid.radius+a),yn(_o,s,r.distance,r.fovY)}const ud={minCurvature:ge(5),maxCurvature:ge(50),minSamples:1,maxSamples:6},dd=ce(1,0,0),hd=ce(0,1,0),pd=_(),md=_(),te=_(),_o=wr(),fd=Ho(),Kr=qe();Object.freeze(Object.defineProperty({__proto__:null,directionToHeadingTilt:td,eyeForCenterWithHeadingTilt:rd,eyeTiltToLookAtTilt:od,headingTiltToDirectionUp:Za,lookAtTiltToEyeTilt:id,toArea:sd,toExtent:ad},Symbol.toStringTag,{value:"Module"}));const vd={COMPOSITE:"composite-color"},bo={SSAO:"ssao"};let tt=class extends mr{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces=vd.COMPOSITE,this.requireGeometryDepth=!1,this._dirty=!0}initialize(){this.addHandles([Oo(()=>this.view.ready,e=>{e&&this.view.stage?.renderer.addRenderNode(this)},Os)])}destroy(){this.view.stage?.renderer?.removeRenderNode(this)}precompile(){}render(){throw new Y("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view.stage.renderView.renderingContext.gl}get techniques(){return this.view.stage.renderView.techniques}acquireOutputFramebuffer(){const e=this._frameBuffer?.getTexture()?.descriptor,r=this.view.stage.renderer.fboCache.acquire(e?.width??640,e?.height??480,this.produces);return r.fbo?.initializeAndBind(),r}bindRenderTarget(){return this._frameBuffer?.fbo?.initializeAndBind(),this._frameBuffer}requestRender(e){switch(e){case 2:this.view.state.fading=!0;case 1:this.view.stage?.renderView.requestRender(e);case 0:case void 0:this._dirty=!0}}resetWebGLState(){this.renderingContext.resetState(),this.renderingContext.bindFramebuffer(this._frameBuffer?.fbo)}get fboCache(){return this.view.stage.renderer.fboCache}get bindParameters(){return this.renderContext.bind}get renderingContext(){return this.view.stage.renderView.renderingContext}get renderContext(){return this.view.stage?.renderer.renderContext}updateAnimation(e){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e){this._frameBuffer=e.find(({name:r})=>r===this.produces);try{return this.render(e)}finally{this._frameBuffer=null}}};p([v({constructOnly:!0})],tt.prototype,"view",void 0),p([v({constructOnly:!0})],tt.prototype,"consumes",void 0),p([v()],tt.prototype,"produces",void 0),p([v({readOnly:!0})],tt.prototype,"techniques",null),tt=p([lt("esri.views.3d.webgl.RenderNode")],tt);const gd=3e5,wo=5e5,xd=[new Zo("position",3,Ao.FLOAT,0,12)],_d=[new Zo("position",2,Ao.FLOAT,0,8)],Ja=Yo(_d);Yo(xd);function Qa(t,e=!0){t.attributes.add("position","vec2"),e&&t.varyings.add("uv","vec2"),t.vertex.main.add(d`
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?d`uv = position * 0.5 + vec2(0.5);`:""}
  `)}function Ci(t){t.uniforms.add(new Cr("zProjectionMap",e=>bd(e.camera))),t.code.add(d`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`),t.code.add(d`float delinearizeDepth(float linearDepth) {
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
float depthNdc = (-c1/linearDepth) - c2 - 1e-7;
float depthNonlinear01 = (depthNdc + 1.0 ) / 2.0;
return depthNonlinear01;
}`),t.code.add(d`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`),t.code.add(d`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}function bd(t){const e=t.projectionMatrix;return st(wd,e[14],e[10])}const wd=Gt();let yd=class extends k{constructor(e,r,i){super(e,"vec2",2,(o,a,s,n)=>o.setUniform2fv(e,r(a,s,n),i))}};const Ei=()=>ct.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let es=class{constructor(){this._includedModules=new Map}include(e,r){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,r),e(this.builder,r))}},Rr=class extends es{constructor(){super(...arguments),this.vertex=new yo,this.fragment=new yo,this.attributes=new $d,this.varyings=new Cd,this.extensions=new Ed,this.outputs=new Rd}get fragmentUniforms(){return this.fragment.uniforms.entries}get attributeNames(){return this.attributes.names}get builder(){return this}generate(e,r=!1){const i=this.extensions.generateSource(e),o=this.attributes.generateSource(e),a=this.varyings.generateSource(e),s=e==="vertex"?this.vertex:this.fragment,n=s.uniforms.generateSource(),l=s.code.generateSource(),c=s.main.generateSource(r),u=e==="vertex"?Ad:Od,h=s.constants.generateSource(),f=this.outputs.generateSource(e);return`#version 300 es
${i.join(`
`)}
${u}
${h.join(`
`)}
${n.join(`
`)}
${o.join(`
`)}
${a.join(`
`)}
${f.join(`
`)}
${l.join(`
`)}
${c.join(`
`)}`}generateBind(e){const r=new Map;this.vertex.uniforms.entries.forEach(a=>{const s=a.bind[0];s&&r.set(a.name,s)}),this.fragment.uniforms.entries.forEach(a=>{const s=a.bind[0];s&&r.set(a.name,s)});const i=Array.from(r.values()),o=i.length;return a=>{for(let s=0;s<o;++s)i[s](e,a)}}generateBindPass(e){const r=new Map;this.vertex.uniforms.entries.forEach(a=>{const s=a.bind[1];s&&r.set(a.name,s)}),this.fragment.uniforms.entries.forEach(a=>{const s=a.bind[1];s&&r.set(a.name,s)});const i=Array.from(r.values()),o=i.length;return(a,s)=>{for(let n=0;n<o;++n)i[n](e,a,s)}}generateBindDraw(e){const r=new Map;this.vertex.uniforms.entries.forEach(a=>{const s=a.bind[2];s&&r.set(a.name,s)}),this.fragment.uniforms.entries.forEach(a=>{const s=a.bind[2];s&&r.set(a.name,s)});const i=Array.from(r.values()),o=i.length;return(a,s,n)=>{for(let l=0;l<o;++l)i[l](e,n,a,s)}}},Md=class{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(const r of e)this._add(r);return this._stage}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new Y("shaderbuilder:duplicate-uniform",`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else Ei().error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(({name:e,arraySize:r,type:i})=>r!=null?`uniform ${i} ${e}[${r}];`:`uniform ${i} ${e};`)}get entries(){return Array.from(this._entries.values())}},Td=class{constructor(e){this._stage=e,this._bodies=new Array}add(e){return this._bodies.push(e),this._stage}generateSource(e){if(this._bodies.length>0)return[`void main() {
 ${this._bodies.join(`
`)||""} 
}`];if(e)throw new Y("shaderbuilder:missing-main","Shader does not contain main function body.");return[]}},Sd=class{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}},yo=class extends es{constructor(){super(...arguments),this.uniforms=new Md(this),this.main=new Td(this),this.code=new Sd(this),this.constants=new Pd(this)}get builder(){return this}},$d=class{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`in ${r[1]} ${r[0]};`)}get names(){return this._entries.map(([e])=>e)}};class Cd{constructor(){this._entries=new Map}add(e,r,i){this._entries.has(e)?Ei().warn(`Ignoring duplicate varying ${r} ${e}`):this._entries.set(e,{type:r,invariant:i?.invariant??!1})}generateSource(e){const r=new Array;return this._entries.forEach((i,o)=>r.push((i.invariant&&e==="vertex"?"invariant ":"")+(i.type==="int"?"flat ":"")+(e==="vertex"?"out":"in")+` ${i.type} ${o};`)),r}}var Ve;let Ed=(Ve=class{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?Ve.ALLOWLIST_VERTEX:Ve.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(i=>r.includes(i)).map(i=>`#extension ${i} : enable`)}},Ve.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],Ve.ALLOWLIST_VERTEX=[],Ve);var Be;let Rd=(Be=class{constructor(){this._entries=new Map}add(e,r,i=0){const o=this._entries.get(i);o?.name!==e||o?.type!==r?this._entries.set(i,{name:e,type:r}):Ei().warn(`Fragment shader output location ${i} occupied`)}generateSource(e){if(e==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:Be.DEFAULT_NAME,type:Be.DEFAULT_TYPE});const r=new Array;return this._entries.forEach((i,o)=>r.push(`layout(location = ${o}) out ${i.type} ${i.name};`)),r}},Be.DEFAULT_TYPE="vec4",Be.DEFAULT_NAME="fragColor",Be),Pd=class G{constructor(e){this._stage=e,this._entries=new Set}add(e,r,i){let o="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":o=G._numberToFloatStr(i);break;case"int":o=G._numberToIntStr(i);break;case"bool":o=i.toString();break;case"vec2":o=`vec2(${G._numberToFloatStr(i[0])},                            ${G._numberToFloatStr(i[1])})`;break;case"vec3":o=`vec3(${G._numberToFloatStr(i[0])},                            ${G._numberToFloatStr(i[1])},                            ${G._numberToFloatStr(i[2])})`;break;case"vec4":o=`vec4(${G._numberToFloatStr(i[0])},                            ${G._numberToFloatStr(i[1])},                            ${G._numberToFloatStr(i[2])},                            ${G._numberToFloatStr(i[3])})`;break;case"ivec2":o=`ivec2(${G._numberToIntStr(i[0])},                             ${G._numberToIntStr(i[1])})`;break;case"ivec3":o=`ivec3(${G._numberToIntStr(i[0])},                             ${G._numberToIntStr(i[1])},                             ${G._numberToIntStr(i[2])})`;break;case"ivec4":o=`ivec4(${G._numberToIntStr(i[0])},                             ${G._numberToIntStr(i[1])},                             ${G._numberToIntStr(i[2])},                             ${G._numberToIntStr(i[3])})`;break;case"uvec2":o=`uvec2(${G._numberToIntStr(i[0])},                             ${G._numberToIntStr(i[1])})`;break;case"uvec3":o=`uvec3(${G._numberToIntStr(i[0])},                             ${G._numberToIntStr(i[1])},                             ${G._numberToIntStr(i[2])})`;break;case"uvec4":o=`uvec4(${G._numberToIntStr(i[0])},                             ${G._numberToIntStr(i[1])},                             ${G._numberToIntStr(i[2])},                             ${G._numberToIntStr(i[3])})`;break;case"mat2":case"mat3":case"mat4":o=`${r}(${Array.prototype.map.call(i,a=>G._numberToFloatStr(a)).join(", ")})`}return this._entries.add(`const ${r} ${e} = ${o};`),this._stage}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}};const Od=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp int;
  precision highp sampler2D;
  precision highp usampler2D;
  precision highp sampler2DArray;
  precision highp sampler2DShadow;
#else
  precision mediump float;
  precision mediump int;
  precision mediump sampler2D;
  precision mediump usampler2D;
  precision mediump sampler2DArray;
  precision mediump sampler2DShadow;
#endif`,Ad=`precision highp float;
 precision highp sampler2D;
 precision highp usampler2D;
 precision highp sampler2DArray;
 precision highp sampler2DShadow;


 invariant gl_Position;
 `,Jr=4;function ts(){const t=new Rr,e=t.fragment;t.include(Qa);const r=(Jr+1)/2,i=1/(2*r*r);return e.include(Ci),e.uniforms.add(new ue("depthMap",o=>o.depthTexture),new Bt("tex",o=>o.colorTexture),new yd("blurSize",o=>o.blurSize),new ke("projScale",(o,a)=>{const s=a.camera.distance;return s>5e4?Math.max(0,o.projScale-(s-5e4)):o.projScale})),e.code.add(d`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${d.float(i)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.outputs.add("fragBlur","float"),e.main.add(d`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${d.int(Jr)}; r <= ${d.int(Jr)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),t}const Fd=Object.freeze(Object.defineProperty({__proto__:null,build:ts},Symbol.toStringTag,{value:"Module"}));let Mo=class extends yi{constructor(e,r){super(e,r,new $r(Fd,()=>xr(()=>Promise.resolve().then(()=>Ch),void 0)),Ja)}initializePipeline(){return Tr({colorWrite:Mr})}};const Dd="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let Id=class extends Ut{constructor(){super(...arguments),this.projScale=1}},Nd=class extends Id{constructor(){super(...arguments),this.intensity=1}},zd=class extends Ut{},Ld=class extends zd{constructor(){super(...arguments),this.blurSize=Gt()}},we=class extends k{constructor(e,r,i){super(e,"vec4",0,(o,a)=>o.setUniform4fv(e,r(a),i))}};function Vd(t){t.fragment.uniforms.add(new we("projInfo",e=>Bd(e.camera))),t.fragment.uniforms.add(new Cr("zScale",e=>jd(e.camera))),t.fragment.code.add(d`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function Bd(t){const e=t.projectionMatrix;return e[11]===0?he(To,2/(t.fullWidth*e[0]),2/(t.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):he(To,-2/(t.fullWidth*e[0]),-2/(t.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}const To=qe();function jd(t){return t.projectionMatrix[11]===0?st(So,0,1):st(So,1,0)}const So=Gt(),$o=16;function rs(){const t=new Rr,e=t.fragment;return t.include(Qa),t.include(Vd),e.include(Ci),e.uniforms.add(new Ye("radius",r=>Pr(r.camera))).code.add(d`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),e.code.add(d`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.outputs.add("fragOcclusion","float"),e.uniforms.add(new ue("normalMap",r=>r.normalTexture),new ue("depthMap",r=>r.depthTexture),new ke("projScale",r=>r.projScale),new ue("rnm",r=>r.noiseTexture),new Ba("rnmScale",(r,i)=>st(Co,i.camera.fullWidth/r.noiseTexture.descriptor.width,i.camera.fullHeight/r.noiseTexture.descriptor.height)),new ke("intensity",r=>r.intensity),new Cr("screenSize",r=>st(Co,r.camera.fullWidth,r.camera.fullHeight))).main.add(d`
    float depth = depthFromTexture(depthMap, uv);

    // Early out if depth is out of range, such as in the sky
    if (depth >= 1.0 || depth <= 0.0) {
      fragOcclusion = 1.0;
      return;
    }

    // get the normal of current fragment
    ivec2 iuv = ivec2(uv * vec2(textureSize(normalMap, 0)));
    vec4 norm4 = texelFetch(normalMap, iuv, 0);
    if(norm4.a != 1.0) {
      fragOcclusion = 1.0;
      return;
    }
    vec3 norm = normalize(norm4.xyz * 2.0 - 1.0);

    float currentPixelDepth = linearizeDepth(depth);
    vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

    float sum = 0.0;
    vec3 tapPixelPos;

    vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

    // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
    // bug or deviation from CE somewhere else?
    float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

    for(int i = 0; i < ${d.int($o)}; ++i) {
      vec2 unitOffset = reflect(sphere[i], fres).xy;
      vec2 offset = vec2(-unitOffset * radius * ps);

      // don't use current or very nearby samples
      if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
        continue;
      }

      vec2 tc = vec2(gl_FragCoord.xy + offset);
      if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
      vec2 tcTap = tc / screenSize;
      float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

      tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

      sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
    }

    // output the result
    float A = max(1.0 - sum * intensity / float(${d.int($o)}), 0.0);

    // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
    A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

    fragOcclusion = A;
  `),t}function Pr(t){return Math.max(10,20*t.computeScreenPixelSizeAtDist(Math.abs(4*t.relativeElevation)))}const Co=Gt(),Gd=Object.freeze(Object.defineProperty({__proto__:null,build:rs,getRadius:Pr},Symbol.toStringTag,{value:"Module"}));let Eo=class extends yi{constructor(e,r){super(e,r,new $r(Gd,()=>xr(()=>Promise.resolve().then(()=>Eh),void 0)),Ja)}initializePipeline(){return Tr({colorWrite:Mr})}};const Ft=2;let At=class extends tt{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=bo.SSAO,this.isEnabled=()=>!1,this._enableTime=qt(0),this._passParameters=new Nd,this._drawParameters=new Ld}initialize(){const e=Uint8Array.from(atob(Dd),i=>i.charCodeAt(0)),r=new Ko(32);r.wrapMode=33071,r.pixelFormat=6407,r.wrapMode=10497,r.hasMipmap=!0,this._passParameters.noiseTexture=new ta(this.renderingContext,r,e),this.techniques.precompile(Eo),this.techniques.precompile(Mo),this.addHandles(Oo(()=>this.isEnabled(),()=>this._enableTime=qt(0)))}destroy(){this._passParameters.noiseTexture=ti(this._passParameters.noiseTexture)}render(e){const r=e.find(({name:B})=>B==="normals"),i=r?.getTexture(),o=r?.getTexture(Ns);if(!i||!o)return;const a=this.techniques.get(Eo),s=this.techniques.get(Mo);if(!a.compiled||!s.compiled)return this._enableTime=qt(performance.now()),void this.requestRender(1);this._enableTime===0&&(this._enableTime=qt(performance.now()));const n=this.renderingContext,l=this.view.qualitySettings.fadeDuration,c=this.bindParameters,u=c.camera,h=u.relativeElevation,f=yt((wo-h)/(wo-gd),0,1),g=l>0?Math.min(l,performance.now()-this._enableTime)/l:1,m=g*f;this._passParameters.normalTexture=i,this._passParameters.depthTexture=o,this._passParameters.projScale=1/u.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Ud/Pr(u)**6*m;const x=u.fullViewport[2],b=u.fullViewport[3],T=this.fboCache.acquire(x,b,"ssao input",2);n.bindFramebuffer(T.fbo),n.setViewport(0,0,x,b),n.bindTechnique(a,c,this._passParameters,this._drawParameters),n.screen.draw();const E=Math.round(x/Ft),S=Math.round(b/Ft),$=this.fboCache.acquire(E,S,"ssao blur",0);n.bindFramebuffer($.fbo),this._drawParameters.colorTexture=T.getTexture(),st(this._drawParameters.blurSize,0,Ft/b),n.bindTechnique(s,c,this._passParameters,this._drawParameters),n.setViewport(0,0,E,S),n.screen.draw(),T.release();const O=this.fboCache.acquire(E,S,bo.SSAO,0);return n.bindFramebuffer(O.fbo),n.setViewport(0,0,x,b),n.setClearColor(1,1,1,0),n.clear(16384),this._drawParameters.colorTexture=$.getTexture(),st(this._drawParameters.blurSize,Ft/x,0),n.bindTechnique(s,c,this._passParameters,this._drawParameters),n.setViewport(0,0,E,S),n.screen.draw(),n.setViewport4fv(u.fullViewport),$.release(),g<1&&this.requestRender(2),O}};p([v()],At.prototype,"consumes",void 0),p([v()],At.prototype,"produces",void 0),p([v({constructOnly:!0})],At.prototype,"isEnabled",void 0),At=p([lt("esri.views.3d.webgl-engine.effects.ssao.SSAO")],At);const Ud=.5;function Ri(t,e){e.receiveAmbientOcclusion?(t.uniforms.add(new Si("ssaoTex",r=>r.ssao?.getTexture())),t.constants.add("blurSizePixelsInverse","float",1/Ft),t.code.add(d`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):t.code.add(d`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function kd(t,e){const r=t.fragment,i=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;i===0?(r.uniforms.add(new nt("lightingAmbientSH0",({lighting:o})=>q(Ro,o.sh.r[0],o.sh.g[0],o.sh.b[0]))),r.code.add(d`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===1?(r.uniforms.add(new we("lightingAmbientSH_R",({lighting:o})=>he(De,o.sh.r[0],o.sh.r[1],o.sh.r[2],o.sh.r[3])),new we("lightingAmbientSH_G",({lighting:o})=>he(De,o.sh.g[0],o.sh.g[1],o.sh.g[2],o.sh.g[3])),new we("lightingAmbientSH_B",({lighting:o})=>he(De,o.sh.b[0],o.sh.b[1],o.sh.b[2],o.sh.b[3]))),r.code.add(d`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===2&&(r.uniforms.add(new nt("lightingAmbientSH0",({lighting:o})=>q(Ro,o.sh.r[0],o.sh.g[0],o.sh.b[0])),new we("lightingAmbientSH_R1",({lighting:o})=>he(De,o.sh.r[1],o.sh.r[2],o.sh.r[3],o.sh.r[4])),new we("lightingAmbientSH_G1",({lighting:o})=>he(De,o.sh.g[1],o.sh.g[2],o.sh.g[3],o.sh.g[4])),new we("lightingAmbientSH_B1",({lighting:o})=>he(De,o.sh.b[1],o.sh.b[2],o.sh.b[3],o.sh.b[4])),new we("lightingAmbientSH_R2",({lighting:o})=>he(De,o.sh.r[5],o.sh.r[6],o.sh.r[7],o.sh.r[8])),new we("lightingAmbientSH_G2",({lighting:o})=>he(De,o.sh.g[5],o.sh.g[6],o.sh.g[7],o.sh.g[8])),new we("lightingAmbientSH_B2",({lighting:o})=>he(De,o.sh.b[5],o.sh.b[6],o.sh.b[7],o.sh.b[8]))),r.code.add(d`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==1&&e.pbrMode!==2||r.code.add(d`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const Ro=_(),De=qe();function pr(t){t.uniforms.add(new nt("mainLightDirection",e=>e.lighting.mainLight.direction))}function jt(t){t.uniforms.add(new nt("mainLightIntensity",e=>e.lighting.mainLight.intensity))}function Hd(t){pr(t.fragment),jt(t.fragment),t.fragment.code.add(d`vec3 applyShading(vec3 shadingNormal, float shadow) {
float dotVal = clamp(dot(shadingNormal, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}function Wd(t){t.code.add(d`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG) {
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.code.add(d`float integratedRadiance(float cosTheta2, float roughness) {
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.code.add(d`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness) {
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function is(t){const e=3.141592653589793,r=.3183098861837907;t.constants.add("PI","float",e),t.constants.add("LIGHT_NORMALIZATION","float",r),t.constants.add("INV_PI","float",r),t.constants.add("HALF_PI","float",1.570796326794897),t.constants.add("TWO_PI","float",6.28318530717958)}function Pi(t,e){t.include(is),e.pbrMode!==1&&e.pbrMode!==2&&e.pbrMode!==5&&e.pbrMode!==6||(t.code.add(d`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),t.code.add(d`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==1&&e.pbrMode!==2||(t.include(Wd),t.code.add(d`struct PBRShadingInfo
{
float NdotV;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),t.code.add(d`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`))}class qd extends k{constructor(e,r){super(e,"bool",0,(i,o)=>i.setUniform1b(e,r(o)))}}const Xd=.4;function Yd(t){t.code.add(d`float mapChannel(float x, vec2 p) {
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),t.code.add(d`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}function Zd(t){t.code.add(d`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`)}function Oi(t){t.constants.add("ambientBoostFactor","float",Xd)}function Ai(t){t.uniforms.add(new Ye("lightingGlobalFactor",e=>e.lighting.globalFactor))}function os(t,e){const r=t.fragment,{pbrMode:i,spherical:o,hasColorTexture:a}=e;r.include(Ri,e),i!==0&&r.include(Pi,e),t.include(kd,e),r.include(is),r.include(Zd,e);const s=!(i===2&&!a);switch(s&&r.include(Yd),r.code.add(d`
    const float GAMMA_SRGB = ${d.float(di)};
    const float INV_GAMMA_SRGB = 0.4761904;
    ${L(i!==0,"const float GROUND_REFLECTANCE = 0.2;")}
  `),Oi(r),Ai(r),pr(r),r.code.add(d`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${o?d`normalize(vPosWorld)`:d`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),jt(r),r.code.add(d`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),i){case 0:case 4:case 3:t.include(Hd),r.code.add(d`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case 1:case 2:r.code.add(d`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
vec3 viewDir, vec3 groundNormal, vec3 mrr, float additionalAmbientIrradiance) {
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, groundNormal), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, groundNormal), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(d`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?r.uniforms.add(new qd("hasFillLights",n=>n.enableFillLights)):r.constants.add("hasFillLights","bool",!1),r.code.add(d`vec3 ambientDir = vec3(5.0 * groundNormal[1] - groundNormal[0] * groundNormal[2], - 5.0 * groundNormal[0] - groundNormal[2] * groundNormal[1], groundNormal[1] * groundNormal[1] + groundNormal[0] * groundNormal[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new Ye("lightingSpecularStrength",n=>n.lighting.mainLight.specularStrength),new Ye("lightingEnvironmentStrength",n=>n.lighting.mainLight.environmentStrength)).code.add(d`vec3 horizonRingDir = inputs.RdotNG * groundNormal - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE);`),r.code.add(d`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent;
        ${s?d`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:d`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case 5:case 6:pr(r),jt(r),r.code.add(d`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`)}}function Kd(t,e){const r=t.fragment;switch(r.code.add(d`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case 0:r.code.add(d`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case 1:r.code.add(d`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case 2:r.code.add(d`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:gr(e.doubleSidedMode);case 3:}}function as(t,e){const r=e.pbrMode,i=t.fragment;if(r!==2&&r!==0&&r!==1)return void i.code.add(d`void applyPBRFactors() {}`);if(r===0)return void i.code.add(d`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(r===2)return void i.code.add(d`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:o,hasMetallicRoughnessTextureTransform:a,hasOcclusionTexture:s,hasOcclusionTextureTransform:n,bindType:l}=e;(o||s)&&t.include($i,e),i.code.add(d`vec3 mrr;
float occlusion;`),o&&i.uniforms.add(l===1?new ue("texMetallicRoughness",c=>c.textureMetallicRoughness):new Bt("texMetallicRoughness",c=>c.textureMetallicRoughness)),s&&i.uniforms.add(l===1?new ue("texOcclusion",c=>c.textureOcclusion):new Bt("texOcclusion",c=>c.textureOcclusion)),i.uniforms.add(l===1?new le("mrrFactors",c=>c.mrrFactors):new $e("mrrFactors",c=>c.mrrFactors)),i.code.add(d`
    ${L(o,d`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${L(s,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${s?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${L(o,`applyMetallicRoughness(${a?"metallicRoughnessUV":"vuv0"});`)}
      ${L(s,`applyOcclusion(${n?"occlusionUV":"vuv0"});`)}
    }
  `)}function Jd(t,e){const r=Ue(e.output)&&e.receiveShadows;r&&pu(t,!0),t.vertex.code.add(d`
    void forwardLinearDepthToReadShadowMap() { ${L(r,"forwardLinearDepth(gl_Position.w);")} }
  `)}let Qd=class extends k{constructor(e,r,i,o){super(e,"mat4",2,(a,s,n,l)=>a.setUniformMatrices4fv(e,r(s,n,l),o),i)}},eh=class extends k{constructor(e,r,i,o){super(e,"mat4",1,(a,s,n)=>a.setUniformMatrices4fv(e,r(s,n),o),i)}};function th(t){t.fragment.uniforms.add(new eh("shadowMapMatrix",(e,r)=>r.shadowMap.getShadowMapMatrices(e.origin),4)),ss(t)}function rh(t){t.fragment.uniforms.add(new Qd("shadowMapMatrix",(e,r)=>r.shadowMap.getShadowMapMatrices(e.origin),4)),ss(t)}function ss(t){const{fragment:e}=t;e.uniforms.add(new we("cascadeDistances",r=>r.shadowMap.cascadeDistances),new za("numCascades",r=>r.shadowMap.numCascades)),e.code.add(d`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
vec3 calculateUVZShadow(in vec3 _worldPos, in float _linearDepth, in ivec2 shadowMapSize) {
int i = _linearDepth < cascadeDistances[1] ? 0 : _linearDepth < cascadeDistances[2] ? 1 : _linearDepth < cascadeDistances[3] ? 2 : 3;
if (i >= numCascades) {
return invalidShadowmapUVZ;
}
mat4 shadowMatrix = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
vec3 lvpos = lightSpacePosition(_worldPos, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
return invalidShadowmapUVZ;
}
vec2 uvShadow = cascadeCoordinates(i, shadowMapSize, lvpos);
return vec3(uvShadow, lvpos.z);
}`)}function ih(t){t.fragment.code.add(d`float readShadowMapUVZ(vec3 uvzShadow, sampler2DShadow _shadowMap) {
return texture(_shadowMap, uvzShadow);
}`)}let oh=class extends k{constructor(e,r){super(e,"sampler2DShadow",0,(i,o)=>i.bindTexture(e,r(o)))}};function ns(t,e){e.receiveShadows&&t.include(th),cs(t,e)}function ls(t,e){e.receiveShadows&&t.include(rh),cs(t,e)}function cs(t,e){t.fragment.uniforms.add(new Ye("lightingGlobalFactor",o=>o.lighting.globalFactor));const{receiveShadows:r,spherical:i}=e;t.include(Jd,e),r&&ah(t),t.fragment.code.add(d`
    float readShadow(float additionalAmbientScale, vec3 vpos) {
      return ${r?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":L(i,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};
    }
  `)}function ah(t){t.include(ih),t.fragment.uniforms.add(new oh("shadowMap",({shadowMap:e})=>e.depthTexture)).code.add(d`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap,0));
if (uvzShadow.z < 0.0) {
return 0.0;
}
return readShadowMapUVZ(uvzShadow, shadowMap);
}`)}function us(t,{occlusionPass:e,terrainDepthTest:r,cullAboveTerrain:i}){const{vertex:o,fragment:a,varyings:s}=t;if(!r)return o.code.add("void forwardViewPosDepth(vec3 pos) {}"),void a.code.add(`${e?"bool":"void"} discardByTerrainDepth() { ${L(e,"return false;")}}`);s.add("viewPosDepth","float",{invariant:!0}),o.code.add(`void forwardViewPosDepth(vec3 pos) {
    viewPosDepth = pos.z;
  }`),a.include(Ci),a.uniforms.add(new Si("terrainDepthTexture",n=>n.terrainDepth?.attachment)).code.add(d`
    ${e?"bool":"void"} discardByTerrainDepth() {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${e?"return viewPosDepth < linearDepth && depth < 1.0;":`if(viewPosDepth ${i?">":"<="} linearDepth) discard;`}
    }`)}function sh(t,e){e.hasColorTextureTransform?(t.varyings.add("colorUV","vec2"),t.vertex.uniforms.add(new He("colorTextureTransformMatrix",r=>r.colorTextureTransformMatrix??Mt)).code.add(d`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(d`void forwardColorUV(){}`)}function nh(t,e){e.hasNormalTextureTransform&&e.textureCoordinateType!==0?(t.varyings.add("normalUV","vec2"),t.vertex.uniforms.add(new He("normalTextureTransformMatrix",r=>r.normalTextureTransformMatrix??Mt)).code.add(d`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(d`void forwardNormalUV(){}`)}function lh(t,e){e.hasEmissionTextureTransform&&e.textureCoordinateType!==0?(t.varyings.add("emissiveUV","vec2"),t.vertex.uniforms.add(new He("emissiveTextureTransformMatrix",r=>r.emissiveTextureTransformMatrix??Mt)).code.add(d`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(d`void forwardEmissiveUV(){}`)}function ch(t,e){e.hasOcclusionTextureTransform&&e.textureCoordinateType!==0?(t.varyings.add("occlusionUV","vec2"),t.vertex.uniforms.add(new He("occlusionTextureTransformMatrix",r=>r.occlusionTextureTransformMatrix??Mt)).code.add(d`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(d`void forwardOcclusionUV(){}`)}function uh(t,e){e.hasMetallicRoughnessTextureTransform&&e.textureCoordinateType!==0?(t.varyings.add("metallicRoughnessUV","vec2"),t.vertex.uniforms.add(new He("metallicRoughnessTextureTransformMatrix",r=>r.metallicRoughnessTextureTransformMatrix??Mt)).code.add(d`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(d`void forwardMetallicRoughnessUV(){}`)}function ds(t){t.code.add(d`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function hs(t){t.include(ds),t.code.add(d`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${d.int(1)}) {
        return allMixed;
      }
      if (mode == ${d.int(2)}) {
        return internalMixed;
      }
      if (mode == ${d.int(3)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${d.int(2)}) {
        return internalMixed;
      }
      if (mode == ${d.int(3)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function ps(t,e){e.snowCover&&(t.uniforms.add(new Ye("snowCover",r=>r.snowCover)).code.add(d`float getSnow(vec3 normal, vec3 groundNormal) {
return smoothstep(0.5, 0.55, dot(normal, groundNormal)) * snowCover;
}
float getRealisticTreeSnow(vec3 faceNormal, vec3 shadingNormal, vec3 groundNormal) {
float snow = min(1.0, smoothstep(0.5, 0.55, dot(faceNormal, groundNormal)) +
smoothstep(0.5, 0.55, dot(-faceNormal, groundNormal)) +
smoothstep(0.0, 0.1, dot(shadingNormal, groundNormal)));
return snow * snowCover;
}`),t.code.add(d`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}`))}function dh(t){t.code.add(d`
    const float GAMMA = ${d.float(di)};
    const float INV_GAMMA = ${d.float(1/di)};

    vec4 delinearizeGamma(vec4 color) {
      return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.a);
    }

    vec3 linearizeGamma(vec3 color) {
      return pow(color, vec3(GAMMA));
    }
  `)}const hh=1;function ph(t,e){if(!Ue(e.output))return;t.fragment.include(dh);const{emissionSource:r,hasEmissiveTextureTransform:i,bindType:o}=e,a=r===3||r===4||r===5;a&&(t.include($i,e),t.fragment.uniforms.add(o===1?new ue("texEmission",h=>h.textureEmissive):new Bt("texEmission",h=>h.textureEmissive)));const s=r===2||a;s&&t.fragment.uniforms.add(o===1?new le("emissiveBaseColor",h=>h.emissiveBaseColor):new $e("emissiveBaseColor",h=>h.emissiveBaseColor));const n=r!==0;n&&!(r===7||r===6||r===4||r===5)&&t.fragment.uniforms.add(o===1?new ke("emissiveStrength",h=>h.emissiveStrength):new Au("emissiveStrength",h=>h.emissiveStrength));const l=r===7,c=r===5,u=r===1||r===6||l;t.fragment.code.add(d`
    vec4 getEmissions(vec3 symbolColor) {
      vec4 emissions = ${s?c?"emissiveSource == 0 ? vec4(emissiveBaseColor, 1.0): vec4(linearizeGamma(symbolColor), 1.0)":"vec4(emissiveBaseColor, 1.0)":u?l?"emissiveSource == 0 ? vec4(0.0): vec4(linearizeGamma(symbolColor), 1.0)":"vec4(linearizeGamma(symbolColor), 1.0)":"vec4(0.0)"};
      ${L(a,`${L(c,`if(emissiveSource == 0) {
              vec4 emissiveFromTex = textureLookup(texEmission, ${i?"emissiveUV":"vuv0"});
              emissions *= vec4(linearizeGamma(emissiveFromTex.rgb), emissiveFromTex.a);
           }`,`vec4 emissiveFromTex = textureLookup(texEmission, ${i?"emissiveUV":"vuv0"});
           emissions *= vec4(linearizeGamma(emissiveFromTex.rgb), emissiveFromTex.a);`)}
        emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)}
      ${L(n,`emissions.rgb *= emissiveStrength * ${d.float(hh)};`)}
      return emissions;
    }
  `)}function ms(t,e){t.include(La,e),t.include(ph,e),t.fragment.include(ds);const{output:r,oitPass:i,discardInvisibleFragments:o,snowCover:a}=e,s=r===10,n=_i(r),l=Ue(r)&&i===1,c=Ue(r)&&i!==1;let u=0;(c||n||l)&&t.outputs.add("fragColor","vec4",u++),n&&t.outputs.add("fragEmission","vec4",u++),l&&t.outputs.add("fragAlpha","float",u++),t.fragment.code.add(d`
    void outputColorHighlightOID(vec4 finalColor, const in vec3 vWorldPosition, vec3 emissiveSymbolColor ${L(a,", float snow")}) {
      ${L(s,"finalColor.a = 1.0;")}

      ${L(o,`if (finalColor.a < ${d.float(Tt)}) { discard; }`)}

      finalColor = applySlice(finalColor, vWorldPosition);
      ${L(l,d`fragColor = premultiplyAlpha(finalColor);
             fragAlpha = finalColor.a;`)}
      ${L(c,"fragColor = finalColor;")}
      ${L(n,`fragEmission = ${L(a,"mix(finalColor.a * getEmissions(emissiveSymbolColor), vec4(0.0), snow);","finalColor.a * getEmissions(emissiveSymbolColor);")}`)}
      calculateOcclusionAndOutputHighlight();
      ${L(s,"outputObjectAndLayerIdColor();")}
    }
  `)}function fs(t){const e=new Rr,{attributes:r,vertex:i,fragment:o,varyings:a}=e,{output:s,normalType:n,offsetBackfaces:l,spherical:c,snowCover:u,pbrMode:h,textureAlphaPremultiplied:f,instancedDoublePrecision:g,hasVertexColors:m,hasVertexTangents:x,hasColorTexture:b,hasNormalTexture:T,hasNormalTextureTransform:E,hasColorTextureTransform:S}=t;if(_t(i,t),r.add("position","vec3"),a.add("vpos","vec3",{invariant:!0}),e.include(zt,t),e.include(Aa,t),e.include(Na,t),e.include(sh,t),!Ue(s))return e.include(Va,t),e;e.include(nh,t),e.include(lh,t),e.include(ch,t),e.include(uh,t),Vt(i,t),e.include(Sr,t),e.include(xt);const $=n===0||n===1;return $&&l&&e.include(Ma),e.include(Iu,t),e.include(ba,t),e.include(Pa,t),a.add("vPositionLocal","vec3"),e.include(it,t),e.include(Fa,t),e.include(Da,t),i.uniforms.add(new Er("externalColor",O=>O.externalColor,{supportsNaN:!0})),a.add("vcolorExt","vec4"),e.include(us,t),i.include(Ze),i.include(Ti),e.include(g?ns:ls,t),i.main.add(d`
    forwardNormalizedVertexColor();

    MaskedColor maskedColor =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColor.color;
    forwardColorMixMode(maskedColor.mask);

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${L($,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${L(x,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${L($&&l,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (opacityMixMode != ${d.int(Nt.ignore)} && vcolorExt.a < ${d.float(Tt)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
    forwardLinearDepthToReadShadowMap();
  `),e.include(os,t),o.include(Ri,t),e.include(wt,t),o.include(gt,t),e.include(ms,t),Vt(o,t),o.uniforms.add(i.uniforms.get("localOrigin"),new le("ambient",O=>O.ambient),new le("diffuse",O=>O.diffuse),new ke("opacity",O=>O.opacity),new ke("layerOpacity",O=>O.layerOpacity)),b&&o.uniforms.add(new ue("tex",O=>O.texture)),e.include(as,t),o.include(Pi,t),o.include(hs),e.include(Kd,t),o.include(ps,t),Oi(o),Ai(o),jt(o),o.main.add(d`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${b?d`
            vec4 texColor = texture(tex, ${S?"colorUV":"vuv0"});
            ${L(f,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:d`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${n===2?d`vec3 normal = screenDerivativeNormal(vPositionLocal);`:d`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

    float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
    float shadow = readShadow(additionalAmbientScale, vpos);

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${L(m,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
    float opacity_ = layerOpacity * mixExternalOpacity(${L(m,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, opacityMixMode);

    ${T?`mat3 tangentSpace = computeTangentSpace(${x?"normal":"normal, vpos, vuv0"});
            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${E?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${c?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${L(u,d`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${h===1||h===2?d`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${L(u,"mrr = applySnowToMRR(mrr, snow);")}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);`:d`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOID(finalColor, vpos, albedo ${L(u,", snow")});
  `),e}const mh=Object.freeze(Object.defineProperty({__proto__:null,build:fs},Symbol.toStringTag,{value:"Module"}));class fh extends Zc{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=nu,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=2,this.instanced=!1,this.instancedFeatureAttribute=!1,this.instancedColor=!1,this.instanceColorEncodesAlphaIgnore=!1,this.emissiveStrength=0,this.emissiveSource=1,this.emissiveBaseColor=Xe,this.instancedDoublePrecision=!1,this.normalType=0,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=Lt(.2,.2,.2),this.diffuse=Lt(.8,.8,.8),this.externalColor=li(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=_(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.drivenOpacity=!1,this.writeDepth=!0,this.customDepthTest=0,this.textureAlphaMode=0,this.textureAlphaCutoff=Tt,this.textureAlphaPremultiplied=!1,this.renderOccluded=1,this.isDecoration=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}}class vs extends yi{constructor(e,r,i=new $r(mh,()=>xr(()=>Promise.resolve().then(()=>Rh),void 0))){const o=[Xi(gs(r))];r.instanced&&r.instancedDoublePrecision&&o.push(Xi(su(r))),super(e,r,i,Dn(o))}_makePipeline(e,r){const{oitPass:i,output:o,transparent:a,cullFace:s,customDepthTest:n,hasOccludees:l}=e;return Tr({blending:Ue(o)&&a?cc(i):null,culling:gh(e)?Bl(s):null,depthTest:{func:mc(i,vh(n))},depthWrite:uc(e),drawBuffers:Jc(o,fc(i,o)),colorWrite:Mr,stencilWrite:l?Qc:null,stencilTest:l?r?tu:eu:null,polygonOffset:pc(e)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function vh(t){switch(t){case 1:return 515;case 0:case 3:return 513;case 2:return 516}}function gh(t){return t.cullFace!==0||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}function gs(t){const e=gi().vec3f("position");return t.normalType===1?e.vec2i16("normalCompressed",{glNormalized:!0}):e.vec3f("normal"),t.hasVertexTangents&&e.vec4f("tangent"),t.hasTextures&&e.vec2f16("uv0"),t.hasVertexColors&&e.vec4u8("color"),t.hasSymbolColors&&e.vec4u8("symbolColor"),!t.instanced&&wa()&&e.vec4u8("olidColor"),e}class z extends ft{constructor(e){super(),this.spherical=e,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.pbrMode=0,this.cullFace=0,this.normalType=0,this.customDepthTest=0,this.emissionSource=0,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.instanced=!1,this.instancedDoublePrecision=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instancedFeatureAttribute=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0,this.draped=!1}get textureCoordinateType(){return this.hasTextures?1:0}get hasTextures(){return this.hasColorTexture||this.hasNormalTexture||this.hasMetallicRoughnessTexture||this.emissionSource===3||this.hasOcclusionTexture}get hasVVInstancing(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}p([I({count:4})],z.prototype,"alphaDiscardMode",void 0),p([I({count:3})],z.prototype,"doubleSidedMode",void 0),p([I({count:7})],z.prototype,"pbrMode",void 0),p([I({count:3})],z.prototype,"cullFace",void 0),p([I({count:3})],z.prototype,"normalType",void 0),p([I({count:3})],z.prototype,"customDepthTest",void 0),p([I({count:8})],z.prototype,"emissionSource",void 0),p([I()],z.prototype,"hasVertexColors",void 0),p([I()],z.prototype,"hasSymbolColors",void 0),p([I()],z.prototype,"hasVerticalOffset",void 0),p([I()],z.prototype,"hasColorTexture",void 0),p([I()],z.prototype,"hasMetallicRoughnessTexture",void 0),p([I()],z.prototype,"hasOcclusionTexture",void 0),p([I()],z.prototype,"hasNormalTexture",void 0),p([I()],z.prototype,"hasScreenSizePerspective",void 0),p([I()],z.prototype,"hasVertexTangents",void 0),p([I()],z.prototype,"hasOccludees",void 0),p([I()],z.prototype,"instanced",void 0),p([I()],z.prototype,"instancedDoublePrecision",void 0),p([I()],z.prototype,"hasModelTransformation",void 0),p([I()],z.prototype,"offsetBackfaces",void 0),p([I()],z.prototype,"hasVVSize",void 0),p([I()],z.prototype,"hasVVColor",void 0),p([I()],z.prototype,"receiveShadows",void 0),p([I()],z.prototype,"receiveAmbientOcclusion",void 0),p([I()],z.prototype,"textureAlphaPremultiplied",void 0),p([I()],z.prototype,"instancedFeatureAttribute",void 0),p([I()],z.prototype,"instancedColor",void 0),p([I()],z.prototype,"writeDepth",void 0),p([I()],z.prototype,"transparent",void 0),p([I()],z.prototype,"enableOffset",void 0),p([I()],z.prototype,"terrainDepthTest",void 0),p([I()],z.prototype,"cullAboveTerrain",void 0),p([I()],z.prototype,"snowCover",void 0),p([I()],z.prototype,"hasColorTextureTransform",void 0),p([I()],z.prototype,"hasEmissionTextureTransform",void 0),p([I()],z.prototype,"hasNormalTextureTransform",void 0),p([I()],z.prototype,"hasOcclusionTextureTransform",void 0),p([I()],z.prototype,"hasMetallicRoughnessTextureTransform",void 0);function xs(t){const e=new Rr,{attributes:r,vertex:i,fragment:o,varyings:a}=e,{output:s,offsetBackfaces:n,pbrMode:l,snowCover:c,spherical:u}=t,h=l===1||l===2;if(_t(i,t),r.add("position","vec3"),a.add("vpos","vec3",{invariant:!0}),e.include(zt,t),e.include(Aa,t),e.include(Na,t),e.include(us,t),!Ue(s))return e.include(Va,t),e;Vt(e.vertex,t),e.include(Sr,t),e.include(xt),n&&e.include(Ma),a.add("vNormalWorld","vec3"),a.add("localvpos","vec3",{invariant:!0}),e.include(it,t),e.include(Fa,t),e.include(Pa,t),e.include(Da,t),i.include(Ze),i.include(Ti),i.uniforms.add(new Er("externalColor",m=>m.externalColor,{supportsNaN:!0})),a.add("vcolorExt","vec4"),e.include(t.instancedDoublePrecision?ns:ls,t),i.main.add(d`
    forwardNormalizedVertexColor();

    MaskedColor maskedColorExt =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColorExt.color;
    forwardColorMixMode(maskedColorExt.mask);

    bool alphaCut = opacityMixMode != ${d.int(Nt.ignore)} && vcolorExt.a < ${d.float(Tt)};
    vpos = getVertexInLocalOriginSpace();

    localvpos = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
    vpos = addVerticalOffset(vpos, localOrigin);
    vec4 basePosition = transformPosition(proj, view, vpos);

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardTextureCoordinates();
    forwardLinearDepthToReadShadowMap();
    gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
    ${L(n,"offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);","basePosition;")}
  `);const{hasColorTexture:f,hasColorTextureTransform:g}=t;return e.include(os,t),o.include(Ri,t),e.include(wt,t),o.include(gt,t),e.include(ms,t),Vt(o,t),pr(o),Oi(o),Ai(o),o.uniforms.add(i.uniforms.get("localOrigin"),i.uniforms.get("view"),new le("ambient",m=>m.ambient),new le("diffuse",m=>m.diffuse),new ke("opacity",m=>m.opacity),new ke("layerOpacity",m=>m.layerOpacity)),f&&o.uniforms.add(new ue("tex",m=>m.texture)),e.include(as,t),o.include(Pi,t),o.include(hs),o.include(ps,t),jt(o),o.main.add(d`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${f?`texture(tex, ${g?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${L(f,`${L(t.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}
        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = readShadow(additionalAmbientScale, vpos);
      vec3 matColor = max(ambient, diffuse);
      ${t.hasVertexColors?d`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, opacityMixMode);`:d`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, opacityMixMode);`}

      vec3 shadingNormal = normalize(vNormalWorld);
      vec3 groundNormal = ${u?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};

      ${L(c,`vec3 faceNormal = screenDerivativeNormal(vpos);
         float snow = getRealisticTreeSnow(faceNormal, shadingNormal, groundNormal);
         albedo = mix(albedo, vec3(1), snow);`)}

      ${d`albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}

      ${h?d`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${L(c,"mrr = applySnowToMRR(mrr, snow);")}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, groundNormal, mrr, additionalAmbientIrradiance);`:d`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos, albedo ${L(c,", 1.0")});`),e}const xh=Object.freeze(Object.defineProperty({__proto__:null,build:xs},Symbol.toStringTag,{value:"Module"}));class _h extends vs{constructor(e,r){super(e,r,new $r(xh,()=>xr(()=>Promise.resolve().then(()=>Ph),void 0)))}}class Pm extends Nl{constructor(e,r){super(e,wh),this.materialType="default",this.supportsEdges=!0,this.intersectDraped=void 0,this.produces=new Map([[2,i=>(Br(i)||or(i))&&!this.transparent],[4,i=>(Br(i)||or(i))&&this.transparent&&this.parameters.writeDepth],[8,i=>(Br(i)||or(i))&&this.transparent&&!this.parameters.writeDepth]]),this._layout=gs(this.parameters),this._configuration=new z(r.spherical)}isVisibleForOutput(e){return e!==4&&e!==6&&e!==5||this.parameters.castShadows}get visible(){const{layerOpacity:e,colorMixMode:r,opacity:i,externalColor:o}=this.parameters;return e*(r==="replace"?1:i)*(r==="ignore"||isNaN(o[3])?1:o[3])>=Tt}get _hasEmissiveBase(){return!!this.parameters.emissiveTextureId||!Ie(this.parameters.emissiveBaseColor,Xe)}get hasEmissions(){return this.parameters.emissiveStrength>0&&(this.parameters.emissiveSource===0&&this._hasEmissiveBase||this.parameters.emissiveSource===1)}getConfiguration(e,r){const{parameters:i,_configuration:o}=this,{treeRendering:a,doubleSided:s,doubleSidedType:n}=i;return super.getConfiguration(e,r,this._configuration),o.hasNormalTexture=i.hasNormalTexture,o.hasColorTexture=i.hasColorTexture,o.hasMetallicRoughnessTexture=i.hasMetallicRoughnessTexture,o.hasOcclusionTexture=i.hasOcclusionTexture,o.hasVertexTangents=!a&&i.hasVertexTangents,o.instanced=i.instanced,o.instancedDoublePrecision=i.instancedDoublePrecision,o.hasVVColor=!!i.vvColor,o.hasVVSize=!!i.vvSize,o.hasVerticalOffset=i.verticalOffset!=null,o.hasScreenSizePerspective=i.screenSizePerspective!=null,o.hasSlicePlane=i.hasSlicePlane,o.alphaDiscardMode=i.textureAlphaMode,o.normalType=a?0:i.normalType,o.transparent=this.transparent,o.writeDepth=i.writeDepth,o.customDepthTest=i.customDepthTest??0,o.hasOccludees=r.hasOccludees,o.cullFace=i.hasSlicePlane?0:i.cullFace,o.cullAboveTerrain=r.cullAboveTerrain,o.hasModelTransformation=!a&&i.modelTransformation!=null,o.hasVertexColors=i.hasVertexColors,o.hasSymbolColors=i.hasSymbolColors,o.doubleSidedMode=a?2:s&&n==="normal"?1:s&&n==="winding-order"?2:0,o.instancedFeatureAttribute=i.instancedFeatureAttribute,o.instancedColor=i.instancedColor,Ue(e)?(o.terrainDepthTest=r.terrainDepthTest,o.receiveShadows=i.receiveShadows,o.receiveAmbientOcclusion=i.receiveAmbientOcclusion&&r.ssao!=null):(o.terrainDepthTest=!1,o.receiveShadows=o.receiveAmbientOcclusion=!1),o.textureAlphaPremultiplied=!!i.textureAlphaPremultiplied,o.pbrMode=i.usePBR?i.isSchematic?2:1:0,o.emissionSource=i.emissionSource,o.offsetBackfaces=!(!this.transparent||!i.offsetTransparentBackfaces),o.oitPass=r.oitPass,o.enableOffset=r.camera.relativeElevation<dc,o.snowCover=r.snowCover>0,o.hasColorTextureTransform=!!i.colorTextureTransformMatrix,o.hasNormalTextureTransform=!!i.normalTextureTransformMatrix,o.hasEmissionTextureTransform=!!i.emissiveTextureTransformMatrix,o.hasOcclusionTextureTransform=!!i.occlusionTextureTransformMatrix,o.hasMetallicRoughnessTextureTransform=!!i.metallicRoughnessTextureTransformMatrix,o}intersect(e,r,i,o,a,s){if(this.parameters.verticalOffset!=null){const n=i.camera;q(ei,r[12],r[13],r[14]);let l=null;switch(i.viewingMode){case 1:l=Ce(Po,ei);break;case 2:l=re(Po,Sh)}let c=0;const u=me($h,ei,n.eye),h=J(u),f=ie(u,u,1/h);let g=null;this.parameters.screenSizePerspective&&(g=pe(l,f)),c+=Dl(n,h,this.parameters.verticalOffset,g??0,this.parameters.screenSizePerspective,null),ie(l,l,c),ks(Qr,l,i.transform.inverseRotation),o=me(Mh,o,Qr),a=me(Th,a,Qr)}gc(e,i,o,a,Dc(i.verticalOffset),s)}createGLMaterial(e){return new bh(e)}createBufferWriter(){return new kc(this._layout)}get transparent(){return yh(this.parameters)}}class bh extends Cl{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const r=this._material.parameters;this.updateTexture(r.textureId);const i=e.camera.viewInverseTransposeMatrix;return q(r.origin,i[3],i[7],i[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(r.treeRendering?_h:vs,e)}}class wh extends fh{constructor(){super(...arguments),this.treeRendering=!1,this.hasVertexTangents=!1}get hasNormalTexture(){return!this.treeRendering&&!!this.normalTextureId}get hasColorTexture(){return!!this.textureId}get hasMetallicRoughnessTexture(){return!this.treeRendering&&!!this.metallicRoughnessTextureId}get hasOcclusionTexture(){return!this.treeRendering&&!!this.occlusionTextureId}get emissionSource(){return this.treeRendering?0:this.emissiveTextureId!=null&&this.emissiveSource===0?3:this.usePBR?this.emissiveSource===0?2:1:0}get hasTextures(){return this.hasColorTexture||this.hasNormalTexture||this.hasMetallicRoughnessTexture||this.emissionSource===3||this.hasOcclusionTexture}}function yh(t){const{drivenOpacity:e,opacity:r,externalColor:i,layerOpacity:o,texture:a,textureId:s,textureAlphaMode:n,colorMixMode:l}=t,c=i[3];return e||r<1&&l!=="replace"||c<1&&l!=="ignore"||o<1||(a!=null||s!=null)&&n!==1&&n!==2&&l!=="replace"}const Mh=_(),Th=_(),Sh=ce(0,0,1),Po=_(),Qr=_(),ei=_(),$h=_(),Ch=Object.freeze(Object.defineProperty({__proto__:null,build:ts},Symbol.toStringTag,{value:"Module"})),Eh=Object.freeze(Object.defineProperty({__proto__:null,build:rs,getRadius:Pr},Symbol.toStringTag,{value:"Module"})),Rh=Object.freeze(Object.defineProperty({__proto__:null,build:fs},Symbol.toStringTag,{value:"Module"})),Ph=Object.freeze(Object.defineProperty({__proto__:null,build:xs},Symbol.toStringTag,{value:"Module"}));export{I as $,ta as A,Si as B,k as C,Rr as D,Gp as E,zt as F,Su as G,ds as H,Ba as I,Er as J,ue as K,Yp as L,Tt as M,La as N,wa as O,Pm as P,yi as Q,$r as R,rp as S,Tr as T,Mr as U,jl as V,fc as W,Ue as X,cc as Y,ft as Z,Xn as _,ap as a,Nl as a0,yl as a1,Qh as a2,vp as a3,Rl as a4,Dl as a5,Nc as a6,zc as a7,Vc as a8,jr as a9,Mp as aa,_a as ab,Tp as ac,jc as ad,Cl as ae,hi as b,op as c,Vp as d,ip as e,Zh as f,Kh as g,Ko as h,yh as i,wh as j,wu as k,_t as l,Vt as m,ep as n,Bp as o,we as p,Ye as q,ke as r,jp as s,nu as t,Tu as u,gu as v,qp as w,yu as x,qd as y,us as z};
