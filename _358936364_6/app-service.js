	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};
	/*v0.5vv_20181221_syb_scopedata*/global.__wcc_version__='v0.5vv_20181221_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'_loadMoreWallPaper'])
Z([3,'category'])
Z([3,'true'])
Z([[2,'?:'],[[6],[[7],[3,'data']],[3,'list']],[[6],[[7],[3,'data']],[3,'list']],[[4],[[5]]]])
Z([[7],[3,'index']])
Z([3,'_onItemTap'])
Z([3,'category-item-con'])
Z(z[4])
Z([[6],[[7],[3,'item']],[3,'onlyAvatar']])
Z([[6],[[7],[3,'item']],[3,'type']])
Z([[7],[3,'item']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'==='],[[7],[3,'type']],[1,1]])
Z([3,'nav-pos'])
Z([a,[3,'padding-top:'],[[7],[3,'statusBarHeight']],[3,'px;background-color:'],[[7],[3,'backgroundColor']]])
Z([[7],[3,'titleIconR']])
Z([[2,'!'],[[7],[3,'titleIconR']]])
Z([3,'_titleTap'])
Z([3,'nav-left-pos'])
Z([[7],[3,'titleIcon']])
Z([3,'nav-wrapper'])
Z([a,[3,'height:'],[[7],[3,'navgationHeight']],[3,'px']])
Z([[7],[3,'showBack']])
Z(z[5])
Z([3,'nav-title'])
Z(z[7])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'tap'])
Z([3,'cancel'])
Z([3,'end'])
Z([3,'move'])
Z([3,'start'])
Z([3,'touch-con'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'home-con'])
Z([3,'red'])
Z([3,'_onTitleTap'])
Z([[6],[[6],[[6],[[7],[3,'props']],[3,'homeStore']],[3,'currentType']],[3,'cateName']])
Z([3,'../../images/icon_expand_top.png'])
Z([3,'_loadMoreWallPaper'])
Z([3,'category'])
Z([3,'true'])
Z([[6],[[6],[[6],[[7],[3,'props']],[3,'homeStore']],[3,'wallpaperCategory']],[3,'list']])
Z([[7],[3,'index']])
Z([3,'_changeCategory'])
Z([3,'category-item-con'])
Z(z[9])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([[7],[3,'item']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!=='],[[7],[3,'currentIndex']],[1,null]])
Z([3,'wall-con'])
Z([3,'_onSwipe'])
Z([[7],[3,'showAction']])
Z([[7],[3,'showPoster']])
Z([3,'_cancelPoster'])
Z([3,'modal'])
Z([[7],[3,'posterData']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'home-con'])
Z([3,'#FFF'])
Z([3,'_onLeftTap'])
Z([3,'_onTitleTap'])
Z([3,'../../images/icon_large.png'])
Z([[2,'!'],[[7],[3,'showCategory']]])
Z([[6],[[6],[[6],[[7],[3,'props']],[3,'homeStore']],[3,'currentType']],[3,'cateName']])
Z([3,'../../images/icon_expand.png'])
Z([[7],[3,'showCategory']])
Z([1,1])
Z([3,'wallpaper'])
Z([3,'desc-main'])
Z([3,'desc-con'])
Z([[2,'!='],[[6],[[6],[[6],[[7],[3,'props']],[3,'homeStore']],[3,'wallpaperStat']],[3,'newImgCnt']],[1,0]])
Z([[2,'=='],[[6],[[6],[[6],[[7],[3,'props']],[3,'homeStore']],[3,'wallpaperStat']],[3,'newImgCnt']],[1,0]])
Z([[2,'!'],[[6],[[6],[[6],[[7],[3,'props']],[3,'homeStore']],[3,'currentType']],[3,'onlyAvatar']]])
Z([3,'_loadMoreWallPaper'])
Z([3,'wallpaper-con'])
Z(z[16])
Z([3,'true'])
Z([[7],[3,'loadStatus']])
Z([3,'_onCayegoryChange'])
Z([[6],[[6],[[7],[3,'props']],[3,'homeStore']],[3,'wallpaperCategory']])
Z(z[8])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'home-con'])
Z([3,'#FFF'])
Z([3,'_onLeftTap'])
Z([3,'_onTitleTap'])
Z([3,'../../images/icon_thumbnails.png'])
Z([[2,'!'],[[7],[3,'showCategory']]])
Z([[6],[[6],[[6],[[7],[3,'props']],[3,'homeStore']],[3,'currentType']],[3,'cateName']])
Z([3,'../../images/icon_expand.png'])
Z([[7],[3,'showCategory']])
Z([1,1])
Z([3,'swiper-con'])
Z([3,'desc-con'])
Z([[2,'!='],[[6],[[6],[[6],[[7],[3,'props']],[3,'homeStore']],[3,'wallpaperStat']],[3,'newImgCnt']],[1,0]])
Z([[2,'=='],[[6],[[6],[[6],[[7],[3,'props']],[3,'homeStore']],[3,'wallpaperStat']],[3,'newImgCnt']],[1,0]])
Z([3,'_onCayegoryChange'])
Z([[6],[[6],[[7],[3,'props']],[3,'homeStore']],[3,'wallpaperCategory']])
Z(z[8])
Z([[7],[3,'showUpDialog']])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/category-item/index.wxml','./components/category/index.wxml','./components/header/index.wxml','./components/load-more/index.wxml','./components/page/index.wxml','./components/poster-canvas/index.wxml','./components/touch-container/index.wxml','./pages/category/index.wxml','./pages/detail/index.wxml','./pages/h5-page/index.wxml','./pages/home-column/index.wxml','./pages/home/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var xC=_mz(z,'scroll-view',['bindscrolltolower',0,'class',1,'scrollY',1],[],e,s,gg)
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_mz(z,'view',['bindtap',5,'class',1,'data-index',2,'data-onlyAvatar',3,'data-type',4],[],hG,cF,gg)
var lK=_n('category-item')
_rz(z,lK,'data',10,hG,cF,gg)
_(oJ,lK)
_(oH,oJ)
return oH
}
oD.wxXCkey=4
_2z(z,3,fE,e,s,gg,oD,'item','index','{{index}}')
_(r,xC)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var tM=_v()
_(r,tM)
if(_oz(z,0,e,s,gg)){tM.wxVkey=1
var eN=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var bO=_v()
_(eN,bO)
if(_oz(z,3,e,s,gg)){bO.wxVkey=1
}
var oP=_v()
_(eN,oP)
if(_oz(z,4,e,s,gg)){oP.wxVkey=1
var xQ=_mz(z,'view',['bindtap',5,'class',1],[],e,s,gg)
var oR=_v()
_(xQ,oR)
if(_oz(z,7,e,s,gg)){oR.wxVkey=1
}
oR.wxXCkey=1
_(oP,xQ)
}
bO.wxXCkey=1
oP.wxXCkey=1
_(tM,eN)
}
else{tM.wxVkey=2
var fS=_mz(z,'view',['class',8,'style',1],[],e,s,gg)
var cT=_v()
_(fS,cT)
if(_oz(z,10,e,s,gg)){cT.wxVkey=1
}
var hU=_mz(z,'view',['bindtap',11,'class',1],[],e,s,gg)
var oV=_v()
_(hU,oV)
if(_oz(z,13,e,s,gg)){oV.wxVkey=1
}
oV.wxXCkey=1
_(fS,hU)
cT.wxXCkey=1
_(tM,fS)
}
tM.wxXCkey=1
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var lY=_n('slot')
_(r,lY)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var e2=_mz(z,'view',['bindtap',0,'bindtouchcancel',1,'bindtouchend',1,'bindtouchmove',2,'bindtouchstart',3,'class',4],[],e,s,gg)
var b3=_n('slot')
_(e2,b3)
_(r,e2)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var x5=_n('ypage')
_rz(z,x5,'class',0,e,s,gg)
var o6=_mz(z,'header',['backgroundColor',1,'bind:onTitleTap',1,'title',2,'titleIcon',3],[],e,s,gg)
_(x5,o6)
var f7=_mz(z,'scroll-view',['bindscrolltolower',5,'class',1,'scrollY',2],[],e,s,gg)
var c8=_v()
_(f7,c8)
var h9=function(cAB,o0,oBB,gg){
var aDB=_mz(z,'view',['bindtap',10,'class',1,'data-index',2,'data-type',3],[],cAB,o0,gg)
var tEB=_n('category-item')
_rz(z,tEB,'data',14,cAB,o0,gg)
_(aDB,tEB)
_(oBB,aDB)
return oBB
}
c8.wxXCkey=4
_2z(z,8,h9,e,s,gg,c8,'item','index','{{index}}')
_(x5,f7)
_(r,x5)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var bGB=_v()
_(r,bGB)
if(_oz(z,0,e,s,gg)){bGB.wxVkey=1
var oHB=_n('view')
_rz(z,oHB,'class',1,e,s,gg)
var oJB=_n('touch-container')
_rz(z,oJB,'bind:onSwipe',2,e,s,gg)
var cLB=_n('header')
_(oJB,cLB)
var fKB=_v()
_(oJB,fKB)
if(_oz(z,3,e,s,gg)){fKB.wxVkey=1
}
fKB.wxXCkey=1
_(oHB,oJB)
var xIB=_v()
_(oHB,xIB)
if(_oz(z,4,e,s,gg)){xIB.wxVkey=1
var hMB=_mz(z,'view',['bindtap',5,'class',1],[],e,s,gg)
var oNB=_n('ypage')
var cOB=_n('share-canvas')
_rz(z,cOB,'posterData',7,e,s,gg)
_(oNB,cOB)
_(hMB,oNB)
_(xIB,hMB)
}
xIB.wxXCkey=1
xIB.wxXCkey=3
_(bGB,oHB)
}
bGB.wxXCkey=1
bGB.wxXCkey=3
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var lQB=_n('header')
_(r,lQB)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var tSB=_n('ypage')
_rz(z,tSB,'class',0,e,s,gg)
var eTB=_mz(z,'header',['backgroundColor',1,'bind:onLeftTap',1,'bind:onTitleTap',2,'leftIcon',3,'showLeft',4,'title',5,'titleIcon',6,'titleIconR',7,'type',8],[],e,s,gg)
_(tSB,eTB)
var bUB=_n('view')
_rz(z,bUB,'class',10,e,s,gg)
var oVB=_n('view')
_rz(z,oVB,'class',11,e,s,gg)
var oXB=_n('view')
_rz(z,oXB,'class',12,e,s,gg)
var fYB=_v()
_(oXB,fYB)
if(_oz(z,13,e,s,gg)){fYB.wxVkey=1
}
var cZB=_v()
_(oXB,cZB)
if(_oz(z,14,e,s,gg)){cZB.wxVkey=1
}
fYB.wxXCkey=1
cZB.wxXCkey=1
_(oVB,oXB)
var xWB=_v()
_(oVB,xWB)
if(_oz(z,15,e,s,gg)){xWB.wxVkey=1
}
xWB.wxXCkey=1
_(bUB,oVB)
var h1B=_mz(z,'scroll-view',['bindscrolltolower',16,'class',1,'lowerThreshold',2,'scrollY',3],[],e,s,gg)
var o2B=_n('load-more')
_rz(z,o2B,'loadStatus',20,e,s,gg)
_(h1B,o2B)
_(bUB,h1B)
var c3B=_mz(z,'category',['bind:onItemTap',21,'data',1,'show',2],[],e,s,gg)
_(bUB,c3B)
_(tSB,bUB)
_(r,tSB)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var l5B=_n('ypage')
_rz(z,l5B,'class',0,e,s,gg)
var a6B=_mz(z,'header',['backgroundColor',1,'bind:onLeftTap',1,'bind:onTitleTap',2,'leftIcon',3,'showLeft',4,'title',5,'titleIcon',6,'titleIconR',7,'type',8],[],e,s,gg)
_(l5B,a6B)
var t7B=_n('view')
_rz(z,t7B,'class',10,e,s,gg)
var b9B=_n('view')
_rz(z,b9B,'class',11,e,s,gg)
var o0B=_v()
_(b9B,o0B)
if(_oz(z,12,e,s,gg)){o0B.wxVkey=1
}
var xAC=_v()
_(b9B,xAC)
if(_oz(z,13,e,s,gg)){xAC.wxVkey=1
}
o0B.wxXCkey=1
xAC.wxXCkey=1
_(t7B,b9B)
var oBC=_mz(z,'category',['bind:onItemTap',14,'data',1,'show',2],[],e,s,gg)
_(t7B,oBC)
var e8B=_v()
_(t7B,e8B)
if(_oz(z,17,e,s,gg)){e8B.wxVkey=1
}
e8B.wxXCkey=1
_(l5B,t7B)
_(r,l5B)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['app.json'] = {"pages":["pages/home/index","pages/detail/index","pages/category/index","pages/home-column/index","pages/h5-page/index"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"WeChat","navigationBarTextStyle":"black","enablePullDownRefresh":false,"navigationStyle":"custom"},"usingComponents":{"header":"/components/header/index","ypage":"/components/page/index"},"networkTimeout":{"request":1000000},"debug":false};
		__wxAppCode__['app.wxml'] = $gwx( './app.wxml' );
		__wxAppCode__['components/category-item/index.json'] = {"component":true,"usingComponents":{"header":"/components/header/index","ypage":"/components/page/index"}};
		__wxAppCode__['components/category-item/index.wxml'] = $gwx( './components/category-item/index.wxml' );
		__wxAppCode__['components/category/index.json'] = {"usingComponents":{"category-item":"/components/category-item/index","header":"/components/header/index","ypage":"/components/page/index"}};
		__wxAppCode__['components/category/index.wxml'] = $gwx( './components/category/index.wxml' );
		__wxAppCode__['components/header/index.json'] = {"component":true,"usingComponents":{"header":"/components/header/index","ypage":"/components/page/index"}};
		__wxAppCode__['components/header/index.wxml'] = $gwx( './components/header/index.wxml' );
		__wxAppCode__['components/load-more/index.json'] = {"component":true,"usingComponents":{"header":"/components/header/index","ypage":"/components/page/index"}};
		__wxAppCode__['components/load-more/index.wxml'] = $gwx( './components/load-more/index.wxml' );
		__wxAppCode__['components/page/index.json'] = {"component":true,"usingComponents":{"header":"/components/header/index","ypage":"/components/page/index"}};
		__wxAppCode__['components/page/index.wxml'] = $gwx( './components/page/index.wxml' );
		__wxAppCode__['components/poster-canvas/index.json'] = {"component":true,"usingComponents":{"header":"/components/header/index","ypage":"/components/page/index"}};
		__wxAppCode__['components/poster-canvas/index.wxml'] = $gwx( './components/poster-canvas/index.wxml' );
		__wxAppCode__['components/touch-container/index.json'] = {"component":true,"usingComponents":{"header":"/components/header/index","ypage":"/components/page/index"}};
		__wxAppCode__['components/touch-container/index.wxml'] = $gwx( './components/touch-container/index.wxml' );
		__wxAppCode__['pages/category/index.json'] = {"enablePullDownRefresh":false,"backgroundTextStyle":"dark","usingComponents":{"category-item":"/components/category-item/index","header":"/components/header/index","ypage":"/components/page/index"}};
		__wxAppCode__['pages/category/index.wxml'] = $gwx( './pages/category/index.wxml' );
		__wxAppCode__['pages/detail/index.json'] = {"enablePullDownRefresh":false,"backgroundTextStyle":"dark","navigationBarTextStyle":"white","disableScroll":true,"usingComponents":{"touch-container":"/components/touch-container/index","share-canvas":"/components/poster-canvas/index","header":"/components/header/index","ypage":"/components/page/index"}};
		__wxAppCode__['pages/detail/index.wxml'] = $gwx( './pages/detail/index.wxml' );
		__wxAppCode__['pages/h5-page/index.json'] = {"enablePullDownRefresh":false,"backgroundTextStyle":"dark","disableScroll":true,"usingComponents":{"header":"/components/header/index","ypage":"/components/page/index"}};
		__wxAppCode__['pages/h5-page/index.wxml'] = $gwx( './pages/h5-page/index.wxml' );
		__wxAppCode__['pages/home-column/index.json'] = {"enablePullDownRefresh":false,"backgroundTextStyle":"dark","usingComponents":{"category":"/components/category/index","load-more":"/components/load-more/index","header":"/components/header/index","ypage":"/components/page/index"}};
		__wxAppCode__['pages/home-column/index.wxml'] = $gwx( './pages/home-column/index.wxml' );
		__wxAppCode__['pages/home/index.json'] = {"enablePullDownRefresh":false,"backgroundTextStyle":"dark","usingComponents":{"category-item":"/components/category-item/index","category":"/components/category/index","header":"/components/header/index","ypage":"/components/page/index"}};
		__wxAppCode__['pages/home/index.wxml'] = $gwx( './pages/home/index.wxml' );
		__wxAppCode__['project.config.json'] = {"description":"项目配置文件","packOptions":{"ignore":[]},"setting":{"urlCheck":false,"es6":true,"postcss":true,"minified":true,"newFeature":true,"nodeModules":true,"autoAudits":false},"compileType":"miniprogram","libVersion":"2.3.2","appid":"wxf3f963b724069c29","projectname":"neets-wallpaper","debugOptions":{"hidedInDevtools":[]},"isGameTourist":false,"condition":{"search":{"current":-1,"list":[]},"conversation":{"current":-1,"list":[]},"game":{"currentL":-1,"list":[]},"miniprogram":{"current":-1,"list":[]}},"usingComponents":{"header":"/components/header/index","ypage":"/components/page/index"}};
		__wxAppCode__['project.config.wxml'] = $gwx( './project.config.wxml' );
	
	define("common/data.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var A={wallpaperList:[{imgUrl:"https://desk-fd.zol-img.com.cn/t_s720x360c5/g5/M00/03/02/ChMkJ1v9A1mIN_iKABERj1MSlcQAAtatAEvvFEAERGn385.jpg"},{imgUrl:"https://sjbz-fd.zol-img.com.cn/t_s320x510c/g5/M00/00/04/ChMkJ1fJWESIW7tdAA13QwaUm34AAU-JAF5mb8ADXdb789.jpg"},{imgUrl:"https://sjbz-fd.zol-img.com.cn/t_s320x510c/g5/M00/0F/09/ChMkJ1fJQgqIcKHeAAEtDBlYHz8AAU7kQFQE3UAAS0k072.jpg"}],wallpaperCategory:[{cateName:"最新",id:"scenery",imageUrl:"https://sjbz-fd.zol-img.com.cn/t_s320x510c/g5/M00/0F/0F/ChMkJlfJS1SIVz1JAAnVqRAOytIAAU8-ADEqGYACdXB235.jpg"},{cateName:"腐宅同盟",id:"games",imageUrl:"https://sjbz-fd.zol-img.com.cn/t_s320x510c/g5/M00/0F/0F/ChMkJlfJS1SIVz1JAAnVqRAOytIAAU8-ADEqGYACdXB235.jpg"},{cateName:"爱豆",id:"belle",imageUrl:"https://sjbz-fd.zol-img.com.cn/t_s320x510c/g5/M00/0F/0F/ChMkJlfJS1SIVz1JAAnVqRAOytIAAU8-ADEqGYACdXB235.jpg"},{cateName:"游戏",id:"anime",imageUrl:"https://sjbz-fd.zol-img.com.cn/t_s320x510c/g5/M00/0F/0F/ChMkJlfJS1SIVz1JAAnVqRAOytIAAU8-ADEqGYACdXB235.jpg"},{cateName:"影视",id:"creativity",imageUrl:"https://sjbz-fd.zol-img.com.cn/t_s320x510c/g5/M00/0F/0F/ChMkJlfJS1SIVz1JAAnVqRAOytIAAU8-ADEqGYACdXB235.jpg"},{cateName:"心灵毒鸡汤",id:"car",imageUrl:"https://sjbz-fd.zol-img.com.cn/t_s320x510c/g5/M00/0F/0F/ChMkJlfJS1SIVz1JAAnVqRAOytIAAU8-ADEqGYACdXB235.jpg"},{cateName:"斗图",id:"technology",imageUrl:"https://sjbz-fd.zol-img.com.cn/t_s320x510c/g5/M00/0F/0F/ChMkJlfJS1SIVz1JAAnVqRAOytIAAU8-ADEqGYACdXB235.jpg"},{cateName:"livephoto",id:"car",imageUrl:"https://sjbz-fd.zol-img.com.cn/t_s320x510c/g5/M00/0F/0F/ChMkJlfJS1SIVz1JAAnVqRAOytIAAU8-ADEqGYACdXB235.jpg"},{cateName:"萌宠",id:"technology",imageUrl:"https://sjbz-fd.zol-img.com.cn/t_s320x510c/g5/M00/0F/0F/ChMkJlfJS1SIVz1JAAnVqRAOytIAAU8-ADEqGYACdXB235.jpg"},{cateName:"趣图",id:"technology",imageUrl:"https://sjbz-fd.zol-img.com.cn/t_s320x510c/g5/M00/0F/0F/ChMkJlfJS1SIVz1JAAnVqRAOytIAAU8-ADEqGYACdXB235.jpg"}]};module.exports=A; 
 			}); 
		define("configs/ApiConst.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var a={LV1_lIST:"/api/community/wallpapers/lv1-cate",LV1_CATEGORY:"/api/community/wallpapers/lv1-cate/${lvCateId}/images",WALLPAPERS_SIZE:"/api/community/wallpapers/size",WALLPAPERS_DOWNLOAD:"/api/community/wallpapers/${wpId}/download",WALLPAPERS_STAT:"/api/community/wallpapers/lv1-cate/${lvCateId}/stat"};exports.default=a; 
 			}); 
		define("configs/EvnConst.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=exports.Mode={DEBUG:"DEBUG",TEST:"TEST",PREP:"PREP",RELEASE:"RELEASE"},c={DEBUG:"https://neets.cc/uc-wechat-callback/h5",TEST:"https://neets.cc/UC_ADAPTER_CALLBACK/h5",PREP:"https://neets.cc/uc-wechat-callback/h5",RELEASE:"https://neets.cc/uc-wechat-callback/h5"},e={DEBUG:"http://121.40.29.234:8088/",TEST:"http://121.40.29.234:8088/",PREP:"https://communityapi.neets.cc/",RELEASE:"https://communityapi.neets.cc/"},E={DEBUG:"http://47.97.0.114:28080/",TEST:"http://47.97.0.114:28080/",PREP:"https://uc.neets.cc/",RELEASE:"https://uc.neets.cc/"},s={DEBUG:"http://118.31.115.183:28080/",TEST:"http://118.31.115.183:28080/",PREP:"https://main.neets.cc/",RELEASE:"https://main.neets.cc/"},p={DEBUG:"https://log.neets.cc/",TEST:"https://log.neets.cc/",PREP:"https://log.neets.cc/",RELEASE:"https://log.neets.cc/"},h={DEBUG:"http://118.178.224.109:8088/api/",TEST:"http://118.178.224.109:8088/api/",PREP:"https://tcommunity.neets.cc/api/",RELEASE:"https://tcommunity.neets.cc/api/"},n=exports.currentMode=t.RELEASE,a={apiHost:e[n],ucHost:E[n],mainHost:s[n],logHost:p[n],temHost:h[n],redirectUri:c[n]};exports.default=a; 
 			}); 
		define("libs/wechat-weapp-mobx/mobx.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(t){if("object"===("undefined"==typeof exports?"undefined":e(exports))&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).mobx=t()}}(function(){return function e(t,n,r){function o(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){var n=t[a][1][e];return o(n||e)},l,l.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(t,n,r){(function(t){function o(e){return function(t,n,r){return r&&"function"==typeof r.value?(r.value=A(e,r.value),r.enumerable=!1,r.configurable=!0,r):mt(e).apply(this,arguments)}}function i(e){return"function"==typeof e&&!0===e.isMobxAction}function a(e,t,n){var r=function(){return j(t,n,e,arguments)};r.isMobxAction=!0,ot(e,t,r)}function s(e,t,n){function r(){a(u)}var o,a,s;"string"==typeof e?(o=e,a=t,s=n):(o=e.name||"Autorun@"+We(),a=e,s=t),Ye("function"==typeof a,Ge("m004")),Ye(!1===i(a),Ge("m005")),s&&(a=a.bind(s));var u=new Nt(o,function(){this.track(r)});return u.schedule(),u.getDisposer()}function u(e){return Me(function(t,n,r,o,i){Ye(void 0!==i,Ge("m009")),Ye("function"==typeof i.get,Ge("m010")),Ie(Se(t,""),n,i.get,i.set,e,!1)},function(e){var t=this.$mobx.values[e];if(void 0!==t)return t.get()},function(e,t){this.$mobx.values[e].set(t)},!1,!1)}function c(t){if(null===t||"object"!==(void 0===t?"undefined":e(t)))throw new Error("[mobx] transform expected some kind of object, got: "+t);var n=t.$transformId;return void 0===n&&ot(t,"$transformId",n=We()),n}function l(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return f(e,de,t)}function p(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return f(e,be,t)}function f(t,n,r){Ye(arguments.length>=2,Ge("m014")),Ye("object"===(void 0===t?"undefined":e(t)),Ge("m015")),Ye(!en(t),Ge("m016")),r.forEach(function(t){Ye("object"===(void 0===t?"undefined":e(t)),Ge("m017")),Ye(!m(t),Ge("m018"))});for(var o=Se(t),i={},a=r.length-1;a>=0;a--){var s=r[a];for(var u in s)if(!0!==i[u]&&rt(s,u)){if(i[u]=!0,t===s&&!at(t,u))continue;Ae(o,u,Object.getOwnPropertyDescriptor(s,u),n)}}return t}function h(e){var t={name:e.name};return e.observing&&e.observing.length>0&&(t.dependencies=Fe(e.observing).map(h)),t}function d(e){var t={name:e.name};return z(e)&&(t.observers=H(e).map(d)),t}function v(e,t){return Pe(e).intercept(t)}function b(e,t,n){return Pe(e,t).intercept(n)}function m(e,t){if(null===e||void 0===e)return!1;if(void 0!==t){if(Oe(e)||en(e))throw new Error(Ge("m019"));if(Le(e)){var n=e.$mobx;return n.values&&!!n.values[t]}return!1}return Le(e)||!!e.$mobx||Rt(e)||Ht(e)||Pt(e)}function y(e){Je("Expected one or two arguments to observable."+e+". Did you accidentally try to use observable."+e+" as decorator?")}function g(e){return Ye(!!e,":("),Me(function(t,n,r,o,i){st(t,n),Ye(!i||!i.get,Ge("m022")),je(Se(t,void 0),n,r,e)},function(e){var t=this.$mobx.values[e];if(void 0!==t)return t.get()},function(e,t){De(this,e,t)},!0,!1)}function w(e,t,n){return Pe(e).observe(t,n)}function x(e,t,n,r){return Pe(e,t).observe(n,r)}function _(t,n,r){function o(e){return n&&r.push([t,e]),e}if(void 0===n&&(n=!0),void 0===r&&(r=[]),m(t)){if(n&&null===r&&(r=[]),n&&null!==t&&"object"===(void 0===t?"undefined":e(t)))for(var i=0,a=r.length;i<a;i++)if(r[i][0]===t)return r[i][1];if(Oe(t)){var s=o([]),u=t.map(function(e){return _(e,n,r)});s.length=u.length;for(var i=0,a=u.length;i<a;i++)s[i]=u[i];return s}if(Le(t)){s=o({});for(var c in t)s[c]=_(t[c],n,r);return s}if(en(t)){var l=o({});return t.forEach(function(e,t){return l[t]=_(e,n,r)}),l}if(un(t))return _(t.get(),n,r)}return t}function O(e,t){return void 0===t&&(t=void 0),j("",e)}function S(e){return console.log(e),e}function A(e,t){Ye("function"==typeof t,Ge("m026")),Ye("string"==typeof e&&e.length>0,"actions should have valid names, got: '"+e+"'");var n=function(){return j(e,t,this,arguments)};return n.originalFn=t,n.isMobxAction=!0,n}function j(e,t,n,r){var o=I(e,t,n,r);try{return t.apply(n,r)}finally{T(o)}}function I(e,t,n,r){var o=ne()&&!!e,i=0;if(o){i=Date.now();var a=r&&r.length||0,s=new Array(a);if(a>0)for(var u=0;u<a;u++)s[u]=r[u];oe({type:"action",name:e,fn:t,object:n,arguments:s})}var c=B();return J(),{prevDerivation:c,prevAllowStateChanges:k(!0),notifySpy:o,startTime:i}}function T(e){E(e.prevAllowStateChanges),Y(),N(e.prevDerivation),e.notifySpy&&ie({time:Date.now()-e.startTime})}function k(e){var t=Bt.allowStateChanges;return Bt.allowStateChanges=e,t}function E(e){Bt.allowStateChanges=e}function D(e){return e instanceof Ct}function R(e){switch(e.dependenciesState){case Vt.UP_TO_DATE:return!1;case Vt.NOT_TRACKING:case Vt.STALE:return!0;case Vt.POSSIBLY_STALE:for(var t=B(),n=e.observing,r=n.length,o=0;o<r;o++){var i=n[o];if(Pt(i)){try{i.get()}catch(e){return N(t),!0}if(e.dependenciesState===Vt.STALE)return N(t),!0}}return U(e),N(t),!1}}function L(){return null!==Bt.trackingDerivation}function V(e){var t=e.observers.length>0;Bt.computationDepth>0&&t&&Je(Ge("m031")+e.name),!Bt.allowStateChanges&&t&&Je(Ge(Bt.strictMode?"m030a":"m030b")+e.name)}function P(e,t,n){U(e),e.newObserving=new Array(e.observing.length+100),e.unboundDepsCount=0,e.runId=++Bt.runId;var r=Bt.trackingDerivation;Bt.trackingDerivation=e;var o;try{o=t.call(n)}catch(e){o=new Ct(e)}return Bt.trackingDerivation=r,C(e),o}function C(e){var t=e.observing,n=e.observing=e.newObserving;e.newObserving=null;for(var r=0,o=e.unboundDepsCount,i=0;i<o;i++)0===(a=n[i]).diffValue&&(a.diffValue=1,r!==i&&(n[r]=a),r++);for(n.length=r,o=t.length;o--;)0===(a=t[o]).diffValue&&K(a,e),a.diffValue=0;for(;r--;){var a=n[r];1===a.diffValue&&(a.diffValue=0,G(a,e))}}function M(e){for(var t=e.observing,n=t.length;n--;)K(t[n],e);e.dependenciesState=Vt.NOT_TRACKING,t.length=0}function $(e){var t=B(),n=e();return N(t),n}function B(){var e=Bt.trackingDerivation;return Bt.trackingDerivation=null,e}function N(e){Bt.trackingDerivation=e}function U(e){if(e.dependenciesState!==Vt.UP_TO_DATE){e.dependenciesState=Vt.UP_TO_DATE;for(var t=e.observing,n=t.length;n--;)t[n].lowestObserverState=Vt.UP_TO_DATE}}function z(e){return e.observers&&e.observers.length>0}function H(e){return e.observers}function G(e,t){var n=e.observers.length;n&&(e.observersIndexes[t.__mapid]=n),e.observers[n]=t,e.lowestObserverState>t.dependenciesState&&(e.lowestObserverState=t.dependenciesState)}function K(e,t){if(1===e.observers.length)e.observers.length=0,W(e);else{var n=e.observers,r=e.observersIndexes,o=n.pop();if(o!==t){var i=r[t.__mapid]||0;i?r[o.__mapid]=i:delete r[o.__mapid],n[i]=o}delete r[t.__mapid]}}function W(e){e.isPendingUnobservation||(e.isPendingUnobservation=!0,Bt.pendingUnobservations.push(e))}function J(){Bt.inBatch++}function Y(){if(0==--Bt.inBatch){ee();for(var e=Bt.pendingUnobservations,t=0;t<e.length;t++){var n=e[t];n.isPendingUnobservation=!1,0===n.observers.length&&n.onBecomeUnobserved()}Bt.pendingUnobservations=[]}}function X(e){var t=Bt.trackingDerivation;null!==t?t.runId!==e.lastAccessedBy&&(e.lastAccessedBy=t.runId,t.newObserving[t.unboundDepsCount++]=e):0===e.observers.length&&W(e)}function q(e){if(e.lowestObserverState!==Vt.STALE){e.lowestObserverState=Vt.STALE;for(var t=e.observers,n=t.length;n--;){var r=t[n];r.dependenciesState===Vt.UP_TO_DATE&&r.onBecomeStale(),r.dependenciesState=Vt.STALE}}}function F(e){if(e.lowestObserverState!==Vt.STALE){e.lowestObserverState=Vt.STALE;for(var t=e.observers,n=t.length;n--;){var r=t[n];r.dependenciesState===Vt.POSSIBLY_STALE?r.dependenciesState=Vt.STALE:r.dependenciesState===Vt.UP_TO_DATE&&(e.lowestObserverState=Vt.UP_TO_DATE)}}}function Q(e){if(e.lowestObserverState===Vt.UP_TO_DATE){e.lowestObserverState=Vt.POSSIBLY_STALE;for(var t=e.observers,n=t.length;n--;){var r=t[n];r.dependenciesState===Vt.UP_TO_DATE&&(r.dependenciesState=Vt.POSSIBLY_STALE,r.onBecomeStale())}}}function Z(e){Ye(this&&this.$mobx&&Ht(this.$mobx),"Invalid `this`"),Ye(!this.$mobx.errorHandler,"Only one onErrorHandler can be registered"),this.$mobx.errorHandler=e}function ee(){Bt.inBatch>0||Bt.isRunningReactions||zt(te)}function te(){Bt.isRunningReactions=!0;for(var e=Bt.pendingReactions,t=0;e.length>0;){++t===Ut&&(console.error("Reaction doesn't converge to a stable state after "+Ut+" iterations. Probably there is a cycle in the reactive function: "+e[0]),e.splice(0));for(var n=e.splice(0),r=0,o=n.length;r<o;r++)n[r].runReaction()}Bt.isRunningReactions=!1}function ne(){return!!Bt.spyListeners.length}function re(e){if(Bt.spyListeners.length)for(var t=Bt.spyListeners,n=0,r=t.length;n<r;n++)t[n](e)}function oe(e){re(tt({},e,{spyReportStart:!0}))}function ie(e){re(e?tt({},e,Gt):Gt)}function ae(e){return e.interceptors&&e.interceptors.length>0}function se(e,t){var n=e.interceptors||(e.interceptors=[]);return n.push(t),qe(function(){var e=n.indexOf(t);-1!==e&&n.splice(e,1)})}function ue(e,t){var n=B();try{var r=e.interceptors;if(r)for(var o=0,i=r.length;o<i&&(t=r[o](t),Ye(!t||t.type,"Intercept handlers should return nothing or a change object"),t);o++);return t}finally{N(n)}}function ce(e){return e.changeListeners&&e.changeListeners.length>0}function le(e,t){var n=e.changeListeners||(e.changeListeners=[]);return n.push(t),qe(function(){var e=n.indexOf(t);-1!==e&&n.splice(e,1)})}function pe(e,t){var n=B(),r=e.changeListeners;if(r){for(var o=0,i=(r=r.slice()).length;o<i;o++)r[o](t);N(n)}}function fe(t){return"object"===(void 0===t?"undefined":e(t))&&null!==t&&!0===t.isMobxModifierDescriptor}function he(e,t){return Ye(!fe(t),"Modifiers cannot be nested"),{isMobxModifierDescriptor:!0,initialValue:t,enhancer:e}}function de(e,t,n){return fe(e)&&Je("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it"),m(e)?e:Array.isArray(e)?kt.array(e,n):et(e)?kt.object(e,n):ht(e)?kt.map(e,n):e}function ve(e,t,n){return fe(e)&&Je("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it"),void 0===e||null===e?e:Le(e)||Oe(e)||en(e)?e:Array.isArray(e)?kt.shallowArray(e,n):et(e)?kt.shallowObject(e,n):ht(e)?kt.shallowMap(e,n):Je("The shallow modifier / decorator can only used in combination with arrays, objects and maps")}function be(e){return e}function me(e,t,n){if(ct(e,t))return t;if(m(e))return e;if(Array.isArray(e))return new Xt(e,me,n);if(ht(e))return new Zt(e,me,n);if(et(e)){var r={};return Se(r,n),f(r,me,[e]),r}return e}function ye(e,t,n){return ct(e,t)?t:e}function ge(e){var t=we(e),n=xe(e);Object.defineProperty(Xt.prototype,""+e,{enumerable:!1,configurable:!0,set:t,get:n})}function we(e){return function(t){var n=this.$mobx,r=n.values;if(e<r.length){V(n.atom);var o=r[e];if(ae(n)){var i=ue(n,{type:"update",object:n.array,index:e,newValue:t});if(!i)return;t=i.newValue}(t=n.enhancer(t,o))!==o&&(r[e]=t,n.notifyArrayChildUpdate(e,t,o))}else{if(e!==r.length)throw new Error("[mobx.array] Index out of bounds, "+e+" is larger than "+r.length);n.spliceWithArray(e,0,[t])}}}function xe(e){return function(){var t=this.$mobx;if(t){if(e<t.values.length)return t.atom.reportObserved(),t.values[e];console.warn("[mobx.array] Attempt to read an array index ("+e+") that is out of bounds ("+t.values.length+"). Please check length first. Out of bound indices will not be tracked by MobX")}}}function _e(e){for(var t=Wt;t<e;t++)ge(t);Wt=e}function Oe(e){return Ze(e)&&Ft(e.$mobx)}function Se(e,t){if(Le(e))return e.$mobx;Ye(Object.isExtensible(e),Ge("m035")),et(e)||(t=(e.constructor.name||"ObservableObject")+"@"+We()),t||(t="ObservableObject@"+We());var n=new tn(e,t);return it(e,"$mobx",n),n}function Ae(e,t,n,r){if(e.values[t])return Ye("value"in n,"The property "+t+" in "+e.name+" is already observable, cannot redefine it as computed property"),void(e.target[t]=n.value);if("value"in n)if(fe(n.value)){var o=n.value;je(e,t,o.initialValue,o.enhancer)}else i(n.value)&&!0===n.value.autoBind?a(e.target,t,n.value.originalFn):Pt(n.value)?Te(e,t,n.value):je(e,t,n.value,r);else Ie(e,t,n.get,n.set,!1,!0)}function je(e,t,n,r){if(st(e.target,t),ae(e)){var o=ue(e,{object:e.target,name:t,type:"add",newValue:n});if(!o)return;n=o.newValue}n=(e.values[t]=new sn(n,r,e.name+"."+t,!1)).value,Object.defineProperty(e.target,t,ke(t)),Re(e,e.target,t,n)}function Ie(e,t,n,r,o,i){i&&st(e.target,t),e.values[t]=new Lt(n,e.target,o,e.name+"."+t,r),i&&Object.defineProperty(e.target,t,Ee(t))}function Te(e,t,n){var r=e.name+"."+t;n.name=r,n.scope||(n.scope=e.target),e.values[t]=n,Object.defineProperty(e.target,t,Ee(t))}function ke(e){return nn[e]||(nn[e]={configurable:!0,enumerable:!0,get:function(){return this.$mobx.values[e].get()},set:function(t){De(this,e,t)}})}function Ee(e){return rn[e]||(rn[e]={configurable:!0,enumerable:!1,get:function(){return this.$mobx.values[e].get()},set:function(t){return this.$mobx.values[e].set(t)}})}function De(e,t,n){var r=e.$mobx,o=r.values[t];if(ae(r)){if(!(s=ue(r,{type:"update",object:e,name:t,newValue:n})))return;n=s.newValue}if((n=o.prepareNewValue(n))!==an){var i=ce(r),a=ne(),s=i||a?{type:"update",object:e,oldValue:o.value,name:t,newValue:n}:null;a&&oe(s),o.setNewValue(n),i&&pe(r,s),a&&ie()}}function Re(e,t,n,r){var o=ce(e),i=ne(),a=o||i?{type:"add",object:t,name:n,newValue:r}:null;i&&oe(a),o&&pe(e,a),i&&ie()}function Le(e){return!!Ze(e)&&(Be(e),on(e.$mobx))}function Ve(t,n){if("object"===(void 0===t?"undefined":e(t))&&null!==t){if(Oe(t))return Ye(void 0===n,Ge("m036")),t.$mobx.atom;if(en(t)){var r=t;if(void 0===n)return Ve(r._keys);var o=r._data[n]||r._hasMap[n];return Ye(!!o,"the entry '"+n+"' does not exist in the observable map '"+Ce(t)+"'"),o}if(Be(t),Le(t)){if(!n)return Je("please specify a property");var i=t.$mobx.values[n];return Ye(!!i,"no observable property '"+n+"' found on the observable object '"+Ce(t)+"'"),i}if(Rt(t)||Pt(t)||Ht(t))return t}else if("function"==typeof t&&Ht(t.$mobx))return t.$mobx;return Je("Cannot obtain atom from "+t)}function Pe(e,t){return Ye(e,"Expecting some object"),void 0!==t?Pe(Ve(e,t)):Rt(e)||Pt(e)||Ht(e)?e:en(e)?e:(Be(e),e.$mobx?e.$mobx:void Ye(!1,"Cannot obtain administration from "+e))}function Ce(e,t){return(void 0!==t?Ve(e,t):Le(e)||en(e)?Pe(e):Ve(e)).name}function Me(e,t,n,r,o){function i(i,a,s,u,c){if(void 0===c&&(c=0),Ye(o||Ne(arguments),"This function is a decorator, but it wasn't invoked like a decorator"),s){rt(i,"__mobxLazyInitializers")||ot(i,"__mobxLazyInitializers",i.__mobxLazyInitializers&&i.__mobxLazyInitializers.slice()||[]);var l=s.value,p=s.initializer;return i.__mobxLazyInitializers.push(function(t){e(t,a,p?p.call(t):l,u,s)}),{enumerable:r,configurable:!0,get:function(){return!0!==this.__mobxDidRunLazyInitializers&&Be(this),t.call(this,a)},set:function(e){!0!==this.__mobxDidRunLazyInitializers&&Be(this),n.call(this,a,e)}}}var f={enumerable:r,configurable:!0,get:function(){return this.__mobxInitializedProps&&!0===this.__mobxInitializedProps[a]||$e(this,a,void 0,e,u,s),t.call(this,a)},set:function(t){this.__mobxInitializedProps&&!0===this.__mobxInitializedProps[a]?n.call(this,a,t):$e(this,a,t,e,u,s)}};return(arguments.length<3||5===arguments.length&&c<3)&&Object.defineProperty(i,a,f),f}return o?function(){if(Ne(arguments))return i.apply(null,arguments);var e=arguments,t=arguments.length;return function(n,r,o){return i(n,r,o,e,t)}}:i}function $e(e,t,n,r,o,i){rt(e,"__mobxInitializedProps")||ot(e,"__mobxInitializedProps",{}),e.__mobxInitializedProps[t]=!0,r(e,t,n,o,i)}function Be(e){!0!==e.__mobxDidRunLazyInitializers&&e.__mobxLazyInitializers&&(ot(e,"__mobxDidRunLazyInitializers",!0),e.__mobxDidRunLazyInitializers&&e.__mobxLazyInitializers.forEach(function(t){return t(e)}))}function Ne(e){return(2===e.length||3===e.length)&&"string"==typeof e[1]}function Ue(){return"function"==typeof Symbol&&Symbol.iterator||"@@iterator"}function ze(e){Ye(!0!==e[cn],"Illegal state: cannot recycle array as iterator"),it(e,cn,!0);var t=-1;return it(e,"next",function(){return t++,{done:t>=this.length,value:t<this.length?this[t]:void 0}}),e}function He(e,t){it(e,Ue(),t)}function Ge(e){return ln[e]}function Ke(){return t}function We(){return++Bt.mobxGuid}function Je(e,t){throw Ye(!1,e,t),"X"}function Ye(e,t,n){if(!e)throw new Error("[mobx] Invariant failed: "+t+(n?" in '"+n+"'":""))}function Xe(e){return-1===fn.indexOf(e)&&(fn.push(e),console.error("[mobx] Deprecated: "+e),!0)}function qe(e){var t=!1;return function(){if(!t)return t=!0,e.apply(this,arguments)}}function Fe(e){var t=[];return e.forEach(function(e){-1===t.indexOf(e)&&t.push(e)}),t}function Qe(e,t,n){return void 0===t&&(t=100),void 0===n&&(n=" - "),e?e.slice(0,t).join(n)+(e.length>t?" (... and "+(e.length-t)+"more)":""):""}function Ze(t){return null!==t&&"object"===(void 0===t?"undefined":e(t))}function et(t){if(null===t||"object"!==(void 0===t?"undefined":e(t)))return!1;var n=Object.getPrototypeOf(t);return n===Object.prototype||null===n}function tt(){for(var e=arguments[0],t=1,n=arguments.length;t<n;t++){var r=arguments[t];for(var o in r)rt(r,o)&&(e[o]=r[o])}return e}function nt(e,t,n){return"number"==typeof t&&isNaN(t)?"number"!=typeof n||!isNaN(n):e?!ct(t,n):t!==n}function rt(e,t){return dn.call(e,t)}function ot(e,t,n){Object.defineProperty(e,t,{enumerable:!1,writable:!0,configurable:!0,value:n})}function it(e,t,n){Object.defineProperty(e,t,{enumerable:!1,writable:!1,configurable:!0,value:n})}function at(e,t){var n=Object.getOwnPropertyDescriptor(e,t);return!n||!1!==n.configurable&&!1!==n.writable}function st(e,t){Ye(at(e,t),"Cannot make property '"+t+"' observable, it is not configurable and writable in the target object")}function ut(e){var t=[];for(var n in e)t.push(n);return t}function ct(t,n){if(null===t&&null===n)return!0;if(void 0===t&&void 0===n)return!0;if("object"!==(void 0===t?"undefined":e(t)))return t===n;var r=pt(t),o=ft(t);if(r!==pt(n))return!1;if(o!==ft(n))return!1;if(r){if(t.length!==n.length)return!1;for(var i=t.length-1;i>=0;i--)if(!ct(t[i],n[i]))return!1;return!0}if(o){if(t.size!==n.size)return!1;var a=!0;return t.forEach(function(e,t){a=a&&ct(n.get(t),e)}),a}if("object"===(void 0===t?"undefined":e(t))&&"object"===(void 0===n?"undefined":e(n))){if(null===t||null===n)return!1;if(ft(t)&&ft(n))return t.size===n.size&&ct(kt.shallowMap(t).entries(),kt.shallowMap(n).entries());if(ut(t).length!==ut(n).length)return!1;for(var s in t){if(!(s in n))return!1;if(!ct(t[s],n[s]))return!1}return!0}return!1}function lt(e,t){var n="isMobX"+e;return t.prototype[n]=!0,function(e){return Ze(e)&&!0===e[n]}}function pt(e){return Array.isArray(e)||Oe(e)}function ft(e){return ht(e)||en(e)}function ht(e){return void 0!==Ke().Map&&e instanceof Ke().Map}function dt(){return"function"==typeof Symbol&&Symbol.toPrimitive||"@@toPrimitive"}function vt(t){return null===t?null:"object"===(void 0===t?"undefined":e(t))?""+t:t}var bt=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(r,"__esModule",{value:!0}),r.extras={allowStateChanges:function(e,t){var n,r=k(e);try{n=t()}finally{E(r)}return n},deepEqual:ct,getAtom:Ve,getDebugName:Ce,getDependencyTree:function(e,t){return h(Ve(e,t))},getAdministration:Pe,getGlobalState:function(){return Bt},getObserverTree:function(e,t){return d(Ve(e,t))},isComputingDerivation:L,isSpyEnabled:ne,onReactionError:function(e){return Bt.globalReactionErrorHandlers.push(e),function(){var t=Bt.globalReactionErrorHandlers.indexOf(e);t>=0&&Bt.globalReactionErrorHandlers.splice(t,1)}},resetGlobalState:function(){Bt.resetId++;var e=new $t;for(var t in e)-1===Mt.indexOf(t)&&(Bt[t]=e[t]);Bt.allowStateChanges=!Bt.strictMode},shareGlobalState:function(){var e=Ke(),t=Bt;if(e.__mobservableTrackingStack||e.__mobservableViewStack)throw new Error("[mobx] An incompatible version of mobservable is already loaded.");if(e.__mobxGlobal&&e.__mobxGlobal.version!==t.version)throw new Error("[mobx] An incompatible version of mobx is already loaded.");e.__mobxGlobal?Bt=e.__mobxGlobal:e.__mobxGlobal=t},spyReport:re,spyReportEnd:ie,spyReportStart:oe,setReactionScheduler:function(e){var t=zt;zt=function(n){return e(function(){return t(n)})}}},"object"===("undefined"==typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__?"undefined":e(__MOBX_DEVTOOLS_GLOBAL_HOOK__))&&__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx(n.exports),n.exports.default=n.exports;var mt=Me(function(e,t,n,r,o){var i=r&&1===r.length?r[0]:n.name||t||"<unnamed action>";ot(e,t,gt(i,n))},function(e){return this[e]},function(){Ye(!1,Ge("m001"))},!1,!0),yt=Me(function(e,t,n){a(e,t,n)},function(e){return this[e]},function(){Ye(!1,Ge("m001"))},!1,!1),gt=function(e,t,n,r){return 1===arguments.length&&"function"==typeof e?A(e.name||"<unnamed action>",e):2===arguments.length&&"function"==typeof t?A(e,t):1===arguments.length&&"string"==typeof e?o(e):o(t).apply(null,arguments)};r.action=gt,gt.bound=function(e,t,n){if("function"==typeof e){var r=A("<not yet bound action>",e);return r.autoBind=!0,r}return yt.apply(null,arguments)},r.runInAction=function(e,t,n){var r="string"==typeof e?e:e.name||"<unnamed action>",o="function"==typeof e?e:t,i="function"==typeof e?t:n;return Ye("function"==typeof o,Ge("m002")),Ye(0===o.length,Ge("m003")),Ye("string"==typeof r&&r.length>0,"actions should have valid names, got: '"+r+"'"),j(r,o,i,void 0)},r.isAction=i,r.autorun=s,r.when=function(e,t,n,r){var o,i,a,u;return"string"==typeof e?(o=e,i=t,a=n,u=r):(o="When@"+We(),i=e,a=t,u=n),s(o,function(e){if(i.call(u)){e.dispose();var t=B();a.call(u),N(t)}})},r.autorunAsync=function(e,t,n,r){function o(){s(p)}var a,s,u,c;"string"==typeof e?(a=e,s=t,u=n,c=r):(a=e.name||"AutorunAsync@"+We(),s=e,u=t,c=n),Ye(!1===i(s),Ge("m006")),void 0===u&&(u=1),c&&(s=s.bind(c));var l=!1,p=new Nt(a,function(){l||(l=!0,setTimeout(function(){l=!1,p.isDisposed||p.track(o)},u))});return p.schedule(),p.getDisposer()},r.reaction=function(t,n,r){function o(){if(!c.isDisposed){var e=!1;c.track(function(){var n=t(c);e=nt(i.compareStructural,a,n),a=n}),s&&i.fireImmediately&&n(a,c),s||!0!==e||n(a,c),s&&(s=!1)}}arguments.length>3&&Je(Ge("m007")),fe(t)&&Je(Ge("m008"));var i;(i="object"===(void 0===r?"undefined":e(r))?r:{}).name=i.name||t.name||n.name||"Reaction@"+We(),i.fireImmediately=!0===r||!0===i.fireImmediately,i.delay=i.delay||0,i.compareStructural=i.compareStructural||i.struct||!1,n=gt(i.name,i.context?n.bind(i.context):n),i.context&&(t=t.bind(i.context));var a,s=!0,u=!1,c=new Nt(i.name,function(){s||i.delay<1?o():u||(u=!0,setTimeout(function(){u=!1,o()},i.delay))});return c.schedule(),c.getDisposer()};var wt=u(!1),xt=u(!0),_t=function(t,n,r){if("string"==typeof n)return wt.apply(null,arguments);Ye("function"==typeof t,Ge("m011")),Ye(arguments.length<3,Ge("m012"));var o="object"===(void 0===n?"undefined":e(n))?n:{};return o.setter="function"==typeof n?n:o.setter,new Lt(t,o.context,o.compareStructural||o.struct||!1,o.name||t.name||"",o.setter)};r.computed=_t,_t.struct=xt,r.createTransformer=function(e,t){Ye("function"==typeof e&&e.length<2,"createTransformer expects a function that accepts one argument");var n={},r=Bt.resetId,o=function(r){function o(t,n){var o=r.call(this,function(){return e(n)},void 0,!1,"Transformer-"+e.name+"-"+t,void 0)||this;return o.sourceIdentifier=t,o.sourceObject=n,o}return bt(o,r),o.prototype.onBecomeUnobserved=function(){var e=this.value;r.prototype.onBecomeUnobserved.call(this),delete n[this.sourceIdentifier],t&&t(e,this.sourceObject)},o}(Lt);return function(e){r!==Bt.resetId&&(n={},r=Bt.resetId);var t=c(e),i=n[t];return i?i.get():(i=n[t]=new o(t,e)).get()}},r.expr=function(e,t){return L()||console.warn(Ge("m013")),_t(e,{context:t}).get()},r.extendObservable=l,r.extendShallowObservable=p,r.intercept=function(e,t,n){return"function"==typeof n?b(e,t,n):v(e,t)},r.isComputed=function(e,t){if(null===e||void 0===e)return!1;if(void 0!==t){if(!1===Le(e))return!1;var n=Ve(e,t);return Pt(n)}return Pt(e)},r.isObservable=m;var Ot=g(de),St=g(ve),At=g(be),jt=g(me),It=g(ye),Tt=function(){function e(){}return e.prototype.box=function(e,t){return arguments.length>2&&y("box"),new sn(e,de,t)},e.prototype.shallowBox=function(e,t){return arguments.length>2&&y("shallowBox"),new sn(e,be,t)},e.prototype.array=function(e,t){return arguments.length>2&&y("array"),new Xt(e,de,t)},e.prototype.shallowArray=function(e,t){return arguments.length>2&&y("shallowArray"),new Xt(e,be,t)},e.prototype.map=function(e,t){return arguments.length>2&&y("map"),new Zt(e,de,t)},e.prototype.shallowMap=function(e,t){return arguments.length>2&&y("shallowMap"),new Zt(e,be,t)},e.prototype.object=function(e,t){arguments.length>2&&y("object");var n={};return Se(n,t),l(n,e),n},e.prototype.shallowObject=function(e,t){arguments.length>2&&y("shallowObject");var n={};return Se(n,t),p(n,e),n},e.prototype.ref=function(){return arguments.length<2?he(be,arguments[0]):At.apply(null,arguments)},e.prototype.shallow=function(){return arguments.length<2?he(ve,arguments[0]):St.apply(null,arguments)},e.prototype.deep=function(){return arguments.length<2?he(de,arguments[0]):Ot.apply(null,arguments)},e.prototype.struct=function(){return arguments.length<2?he(me,arguments[0]):jt.apply(null,arguments)},e}();r.IObservableFactories=Tt;var kt=function(e){if(void 0===e&&(e=void 0),"string"==typeof arguments[1])return Ot.apply(null,arguments);if(Ye(arguments.length<=1,Ge("m021")),Ye(!fe(e),Ge("m020")),m(e))return e;var t=de(e,void 0,void 0);return t!==e?t:kt.box(e)};r.observable=kt,Object.keys(Tt.prototype).forEach(function(e){return kt[e]=Tt.prototype[e]}),kt.deep.struct=kt.struct,kt.ref.struct=function(){return arguments.length<2?he(ye,arguments[0]):It.apply(null,arguments)},r.observe=function(e,t,n,r){return"function"==typeof n?x(e,t,n,r):w(e,t,n)},r.toJS=_,r.transaction=function(e,t){return void 0===t&&(t=void 0),Xe(Ge("m023")),O.apply(void 0,arguments)},r.whyRun=function(e,t){switch(arguments.length){case 0:if(!(e=Bt.trackingDerivation))return S(Ge("m024"));break;case 2:e=Ve(e,t)}return e=Ve(e),Pt(e)?S(e.whyRun()):Ht(e)?S(e.whyRun()):Je(Ge("m025"))},r.useStrict=function(e){Ye(null===Bt.trackingDerivation,Ge("m028")),Bt.strictMode=e,Bt.allowStateChanges=!e},r.isStrictModeEnabled=function(){return Bt.strictMode};var Et=function(){function e(e){void 0===e&&(e="Atom@"+We()),this.name=e,this.isPendingUnobservation=!0,this.observers=[],this.observersIndexes={},this.diffValue=0,this.lastAccessedBy=0,this.lowestObserverState=Vt.NOT_TRACKING}return e.prototype.onBecomeUnobserved=function(){},e.prototype.reportObserved=function(){X(this)},e.prototype.reportChanged=function(){J(),q(this),Y()},e.prototype.toString=function(){return this.name},e}();r.BaseAtom=Et;var Dt=function(e){function t(t,n,r){void 0===t&&(t="Atom@"+We()),void 0===n&&(n=hn),void 0===r&&(r=hn);var o=e.call(this,t)||this;return o.name=t,o.onBecomeObservedHandler=n,o.onBecomeUnobservedHandler=r,o.isPendingUnobservation=!1,o.isBeingTracked=!1,o}return bt(t,e),t.prototype.reportObserved=function(){return J(),e.prototype.reportObserved.call(this),this.isBeingTracked||(this.isBeingTracked=!0,this.onBecomeObservedHandler()),Y(),!!Bt.trackingDerivation},t.prototype.onBecomeUnobserved=function(){this.isBeingTracked=!1,this.onBecomeUnobservedHandler()},t}(Et);r.Atom=Dt;var Rt=lt("Atom",Et),Lt=function(){function e(e,t,n,r,o){this.derivation=e,this.scope=t,this.compareStructural=n,this.dependenciesState=Vt.NOT_TRACKING,this.observing=[],this.newObserving=null,this.isPendingUnobservation=!1,this.observers=[],this.observersIndexes={},this.diffValue=0,this.runId=0,this.lastAccessedBy=0,this.lowestObserverState=Vt.UP_TO_DATE,this.unboundDepsCount=0,this.__mapid="#"+We(),this.value=void 0,this.isComputing=!1,this.isRunningSetter=!1,this.name=r||"ComputedValue@"+We(),o&&(this.setter=A(r+"-setter",o))}return e.prototype.onBecomeStale=function(){Q(this)},e.prototype.onBecomeUnobserved=function(){Ye(this.dependenciesState!==Vt.NOT_TRACKING,Ge("m029")),M(this),this.value=void 0},e.prototype.get=function(){Ye(!this.isComputing,"Cycle detected in computation "+this.name,this.derivation),0===Bt.inBatch?(J(),R(this)&&(this.value=this.computeValue(!1)),Y()):(X(this),R(this)&&this.trackAndCompute()&&F(this));var e=this.value;if(D(e))throw e.cause;return e},e.prototype.peek=function(){var e=this.computeValue(!1);if(D(e))throw e.cause;return e},e.prototype.set=function(e){if(this.setter){Ye(!this.isRunningSetter,"The setter of computed value '"+this.name+"' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"),this.isRunningSetter=!0;try{this.setter.call(this.scope,e)}finally{this.isRunningSetter=!1}}else Ye(!1,"[ComputedValue '"+this.name+"'] It is not possible to assign a new value to a computed value.")},e.prototype.trackAndCompute=function(){ne()&&re({object:this.scope,type:"compute",fn:this.derivation});var e=this.value,t=this.value=this.computeValue(!0);return D(t)||nt(this.compareStructural,t,e)},e.prototype.computeValue=function(e){this.isComputing=!0,Bt.computationDepth++;var t;if(e)t=P(this,this.derivation,this.scope);else try{t=this.derivation.call(this.scope)}catch(e){t=new Ct(e)}return Bt.computationDepth--,this.isComputing=!1,t},e.prototype.observe=function(e,t){var n=this,r=!0,o=void 0;return s(function(){var i=n.get();if(!r||t){var a=B();e({type:"update",object:n,newValue:i,oldValue:o}),N(a)}r=!1,o=i})},e.prototype.toJSON=function(){return this.get()},e.prototype.toString=function(){return this.name+"["+this.derivation.toString()+"]"},e.prototype.valueOf=function(){return vt(this.get())},e.prototype.whyRun=function(){var e=Boolean(Bt.trackingDerivation),t=Fe(this.isComputing?this.newObserving:this.observing).map(function(e){return e.name}),n=Fe(H(this).map(function(e){return e.name}));return"\nWhyRun? computation '"+this.name+"':\n * Running because: "+(e?"[active] the value of this computation is needed by a reaction":this.isComputing?"[get] The value of this computed was requested outside a reaction":"[idle] not running at the moment")+"\n"+(this.dependenciesState===Vt.NOT_TRACKING?Ge("m032"):" * This computation will re-run if any of the following observables changes:\n    "+Qe(t)+"\n    "+(this.isComputing&&e?" (... or any observable accessed during the remainder of the current run)":"")+"\n\t"+Ge("m038")+"\n\n  * If the outcome of this computation changes, the following observers will be re-run:\n    "+Qe(n)+"\n")},e}();Lt.prototype[dt()]=Lt.prototype.valueOf;var Vt,Pt=lt("ComputedValue",Lt);!function(e){e[e.NOT_TRACKING=-1]="NOT_TRACKING",e[e.UP_TO_DATE=0]="UP_TO_DATE",e[e.POSSIBLY_STALE=1]="POSSIBLY_STALE",e[e.STALE=2]="STALE"}(Vt||(Vt={})),r.IDerivationState=Vt;var Ct=function(){return function(e){this.cause=e}}();r.untracked=$;var Mt=["mobxGuid","resetId","spyListeners","strictMode","runId"],$t=function(){return function(){this.version=5,this.trackingDerivation=null,this.computationDepth=0,this.runId=0,this.mobxGuid=0,this.inBatch=0,this.pendingUnobservations=[],this.pendingReactions=[],this.isRunningReactions=!1,this.allowStateChanges=!0,this.strictMode=!1,this.resetId=0,this.spyListeners=[],this.globalReactionErrorHandlers=[]}}(),Bt=new $t,Nt=function(){function e(e,t){void 0===e&&(e="Reaction@"+We()),this.name=e,this.onInvalidate=t,this.observing=[],this.newObserving=[],this.dependenciesState=Vt.NOT_TRACKING,this.diffValue=0,this.runId=0,this.unboundDepsCount=0,this.__mapid="#"+We(),this.isDisposed=!1,this._isScheduled=!1,this._isTrackPending=!1,this._isRunning=!1}return e.prototype.onBecomeStale=function(){this.schedule()},e.prototype.schedule=function(){this._isScheduled||(this._isScheduled=!0,Bt.pendingReactions.push(this),ee())},e.prototype.isScheduled=function(){return this._isScheduled},e.prototype.runReaction=function(){this.isDisposed||(J(),this._isScheduled=!1,R(this)&&(this._isTrackPending=!0,this.onInvalidate(),this._isTrackPending&&ne()&&re({object:this,type:"scheduled-reaction"})),Y())},e.prototype.track=function(e){J();var t,n=ne();n&&(t=Date.now(),oe({object:this,type:"reaction",fn:e})),this._isRunning=!0;var r=P(this,e,void 0);this._isRunning=!1,this._isTrackPending=!1,this.isDisposed&&M(this),D(r)&&this.reportExceptionInDerivation(r.cause),n&&ie({time:Date.now()-t}),Y()},e.prototype.reportExceptionInDerivation=function(e){var t=this;if(this.errorHandler)this.errorHandler(e,this);else{var n="[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '"+this,r=Ge("m037");console.error(n||r,e),ne()&&re({type:"error",message:n,error:e,object:this}),Bt.globalReactionErrorHandlers.forEach(function(n){return n(e,t)})}},e.prototype.dispose=function(){this.isDisposed||(this.isDisposed=!0,this._isRunning||(J(),M(this),Y()))},e.prototype.getDisposer=function(){var e=this.dispose.bind(this);return e.$mobx=this,e.onError=Z,e},e.prototype.toString=function(){return"Reaction["+this.name+"]"},e.prototype.whyRun=function(){var e=Fe(this._isRunning?this.newObserving:this.observing).map(function(e){return e.name});return"\nWhyRun? reaction '"+this.name+"':\n * Status: ["+(this.isDisposed?"stopped":this._isRunning?"running":this.isScheduled()?"scheduled":"idle")+"]\n * This reaction will re-run if any of the following observables changes:\n    "+Qe(e)+"\n    "+(this._isRunning?" (... or any observable accessed during the remainder of the current run)":"")+"\n\t"+Ge("m038")+"\n"},e}();r.Reaction=Nt;var Ut=100,zt=function(e){return e()},Ht=lt("Reaction",Nt),Gt={spyReportEnd:!0};r.spy=function(e){return Bt.spyListeners.push(e),qe(function(){var t=Bt.spyListeners.indexOf(e);-1!==t&&Bt.spyListeners.splice(t,1)})},r.asReference=function(e){return Xe("asReference is deprecated, use observable.ref instead"),kt.ref(e)},r.asStructure=function(e){return Xe("asStructure is deprecated. Use observable.struct, computed.struct or reaction options instead."),kt.struct(e)},r.asFlat=function(e){return Xe("asFlat is deprecated, use observable.shallow instead"),kt.shallow(e)},r.asMap=function(e){return Xe("asMap is deprecated, use observable.map or observable.shallowMap instead"),kt.map(e||{})},r.isModifierDescriptor=fe;var Kt=function(){var e=!1,t={};return Object.defineProperty(t,"0",{set:function(){e=!0}}),Object.create(t)[0]=1,!1===e}(),Wt=0,Jt=function(){return function(){}}();Jt.prototype=[];var Yt=function(){function e(e,t,n,r){this.array=n,this.owned=r,this.lastKnownLength=0,this.interceptors=null,this.changeListeners=null,this.atom=new Et(e||"ObservableArray@"+We()),this.enhancer=function(n,r){return t(n,r,e+"[..]")}}return e.prototype.intercept=function(e){return se(this,e)},e.prototype.observe=function(e,t){return void 0===t&&(t=!1),t&&e({object:this.array,type:"splice",index:0,added:this.values.slice(),addedCount:this.values.length,removed:[],removedCount:0}),le(this,e)},e.prototype.getArrayLength=function(){return this.atom.reportObserved(),this.values.length},e.prototype.setArrayLength=function(e){if("number"!=typeof e||e<0)throw new Error("[mobx.array] Out of range: "+e);var t=this.values.length;if(e!==t)if(e>t){for(var n=new Array(e-t),r=0;r<e-t;r++)n[r]=void 0;this.spliceWithArray(t,0,n)}else this.spliceWithArray(e,t-e)},e.prototype.updateArrayLength=function(e,t){if(e!==this.lastKnownLength)throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");this.lastKnownLength+=t,t>0&&e+t+1>Wt&&_e(e+t+1)},e.prototype.spliceWithArray=function(e,t,n){var r=this;V(this.atom);var o=this.values.length;if(void 0===e?e=0:e>o?e=o:e<0&&(e=Math.max(0,o+e)),t=1===arguments.length?o-e:void 0===t||null===t?0:Math.max(0,Math.min(t,o-e)),void 0===n&&(n=[]),ae(this)){var i=ue(this,{object:this.array,type:"splice",index:e,removedCount:t,added:n});if(!i)return pn;t=i.removedCount,n=i.added}var a=(n=n.map(function(e){return r.enhancer(e,void 0)})).length-t;this.updateArrayLength(o,a);var s=this.spliceItemsIntoValues(e,t,n);return 0===t&&0===n.length||this.notifyArraySplice(e,n,s),s},e.prototype.spliceItemsIntoValues=function(e,t,n){if(n.length<1e4)return(o=this.values).splice.apply(o,[e,t].concat(n));var r=this.values.slice(e,e+t);return this.values=this.values.slice(0,e).concat(n,this.values.slice(e+t)),r;var o},e.prototype.notifyArrayChildUpdate=function(e,t,n){var r=!this.owned&&ne(),o=ce(this),i=o||r?{object:this.array,type:"update",index:e,newValue:t,oldValue:n}:null;r&&oe(i),this.atom.reportChanged(),o&&pe(this,i),r&&ie()},e.prototype.notifyArraySplice=function(e,t,n){var r=!this.owned&&ne(),o=ce(this),i=o||r?{object:this.array,type:"splice",index:e,removed:n,added:t,removedCount:n.length,addedCount:t.length}:null;r&&oe(i),this.atom.reportChanged(),o&&pe(this,i),r&&ie()},e}(),Xt=function(e){function t(t,n,r,o){void 0===r&&(r="ObservableArray@"+We()),void 0===o&&(o=!1);var i=e.call(this)||this,a=new Yt(r,n,i,o);return it(i,"$mobx",a),t&&t.length?(a.updateArrayLength(0,t.length),a.values=t.map(function(e){return n(e,void 0,r+"[..]")}),a.notifyArraySplice(0,a.values.slice(),pn)):a.values=[],Kt&&Object.defineProperty(a.array,"0",qt),i}return bt(t,e),t.prototype.intercept=function(e){return this.$mobx.intercept(e)},t.prototype.observe=function(e,t){return void 0===t&&(t=!1),this.$mobx.observe(e,t)},t.prototype.clear=function(){return this.splice(0)},t.prototype.concat=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this.$mobx.atom.reportObserved(),Array.prototype.concat.apply(this.peek(),e.map(function(e){return Oe(e)?e.peek():e}))},t.prototype.replace=function(e){return this.$mobx.spliceWithArray(0,this.$mobx.values.length,e)},t.prototype.toJS=function(){return this.slice()},t.prototype.toJSON=function(){return this.toJS()},t.prototype.peek=function(){return this.$mobx.values},t.prototype.find=function(e,t,n){void 0===n&&(n=0),this.$mobx.atom.reportObserved();for(var r=this.$mobx.values,o=r.length,i=n;i<o;i++)if(e.call(t,r[i],i,this))return r[i]},t.prototype.splice=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];switch(arguments.length){case 0:return[];case 1:return this.$mobx.spliceWithArray(e);case 2:return this.$mobx.spliceWithArray(e,t)}return this.$mobx.spliceWithArray(e,t,n)},t.prototype.spliceWithArray=function(e,t,n){return this.$mobx.spliceWithArray(e,t,n)},t.prototype.push=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=this.$mobx;return n.spliceWithArray(n.values.length,0,e),n.values.length},t.prototype.pop=function(){return this.splice(Math.max(this.$mobx.values.length-1,0),1)[0]},t.prototype.shift=function(){return this.splice(0,1)[0]},t.prototype.unshift=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=this.$mobx;return n.spliceWithArray(0,0,e),n.values.length},t.prototype.reverse=function(){this.$mobx.atom.reportObserved();var e=this.slice();return e.reverse.apply(e,arguments)},t.prototype.sort=function(e){this.$mobx.atom.reportObserved();var t=this.slice();return t.sort.apply(t,arguments)},t.prototype.remove=function(e){var t=this.$mobx.values.indexOf(e);return t>-1&&(this.splice(t,1),!0)},t.prototype.move=function(e,t){function n(e){if(e<0)throw new Error("[mobx.array] Index out of bounds: "+e+" is negative");var t=this.$mobx.values.length;if(e>=t)throw new Error("[mobx.array] Index out of bounds: "+e+" is not smaller than "+t)}if(n.call(this,e),n.call(this,t),e!==t){var r,o=this.$mobx.values;r=e<t?o.slice(0,e).concat(o.slice(e+1,t+1),[o[e]],o.slice(t+1)):o.slice(0,t).concat([o[e]],o.slice(t,e),o.slice(e+1)),this.replace(r)}},t.prototype.toString=function(){return this.$mobx.atom.reportObserved(),Array.prototype.toString.apply(this.$mobx.values,arguments)},t.prototype.toLocaleString=function(){return this.$mobx.atom.reportObserved(),Array.prototype.toLocaleString.apply(this.$mobx.values,arguments)},t}(Jt);He(Xt.prototype,function(){return ze(this.slice())}),function(e,t){for(var n=0;n<t.length;n++)ot(e,t[n],e[t[n]])}(Xt.prototype,["constructor","intercept","observe","clear","concat","replace","toJS","toJSON","peek","find","splice","spliceWithArray","push","pop","shift","unshift","reverse","sort","remove","move","toString","toLocaleString"]),Object.defineProperty(Xt.prototype,"length",{enumerable:!1,configurable:!0,get:function(){return this.$mobx.getArrayLength()},set:function(e){this.$mobx.setArrayLength(e)}}),["every","filter","forEach","indexOf","join","lastIndexOf","map","reduce","reduceRight","slice","some"].forEach(function(e){var t=Array.prototype[e];Ye("function"==typeof t,"Base function not defined on Array prototype: '"+e+"'"),ot(Xt.prototype,e,function(){return this.$mobx.atom.reportObserved(),t.apply(this.$mobx.values,arguments)})});var qt={configurable:!0,enumerable:!1,set:we(0),get:xe(0)};_e(1e3);var Ft=lt("ObservableArrayAdministration",Yt);r.isObservableArray=Oe;var Qt={},Zt=function(){function e(e,t,n){void 0===t&&(t=de),void 0===n&&(n="ObservableMap@"+We()),this.enhancer=t,this.name=n,this.$mobx=Qt,this._data={},this._hasMap={},this._keys=new Xt(void 0,be,this.name+".keys()",!0),this.interceptors=null,this.changeListeners=null,this.merge(e)}return e.prototype._has=function(e){return void 0!==this._data[e]},e.prototype.has=function(e){return!!this.isValidKey(e)&&(e=""+e,this._hasMap[e]?this._hasMap[e].get():this._updateHasMapEntry(e,!1).get())},e.prototype.set=function(e,t){this.assertValidKey(e),e=""+e;var n=this._has(e);if(ae(this)){var r=ue(this,{type:n?"update":"add",object:this,newValue:t,name:e});if(!r)return this;t=r.newValue}return n?this._updateValue(e,t):this._addValue(e,t),this},e.prototype.delete=function(e){var t=this;if(this.assertValidKey(e),e=""+e,ae(this)&&!(o=ue(this,{type:"delete",object:this,name:e})))return!1;if(this._has(e)){var n=ne(),r=ce(this),o=r||n?{type:"delete",object:this,oldValue:this._data[e].value,name:e}:null;return n&&oe(o),O(function(){t._keys.remove(e),t._updateHasMapEntry(e,!1),t._data[e].setNewValue(void 0),t._data[e]=void 0}),r&&pe(this,o),n&&ie(),!0}return!1},e.prototype._updateHasMapEntry=function(e,t){var n=this._hasMap[e];return n?n.setNewValue(t):n=this._hasMap[e]=new sn(t,be,this.name+"."+e+"?",!1),n},e.prototype._updateValue=function(e,t){var n=this._data[e];if((t=n.prepareNewValue(t))!==an){var r=ne(),o=ce(this),i=o||r?{type:"update",object:this,oldValue:n.value,name:e,newValue:t}:null;r&&oe(i),n.setNewValue(t),o&&pe(this,i),r&&ie()}},e.prototype._addValue=function(e,t){var n=this;O(function(){var r=n._data[e]=new sn(t,n.enhancer,n.name+"."+e,!1);t=r.value,n._updateHasMapEntry(e,!0),n._keys.push(e)});var r=ne(),o=ce(this),i=o||r?{type:"add",object:this,name:e,newValue:t}:null;r&&oe(i),o&&pe(this,i),r&&ie()},e.prototype.get=function(e){if(e=""+e,this.has(e))return this._data[e].get()},e.prototype.keys=function(){return ze(this._keys.slice())},e.prototype.values=function(){return ze(this._keys.map(this.get,this))},e.prototype.entries=function(){var e=this;return ze(this._keys.map(function(t){return[t,e.get(t)]}))},e.prototype.forEach=function(e,t){var n=this;this.keys().forEach(function(r){return e.call(t,n.get(r),r,n)})},e.prototype.merge=function(e){var t=this;return en(e)&&(e=e.toJS()),O(function(){et(e)?Object.keys(e).forEach(function(n){return t.set(n,e[n])}):Array.isArray(e)?e.forEach(function(e){var n=e[0],r=e[1];return t.set(n,r)}):ht(e)?e.forEach(function(e,n){return t.set(n,e)}):null!==e&&void 0!==e&&Je("Cannot initialize map from "+e)}),this},e.prototype.clear=function(){var e=this;O(function(){$(function(){e.keys().forEach(e.delete,e)})})},e.prototype.replace=function(e){var t=this;return O(function(){t.clear(),t.merge(e)}),this},Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.toJS=function(){var e=this,t={};return this.keys().forEach(function(n){return t[n]=e.get(n)}),t},e.prototype.toJSON=function(){return this.toJS()},e.prototype.isValidKey=function(e){return null!==e&&void 0!==e&&("string"==typeof e||"number"==typeof e||"boolean"==typeof e)},e.prototype.assertValidKey=function(e){if(!this.isValidKey(e))throw new Error("[mobx.map] Invalid key: '"+e+"', only strings, numbers and booleans are accepted as key in observable maps.")},e.prototype.toString=function(){var e=this;return this.name+"[{ "+this.keys().map(function(t){return t+": "+e.get(t)}).join(", ")+" }]"},e.prototype.observe=function(e,t){return Ye(!0!==t,Ge("m033")),le(this,e)},e.prototype.intercept=function(e){return se(this,e)},e}();r.ObservableMap=Zt,He(Zt.prototype,function(){return this.entries()}),r.map=function(e){return Xe("`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead"),kt.map(e)};var en=lt("ObservableMap",Zt);r.isObservableMap=en;var tn=function(){function e(e,t){this.target=e,this.name=t,this.values={},this.changeListeners=null,this.interceptors=null}return e.prototype.observe=function(e,t){return Ye(!0!==t,"`observe` doesn't support the fire immediately property for observable objects."),le(this,e)},e.prototype.intercept=function(e){return se(this,e)},e}(),nn={},rn={},on=lt("ObservableObjectAdministration",tn);r.isObservableObject=Le;var an={},sn=function(e){function t(t,n,r,o){void 0===r&&(r="ObservableValue@"+We()),void 0===o&&(o=!0);var i=e.call(this,r)||this;return i.enhancer=n,i.hasUnreportedChange=!1,i.value=n(t,void 0,r),o&&ne()&&re({type:"create",object:i,newValue:i.value}),i}return bt(t,e),t.prototype.set=function(e){var t=this.value;if((e=this.prepareNewValue(e))!==an){var n=ne();n&&oe({type:"update",object:this,newValue:e,oldValue:t}),this.setNewValue(e),n&&ie()}},t.prototype.prepareNewValue=function(e){if(V(this),ae(this)){var t=ue(this,{object:this,type:"update",newValue:e});if(!t)return an;e=t.newValue}return e=this.enhancer(e,this.value,this.name),this.value!==e?e:an},t.prototype.setNewValue=function(e){var t=this.value;this.value=e,this.reportChanged(),ce(this)&&pe(this,{type:"update",object:this,newValue:e,oldValue:t})},t.prototype.get=function(){return this.reportObserved(),this.value},t.prototype.intercept=function(e){return se(this,e)},t.prototype.observe=function(e,t){return t&&e({object:this,type:"update",newValue:this.value,oldValue:void 0}),le(this,e)},t.prototype.toJSON=function(){return this.get()},t.prototype.toString=function(){return this.name+"["+this.value+"]"},t.prototype.valueOf=function(){return vt(this.get())},t}(Et);sn.prototype[dt()]=sn.prototype.valueOf;var un=lt("ObservableValue",sn);r.isBoxedObservable=un;var cn="__$$iterating",ln={m001:"It is not allowed to assign new values to @action fields",m002:"`runInAction` expects a function",m003:"`runInAction` expects a function without arguments",m004:"autorun expects a function",m005:"Warning: attempted to pass an action to autorun. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",m006:"Warning: attempted to pass an action to autorunAsync. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",m007:"reaction only accepts 2 or 3 arguments. If migrating from MobX 2, please provide an options object",m008:"wrapping reaction expression in `asReference` is no longer supported, use options object instead",m009:"@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'. It looks like it was used on a property.",m010:"@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'",m011:"First argument to `computed` should be an expression. If using computed as decorator, don't pass it arguments",m012:"computed takes one or two arguments if used as function",m013:"[mobx.expr] 'expr' should only be used inside other reactive functions.",m014:"extendObservable expected 2 or more arguments",m015:"extendObservable expects an object as first argument",m016:"extendObservable should not be used on maps, use map.merge instead",m017:"all arguments of extendObservable should be objects",m018:"extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540",m019:"[mobx.isObservable] isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.",m020:"modifiers can only be used for individual object properties",m021:"observable expects zero or one arguments",m022:"@observable can not be used on getters, use @computed instead",m023:"Using `transaction` is deprecated, use `runInAction` or `(@)action` instead.",m024:"whyRun() can only be used if a derivation is active, or by passing an computed value / reaction explicitly. If you invoked whyRun from inside a computation; the computation is currently suspended but re-evaluating because somebody requested its value.",m025:"whyRun can only be used on reactions and computed values",m026:"`action` can only be invoked on functions",m028:"It is not allowed to set `useStrict` when a derivation is running",m029:"INTERNAL ERROR only onBecomeUnobserved shouldn't be called twice in a row",m030a:"Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: ",m030b:"Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ",m031:"Computed values are not allowed to not cause side effects by changing observables that are already being observed. Tried to modify: ",m032:"* This computation is suspended (not in use by any reaction) and won't run automatically.\n\tDidn't expect this computation to be suspended at this point?\n\t  1. Make sure this computation is used by a reaction (reaction, autorun, observer).\n\t  2. Check whether you are using this computation synchronously (in the same stack as they reaction that needs it).",m033:"`observe` doesn't support the fire immediately property for observable maps.",m034:"`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead",m035:"Cannot make the designated object observable; it is not extensible",m036:"It is not possible to get index atoms from arrays",m037:'Hi there! I\'m sorry you have just run into an exception.\nIf your debugger ends up here, know that some reaction (like the render() of an observer component, autorun or reaction)\nthrew an exception and that mobx caught it, to avoid that it brings the rest of your application down.\nThe original cause of the exception (the code that caused this reaction to run (again)), is still in the stack.\n\nHowever, more interesting is the actual stack trace of the error itself.\nHopefully the error is an instanceof Error, because in that case you can inspect the original stack of the error from where it was thrown.\nSee `error.stack` property, or press the very subtle "(...)" link you see near the console.error message that probably brought you here.\nThat stack is more interesting than the stack of this console.error itself.\n\nIf the exception you see is an exception you created yourself, make sure to use `throw new Error("Oops")` instead of `throw "Oops"`,\nbecause the javascript environment will only preserve the original stack trace in the first form.\n\nYou can also make sure the debugger pauses the next time this very same exception is thrown by enabling "Pause on caught exception".\n(Note that it might pause on many other, unrelated exception as well).\n\nIf that all doesn\'t help you out, feel free to open an issue https://github.com/mobxjs/mobx/issues!\n',m038:"Missing items in this list?\n    1. Check whether all used values are properly marked as observable (use isObservable to verify)\n    2. Make sure you didn't dereference values too early. MobX observes props, not primitives. E.g: use 'person.name' instead of 'name' in your computation.\n"},pn=[];Object.freeze(pn);var fn=[],hn=function(){},dn=Object.prototype.hasOwnProperty;r.isArrayLike=pt}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)}); 
 			}); 
		define("libs/wechat-weapp-mobx/observer.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},t=require("./mobx"),e=t.autorun,o=(t.observable,t.action,t.isObservable),n=t.isObservableArray,i=t.isObservableObject,u=t.isObservableValue,a=t.isObservableMap,f=function(r,t){Object.getOwnPropertyNames(t).forEach(function(e){if("$mobx"!==e){var o=Object.getOwnPropertyDescriptor(t,e);!o||o.enumerable||o.writable||(r[e]=l(t[e]))}})},l=function t(e,l,s){function b(r){return l&&s.push([e,r]),r}if(void 0===l&&(l=!0),void 0===s&&(s=[]),o(e)){if(l&&null===s&&(s=[]),l&&null!==e&&"object"===(void 0===e?"undefined":r(e)))for(var c=0,p=s.length;c<p;c++)if(s[c][0]===e)return s[c][1];if(n(e)){var v=b([]),y=e.map(function(r){return t(r,l,s)});v.length=y.length;for(var c=0,p=y.length;c<p;c++)v[c]=y[c];return v}if(i(e)){v=b({});for(var d in e)v[d]=t(e[d],l,s);return f(v,e),v}if(a(e)){var h=b({});return e.forEach(function(r,e){return h[e]=t(r,l,s)}),h}if(u(e))return t(e.get(),l,s)}if("[object Array]"===Object.prototype.toString.call(e))return e.map(function(r){return t(r)});if(null!==e&&"object"===(void 0===e?"undefined":r(e))){v={};for(var d in e)v[d]=t(e[d]);return v}return e};module.exports={observer:function(r){var o=r.onLoad,n=r.onUnload;return r._update=function(){var r=this.props||{};this.setData({props:l(r)})},r.onLoad=function(){var r=this;r.props=t.observable(r.props),r._autorun=e(function(){r._update()}),o&&o.apply(this,arguments)},r.onUnload=function(){this._autorun(),n&&n.apply(this,arguments)},r},toJSWithGetter:l,version:"0.1.3"}; 
 			}); 
		define("store/homeStore.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../libs/wechat-weapp-mobx/mobx").extendObservable,e=require("../utils/http.js"),a=require("../configs/EvnConst.js"),l=require("../configs/ApiConst.js"),o=(require("../common/data.js"),a.default.apiHost);module.exports=function(){t(this,{wallpaperData:{list:[],total:0,more:!0,pageNo:1},wallpaperDataColum:{list:[],total:0,more:!0,pageNo:1},wallpaperDataDetail:{list:[],total:0,more:!0,pageNo:1},wallpaperCategory:{list:[],total:0},currentType:{id:1,name:"cateName"},cur_type:!1,wallpaperStat:{newImgCnt:0,totalDownloadCnt:0},shareTiles:["这么好看的壁纸，一定适合好看的你","来这里，你想要的我都有","好看的皮囊千篇一律，有趣的灵魂百里挑一","海量超清壁纸，给你一双发现美的眼睛","每天一碗毒鸡汤，满满的正能量","拔剑吧少年，新世界在召唤","百万超清壁纸，还原每一帧的精彩"],getWallpapperList:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log("cur_type",this.cur_type),console.log("lvCateId",this.currentType.id);var r=a.pageNo,n=void 0===r?this.wallpaperData.pageNo:r,i=a.pageSize,p=void 0===i?30:i,s=a.idChange;return wx.showLoading({title:"",mask:!0}),this.cur_type&&!a.pageNo&&(n=this.wallpaperDataColum.pageNo),new Promise(function(a,r){e.get(o+l.default.LV1_CATEGORY,{lvCateId:t.currentType.id,pageNo:n,pageSize:p}).then(function(e){wx.hideLoading(),e.list.length>0&&(t.cur_type?t.wallpaperDataColum=1===n?{list:e.list,total:e.total,more:e.more,pageNo:n+1}:{list:t.wallpaperDataColum.list.concat(e.list),total:e.total,more:e.more,pageNo:n+1}:t.wallpaperData=1===n?{list:e.list,total:e.total,more:e.more,pageNo:n+1}:{list:t.wallpaperData.list.concat(e.list),total:e.total,more:e.more,pageNo:n+1},s&&(t.wallpaperData=1===n?{list:e.list,total:e.total,more:e.more,pageNo:n+1}:{list:t.wallpaperData.list.concat(e.list),total:e.total,more:e.more,pageNo:n+1})),a()})})},getWallpaperCategory:function(){var t=this;return arguments.length>0&&void 0!==arguments[0]&&arguments[0],new Promise(function(a,r){e.get(o+l.default.LV1_lIST).then(function(e){t.wallpaperCategory={list:e,total:e.length},a()})})},getStat:function(){var t=this;e.get(o+l.default.WALLPAPERS_STAT,{lvCateId:this.currentType.id}).then(function(e){t.wallpaperStat={newImgCnt:e.newImgCnt,totalDownloadCnt:e.totalDownloadCnt}})},setCurrentType:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=(e.type,e.index),l=void 0===a?0:a;return new Promise(function(e,a){var o=t.wallpaperCategory.list[l];o.id==t.currentType.id&&(t.currentType=t.wallpaperCategory.list[l]),o.id!==t.currentType.id&&(t.currentType=t.wallpaperCategory.list[l],t.getWallpapperList({pageNo:1,idChange:!0}),t.getStat(),e({status:0,message:"success"})),e({status:1,message:"success"})})},setCurrentType2:function(t){this.cur_type=t},getSize:function(t){return new Promise(function(a,r){e.get(o+l.default.WALLPAPERS_SIZE+"?imgUrl="+t).then(function(t){a(t)})})},downLoadSuccess:function(t){var a=this;e.post(o+l.default.WALLPAPERS_DOWNLOAD,{wpId:t}).then(function(t){console.log("result",t),a.wallpaperStat={totalDownloadCnt:a.wallpaperStat.totalDownloadCnt-0+1,newImgCnt:a.wallpaperStat.newImgCnt}})}})}; 
 			}); 
		define("store/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../libs/wechat-weapp-mobx/mobx").extendObservable,r=require("./homeStore");module.exports=new function(){e(this,{homeStore:new r})}; 
 			}); 
		define("utils/http.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,n){for(var r=/\$\{(.+?)\}/.exec(e);r;)void 0!==n[r[1]]&&(e=e.replace(/\$\{(.+?)\}/,n[r[1]]),delete n[r[1]]),r=/\$\{(.+?)\}/.exec(e);return{url:/^http:\/\//.test(e)?e:t.domain.debug+e,params:n}}function n(e){return e?Object.keys(e).sort().map(function(n){var t=e[n];return Array.isArray(t)?t.sort().map(function(e){return encodeURIComponent(n)+"="+encodeURIComponent(e)}).join("&"):encodeURIComponent(n)+"="+encodeURIComponent(t)}).join("&"):""}var t={domain:{debug:"",release:""}},r={Accept:"*/*","Content-Type":"application/json;charset=UTF-8"};module.exports={setHeader:function(e){Object.assign(r,e)},get:function(t){var o=e(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),a=n(o.params);return o.url=o.url+(""==a?"":"?"+a),console.log("发送get请求[%s]",o.url),new Promise(function(e,n){wx.request({url:o.url,header:r,success:function(n){e(n.data)},fail:function(e){n(e)}})})},post:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments[2],a={};Object.assign(a,r,o);var u=e(n,t);return new Promise(function(e,n){wx.request({url:u.url,method:"POST",header:a,data:u.params,success:function(n){e(n.data)},fail:function(e){n(e)}})})},uploadFile:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments[2],a={};Object.assign(a,r,o);var u=e(n,t);return console.log("发送uploadFile请求[%s]",u.url),new Promise(function(e,n){wx.uploadFile({url:u.url,filePath:u.params.avterFile,header:a,name:"avterFile",success:function(n){e(n.data)},fail:function(e){n(e)}})})}}; 
 			}); 
		define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=function(t){return(t=t.toString())[1]?t:"0"+t};module.exports={formatTime:function(e){var n=e.getFullYear(),r=e.getMonth()+1,o=e.getDate(),u=e.getHours(),i=e.getMinutes(),a=e.getSeconds();return[n,r,o].map(t).join("/")+" "+[u,i,a].map(t).join(":")}}; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},e=require("./libs/wechat-weapp-mobx/observer").observer;require("./utils/http.js");App(e({props:{homeStore:require("./store/index.js").homeStore},onLaunch:function(){var e=this.props.homeStore,a=this;e.getWallpapperList(),e.getWallpaperCategory().then(function(){e.setCurrentType(),e.getStat()});wx.getSystemInfo({success:function(e){var r=e.statusBarHeight,o=68;-1!==e.model.indexOf("iPhone X")?o=88:-1!==e.model.indexOf("iPhone")&&(o=64);var s=o-r;a.globalData=Object.assign({},a.globalData,t({statusBarHeight:r,navgationHeight:s},e))},fail:function(t){console.log("err-----------------------",t),a.globalData=Object.assign({},a.globalData,{statusBarHeight:0,navgationHeight:0})}})},userData:{loading:!0},globalData:{}})); 
 			}); 	require("app.js");
 		__wxRoute = 'components/category-item/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/category-item/index.js';	define("components/category-item/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";getApp();Component({properties:{data:{type:Object,value:{},observer:function(t,e,a){}}},data:{},attached:function(){},methods:{}}); 
 			}); 	require("components/category-item/index.js");
 		__wxRoute = 'components/category/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/category/index.js';	define("components/category/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";getApp();Component({properties:{data:{type:Object,value:{}},show:{type:Boolean,value:!1}},data:{},attached:function(){},methods:{_onItemTap:function(t){console.log(t);var e=t.currentTarget.dataset,a=e.type,o=void 0===a?"":a,n=e.index,p=void 0===n?0:n,r=e.onlyavatar;this.triggerEvent("onItemTap",{type:o,index:p,onlyavatar:r})}}}); 
 			}); 	require("components/category/index.js");
 		__wxRoute = 'components/header/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/header/index.js';	define("components/header/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Component({properties:{title:{type:String,value:"",observer:function(t,e,a){}},showBack:{type:Boolean,value:!0},backgroundColor:{type:String,value:""},left:{type:Object,value:null},type:{type:Number,value:0},leftIcon:{type:String,value:"../../images/back.png"},titleIcon:{type:String,value:null},titleIconR:{type:Boolean,value:!1},showLeft:{type:Boolean,value:!0}},data:{statusBarHeight:0,navgationHeight:0},created:function(){},attached:function(){var e=t.globalData,a=e.statusBarHeight,n=void 0===a?0:a,i=e.navgationHeight,o=void 0===i?0:i;this.setData({statusBarHeight:n,navgationHeight:o})},methods:{_goBack:function(){wx.navigateBack({delta:1})},_leftIconTap:function(){this.triggerEvent("onLeftTap")},_titleTap:function(){this.triggerEvent("onTitleTap")}}}); 
 			}); 	require("components/header/index.js");
 		__wxRoute = 'components/load-more/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/load-more/index.js';	define("components/load-more/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";getApp();Component({properties:{loadStatus:{type:String,value:""}},data:{},attached:function(){},methods:{}}); 
 			}); 	require("components/load-more/index.js");
 		__wxRoute = 'components/page/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/page/index.js';	define("components/page/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Component({data:{statusBarHeight:0,navgationHeight:0},attached:function(){var a=t.globalData,i=a.statusBarHeight,e=void 0===i?0:i,g=a.navgationHeight,s=void 0===g?0:g;this.setData({statusBarHeight:e,navgationHeight:s})},methods:{}}); 
 			}); 	require("components/page/index.js");
 		__wxRoute = 'components/poster-canvas/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/poster-canvas/index.js';	define("components/poster-canvas/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},e=getApp(),a=parseFloat((e.globalData.windowWidth/375).toFixed(2));Component({properties:{posterData:{type:Object,value:{}},height:{type:Number,value:1e3}},data:{posterContext:null,canvasHeight:0,canvasWidth:0},ready:function(){var e=this.data.posterData,a=void 0===e?{}:e,i=this,o=wx.createSelectorQuery(),n=wx.createCanvasContext("poater-canvas",this);this.data.posterContext=n,o.in(this),o.select("#poater-canvas-con").boundingClientRect(function(e){var o=e&&e.width?e.width:0,s=e&&e.height?e.height:0;i.data.canvasWidth=o,i.data.canvasHeight=s,wx.getImageInfo({src:a.imageUrl?a.imageUrl:"",success:function(e){var a=e.width,r=e.height,h=0,l=0,c=a/r;c>=o/s?(r=s,h=((a=c*s)-o)/2):(a=o,l=((r=o/c)-s)/2),i.generatePoster(n,t({image:{path:e.path,width:a,height:r,dx:h,dy:l}},i.data.posterData))}})}).exec()},methods:{generatePoster:function(t,e){t.drawImage(e.image.path,-e.image.dx,-e.image.dy,e.image.width,e.image.height),this.drawDate(t),t.draw()},drawDate:function(t){var e=(new Date).toDateString().split(" "),i=(this.data.canvasWidth,this.data.canvasHeight,parseInt(48*a)),o=1.2*i,n=parseInt(64*a),s=16*a;t.font="normal bold "+i+"px/"+o+" Roboto-Bold",console.log(e),t.setTextAlign("left"),t.setFillStyle("#FFF"),t.fillText(e[2],s,n);var r=parseInt(18*a),h=1.2*r,l=16*a+this.getTextWidth(t,e[2]);t.font="normal normal "+r+"px/"+h+" Roboto",t.fillText(e[1],l,n);var c=l+this.getTextWidth(t,e[1]),d=n+10*a;t.setLineWidth(1),t.setStrokeStyle("#FFF"),t.moveTo(s,d),t.lineTo(s+c,d),t.stroke();var g=parseInt(12*a),p=r,f=94*a;t.font="normal normal "+g+"px/"+p+" Roboto",t.fillText(e[0],s,f);var v=s+7*a+this.getTextWidth(t,e[0]);t.fillText("/",v,f);parseInt(12*a);var w=v+7*a+this.getTextWidth(t,"/");t.font="normal normal "+g+"px/"+p+" Roboto",t.fillText(e[3],w,f)},getTextWidth:function(t,e){var a=t.measureText(e).width;return console.log(a),a},_tapDownload:function(t){wx.canvasToTempFilePath({canvasId:"poater-canvas",x:0,y:0,width:this.data.canvasWidth,height:this.data.canvasHeight,success:function(t){console.log("tempFilePath",t);var e=t.tempFilePath;wx.showLoading({title:"正在下载...",mask:!0}),wx.getImageInfo({src:e,success:function(t){wx.saveImageToPhotosAlbum({filePath:t.path,success:function(t){wx.showToast({title:"下载完成"})},fail:function(t){wx.showToast({title:"下载失败",image:"../../images/download_fail_white.png"})}})},fail:function(t){wx.showToast({title:"下载失败",image:"../../images/download_fail_white.png"})}})},fail:function(t){console.log("err-----------",t)}},this)}}}); 
 			}); 	require("components/poster-canvas/index.js");
 		__wxRoute = 'components/touch-container/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/touch-container/index.js';	define("components/touch-container/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";getApp();Component({properties:{swipeVelocity:{type:Number,value:1500},swipeThreshold:{type:Number,value:30},doubletapVelocity:{type:Number,value:500}},data:{touched:!1,startTime:0,startAngle:0,startScale:0,startTouch:null,tapCount:0,startTabTime:0,startPosition:{}},attached:function(){},methods:{start:function(t){var a=t.touches;this.data.touched=!0,this.data.startTouch||(this.data.startTime=Date.now(),this.data.startTouch=a[0]),this.data.startPosition=this.getPosition(a),a.length>1&&(this.data.startAngle=this.getAngle(a[0],a[1]),this.data.startScale=this.getDistance(a[0],a[1]))},move:function(t){var a=void 0,e=void 0;this.data.touched&&(a=t.touches,e=this.getPosition(a),t.deltaX=e.x-this.data.startPosition.x,t.deltaY=e.y-this.data.startPosition.y,a.length>1&&(t.angle=this.data.startAngle-this.getAngle(a[0],a[1]),events.rotate.call(context,t),t.scale=this.getDistance(a[0],a[1])/this.data.startScale))},end:function(t){if(this.data.touched){if(!this.data.swipeVelocity||Date.now()-this.data.startTime<=this.data.swipeVelocity){var a=t.changedTouches[0],e=a.clientX-this.data.startTouch.clientX,i=a.clientY-this.data.startTouch.clientY,s=Math.abs(e),n=Math.abs(i);(s>=this.data.swipeThreshold||n>=this.data.swipeThreshold)&&(t.direction=s>n?e>0?"right":"left":i>0?"down":"up",this.triggerEvent("onSwipe",t))}0==t.touches.length?(this.data.touched=!1,this.data.startTouch=null):this.data.startPosition=this.getPosition(t.touches)}},cancel:function(t){this.end(t)},tap:function(t){var a=Date.now();this.data.tapCount>0&&a-this.data.startTabTime<=this.data.doubletapVelocity?this.data.tapCount=-1:this.data.tapCount=0,this.data.startTabTime=a,this.data.tapCount++},getAngle:function(t,a){return 180/Math.PI*Math.atan2(a.clientX-t.clientX,a.clientY-t.clientY)},getDistance:function(t,a){return Math.sqrt(Math.pow(t.clientX-a.clientX,2)+Math.pow(t.clientY-a.clientY,2))},getPosition:function(t){for(var a=0,e=0,i=t.length,s=i;s--;)a+=t[s].clientX,e+=t[s].clientY;return{x:a/i,y:e/i}}}}); 
 			}); 	require("components/touch-container/index.js");
 		__wxRoute = 'pages/home/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/home/index.js';	define("pages/home/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../libs/wechat-weapp-mobx/observer").observer;Page(e({props:{homeStore:require("../../store/index.js").homeStore},data:{currentIndex:0,showCategory:!1,showUpDialog:!1,bigSize:0,smallSize:0},onLoad:function(e){},onUnload:function(){},onImageChange:function(e){var a=e.detail.current,t=void 0===a?0:a;this.props.homeStore;this.data.currentIndex=t,this.setData({currentIndex:t})},onAnimationfinish:function(e){var a=this.props.homeStore,t=this.data.currentIndex,s=a.wallpaperData;s.more&&s.list.length-t==1&&a.getWallpapperList()},tabImage:function(e){var a=e.currentTarget.dataset.currentIndex,t=void 0===a?"":a;wx.navigateTo({url:"../detail/index?currentIndex="+t})},_onLeftTap:function(e){var a=this.props.homeStore;console.log("_leftIconTap---------",e),a.setCurrentType2(1),a.getWallpapperList({pageNo:1}),wx.navigateTo({url:"../home-column/index"})},_onTitleTap:function(e){console.log("_titleTap---------",e),this.setData({showCategory:!this.data.showCategory})},_onCayegoryChange:function(e){var a=this,t=this.props.homeStore,s=e.detail,r=(s.type,s.index),o=void 0===r?0:r,i=s.onlyavatar;i&&(t.setCurrentType2(1),wx.navigateTo({url:"../home-column/index"})),t.setCurrentType({index:o,onlyavatar:i}).then(function(e){console.log("res",e),0===e.status?a.setData({currentIndex:0,showCategory:!1}):a.setData({showCategory:!1})})},onShareAppMessage:function(){var e="",a="../../images/on-share.png",t=this.props.homeStore;switch(console.log("currentType",t.currentType.id),t.currentType.id){case 1:e=t.shareTiles[3],a="../../images/shareImgs/select.jpeg";break;case 2:e=t.shareTiles[1],a="../../images/shareImgs/fuzhai.jpeg";break;case 10:e=t.shareTiles[2],a="../../images/shareImgs/jutu.jpeg";break;case 6:e=t.shareTiles[4],a="../../images/shareImgs/jitang.jpeg";break;case 4:e=t.shareTiles[5],a="../../images/shareImgs/game.jpeg";break;case 5:e=t.shareTiles[6];break;case 7:e=t.shareTiles[0],a="../../images/shareImgs/avter.jpeg";break;case 9:e=t.shareTiles[0],a="../../images/shareImgs/animate.jpeg";break;case 3:e=t.shareTiles[0],a="../../images/shareImgs/aidou.jpeg";break;default:e=t.shareTiles[0],a=""}return{title:e,imageUrl:a,path:"/pages/home/index"}},_upImgs:function(e){var a=this,t=this.props.homeStore,s=this.data.currentIndex,r=t.wallpaperData.list[s].imgUrl+"?imageMogr2/thumbnail/640x";t.getSize(r).then(function(e){var r=e.size;a.setData({bigSize:Math.floor((t.wallpaperData.list[s].imgSize-0)/1048576*100)/100,smallSize:Math.floor(r/1048576*100)/100,showUpDialog:!a.data.showUpDialog})})},_tapDownload:function(e){var a=e.currentTarget.dataset.index,t=this.props.homeStore,s=this.data.currentIndex,r=void 0===s?0:s,o="";o=1==a?t.wallpaperData.list[r].imgUrl:t.wallpaperData.list[r].imgUrl+"?imageMogr2/thumbnail/640x";var i=t.wallpaperData.list[r].id;console.log("wpId-----------",i),wx.showLoading({title:"正在下载...",mask:!0}),wx.getImageInfo({src:o,success:function(e){console.log("res-----------",e),wx.saveImageToPhotosAlbum({filePath:e.path,success:function(e){t.downLoadSuccess(i),wx.showToast({title:"下载完成"})},fail:function(e){wx.showToast({title:"下载失败",image:"../../images/download_fail_white.png"})}})},fail:function(e){console.log("err-----------",e),wx.showToast({title:"下载失败",image:"../../images/download_fail_white.png"})}})},_redirectH5:function(){wx.navigateTo({url:"../h5-page/index"})}})); 
 			}); 	require("pages/home/index.js");
 		__wxRoute = 'pages/detail/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/detail/index.js';	define("pages/detail/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../libs/wechat-weapp-mobx/observer").observer;getApp();Page(t({props:{homeStore:require("../../store/index.js").homeStore},data:{showAction:!0,currentIndex:null,imageUrl:"",showPoster:!1,posterData:{},bigSize:0,smallSize:0},onLoad:function(t){var e=this,a=this.props.homeStore,o=t.currentIndex,r=void 0===o?0:o,i=a.wallpaperData;a.cur_type&&(i=a.wallpaperDataColum);var s=i.list[parseInt(r)].imgUrl+"?imageMogr2/thumbnail/640x";a.getSize(s).then(function(t){var a=t.size;e.setData({currentIndex:parseInt(r),bigSize:Math.floor((i.list[parseInt(r)].imgSize-0)/1048576*100)/100,smallSize:Math.floor(a/1048576*100)/100})})},onUnload:function(){},onImageChange:function(t){var e=this,a=t.detail.current,o=void 0===a?0:a,r=this.props.homeStore;this.data.currentIndex=o;var i=r.wallpaperData;r.cur_type&&(i=r.wallpaperDataColum);var s=i.list[o].imgUrl+"?imageMogr2/thumbnail/640x";r.getSize(s).then(function(t){var a=t.size;e.setData({smallSize:Math.floor(a/1048576*100)/100})}),this.setData({currentIndex:o,bigSize:Math.floor((i.list[o].imgSize-0)/1048576*100)/100})},onAnimationfinish:function(t){var e=this.props.homeStore,a=this.data.currentIndex,o=e.wallpaperData;e.cur_type&&(o=e.wallpaperDataColum),o.more&&o.list.length-a==1&&(wx.showLoading({title:"",mask:!0}),e.getWallpapperList())},_tapDownload:function(t){var e=t.currentTarget.dataset.index;console.log(e);var a=this.props.homeStore,o=this.data.currentIndex,r=void 0===o?0:o,i="",s=a.wallpaperData;a.cur_type&&(s=a.wallpaperDataColum),i=1==e?s.list[r].imgUrl:s.list[r].imgUrl+"?imageMogr2/thumbnail/640x";var l=s.list[r].id;console.log("_tapDownload-----------",i),wx.showLoading({title:"正在下载...",mask:!0}),wx.getImageInfo({src:i,success:function(t){console.log("res-----------",t),wx.saveImageToPhotosAlbum({filePath:t.path,success:function(t){wx.showToast({title:"下载完成"}),a.downLoadSuccess(l)},fail:function(t){wx.showToast({title:"下载失败",image:"../../images/download_fail_white.png"})}})},fail:function(t){console.log("err-----------",t),wx.showToast({title:"下载失败",image:"../../images/download_fail_white.png"})}})},_tapPoster:function(t){var e=this.props.homeStore,a=this.data.currentIndex,o=void 0===a?0:a,r=e.wallpaperData.list[o].url,i=e.wallpaperData.list[o].text?"currentIndex"+o:"this is text";this.data.posterData={imageUrl:r,text:i},this.setData({posterData:this.data.posterData,showPoster:!0})},_cancelPoster:function(t){this.setData({showPoster:!1})},_tapPreview:function(t){var e=this.props.homeStore,a=this.data.currentIndex,o=void 0===a?0:a,r=e.wallpaperData;e.cur_type&&(r=e.wallpaperDataColum);var i=r.list[o].url;console.log("url----------------",i),wx.previewImage({urls:[i]})},_onSwipe:function(t){console.log(t);var e=t.detail.direction;e&&"down"===e&&wx.navigateBack({delt:1})},onShareAppMessage:function(){return{title:this.props.homeStore.shareTiles[0],imageUrl:"../../images/on-share.png",path:"/pages/home/index"}},parseSize:function(t){return Math.ceil(100)+""}})); 
 			}); 	require("pages/detail/index.js");
 		__wxRoute = 'pages/category/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/category/index.js';	define("pages/category/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../libs/wechat-weapp-mobx/observer").observer;Page(e({props:{homeStore:require("../../store/index.js").homeStore},data:{pageNo:1,pageSize:10},onShareAppMessage:function(){return{title:"neets高清壁纸",imageUrl:"../../images/on-share.png"}},onLoad:function(e){this.props.homeStore},onUnload:function(){},_loadMoreWallPaper:function(e){},_changeCategory:function(e){var o=this.props.homeStore,t=e.currentTarget.dataset,n=(t.type,t.index),a=void 0===n?0:n;console.log("type-------------",a),o.setCurrentType({index:a}).then(function(){wx.navigateBack({delta:1})})},_onTitleTap:function(e){console.log("_titleTap---------",e),wx.navigateBack({delt:1})}})); 
 			}); 	require("pages/category/index.js");
 		__wxRoute = 'pages/home-column/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/home-column/index.js';	define("pages/home-column/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../libs/wechat-weapp-mobx/observer").observer;Page(e({props:{homeStore:require("../../store/index.js").homeStore},data:{loadStatus:"loading",currentIndex:0,showCategory:!1},onShareAppMessage:function(){var e="",a="../../images/on-share.png",s=this.props.homeStore;switch(console.log("currentType",s.currentType.id),s.currentType.id){case 1:e=s.shareTiles[3],a="../../images/shareImgs/select.jpeg";break;case 2:e=s.shareTiles[1],a="../../images/shareImgs/fuzhai.jpeg";break;case 10:e=s.shareTiles[2],a="../../images/shareImgs/jutu.jpeg";break;case 6:e=s.shareTiles[4],a="../../images/shareImgs/jitang.jpeg";break;case 4:e=s.shareTiles[5],a="../../images/shareImgs/game.jpeg";break;case 5:e=s.shareTiles[6];break;case 7:e=s.shareTiles[0],a="../../images/shareImgs/avter.jpeg";break;case 9:e=s.shareTiles[0],a="../../images/shareImgs/animate.jpeg";break;case 3:e=s.shareTiles[0],a="../../images/shareImgs/aidou.jpeg";break;default:e=s.shareTiles[0],a=""}return{title:e,imageUrl:a,path:"/pages/home/index"}},onLoad:function(e){},onUnload:function(){},_loadMoreWallPaper:function(e){console.log("chu fa");var a=this.props.homeStore;console.log("_loadMoreWallPaper-------------",e),a.wallpaperDataColum.more&&a.getWallpapperList()},tabImageItem:function(e){console.log(e);var a=e.currentTarget.dataset.currentIndex,s=void 0===a?"":a;wx.navigateTo({url:"../detail/index?currentIndex="+s})},_onLeftTap:function(e){console.log("_leftIconTap---------",e);var a=this.props.homeStore;console.log("_leftIconTap---------",e),a.setCurrentType2(0),wx.navigateBack({delt:1})},_onTitleTap:function(e){console.log("_titleTap---------",e),console.log("_titleTap---------",e),this.setData({showCategory:!this.data.showCategory})},_onCayegoryChange:function(e){var a=this,s=this.props.homeStore,r=e.detail,o=(r.type,r.index),t=void 0===o?0:o;s.setCurrentType({index:t}).then(function(e){console.log("res",e),e.status,a.setData({showCategory:!1})})}})); 
 			}); 	require("pages/home-column/index.js");
 		__wxRoute = 'pages/h5-page/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/h5-page/index.js';	define("pages/h5-page/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../libs/wechat-weapp-mobx/observer").observer;getApp();Page(e({props:{homeStore:require("../../store/index.js").homeStore},data:{nullHouse:!1},onLoad:function(e){},onUnload:function(){},copylink:function(e){wx.setClipboardData({data:"https://neets.cc/jdd-download/?id=jdd/recovery_release"}),this.setData({nullHouse:!1})},showPop:function(){this.setData({nullHouse:!0})},outbank:function(){this.setData({nullHouse:!1})}})); 
 			}); 	require("pages/h5-page/index.js");
 	