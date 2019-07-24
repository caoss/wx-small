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
Z([3,'program'])
Z([3,'goProduct'])
Z([3,'drli'])
Z([[7],[3,'item']])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'sloganimg']],[[2,'!='],[[6],[[7],[3,'item']],[3,'sloganimg']],[1,'']]])
Z([3,'program1'])
Z([[6],[[7],[3,'item']],[3,'appid']])
Z([3,'AdCount'])
Z(z[2])
Z(z[6])
Z(z[3])
Z([3,''])
Z([3,'navigate'])
Z(z[11])
Z([3,'miniProgram'])
Z([3,'release'])
Z(z[4])
Z([3,'game'])
Z([3,'public'])
Z([3,'donation'])
Z([3,'redpack'])
Z([3,'ad'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'name']],[1,'about_applet']])
Z([3,'loading'])
Z([3,'hint'])
Z([3,'navigation'])
Z([3,'yinyu_fuli_hint'])
Z([[6],[[7],[3,'yinyu_fuli_hint']],[3,'showZhezhao']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'dzClickad'])
Z([a,[3,'dz-wrap '],[[7],[3,'cssloading']]])
Z([[6],[[7],[3,'queryData']],[3,'logo']])
Z([[6],[[7],[3,'queryData']],[3,'adsign']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showBottomAd']])
Z([3,'drlist'])
Z([[7],[3,'dsts']])
Z([[7],[3,'naviToMiniProgramVisible']])
Z([[8],'item',[[7],[3,'item']]])
Z([[6],[[7],[3,'item']],[3,'cat']])
Z([[2,'!'],[[7],[3,'naviToMiniProgramVisible']]])
Z(z[4])
Z([[2,'+'],[[6],[[7],[3,'item']],[3,'cat']],[1,'1']])
Z([3,'dz115c18963f01d34'])
Z([[8],'yinyu_fuli_hint',[[7],[3,'yinyu_fuli_hint']]])
Z([3,'yinyu_fuli_hint'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'body'])
Z([[2,'!'],[[7],[3,'showGifGenerateSucc']]])
Z([[8],'loadingData',[[7],[3,'loadingData']]])
Z([3,'loading'])
Z([[2,'&&'],[[7],[3,'showGifGenerateSucc']],[[7],[3,'showSaveHint']]])
Z([[8],'hintData',[[7],[3,'hintData']]])
Z([3,'hint'])
Z([[8],'yinyu_fuli_hint',[[7],[3,'yinyu_fuli_hint']]])
Z([3,'yinyu_fuli_hint'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'view']],[3,'footShow']])
Z([3,'cattap'])
Z([3,'foot'])
Z([[6],[[7],[3,'view']],[3,'rollShow']])
Z([[6],[[7],[3,'view']],[3,'fluoreShow']])
Z(z[0])
Z([[8],'yinyu_fuli_hint',[[7],[3,'yinyu_fuli_hint']]])
Z([3,'yinyu_fuli_hint'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'supportCanvas']]])
Z([[7],[3,'showMakeFailDialog']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'idx'])
Z([[7],[3,'arry']])
Z([3,'btnanniu'])
Z([a,[3,'list list_'],[[7],[3,'idx']],[3,' '],[[6],[[7],[3,'item']],[3,'name']],[3,' '],[[2,'?:'],[[2,'=='],[[7],[3,'list_on']],[[7],[3,'idx']]],[1,'on'],[1,'']],[3,' ']])
Z(z[3][2])
Z([[6],[[7],[3,'item']],[3,'text']])
Z([[6],[[7],[3,'item']],[3,'img']])
Z(z[0])
Z([[7],[3,'banner_array']])
Z([[2,'>'],[[7],[3,'idx']],[1,0]])
Z([3,'list_box'])
Z([[7],[3,'naviToMiniProgramVisible']])
Z([[2,'!'],[[7],[3,'naviToMiniProgramVisible']]])
Z([[8],'yinyu_fuli_hint',[[7],[3,'yinyu_fuli_hint']]])
Z([3,'yinyu_fuli_hint'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./common/wxml/join.wxml','./common/wxml/template.wxml','./pages/components/dzad/index.wxml','./pages/drainage/drainage.wxml','/common/wxml/template.wxml','/common/wxml/join.wxml','./pages/gif/gif.wxml','../../common/wxml/template.wxml','./pages/index/index.wxml','./pages/particle/particle.wxml','./pages/styleList/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
d_[x[1]]["program"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':program'
r.wxVkey=b
gg.f=$gdc(f_["./common/wxml/template.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['bindtap',1,'class',1,'data-key',2],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,4,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["program1"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':program1'
r.wxVkey=b
gg.f=$gdc(f_["./common/wxml/template.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_mz(z,'navigator',['appId',6,'bindtap',1,'class',2,'data-appid',3,'data-key',4,'extraData',5,'openType',6,'path',7,'target',8,'version',9],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,16,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["game"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':game'
r.wxVkey=b
gg.f=$gdc(f_["./common/wxml/template.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["public"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':public'
r.wxVkey=b
gg.f=$gdc(f_["./common/wxml/template.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["donation"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':donation'
r.wxVkey=b
gg.f=$gdc(f_["./common/wxml/template.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["redpack"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':redpack'
r.wxVkey=b
gg.f=$gdc(f_["./common/wxml/template.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["ad"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':ad'
r.wxVkey=b
gg.f=$gdc(f_["./common/wxml/template.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,22,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["loading"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':loading'
r.wxVkey=b
gg.f=$gdc(f_["./common/wxml/template.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["hint"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':hint'
r.wxVkey=b
gg.f=$gdc(f_["./common/wxml/template.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["navigation"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':navigation'
r.wxVkey=b
gg.f=$gdc(f_["./common/wxml/template.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["yinyu_fuli_hint"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':yinyu_fuli_hint'
r.wxVkey=b
gg.f=$gdc(f_["./common/wxml/template.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,27,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oD=_mz(z,'view',['bindtap',0,'class',1],[],e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,2,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(oD,cF)
if(_oz(z,3,e,s,gg)){cF.wxVkey=1
}
fE.wxXCkey=1
cF.wxXCkey=1
_(r,oD)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var oH=e_[x[3]].i
var cI=e_[x[3]].j
var oJ=_v()
_(r,oJ)
if(_oz(z,0,e,s,gg)){oJ.wxVkey=1
}
var lK=_n('view')
_rz(z,lK,'class',1,e,s,gg)
var aL=_v()
_(lK,aL)
var tM=function(bO,eN,oP,gg){
var oR=_v()
_(oP,oR)
if(_oz(z,3,bO,eN,gg)){oR.wxVkey=1
var cT=_v()
_(oR,cT)
var hU=_oz(z,5,bO,eN,gg)
var oV=_gd(x[3],hU,e_,d_)
if(oV){
var cW=_1z(z,4,bO,eN,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[3],28,20)
}
var fS=_v()
_(oP,fS)
if(_oz(z,6,bO,eN,gg)){fS.wxVkey=1
var oX=_v()
_(fS,oX)
var lY=_oz(z,8,bO,eN,gg)
var aZ=_gd(x[3],lY,e_,d_)
if(aZ){
var t1=_1z(z,7,bO,eN,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[3],29,20)
}
oR.wxXCkey=1
fS.wxXCkey=1
return oP
}
aL.wxXCkey=2
_2z(z,2,tM,e,s,gg,aL,'item','index','')
var e2=_n('dzad')
_rz(z,e2,'aid',9,e,s,gg)
_(lK,e2)
_(r,lK)
_ai(oH,x[4],e_,x[3],37,4)
_ic(x[5],e_,x[3],e,s,r,gg);
var b3=_v()
_(r,b3)
var o4=_oz(z,11,e,s,gg)
var x5=_gd(x[3],o4,e_,d_)
if(x5){
var o6=_1z(z,10,e,s,gg) || {}
var cur_globalf=gg.f
b3.wxXCkey=3
x5(o6,o6,b3,gg)
gg.f=cur_globalf
}
else _w(o4,x[3],42,14)
oJ.wxXCkey=1
oH.pop()
cI.pop()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[x[4]],ic:[x[5]]}
d_[x[6]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var c8=e_[x[6]].i
_ai(c8,x[7],e_,x[6],1,1)
var h9=_n('view')
_rz(z,h9,'class',0,e,s,gg)
var o0=_v()
_(h9,o0)
if(_oz(z,1,e,s,gg)){o0.wxVkey=1
var oBB=_v()
_(o0,oBB)
var lCB=_oz(z,3,e,s,gg)
var aDB=_gd(x[6],lCB,e_,d_)
if(aDB){
var tEB=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oBB.wxXCkey=3
aDB(tEB,tEB,oBB,gg)
gg.f=cur_globalf
}
else _w(lCB,x[6],8,18)
}
var cAB=_v()
_(h9,cAB)
if(_oz(z,4,e,s,gg)){cAB.wxVkey=1
var eFB=_v()
_(cAB,eFB)
var bGB=_oz(z,6,e,s,gg)
var oHB=_gd(x[6],bGB,e_,d_)
if(oHB){
var xIB=_1z(z,5,e,s,gg) || {}
var cur_globalf=gg.f
eFB.wxXCkey=3
oHB(xIB,xIB,eFB,gg)
gg.f=cur_globalf
}
else _w(bGB,x[6],29,18)
}
o0.wxXCkey=1
cAB.wxXCkey=1
_(r,h9)
_ai(c8,x[4],e_,x[6],33,2)
var oJB=_v()
_(r,oJB)
var fKB=_oz(z,8,e,s,gg)
var cLB=_gd(x[6],fKB,e_,d_)
if(cLB){
var hMB=_1z(z,7,e,s,gg) || {}
var cur_globalf=gg.f
oJB.wxXCkey=3
cLB(hMB,hMB,oJB,gg)
gg.f=cur_globalf
}
else _w(fKB,x[6],34,14)
c8.pop()
c8.pop()
return r
}
e_[x[6]]={f:m4,j:[],i:[],ti:[x[7],x[4]],ic:[]}
d_[x[8]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var cOB=e_[x[8]].i
var oPB=_v()
_(r,oPB)
if(_oz(z,0,e,s,gg)){oPB.wxVkey=1
var aRB=_mz(z,'view',['cattap',1,'class',1],[],e,s,gg)
var tSB=_v()
_(aRB,tSB)
if(_oz(z,3,e,s,gg)){tSB.wxVkey=1
}
var eTB=_v()
_(aRB,eTB)
if(_oz(z,4,e,s,gg)){eTB.wxVkey=1
}
tSB.wxXCkey=1
eTB.wxXCkey=1
_(oPB,aRB)
}
var lQB=_v()
_(r,lQB)
if(_oz(z,5,e,s,gg)){lQB.wxVkey=1
}
_ai(cOB,x[4],e_,x[8],164,2)
var bUB=_v()
_(r,bUB)
var oVB=_oz(z,7,e,s,gg)
var xWB=_gd(x[8],oVB,e_,d_)
if(xWB){
var oXB=_1z(z,6,e,s,gg) || {}
var cur_globalf=gg.f
bUB.wxXCkey=3
xWB(oXB,oXB,bUB,gg)
gg.f=cur_globalf
}
else _w(oVB,x[8],165,14)
oPB.wxXCkey=1
lQB.wxXCkey=1
cOB.pop()
return r
}
e_[x[8]]={f:m5,j:[],i:[],ti:[x[4]],ic:[]}
d_[x[9]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var cZB=_v()
_(r,cZB)
if(_oz(z,0,e,s,gg)){cZB.wxVkey=1
}
var h1B=_v()
_(r,h1B)
if(_oz(z,1,e,s,gg)){h1B.wxVkey=1
}
cZB.wxXCkey=1
h1B.wxXCkey=1
return r
}
e_[x[9]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var c3B=e_[x[10]].i
var o4B=_v()
_(r,o4B)
var l5B=function(t7B,a6B,e8B,gg){
var o0B=_mz(z,'view',['bindtap',2,'class',1,'id',2],[],t7B,a6B,gg)
var xAC=_v()
_(o0B,xAC)
if(_oz(z,5,t7B,a6B,gg)){xAC.wxVkey=1
}
var oBC=_v()
_(o0B,oBC)
if(_oz(z,6,t7B,a6B,gg)){oBC.wxVkey=1
}
xAC.wxXCkey=1
oBC.wxXCkey=1
_(e8B,o0B)
return e8B
}
o4B.wxXCkey=2
_2z(z,1,l5B,e,s,gg,o4B,'item','idx','')
var fCC=_v()
_(r,fCC)
var cDC=function(oFC,hEC,cGC,gg){
var lIC=_v()
_(cGC,lIC)
if(_oz(z,9,oFC,hEC,gg)){lIC.wxVkey=1
var aJC=_n('view')
_rz(z,aJC,'class',10,oFC,hEC,gg)
var tKC=_v()
_(aJC,tKC)
if(_oz(z,11,oFC,hEC,gg)){tKC.wxVkey=1
}
var eLC=_v()
_(aJC,eLC)
if(_oz(z,12,oFC,hEC,gg)){eLC.wxVkey=1
}
tKC.wxXCkey=1
eLC.wxXCkey=1
_(lIC,aJC)
}
lIC.wxXCkey=1
return cGC
}
fCC.wxXCkey=2
_2z(z,8,cDC,e,s,gg,fCC,'item','idx','')
_ai(c3B,x[4],e_,x[10],56,2)
var bMC=_v()
_(r,bMC)
var oNC=_oz(z,14,e,s,gg)
var xOC=_gd(x[10],oNC,e_,d_)
if(xOC){
var oPC=_1z(z,13,e,s,gg) || {}
var cur_globalf=gg.f
bMC.wxXCkey=3
xOC(oPC,oPC,bMC,gg)
gg.f=cur_globalf
}
else _w(oNC,x[10],57,14)
c3B.pop()
return r
}
e_[x[10]]={f:m7,j:[],i:[],ti:[x[4]],ic:[]}
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
	__wxAppCode__['pages/components/dzad/index.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['pages/components/dzad/index.wxml'] = $gwx( './pages/components/dzad/index.wxml' );
		__wxAppCode__['pages/drainage/drainage.json'] = {"navigationBarTitleText":"相关小程序","backgroundColor":"#ececec","navigationStyle":"default","usingComponents":{"dzad":"../components/dzad/index"}};
		__wxAppCode__['pages/drainage/drainage.wxml'] = $gwx( './pages/drainage/drainage.wxml' );
	
	define("config/ServerConfig.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e="https://shenjiaokj.com/scdm_v2/api/",r="https://shenjiaokj.com/sjkj_api/api/",t={getUUID:"getUserUuid",getToken:"getUserToken",makeGif:"makeBarrageGif",addBarrage:"addBarrage",shareBarrage:"updateBarrageShareCount",getBarrage:"getBarrageInfo",getBarrageId:"getBarrageId",updateUserFormId:"updateUserFormId",updateBarrage:"updateBarrageInfo"},a={sourceRecord:"sourceRecordV2"};module.exports={getUrl:function(r){return e+t[r]},getStaticsUrl:function(e){return r+a[e]},getAppId:function(){return"wx68c7dd3634272f71"},getSecretToken:function(){return"az4ZpQ7km18xy3dhvQ5JrpMgROiHdwMo"},getApiSecret:function(){return"yjr38tuj1d0pzi8ctr1nsc663h0byeed"},getVersion:function(){return"v1.5.19"}}; 
 			}); 
		define("server/BarrageData.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e={};e.view={vtxt:"大",ftArray:["小","中","大","特大","超大"],flArray:["小","中","大"],fkey:2,category:0,iscal:1,isFont:!1,isfCol:!1,isrCol:!1,isSpeed:!1,isSet:!1,rollShow:!0,fluoreShow:!1,footShow:!0},e.roll={defaultTxt:"手持弹幕 可行走的弹幕",txt:"手持弹幕 可行走的弹幕",temptxt:"",st:"",focus:!1,fz:170,fArray:["130","150","170","200","230"],fkey:2,setfz:!1,col:"#ffffff",cArray:["#ffffff","#B1B1B1","#000000","#FF2F2F","#FFB130","#FFF219","#A3EF00","#00EC1D","#27FDA0","#00AFFF","#3D35FF","#8B29FF","#E400AA","#FF0083","#FF9898"],ckey:0,bgcol:"#000000",bgcArray:["#000000","#ffffff","#7F7F7F","#FC9797","#EC6363","#DF83FF","#C92EFF","#6D81C5","#4C73FF","#2C1178","#99CF9C","#81D7C1","#D2DAAA","#D2E566","#FECA31"],bgckey:0,sArray:[.5,1,2],sTxtArray:["慢","正常","快"],skey:1,spTxt:"正常",move:0,time:0,moveLen:0,moveTime:0,speedbase:.36,setmoveTime:10},e.fluore={ckey:0,fkey:0,fz:110,inpkey:2,tLen:3,cArray:["#FF1177","#228DFF","#B6FF00","#FF9900","#BA01FF"],fArray:["110","140","170"],aArray:["red","blue","yellow","greed","orange"],defaultTxt:"我❤️黄家驹",fluoreData:[{index:1,ckey:0,animat:"red1",anicol:"#fff",col:"#FF1177",show:!0,edit:!0,txt:"我",shtxt:"我"},{index:2,ckey:0,animat:"red2",anicol:"#fff",col:"#FF1177",show:!0,edit:!0,txt:"❤️",shtxt:"❤️"},{index:3,ckey:0,animat:"red3",anicol:"#fff",col:"#FF1177",show:!0,edit:!0,txt:"黄",shtxt:"黄"},{index:4,ckey:0,animat:"red2",anicol:"#fff",col:"#FF1177",show:!0,edit:!0,txt:"家",shtxt:"家"},{index:5,ckey:0,animat:"red3",anicol:"#fff",col:"#FF1177",show:!0,edit:!0,txt:"驹",shtxt:"驹"}]},e.scene={roll:1002,sroll:1e3,fluore:1003,sfluore:1001},e.shCpat=["给你霸道的打call，不看就滑走了","点开有惊喜，手机坏了别怪我哟","一起来打call","呀，打开之后黑屏了！","演唱会专用手持弹幕，拿去不谢","接车接机专用手持弹幕，拿去不谢","据说90%的人都不知道微信这个功能，快看看吧"],module.exports={getInfo:function(t){return e[t]||""}}; 
 			}); 
		define("server/BarrageInfo.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../utils/CommonHelper.js"),a=require("../utils/JsonHelper.js"),e=require("../utils/base64.modified.js"),i={NORMAL:"0",FLUORE:"1",PARTICLE:"2"};module.exports={BarrageInfo:function(s,o){this.type=s,this.data=o,this.id="",this.defStyleData,this.getType=function(){return this.type},this.setType=function(t){this.type=t},this.setData=function(t){this.data=t},this.setId=function(t){this.id=t},this.getId=function(){return this.id},this.getText=function(){if(!t.isEmpty(this.data)){if(this.type==i.NORMAL)return this.data.txt;for(var a="",e=0;e<this.data.fluoreData.length;e++)a+=this.data.fluoreData[e].txt;return a}return null},this.setText=function(a){t.isNull(this.data)||(this.data.txt=a)},this.getBgColor=function(){return t.isEmpty(this.data)?"#000000":this.data.bgcol},this.setBgColor=function(a){t.isNull(this.data)||(this.data.bgcol=a,this.data.bgckey=t.indexOf(this.data.bgcArray,this.data.bgcol,this.data.bgckey))},this.getFontSpeed=function(){return t.isEmpty(this.data)?"1":this.data.skey},this.setFontSpeed=function(a){t.isNull(this.data)||(this.data.skey=a,this.data.spTxt=this.data.sTxtArray[this.data.skey])},this.getFontColor=function(){return t.isEmpty(this.data)?"#ffffff":this.data.col},this.setFontColor=function(a){t.isNull(this.data)||(this.data.col=a,this.data.ckey=t.indexOf(this.data.cArray,this.data.col,this.data.ckey))},this.getFontSize=function(){return t.isEmpty(this.data)?170:this.data.fz},this.setFontSize=function(a){t.isNull(this.data)||t.isEmpty(a)||(this.data.fz=parseInt(a),this.data.fkey=t.indexOf(this.data.fArray,""+this.data.fz,this.data.fkey))},this.getStyleJson=function(){var t=null;if(this.type==i.NORMAL)t={font_size:this.getFontSize(),font_color:this.getFontColor(),font_speed:""+this.getFontSpeed(),bg_color:this.getBgColor()};else{t={fkey:this.data.fkey,fluoreDatas:[]};for(var e=0;e<this.data.fluoreData.length;e++){var s=this.data.fluoreData[e];t.fluoreDatas.push({index:s.index,txt:s.txt,ckey:s.ckey,bShow:s.show,bEdit:s.edit})}}var o=a.jsonToString(t);return console.log(o),o},this.updateByJsonData=function(s){this.setId(s.id);var o=a.stringToJson(e.decode(s.style_json));if(this.type==i.NORMAL)this.setText(e.decode(s.text)),t.isNull(o)||(this.setFontSize(o.font_size),this.setFontColor(o.font_color),this.setFontSpeed(o.font_speed),this.setBgColor(o.bg_color));else{var n=this.data;n.fluoreData=n.fluoreData.map(function(t){return t.txt="",t.show=!1,t}),n.fkey=o.fkey,n.fz=n.fArray[n.fkey],o.fluoreDatas.forEach(function(t){var a=t.index-1;n.fluoreData[a].ckey=t.ckey,n.fluoreData[a].col=n.cArray[n.fluoreData[a].ckey],n.fluoreData[a].txt=t.txt,n.fluoreData[a].shtxt=t.txt,n.fluoreData[a].show=t.bShow,n.fluoreData[a].edit=t.bEdit,n.fluoreData[a].animat=n.aArray[n.fluoreData[a].ckey]+n.fluoreData[a].index}),console.log(n)}this.defStyleData=this.getStyleJson()},this.isDiffrentWithDef=function(a){return!t.isNull(this.data)&&this.type==i.NORMAL&&this.data.txt!=a.txt},this.isStyleDataChage=function(){return!(!t.isEmpty(this.defStyleData)&&this.getStyleJson()===this.defStyleData)}},BarrageType:i}; 
 			}); 
		define("server/BarrageInfoPartice.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("BarrageInfo.js"),i=require("../utils/JsonHelper.js"),e=require("../utils/CommonHelper.js"),s=require("../utils/base64.modified.js"),o={};o.view={isSet:!1,footShow:!0},o.roll={defaultTxt:"",txt:"",pckey:0,pcArray1:["#8BA6D6","#006AFF","#FFAF45","#9FBB87","#E71717","#27FDA0","#7C4EFF","#FF5858","#F9F7EA","#7CD096","#999999","#FFA687"],pcArray2:["#FFB296","#CACAD7","#FFDACD","#FFF4F0","#FFB229","#F5FFDD","#27FDA0","#87FFCB","#FFDACD","#FF791E","#ffffff","#FFD8A5"],bgcArray:["#000000","#290000","#23002B","#040037","#003931"],bgckey:0,playMode:0},module.exports={BarrageInfoPartice:function(o){this.type=t.BarrageType.PARTICLE,this.data=o,this.id="",this.getText=function(){return e.isEmpty(this.data)?"":this.data.txt},this.setText=function(t){e.isEmpty(this.data)||(this.data.txt=t)},this.setData=function(t){this.data=t},this.getData=function(){return this.data},this.setId=function(t){this.id=t},this.getId=function(){return this.id},this.getType=function(){return this.type},this.getFontColor1=function(){return e.isEmpty(this.data)?"#ffffff":this.data.pcArray1[this.getFontColorKey()]},this.getFontColor2=function(){return e.isEmpty(this.data)?"#ffffff":this.data.pcArray2[this.getFontColorKey()]},this.getFontColorKey=function(){return e.isEmpty(this.data)?0:this.data.pckey},this.setFontColorKey=function(t){e.isNull(this.data)||(this.data.pckey=t)},this.getBgColor=function(){return e.isEmpty(this.data)?"#000000":this.data.bgcArray[this.data.bgckey]},this.getBgColorKey=function(){return e.isEmpty(this.data)?0:this.data.bgckey},this.setBgColorKey=function(t){e.isNull(this.data)||(this.data.bgckey=t)},this.getPlayMode=function(){return e.isEmpty(this.data)?0:this.data.playMode},this.setPlayMode=function(t){e.isNull(this.data)||(this.data.playMode=t)},this.getStyleJson=function(){var t=null;t={font_color_key:this.getFontColorKey(),bg_color_key:this.getBgColorKey(),play_mode:this.getPlayMode()};var e=i.jsonToString(t);return console.log(e),e},this.updateByJsonData=function(t){this.setId(t.id);var o=i.stringToJson(s.decode(t.style_json));this.setText(s.decode(t.text)),e.isNull(o)||(this.setFontColorKey(o.font_color_key),this.setBgColorKey(o.bg_color_key),this.setPlayMode(o.play_mode))}},getConfigInfo:function(t){return o[t]}}; 
 			}); 
		define("server/BarrageLogic.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t,o){null!=o&&(o.header={"secret-token":r.getSecretToken()},a.isEmpty(t)||(o.header.scdm=t),null!=e&&(o.method=e),a.isNull(o.data)||(o.data.version=r.getVersion()),wx.request(o))}var t="https://shenjiaokj.com/sjkj_api/api/",r=require("../config/ServerConfig.js"),a=require("../utils/CommonHelper.js"),o=require("../utils/base64.modified.js"),s=(require("../utils/JsonHelper.js"),require("BarrageInfo.js")),i=require("BarrageData.js"),n=require("BarrageInfoPartice.js"),d="uuid_v2",c="token_v2",u="barrageIdForShare_v2";module.exports={Logic:function(){this.userUUID,this.token,this.userInfo,this.shareBarrageId,this.reGetTokenTime=0,this.init=function(){this.loadUUID(),a.isEmpty(this.userUUID)?this.requestUUID():(this.loadToken(),this.loadBarrageIdForShare(),a.isEmpty(this.shareBarrageId)&&this.requestBarrageIdForShare(),this.loadBarrageInfoTemp())},this.getUUID=function(){return this.userUUID},this.setUserInfo=function(e){a.isNull(e)||(this.userInfo=e)},this.setUUID=function(e){this.userUUID=e,this.saveUUID(this.userUUID),console.log("setUUID:"+e)},this.loadUUID=function(){this.userUUID=wx.getStorageSync(d)},this.resetBarrageIdForShare=function(){this.shareBarrageId="",this.requestBarrageIdForShare(),console.log("logic resetBarrageIdForShare")},this.getBarrageIdForShare=function(){return this.shareBarrageId},this.loadBarrageIdForShare=function(){this.shareBarrageId=wx.getStorageSync(u),console.log("logic loadBarrageIdForShare:"+this.shareBarrageId)},this.setBarrageIdForShare=function(e){this.shareBarrageId=e,wx.setStorageSync(u,this.shareBarrageId),console.log("setBarrageIdForShare id:"+e)},this.setToken=function(e){this.token=e,wx.setStorageSync(c,this.token),console.log("new token:"+this.token)},this.loadToken=function(){this.token=wx.getStorageSync(c)},this.getToken=function(){return this.token},this.requestUUID=function(){var t=this;e("GET",null,{url:r.getUrl("getUUID"),success:function(e){1==e.data.code?(t.setUUID(e.data.data.uuid),t.login()):console.error("request getUUID error:"+e.data.msg)},fail:function(e){console.error("request getUUID fail:"+e)}})},this.requestBarrageIdForShare=function(){var t=this;e("GET",this.token,{url:r.getUrl("getBarrageId"),success:function(e){1==e.data.code?(t.setBarrageIdForShare(e.data.data.id),console.log("logic requestBarrageIdForShare:"+e.data.data.id)):(-1==e.data.code&&t.handleTokenUnvisible(),console.error("request requestBarrageIdForShare error:"+e.data.msg))},fail:function(e){console.error("request requestBarrageIdForShare fail:"+e)}})},this.saveUUID=function(){wx.setStorageSync(d,this.userUUID)},this.getUserInfo=function(){var e=this;return a.isNull(this.userInfo)&&wx.getSetting({success:function(t){t.authSetting["scope.userInfo"]&&wx.getUserInfo({success:function(t){e.setUserInfo(t.userInfo)}})}}),this.userInfo},this.login=function(t){var o=this;a.isEmpty(this.token)&&wx.login({success:function(s){var i=s.code;i&&e("POST",null,{url:r.getUrl("getToken"),data:{code:i,encryptedData:"",iv:"",signature:"",uuid:o.getUUID()},success:function(e){1==e.data.code?(o.setToken(e.data.data.scdm),o.requestBarrageIdForShare(),o.loadBarrageInfoTemp()):console.error("request getToken error:"+e.data.msg),a.isNull(t)||t(e.data.code)},fail:function(e){console.error("request getToken fail:"+e)}})},fail:function(e){}})},this.addBarrage=function(t,s){var i=this;a.isEmpty(t.getId())?console.error("addBarrage id is null"):(console.log("addBarrage:"+t.getText()+" style:"+t.getStyleJson()+" id:"+t.getId()),e("POST",this.token,{url:r.getUrl("addBarrage"),data:{uuid:this.getUUID(),id:t.getId(),text:o.encode(t.getText()),type:""+t.getType(),style_json:o.encode(t.getStyleJson())},success:function(e){if(1==e.data.code){var r=e.data.data.id;t.setId(r),console.info("request addBarrage succ:"+e.data.msg+" id:"+r)}else{if(-1==e.data.code)i.handleTokenUnvisible();else if(-3==e.data.code){var o=e.data.msg;a.isEmpty(o)&&(o="请修改信息敏感"),wx.showToast({title:o,icon:"none",duration:3e3})}console.error("request addBarrage error:"+e.data.msg)}a.isNull(s)||s(e.data.code,t)},fail:function(e){console.error("request addBarrage fail:"+e)}}))},this.updateShareBarrage=function(t){var a=this;e("POST",this.token,{url:r.getUrl("shareBarrage"),data:{id:t},success:function(e){1==e.data.code||(-1==e.data.code&&a.handleTokenUnvisible(),console.error("request shareBarrage error:"+e.data.msg))},fail:function(e){console.error("request shareBarrage fail:"+e)}})},this.getBarrage=function(t,o,d){var c=this;a.isEmpty(this.token)?setTimeout(function(){c.getBarrage(t,o,d)},500):e("GET",this.token,{url:r.getUrl("getBarrage"),data:{uuid:o,id:t},success:function(e){var r=null;1==e.data.code?(console.log("getBarrage succ id:"+t+" type:"+e.data.data.type),null!=(r=e.data.data.type==s.BarrageType.NORMAL?new s.BarrageInfo(e.data.data.type,i.getInfo("roll")):e.data.data.type==s.BarrageType.FLUORE?new s.BarrageInfo(e.data.data.type,i.getInfo("fluore")):new n.BarrageInfoPartice(n.getConfigInfo("roll")))&&r.updateByJsonData(e.data.data),c.setBarrageInfoTemp(e.data.data.info)):(-1==e.data.code&&(c.handleTokenUnvisible(),setTimeout(function(){c.getBarrage(t,o,d)},500)),console.error("request getBarrage error:"+e.data.msg)),null!=d&&d(e.data.code,r)},fail:function(e){console.error("request getBarrage fail:"+e),null!=d&&d(-2,"net error")}})},this.makeGifWaitTime=0,this.makeGif=function(t,o){t.uuid=this.getUUID();var s=this;this.makeGifWaitTime<10&&a.isEmpty(this.token)?(setTimeout(function(){s.makeGif(t,o)},1e3),this.makeGifWaitTime++,console.log(this.makeGifWaitTime)):(this.makeGifWaitTime=0,e("POST",this.token,{url:r.getUrl("makeGif"),data:t,success:function(e){o.success(e),-1==e.data.code&&s.handleTokenUnvisible()},fail:function(e){o.fail(e)}}))},this.trriggerTemplateMsg=function(t){console.log("trriggerTemplateMsg:"+t);var o=this;a.isEmpty(this.token)?(console.log("token为空"),this.login(function(e){1!=e||a.isEmpty(o.token)||o.trriggerTemplateMsg(t)})):e("POST",this.token,{url:r.getUrl("updateUserFormId"),data:{form_id:t},success:function(e){console.log(e),-1==e.data.code&&o.handleTokenUnvisible()}})},this.handleTokenUnvisible=function(){++this.reGetTokenTime>3?(console.log("handleTokenUnvisible more than "+this.reGetTokenTime),wx.navigateToMiniProgram({appId:r.getAppId()})):(this.token="",this.login(),console.log("handleTokenUnvisible relogin"))},this.setBarrageInfoTemp=function(e){var t=wx.getStorageSync("barrageInfo");a.isEmpty(t)&&(wx.setStorageSync("barrageInfo",e),console.log("setBarrageInfoTemp:"+e))},this.getBarrageInfoTemp=function(){return wx.getStorageSync("barrageInfo")},this.loadBarrageInfoTemp=function(t){var o=this;a.isEmpty(this.getBarrageInfoTemp())&&e("GET",this.token,{url:r.getUrl("updateBarrage"),data:{},success:function(e){1==e.data.code?(o.setBarrageInfoTemp(e.data.data.info),console.info("request loadBarrageInfoTemp succ:"+e.data.data.info)):console.error("request loadBarrageInfoTemp error:"+e.data.msg),a.isNull(t)||t(e.data.code,barrageInfo)},fail:function(e){console.error("request loadBarrageInfoTemp fail:"+e)}})},this.getDefData=function(e){if(e===s.BarrageType.PARTICLE)return n.getConfigInfo("roll")},this.reportSourceRecordCome=function(e){var a=this;wx.reportAnalytics("report_source_record_come",{appid:e}),wx.request({url:t+"sourceRecordV2",header:{"secret-token":r.getSecretToken()},data:{appid:r.getAppId(),appid_come:e,api_secret:r.getApiSecret(),scdm:this.token},method:"POST",success:function(e){-1==e.data.code&&(a.handleTokenUnvisible(),setTimeout(function(){a.reportSourceRecordCome()},3e3))}})},this.reportSourceRecordGo=function(e){var a=this;wx.reportAnalytics("report_source_record_go",{appid:e,where:""}),wx.request({url:t+"sourceRecordV2",header:{"secret-token":r.getSecretToken()},data:{appid_go:e,appid:r.getAppId(),api_secret:r.getApiSecret(),scdm:this.token},method:"POST",success:function(e){-1==e.data.code&&(a.handleTokenUnvisible(),setTimeout(function(){a.reportSourceRecordGo()},3e3))}})}}}; 
 			}); 
		define("server/ParticeLogic.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(){return!0}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=require("../utils/SystemHelper.js"),i=require("../utils/CommonHelper.js"),o=require("../utils/StringHelper.js"),a={init:function(t,n,e){a.Drawing.init(t),a.ShapeBuilder.init(n),a.UI.init(t,e)}};a.Drawing=function(){var t,n,e="#ffffff",i="#ffffff",o=2*Math.PI;return{init:function(e){n=(t=e).getCanvasContext()},setFontColor:function(t,n){e=t,i=n},clearFrame:function(){n.clearRect(0,0,t.width,t.height)},getArea:function(){return{w:t.width,h:t.height}},drawCircle:function(t,a){n.fillStyle=2*Math.random()>1?e:i,n.beginPath(),n.arc(t.x,t.y,t.z,0,o,!0),n.closePath(),n.fill()}}}(),a.UI=function(){function t(t){return t&&t.split(" ")[1]}function e(t){return(t=t&&t.split(" ")[0])&&t[0]===x&&t.substring(1)}function o(){if(m.length>0){if(v>=m.length){if(!y)return void(v=m.length-1);v=0}console.log("_switchNextShape datalenght:"+m.length+" index:"+v+" "+m[v].dots.length),a.Shape.switchShape(m[v]),v++}}function s(){if(p.length<=0)return console.log("data_length:"+m.length),M=!1,d&&d(!0,c),a.UI.startRenderData(),!1;S++;var n=p.shift(),o=e(n),l=t(n);switch(console.log("nextAction action:"+o+" value:"+l),o){case"countdown":i.isEmpty(l)&&(l=3),a.ShapeBuilder.letter(l,function(t){P||i.isEmpty(l)&&0==t.dots.length||l.length>0&&t.dots.length>0&&u!=n&&!P&&t.dots.length!=h()||u==n&&(t.dots.length==h()||0==h())?(!P&&C?p.unshift(n):(S=0,m.push(t),u=n,null!=(l=parseInt(l))&&l>1&&p.unshift("#countdown "+(l-1)),u=n),C=!1,setTimeout(s,I)):(console.error("2:remake shape:["+n+"] lastCmd:["+u+"] makeTime:"+S),S>10?r():(p.unshift(n),setTimeout(s,I)))});break;default:var f=i.isEmpty(n)?"":n;a.ShapeBuilder.letter(f,function(t){P||i.isEmpty(f)&&0==t.dots.length||f.length>0&&t.dots.length>0&&u!=n&&t.dots.length!=h()||u==n&&(t.dots.length==h()||0==h())?(!P&&C?p.unshift(n):(u=n,S=0,m.push(t)),C=!1,setTimeout(s,I)):(console.error("1:remake shape:["+n+"] lastCmd:["+u+"] makeTime:"+S),S>10?r():(p.unshift(n),setTimeout(s,I)))})}return!0}function h(){return m.length>0?m[m.length-1].dots.length:0}function r(){v=0,p.splice(0,p.length),m.splice(0,m.length),M=!1,C=!0,S=0,c="",d&&d(!1,c)}function l(t){return p="object"===(void 0===t?"undefined":n(t))?t:t.split("|"),v=0,m.splice(0,m.length),M=!0,C=!0,S=0,a.Shape.clearDots(),setTimeout(function(){p.length>0&&r()},3e3+500*p.length),s(),!0}var c,u,f,d,g,p=[],m=[],v=0,w=[],x="#",y=!0,M=!1,C=!1,S=0,I=50,P=!1,z=function(t){setTimeout(t,50)};return{init:function(t,n){f=t.getCanvasContext(),I=(P=n)?0:50},simulate:function(t,n){return console.log("simulate action:"+t+" cyclePlay:"+y),y=n,c==t?0==p.length?(v=0,d&&d(!0,c),this.startRenderData(),1):(console.log("simulate last cmd data not create complite"),2):(c=t,l(t),0)},loop:function(t){g=g||t,M||(g(),f.draw(),z.call(this,this.loop.bind(this)))},draw:function(){f.draw()},nextAction:function(){return s()},startRenderData:function(){M=!1,this.loop(function(){a.Shape.render()}),this.switchNextShape()},switchNextShape:function(){return o()},getInfo:function(t){if(0==w.length){var n=wx.getStorageSync("barrageInfo");w=n.split("=")}return parseInt(w[t].charAt(0))},setMakeDataCallback:function(t){d=t}}}(),a.Point=function(t){this.x=t.x,this.y=t.y,this.z=t.z,this.a=t.a,this.h=t.h},a.Color=function(t,n,e,i){this.r=t,this.g=n,this.b=e,this.a=i},a.Color.prototype={render:function(){return"rgba("+this.r+","+ +this.g+","+this.b+","+this.a+")"}},a.Dot=function(t,n){this.p=new a.Point({x:t,y:n,z:5,a:1,h:0}),this.e=.07,this.s=!0,this.c=new a.Color(0,255,255,this.p.a),this.t=this.clone(),this.q=[],this.moveComplite=!1},a.Dot.prototype={clone:function(){return new a.Point({x:this.x,y:this.y,z:this.z,a:this.a,h:this.h})},_draw:function(){this.c.a=this.p.a,a.Drawing.drawCircle(this.p,this.c)},_moveTowards:function(t){var n=this.distanceTo(t,!0),e=n[0],i=n[1],o=n[2],a=this.e*o;if(-1===this.p.h)return this.p.x=t.x,this.p.y=t.y,!0;if(o>1)this.p.x-=e/o*a,this.p.y-=i/o*a;else{if(!(this.p.h>0))return!0;this.p.h--}return!1},_update:function(){if(this._moveTowards(this.t)){var t=this.q.shift();t?(this.t.x=t.x||this.p.x,this.t.y=t.y||this.p.y,this.t.z=t.z||this.p.z,this.t.a=t.a||this.p.a,this.p.h=t.h||0):(this.moveComplite=!0,this.s?(this.p.x-=Math.sin(3.142*Math.random()),this.p.y-=Math.sin(3.142*Math.random())):this.move(new a.Point({x:this.p.x+50*Math.random()-25,y:this.p.y+50*Math.random()-25})))}var n=this.p.a-this.t.a;this.p.a=Math.max(.1,this.p.a-.05*n),n=this.p.z-this.t.z,this.s&&0==this.q.length?this.p.z=this.t.z:this.p.z=Math.max(1,this.p.z-.05*n)},distanceTo:function(t,n){var e=this.p.x-t.x,i=this.p.y-t.y,o=Math.sqrt(e*e+i*i);return n?[e,i,o]:o},move:function(t,n){(!n||n&&this.distanceTo(t)>1)&&this.q.push(t)},removeLastPoint:function(){if(this.q.length>2){var t=this.q.shift();null!=t&&(this.q=[],this.q.push(t))}},render:function(){this._update(),this._draw()},renderDirect:function(){this._draw()}},a.ShapeBuilder=function(){function t(){h.fillStyle=""+f,h.textBaseline="middle",h.textAlign="center",h.translate(r,0),h.rotate(90*Math.PI/180),console.log("fit fontColor:"+f)}function n(t,n){wx.canvasGetImageData({canvasId:s.id,x:0,y:0,width:r,height:l,success:function(e){console.log("canvasGetImageData:"+e.data.length);for(var i=[],o=e.data,s=0,h=0,l=e.width,u=e.height,f=0,d=0,g=a.UI.getInfo(1),p=a.UI.getInfo(3),m=0;m<o.length;m+=p*c)o[m+g]>0&&(i.push(new a.Point({x:s,y:h})),f=s>f?s:f,d=h>d?h:d,l=s<l?s:l,u=h<u?h:u),(s+=c)>=r&&(s=0,h+=c,m+=c*p*r);console.log("processCanvas.....end length:"+i.length),n({dots:i,w:f+l,h:d+u,action:t})}}),console.log("processCanvas.....")}function e(t){h.font="normal bold "+Math.floor(t)+"px "+d,console.log("setFontSize:"+h.font)}function i(t){return!isNaN(parseFloat(t))&&isFinite(t)}function o(t,n){h=n,r=(s=t).width,l=s.height,r=Math.floor(r/c)*c,l=Math.floor(l/c)*c}var s,h,r,l,c=10,u=150,f="#ff0000",d="sans-serif";return{init:function(t){o(t,t.getCanvasContext())},setFontColor:function(t){f=t},circle:function(t,e){var i=Math.max(0,t)/2;return h.clearRect(0,0,r,l),h.beginPath(),h.arc(i*c,i*c,i*c,0,2*Math.PI,!1),h.fill(),h.closePath(),h.draw(),n("circle",e)},letter:function(o,a){console.log("builder shape letter:["+o+"]");t();var s=l,c=r;return u=Math.min(s/o.length-20,i(o)?3*c/4:1*c/2),e(u),h.clearRect(0,0,s,c),h.fillText(o,s/2,c/2),h.draw(),n(o,a)},rectangle:function(t,n){for(var e=[],i=c*t,o=c*n,s=0;s<o;s+=c)for(var h=0;h<i;h+=c)e.push(new a.Point({x:h,y:s}));return{dots:e,w:i,h:o}}}}(),a.Shape=function(){function t(){var t=a.Drawing.getArea();o=t.w/2-e/2,s=t.h/2-i/2}var n=[],e=0,i=0,o=0,s=0,h=!1,r=0;return{init:function(){},getLastStaticNum:function(){return r},shuffleIdle:function(){for(var t=a.Drawing.getArea(),e=0;e<n.length;e++)n[e].s||n[e].move({x:Math.random()*t.w,y:Math.random()*t.h})},clearDots:function(){n.splice(0,n.length)},switchShape:function(l,c){var u,f=a.Drawing.getArea();e=l.w,i=l.h,t();var d=0==n.length;if(l.dots.length>n.length){u=l.dots.length-n.length+50;for(v=1;v<=u;v++){var g=Math.random()*(2*Math.random()>1?30:-30),p=Math.random()*(2*Math.random()>1?30:-30),m=new a.Dot(f.w/2+g,f.h/2+p);m.p.z=20*Math.random(),n.push(m)}console.log("add dots....... "+u)}var v=0,w=0;r=l.dots.length,console.log("switchShape action:["+l.action+"] staticNum:"+r);for(var x=l.dots;x.length>0;)w=Math.floor(Math.random()*x.length),n[v].e=c?.6:(n[v].s,.5),n[v].s?n[v].move(new a.Point({z:5*Math.random()+3,a:Math.random(),h:2})):n[v].move(new a.Point({z:5*Math.random(),h:2})),d&&(n[v].e=.6),n[v].s=!0,n[v].move(new a.Point({x:x[w].x+o,y:x[w].y+s,a:1,z:5*Math.random()+2,h:0})),n[v].moveComplite=!1,x=x.slice(0,w).concat(x.slice(w+1)),v++;for(w=v;w<n.length;w++)n[w].s&&(n[w].move(new a.Point({z:5*Math.random()+5,a:Math.random(),h:2})),n[w].s=!1,n[w].e=.08,n[w].move(new a.Point({x:Math.random()*f.w,y:Math.random()*f.h,a:.3,z:3*Math.random(),h:2})),n[w].moveComplite=!1);h=!1},isTriggerNext:function(){return h},render:function(){for(var t=0,e=0;e<n.length;e++)n[e].render(),!h&&n[e].s&&n[e].moveComplite&&++t>=r&&(h=!0,console.log("d:"+e+" s:"+n[e].s+" moveCompleteNum:"+t),setTimeout(function(){a.UI.switchNextShape()},300))}}}();module.exports={Canvas:function(t,n,e){this.id=t,this.width=n,this.height=e,this.context=null,this.getCanvasContext=function(){return null==this.context&&(this.context=wx.createCanvasContext(this.id)),this.context}},ParticeLogic:function(t){this.canvasForShow,this.canvasForBuildShape,this.isIos=t,this.setCanvas=function(t,n){this.canvasForShow=t,this.canvasForBuildShape=n,a.init(this.canvasForShow,this.canvasForBuildShape,this.isIos)},this.setFontColor=function(t,n){a.Drawing.setFontColor(t,n)},this.setBgColor=function(t){a.ShapeBuilder.setFontColor(t)},this.setMakeParticeDataCallback=function(t){a.UI.setMakeDataCallback(t)},this.start=function(t){var n=!1;if(!i.isNull(t)&&(n=2==t.getPlayMode(),!i.isEmpty(t.getText()))){s=o.Trim(t.getText()),1==t.getPlayMode()&&(s+=" ");var e=s.replace(/\s/g,"|");return console.log("start text:["+s+"] action:["+e+"] mode:"+t.getPlayMode()),a.UI.simulate(e,n)}var s="3|2|1";return n||(s+="|"),a.UI.simulate(s,n)}},isHorizontalMode:t,checkClientIsSurpport:function(){return wx.canIUse("canvasGetImageData")&&e.curVersionBiggerThan("1.9.9")}}; 
 			}); 
		define("server/StatisticsLogic.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../config/ServerConfig.js"),require("../utils/CommonHelper.js");module.exports={reportSourceRecordCome:function(e,o){var r=getApp();!r&&o&&(r=o),r.getLogic().reportSourceRecordCome(e)},reportSourceRecordGo:function(e){getApp().getLogic().reportSourceRecordGo(e)}}; 
 			}); 
		define("utils/CommonHelper.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function o(o){return null==o||void 0==o}function t(o){var r,e=o.constructor===Array?[]:{};if("object"===(void 0===o?"undefined":n(o))){if(window.JSON)r=JSON.stringify(o),e=JSON.parse(r);else for(var i in o)e[i]="object"===n(o[i])?t(o[i]):o[i];return e}}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};module.exports={isNull:o,isEmpty:function(t){return!!(o(t)||t.length<=0)},indexOf:function(o,t,n){for(var r=0;r<o.length;r++)if(o[r]===t)return r;return n},cloneObj:t}; 
 			}); 
		define("utils/JsonHelper.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function r(r){var t=Object.create(null),e=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(e=(a=u.next()).done);e=!0){var l=n(a.value,2),s=l[0],f=l[1];t[s]=f}}catch(r){o=!0,i=r}finally{try{!e&&u.return&&u.return()}finally{if(o)throw i}}return t}function t(r){var t=new Map,n=!0,e=!1,o=void 0;try{for(var i,a=Object.keys(r)[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var u=i.value;t.set(u,r[u])}}catch(r){e=!0,o=r}finally{try{!n&&a.return&&a.return()}finally{if(e)throw o}}return t}var n=function(){function r(r,t){var n=[],e=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(e=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);e=!0);}catch(r){o=!0,i=r}finally{try{!e&&u.return&&u.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return r(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),e=require("CommonHelper.js");module.exports={stringToJson:function(r){return e.isEmpty(r)?(console.error("stringToJson data:"+r),null):JSON.parse(r)},jsonToString:function(r){return e.isNull(r)?(console.error("jsonToString data:"+r),null):JSON.stringify(r)},mapToJson:function(t){return JSON.stringify(r(t))},jsonToMap:function(r){return t(JSON.parse(r))},strMapToObj:r,objToStrMap:t}; 
 			}); 
		define("utils/StringHelper.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function r(r){return r.replace(/(^\s*)|(\s*$)/g,"")}function e(r){return!!/[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/i.test(r)&&(console.log("is face..."),!0)}var t=require("CommonHelper.js");module.exports={chineseNum:function(r){var e=0,t=!0,u=!1,n=void 0;try{for(var i,a=r[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var l=i.value;l.length!=l.replace(/[^\x00-\xff]/g,"**").length&&e++}}catch(r){u=!0,n=r}finally{try{!t&&a.return&&a.return()}finally{if(u)throw n}}return e},Trim:r,generateUUID:function(){var r=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=(r+16*Math.random())%16|0;return r=Math.floor(r/16),("x"==e?t:3&t|8).toString(16)})},haveEmojiFace:e,getCharIfStartWithEmojiFace:function(r){if(!t.isEmpty(r)&&r.length>=2){var u=r.substring(0,1);if(console.log("getCharIfStartWithEmojiFace checkStr:"+u),e(u))return u}return null},spliteTextByChar:function(e,u,n){for(var i="",a=e.split(u),l=0;l<a.length;l++)if(a[l]=r(a[l]),l==a.length-1||!t.isEmpty(a[l])){0!=l&&(i+=u);var o=0;if(a[l].length>5)for(var x=0,c=n;!(x>=a[l].length);)0!=o&&(i+=u),o++,i+=a[l].substring(x,c),x=c,c+n>e.length?c=e.length:c+=n;else i+=a[l]}return i},findStrAndRemoveFromArray:function(r,e){var u=r;if(!t.isNull(u)&&!t.isNull(e))for(var n=0;n<u.length;n++)u[n]!=e||(u=u.slice(0,n).concat(u.slice(n+1)),n=0);return u}}; 
 			}); 
		define("utils/SystemHelper.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(){var t=wx.getStorageSync("systemInfoV2");return void 0===t||void 0===t.updata||void 0===t.IOS?(t=wx.getSystemInfoSync(),t.IOS=!1,t.updata=!0,t.system=t.system.toLowerCase(),t.system.indexOf("ios")>-1&&(t.IOS=!0),n.isNull(t.statusBarHeight)?t.statusBarHeight=40:t.statusBarHeight=750*t.statusBarHeight/t.windowWidth,console.log("windowWidth:"+t.windowWidth+" windowHeight"+t.windowHeight+" statusBarHeight:"+t.statusBarHeight+"rpx pixelRatio:"+t.pixelRatio),wx.setStorageSync("systemInfoV2",t),t):t}function e(t,e){t=t.split("."),e=e.split(".");for(var n=Math.max(t.length,e.length);t.length<n;)t.push("0");for(;e.length<n;)e.push("0");for(var i=0;i<n;i++){var r=parseInt(t[i]),o=parseInt(e[i]);if(r>o)return 1;if(r<o)return-1}return 0}var n=require("CommonHelper.js");module.exports={systemInfo:t,ScreenOn:function(){wx.setKeepScreenOn&&wx.setKeepScreenOn({keepScreenOn:!0})},getStatusBarHeight:function(){return t().statusBarHeight},getWindowSize:function(){var t=t();return{width:t().windowWidth,height:t().windowHeight}},getWindowWidth:function(){return t().windowWidth},getWindowHeight:function(){return t().windowHeight},rpx2px:function(e){return e*t().windowWidth/750},curVersionBiggerThan:function(t){return 1==e(wx.getSystemInfoSync().SDKVersion,t)}}; 
 			}); 
		define("utils/ald-stat-conf.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";exports.app_key="947d331d01d71f340c4a5965a245e5be",exports.getLocation=!1,exports.appid="",exports.appsecret="",exports.defaultPath="pages/index/index"; 
 			}); 
		define("utils/ald-stat.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function a(t){var a="";try{a=wx.getStorageSync("aldstat_uuid")}catch(t){a="uuid-getstoragesync"}if(!a){a=""+Date.now()+Math.floor(1e7*Math.random());try{wx.setStorageSync("aldstat_uuid",a)}catch(t){wx.setStorageSync("aldstat_uuid","uuid-getstoragesync")}t.aldstat_is_first_open=!0}return a}function s(){wx.request({url:"https://"+l+".aldwx.com/config/app.json",header:{AldStat:"MiniApp-Stat"},method:"GET",success:function(t){if(200===t.statusCode)for(var a in t.data)wx.setStorageSync(a,t.data[a])}})}function e(t,a,s){if(t[a]){var e=t[a];t[a]=function(t){s.call(this,t,a),e.call(this,t)}}else t[a]=function(t){s.call(this,t,a)}}function n(t,a,s){if(t[a]){var e=t[a];t[a]=function(t){var n=e.call(this,t);return s.call(this,[t,n],a),n}}else t[a]=function(t){s.call(this,t,a)}}function o(t){this.app=t}function r(t){for(var a in t)return!1;return!0}function _(t){if("string"!=typeof t)return!1;var a=t.replace(/\s+/g,"_");return!/[~`!@/#+=\$%\^()&\*]+/g.test(a)}var i="6.1.2",l="log",d=require("./ald-stat-conf.js"),c=0,u=0,p=0,h=0,g={},f=function(t){wx.getSetting&&wx.getSetting({success:function(a){a.authSetting["scope.userInfo"]&&wx.getUserInfo({withCredentials:!1,success:function(a){t(a)}})}})},w=function(t,a,s){void 0===arguments[1]&&(a="GET"),void 0===arguments[2]&&(s="d.html");var e=0;!function n(){c+=1,t.rq_c=c,wx.request({url:"https://"+l+".aldwx.com/"+s,data:t,header:{AldStat:"MiniApp-Stat"},method:a,success:function(){},fail:function(){e<2&&(e++,t.retryTimes=e,n())}})}()},v=function(t,s,e,n){var o={ak:d.app_key,uu:a(t),at:t.aldstat_access_token,st:Date.now(),tp:e,ev:s,v:i};n&&(o.ct=n),t.aldstat_qr&&(o.qr=t.aldstat_qr),w(o,"GET","d.html")},y=function(t,s,e,n){void 0===t.aldstat_showoption&&(t.aldstat_showoption={});var o={ak:d.app_key,wsr:t.aldstat_showoption,uu:a(t),at:t.aldstat_access_token,st:Date.now(),tp:e,ev:s,nt:t.aldstat_network_type,pm:t.aldstat_phone_model,pr:t.aldstat_pixel_ratio,ww:t.aldstat_window_width,wh:t.aldstat_window_height,lang:t.aldstat_language,wv:t.aldstat_wechat_version,lat:t.aldstat_lat,lng:t.aldstat_lng,spd:t.aldstat_speed,v:i};n&&(o.ct=n),t.aldstat_location_name&&(o.ln=t.aldstat_location_name),t.aldstat_src&&(o.sr=t.aldstat_src),t.aldstat_qr&&(o.qr=t.aldstat_qr),w(o,"GET","d.html")};o.prototype.debug=function(t){y(this.app,"debug",0,t)},o.prototype.warn=function(t){y(this.app,"debug",1,t)},o.prototype.error=function(t){v(this.app,"debug",2,t)},o.prototype.sendEvent=function(a,s){if(!_(a))return!1;if(a.length>=255)return!1;if("object"===(void 0===s?"undefined":t(s))){for(var e in s){if(!_(e))return!1;if("object"==t(s[e]))return!1;if(!_(s[e]))return!1}y(this.app,"event",a,JSON.stringify(s))}else if("string"==typeof s&&s.length<=255){if(_(s)){var n=String(s);(new Object)[n]=s,y(this.app,"event",a,s)}}else y(this.app,"event",a,!1)};var S=function(){var t=this;t.aldstat_duration+=Date.now()-t.aldstat_showtime,b(t,"app","unLaunch")},m=function(t,a,s){void 0!==wx.getShareInfo?wx.getShareInfo({shareTicket:a,success:function(a){y(t,"event","ald_share_"+s,JSON.stringify(a))},fail:function(){y(t,"event","ald_share_"+s,"1")}}):y(t,"event","ald_share_"+s,"1")},x=function(t){s(),this.aldstat=new o(this);var e="";try{e=wx.getStorageSync("aldstat_src")}catch(t){e="uuid-getstoragesync"}e&&(this.aldstat_src=e);var n=a(this);this.aldstat_uuid=n,this.aldstat_timestamp=Date.now(),this.aldstat_showtime=Date.now(),this.aldstat_duration=0;var r=this;r.aldstat_error_count=0,r.aldstat_page_count=1,r.aldstat_first_page=0,this.aldstat_showoption=void 0!==t?t:{};var _=function(){wx.getSystemInfo({success:function(t){r.aldstat_vsdk_version=void 0===t.SDKVersion?"1.0.0":t.SDKVersion,r.aldstat_phone_model=t.model,r.aldstat_pixel_ratio=t.pixelRatio,r.aldstat_window_width=t.windowWidth,r.aldstat_window_height=t.windowHeight,r.aldstat_language=t.language,r.aldstat_wechat_version=t.version,r.aldstat_sv=t.system,r.aldstat_wvv=t.platform},complete:function(){d.getLocation&&l(),i()}})},i=function(){f(function(t){var a="";try{a=wx.getStorageSync("aldstat_uuid")}catch(t){a="uuid-getstoragesync"}t.userInfo.uu=a,g=t,w(t.userInfo,"GET","u.html")})},l=function(){wx.getLocation({type:"wgs84",success:function(t){r.aldstat_lat=t.latitude,r.aldstat_lng=t.longitude,r.aldstat_speed=t.speed}})};wx.getNetworkType({success:function(t){r.aldstat_network_type=t.networkType},complete:_});var c="";try{c=wx.getStorageSync("app_session_key_create_launch_upload")}catch(t){c=""}c?c>0&&"number"==typeof c&&(r.aldstat_access_token=""+Date.now()+Math.floor(1e7*Math.random())):r.aldstat_access_token=""+Date.now()+Math.floor(1e7*Math.random()),b(r,"app","launch")},k=function(t,a){var s=this;void 0===this.aldstat_error_count?this.aldstat_error_count=1:this.aldstat_error_count++,y(s,"event","ald_error_message",JSON.stringify(t))},b=function(t,s,e){var n="";try{n=wx.getStorageSync("app_"+e+"_upload")}catch(t){n=""}if((n||"launch"===e)&&!(n<1&&"number"==typeof n)){void 0===t.aldstat_timestamp&&(t.aldstat_timestamp=Date.now());var o=wx.getSystemInfoSync();t.aldstat_vsdk_version=void 0===o.SDKVersion?"1.0.0":o.SDKVersion,t.aldstat_phone_model=o.model,t.aldstat_pixel_ratio=o.pixelRatio,t.aldstat_window_width=o.windowWidth,t.aldstat_window_height=o.windowHeight,t.aldstat_language=o.language,t.aldstat_sv=o.system,t.aldstat_wvv=o.platform;var r={ak:d.app_key,waid:d.appid,wst:d.appsecret,uu:a(t),at:t.aldstat_access_token,wsr:t.aldstat_showoption,st:t.aldstat_timestamp,dr:t.aldstat_duration,et:Date.now(),pc:t.aldstat_page_count,fp:t.aldstat_first_page,lp:t.aldstat_last_page,life:e,ec:t.aldstat_error_count,nt:t.aldstat_network_type,pm:t.aldstat_phone_model,wsdk:t.aldstat_vsdk_version,pr:t.aldstat_pixel_ratio,ww:t.aldstat_window_width,wh:t.aldstat_window_height,lang:t.aldstat_language,wv:t.aldstat_wechat_version,lat:t.aldstat_lat,lng:t.aldstat_lng,spd:t.aldstat_speed,v:i,ev:s,sv:t.aldstat_sv,wvv:t.aldstat_wvv};"launch"===e?u+=1:"show"===e?p+=1:h+=1,r.la_c=u,r.as_c=p,r.ah_c=h,t.page_share_count&&"number"==typeof t.page_share_count&&(r.sc=t.page_share_count),t.aldstat_is_first_open&&(r.ifo="true"),t.aldstat_location_name&&(r.ln=t.aldstat_location_name),t.aldstat_src&&(r.sr=t.aldstat_src),t.aldstat_qr&&(r.qr=t.aldstat_qr),t.ald_share_src&&(r.usr=t.ald_share_src),w(r,"GET","d.html")}},q=function(t){this.aldstat_showtime=Date.now(),this.aldstat_showoption=void 0!==t?t:{};var a="";try{a=wx.getStorageSync("app_session_key_create_show_upload")}catch(t){a=""}a&&a>0&&"number"==typeof a&&(this.aldstat_access_token=""+Date.now()+Math.floor(1e7*Math.random())),b(this,"app","show"),void 0!==t&&(void 0!==t.shareTicket?m(this,t.shareTicket,"click"):void 0!==t.query&&void 0!==t.query.ald_share_src&&m(this,"0","click"))},D=function(t,a){var s=this;s.aldstat_is_first_open&&(s.aldstat_is_first_open=!1),s.aldstat_duration=Date.now()-s.aldstat_showtime,b(s,"app","hide")},T=function(t,a){var s=getApp();I(s,this,"hide")},A=function(t,a){var s=getApp();I(s,this,"unload")},M=function(t,a){var s="";try{s=wx.getStorageSync("aldstat_src")}catch(t){s=""}var e=getApp();if(wx.showShareMenu,s&&(e.aldstat_src=s),!r(t)){if(void 0!==t.aldsrc)if(s)e.aldstat_qr=t.aldsrc;else{try{wx.setStorageSync("aldstat_src",t.aldsrc)}catch(t){}e.aldstat_src=t.aldsrc,e.aldstat_qr=t.aldsrc}void 0!==t.ald_share_src&&(e.ald_share_src=t.ald_share_src),this.aldstat_page_args=JSON.stringify(t)}I(e,this,"load")},I=function(t,s,e){var n="";try{n=wx.getStorageSync("page_"+e+"_upload")}catch(t){n=""}if((n||"show"===e)&&!(n<1&&"number"==typeof n)){s.aldstat_start_time=Date.now(),s.aldstat_error_count=0,t.aldstat_page_count?t.aldstat_page_count++:t.aldstat_page_count=1,t.aldstat_first_page||(t.aldstat_first_page=s.__route__,s.aldstat_is_first_page=!0),t.aldstat_last_page=s.__route__;var o={uu:a(t),at:t.aldstat_access_token,wsr:t.aldstat_showoption,ak:d.app_key,ev:"page",st:s.aldstat_start_time,dr:Date.now()-s.aldstat_start_time,pp:s.__route__,life:e,sc:s.page_share_count,ec:s.aldstat_error_count,nt:t.aldstat_network_type,pm:t.aldstat_phone_model,pr:t.aldstat_pixel_ratio,ww:t.aldstat_window_width,wh:t.aldstat_window_height,lang:t.aldstat_language,wv:t.aldstat_wechat_version,lat:t.aldstat_lat,lng:t.aldstat_lng,spd:t.aldstat_speed,v:i,wsdk:t.aldstat_vsdk_version,sv:t.aldstat_sv,wvv:t.aldstat_wvv};s.aldstat_is_first_page&&(o.ifp="true"),t.aldstat_page_last_page&&(o.lp=t.aldstat_page_last_page),t.aldstat_location_name&&(o.ln=t.aldstat_location_name),s.aldstat_page_args&&(o.ag=s.aldstat_page_args),t.aldstat_src&&(o.sr=t.aldstat_src),t.aldstat_qr&&(o.qr=t.aldstat_qr),t.ald_share_src&&(o.usr=t.ald_share_src),t.aldstat_page_last_page=s.__route__,w(o,"GET","d.html")}},E=function(t,a){var s=getApp();I(s,this,"show")},G=function(t,a){var s=getApp();y(s,"event","ald_pulldownrefresh",1)},O=function(t,a){var s=getApp();y(s,"event","ald_reachbottom",1)},j=function(a,s){var e=this,n=getApp();if(void 0!==a&&void 0!==a[1]){var o="";try{o=wx.getStorageSync("aldstat_uuid")}catch(a){o="uuid-getstoragesync"}var r="";try{r=wx.getStorageSync(o)}catch(a){r="p_share_count_getst"}var _="";if("undefined"!==n.ald_share_src&&n.ald_share_src){for(var i=(_=n.ald_share_src).split(","),l=!0,c=0,u=i.length;c<u;c++)if(i[c].replace('"',"")==o){l=!1;break}i.length>=3&&(l&&i.shift(),_=i.toString()),""!==_&&l&&(_=_+","+o)}else try{_=wx.getStorageSync("aldstat_uuid")}catch(a){_="ald_share_src_getst"}if(a[1].path&&"undefined"!==a[1].path||(d.defaultPath?a[1].path=d.defaultPath:a[1].path=e.__route__),-1!=a[1].path.indexOf("?")?a[1].path+="&ald_share_src="+_:a[1].path+="?ald_share_src="+_,y(n,"event","ald_share_chain",{path:n.aldstat_last_page,chain:_}),""===r||void 0===r){try{wx.setStorageSync(o,1)}catch(a){}r=1,n.page_share_count=r}else{r=parseInt(wx.getStorageSync(o))+1,n.page_share_count=r;try{wx.setStorageSync(o,r)}catch(a){}}f(function(t){var a="";try{a=wx.getStorageSync("aldstat_uuid")}catch(t){a="uuid-getstoragesync"}t.userInfo.uu=a,w(t.userInfo,"GET","u.html")});a[1];void 0===a[1].success&&(a[1].success=function(t){}),void 0===a[1].fail&&(a[1].fail=function(t){});var p=a[1].fail,h=a[1].success;return a[1].success=function(a){new Array;if("object"===t(a.shareTickets))for(var s=0;s<a.shareTickets.length;s++)m(n,a.shareTickets[s],"user");y(n,"event","ald_share_status",JSON.stringify(a)),h(a)},a[1].fail=function(t){y(n,"event","ald_share_status","fail"),p(t)},a[1]}},N=App;App=function(t){e(t,"onLaunch",x),e(t,"onUnlaunch",S),e(t,"onShow",q),e(t,"onHide",D),e(t,"onError",k),N(t)};var J=Page;Page=function(t){e(t,"onLoad",M),e(t,"onUnload",A),e(t,"onShow",E),e(t,"onHide",T),e(t,"onReachBottom",O),e(t,"onPullDownRefresh",G),void 0!==t.onShareAppMessage&&n(t,"onShareAppMessage",j),J(t)}}(); 
 			}); 
		define("utils/base64.modified.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";!function(t){var r=(t=t||{}).Base64,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=function(t){for(var r={},e=0,n=t.length;e<n;e++)r[t.charAt(e)]=e;return r}(e),o=String.fromCharCode,c=function(t){if(t.length<2)return(r=t.charCodeAt(0))<128?t:r<2048?o(192|r>>>6)+o(128|63&r):o(224|r>>>12&15)+o(128|r>>>6&63)+o(128|63&r);var r=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return o(240|r>>>18&7)+o(128|r>>>12&63)+o(128|r>>>6&63)+o(128|63&r)},a=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,u=function(t){return t.replace(a,c)},i=function(t){var r=[0,2,1][t.length%3],n=t.charCodeAt(0)<<16|(t.length>1?t.charCodeAt(1):0)<<8|(t.length>2?t.charCodeAt(2):0);return[e.charAt(n>>>18),e.charAt(n>>>12&63),r>=2?"=":e.charAt(n>>>6&63),r>=1?"=":e.charAt(63&n)].join("")},f=t.btoa?function(r){return t.btoa(r)}:function(t){return t.replace(/[\s\S]{1,3}/g,i)},h=function(t){return f(u(t))},d=function(t,r){return r?h(String(t)).replace(/[+\/]/g,function(t){return"+"==t?"-":"_"}).replace(/=/g,""):h(String(t))},g=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),l=function(t){switch(t.length){case 4:var r=((7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3))-65536;return o(55296+(r>>>10))+o(56320+(1023&r));case 3:return o((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return o((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},A=function(t){return t.replace(g,l)},s=function(t){var r=t.length,e=r%4,c=(r>0?n[t.charAt(0)]<<18:0)|(r>1?n[t.charAt(1)]<<12:0)|(r>2?n[t.charAt(2)]<<6:0)|(r>3?n[t.charAt(3)]:0),a=[o(c>>>16),o(c>>>8&255),o(255&c)];return a.length-=[0,0,2,1][e],a.join("")},p=t.atob?function(r){return t.atob(r)}:function(t){return t.replace(/[\s\S]{1,4}/g,s)},C=function(t){return A(p(t))},b=function t(r){var e=C(String(r).replace(/[-_]/g,function(t){return"-"==t?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,"")),n=d(e);return null!=t&&e.length>0&&n==r?e:r};if(t.Base64={VERSION:"2.1.9",atob:p,btoa:f,fromBase64:b,toBase64:d,utob:u,encode:d,encodeURI:function(t){return d(t,!0)},btou:A,decode:b,noConflict:function(){var e=t.Base64;return t.Base64=r,e}},"function"==typeof Object.defineProperty){var B=function(t){return{value:t,enumerable:!1,writable:!0,configurable:!0}};t.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",B(function(){return b(this)})),Object.defineProperty(String.prototype,"toBase64",B(function(t){return d(this,t)})),Object.defineProperty(String.prototype,"toBase64URI",B(function(){return d(this,!0)}))}}module.exports=t.Base64}(void 0); 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("./utils/ald-stat.js");var e=require("./server/StatisticsLogic.js"),r=require("./server/BarrageLogic.js"),t=require("./server/BarrageInfo.js"),o=require("./utils/CommonHelper.js");App({globalData:{userInfo:null,loginState:!1,systemInfo:null,logic:null,barrageType:t.BarrageType.NORMAL,otherPathToNoraml:[]},setBarrageType:function(e){this.globalData.barrageType=e},getBarrageType:function(){return this.globalData.barrageType},onLaunch:function(e){var t=this;wx.getSystemInfo({success:function(e){t.globalData.systemInfo=e}}),t.globalData.logic=new r.Logic,t.globalData.logic.init(this)},getLogic:function(){return this.globalData.logic},getSystemInfo:function(){return this.globalData.systemInfo},setOtherPathToNoramlText:function(e,r){this.globalData.otherPathToNoraml[e]=r},getOtherPathToNoramlText:function(e){return this.globalData.otherPathToNoraml[e]},onShow:function(r){o.isNull(r)||1037!=r.scene||(o.isNull(r.referrerInfo)?console.log("other app open this app,other appId is null scene:"+r.scene):(console.log("other app open this app,other appId:"+r.referrerInfo.appId),e.reportSourceRecordCome(r.referrerInfo.appId,this)))}}); 
 			}); 	require("app.js");
 		__wxRoute = 'pages/components/dzad/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/components/dzad/index.js';	define("pages/components/dzad/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{aid:{type:String,value:""}},data:{api:"https://www.dzadx.com/api/",cssloading:"dz-wrap-loading",params:{},queryData:{},showed:[],imgUrl:"",imgView:"",pageShow:0,imgshow:0},pageLifetimes:{show:function(){this.setData({pageShow:1,imgshow:0})},hide:function(){this.setData({pageShow:0,imgshow:1})}},lifetimes:{attached:function(){var a=this,e=a.data.params;e.appid=wx.getAccountInfoSync().miniProgram.appId,wx.getSystemInfo({success:function(t){e.model=t.model,e.platform=t.platform,e.system=t.system,e.version=t.version,a.setData({params:e})}}),wx.getNetworkType({success:function(t){e.net=t.networkType,a.setData({params:e})}}),this.getOpenidcode()}},methods:{imgLoad:function(a){this.setData({cssloading:""}),this.requestPv()},getOpenidcode:function(){var a=this,e=a.data.params;wx.login({success:function(t){e.code=t.code;var i=wx.getStorageSync("openid");i&&(e.code="",e.openid=i),a.setData({params:e}),a.requestAd()}})},requestAd:function(){var a=this,e=this.data.params;a.properties.aid?wx.request({url:a.data.api+"appckpv/getad",data:{aid:a.properties.aid,code:a.data.params.code},header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(t){if(t.data.success){var i=t.data.data;i.imgs.length&&(e.code&&(e.openid=i.openid,wx.setStorage({key:"openid",data:i.openid})),a.setData({params:e,queryData:i}),a.showImg())}}}):console.log('请在组件上传入aid，例：<dzad aid="xxxxxx"></dzad>')},requestPv:function(){var a=this,e=this.data.params,t=this.data.aditem,i=a.data.queryData;this.data.showed.indexOf(t.id)<0&&(e.pay=0,e.type=0,wx.request({url:i.pvurl,data:e,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){var i=a.data.showed;i.indexOf(t.id)<0&&(i.push(t.id),a.setData({showed:i}))}}))},requestCk:function(){var a=this.data.queryData,e=this.data.params;e.pay=1,e.type=1,wx.request({url:a.ckurl,data:e,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST"})},showImg:function(){var a=this,e=this.data.queryData;if(0==this.data.imgshow){var t=e.imgs,i=wx.getStorageSync("showimgs");i=i?JSON.parse(i):[];for(var s=t[Math.floor(Math.random()*t.length)],d=(e.webad.removeids||"").split(","),o=0;o<t.length;o++)if(s=t[o],i.indexOf(s.id)<0&&d.indexOf(s.id)<0){i.push(s.id);break}i.length>=t.length&&(i=[]),wx.setStorage({key:"showimgs",data:JSON.stringify(i)});var r=getCurrentPages(),n=r[r.length-1].route,p=this.data.params;p.url=n,p.aid=s.id,p.realjump=s.realjump,p.aduid=s.uid,p.sid=e.webad.id,p.webid=e.webad.webid,p.webuid=e.webad.uid,this.setData({aditem:s,params:p,imgUrl:e.imghost+s.pic,imgView:e.imghost+s.codepic})}e.loop&&setTimeout(function(){a.showImg()},e.loop)},previewImage:function(a){var e=this,t=this.data.queryData;wx.previewImage({current:e.data.imgView,urls:[e.data.imgView],success:function(){setTimeout(function(){0==e.data.pageShow?e.data.params.realjump=1:e.data.params.realjump=0,e.requestCk()},t.realjump)}})},dzClickad:function(a){var e=this,t=this.data.queryData,i=this.data.aditem;1==t.webad.direct&&1==i.direct?(e.setData({imgshow:1}),wx.navigateToMiniProgram({appId:i.appid,success:function(a){e.data.params.realjump=1,e.requestCk(),e.setData({imgshow:0})},fail:function(a){a.errMsg.indexOf("appId")>=0?e.previewImage():(e.data.params.realjump=0,e.requestCk(),e.setData({imgshow:0}))}})):e.previewImage()}}}); 
 			}); 	require("pages/components/dzad/index.js");
 		__wxRoute = 'pages/styleList/index';__wxRouteBegin = true; 	define("pages/styleList/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=require("../../config/ServerConfig.js"),e=require("../../utils/SystemHelper.js"),t=require("../../server/BarrageInfo.js"),r=require("../../server/StatisticsLogic.js");Page({data:{yinyu_fuli_hint:{showZhezhao:!1},list_on:0,arry:[{url:"/pages/particle/particle",img:"../../img/particle.png",label:"粒子弹幕",name:"particle"},{barrageType:t.BarrageType.NORMAL,url:"/pages/index/index",text:"手持弹幕 行走的弹幕",label:"经典弹幕",name:"roll"},{barrageType:t.BarrageType.FLUORE,url:"/pages/index/index",text:"我 ❤ 黄 家 驹",label:"荧光弹幕",name:"fluore"}],top:"40rpx",indicatorDots:!0,autoplay:!0,interval:3e3,duration:500,banner_array:[],naviToMiniProgramVisible:!0,AdId:""},banner_href:function(e){var t=e.currentTarget.id;this.setData({AdId:this.data.banner_array[t].appid}),this.data.banner_array[t].appid==a.getAppId()?wx.reLaunch({url:"../../"+this.data.banner_array[t].appurl}):(r.reportSourceRecordGo(this.data.banner_array[t].appid),wx.navigateToMiniProgram({appId:this.data.banner_array[t].appid,path:this.data.banner_array[t].appurl,success:function(a){console.log("跳转成功")}}))},getNavigateToMiniProgram:function(){e.curVersionBiggerThan("2.0.6")?this.setData({naviToMiniProgramVisible:!1}):this.setData({naviToMiniProgramVisible:!0})},AdCount:function(a){var e=a.currentTarget.id;this.setData({AdId:this.data.banner_array[e].appid}),r.reportSourceRecordGo(this.data.AdId)},showZhezhao:function(){var a=this.data.yinyu_fuli_hint;a.showZhezhao=!0,this.setData({yinyu_fuli_hint:a})},hideZhezhao:function(){var a=this.data.yinyu_fuli_hint;a.showZhezhao=!1,this.setData({yinyu_fuli_hint:a})},btnanniu:function(a){var e=a.currentTarget.id;this.setData({list_on:e});var t=getCurrentPages(),r=t.length-2;if(t.length>1)"/"+t[r].route==(i=this.data.arry[e].url)?("/pages/index/index"==i&&getApp().setBarrageType(this.data.arry[e].barrageType),wx.navigateBack({delta:1})):("/pages/index/index"==i&&getApp().setBarrageType(this.data.arry[e].barrageType),wx.reLaunch({url:this.data.arry[e].url}));else{var i=this.data.arry[e].url;"/pages/index/index"==i&&getApp().setBarrageType(this.data.arry[e].barrageType),wx.reLaunch({url:this.data.arry[e].url})}},onLoad:function(t){var r=this;wx.request({url:"https://shenjiaokj.com/sjkj_api/api/adBannerList",data:{isIOS:e.systemInfo().IOS?1:0},header:{"secret-token":a.getSecretToken()},success:function(a){console.log(a.data.data);for(var e=a.data.data.length,t=0;t<e;t++){var i=a.data.data[t];2==i.type&&r.data.banner_array.push(i)}r.setData({banner_array:r.data.banner_array}),r.getNavigateToMiniProgram()}}),this.setData({top:e.getStatusBarHeight()+"rpx"})},onReady:function(){},onShow:function(){var a=wx.createAnimation({duration:1e3,timingFunction:"ease"});this.animation=a,a.translate(-100).step(),this.setData({animationData:a.export()})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},back:function(){wx.navigateBack({delta:1})}}); 
 			}); 	require("pages/styleList/index.js");
 		__wxRoute = 'pages/index/index';__wxRouteBegin = true; 	define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../config/ServerConfig.js"),e=require("../../server/BarrageData.js"),a=require("../../server/BarrageInfo.js"),r=require("../../utils/CommonHelper.js"),o=require("../../utils/SystemHelper.js"),i=require("../../utils/StringHelper.js"),s=require("../../server/StatisticsLogic.js");Page({data:{rollShare:[],fluoreShare:[],menuTapCurrent:1,curBarrageInfo:null,avatarUrl:"../../img/face.png",cursorSpace:10,toView_color:"c1",toView_bgcolor:"c1",order:["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12","c13","c14","c15"],lastIntervalId:0,focus:!1,temptxt:"",isAndroid:!1,rollTextHaveFace:!1,AdImg:"",AdId:"",naviToMiniProgramVisible:!0,AdButton:"scdm_side_ad",yinyu_fuli_hint:{showZhezhao:!1}},give:function(){wx.navigateToMiniProgram&&wx.navigateToMiniProgram({appId:"wx18a2ac992306a5a4",path:"pages/apps/largess/detail?accountId=77738",success:function(t){}})},finput:function(t){var e=t.currentTarget.dataset.key,a=this.data.fluore;if(a.fluoreData[e].txt=i.Trim(t.detail.value),a.fluoreData[e].show=0!=a.fluoreData[e].txt.length,a.fluoreData[e].show)if(this.data.isAndroid){var r=i.getCharIfStartWithEmojiFace(a.fluoreData[e].txt);if(null!=r)a.fluoreData[e].shtxt=r;else{var o=!0,s=!1,n=void 0;try{for(var l,d=a.fluoreData[e].txt[Symbol.iterator]();!(o=(l=d.next()).done);o=!0){var h=l.value;a.fluoreData[e].shtxt=h;break}}catch(t){s=!0,n=t}finally{try{!o&&d.return&&d.return()}finally{if(s)throw n}}}}else{var u=!0,f=!1,c=void 0;try{for(var g,w=a.fluoreData[e].txt[Symbol.iterator]();!(u=(g=w.next()).done);u=!0){var v=g.value;a.fluoreData[e].shtxt=v;break}}catch(t){f=!0,c=t}finally{try{!u&&w.return&&w.return()}finally{if(f)throw c}}}this.setData({fluore:a})},ffocus:function(t){var e=t.currentTarget.dataset.key,a=this.data.fluore,r=this.data.view;a&&r?(r.isfCol=!0,a.inpkey=e,a.ckey=a.fluoreData[e].ckey,r.isFont=!1,this.setData({fluore:a,view:r})):console.error("fluore or view is null")},fbuur:function(t){this.ftart()},setFCol:function(t){var e=t.currentTarget.dataset.key,a=this.data.fluore;if(e==a.ckey)return!1;a.fluoreData[a.inpkey].ckey=e,a.fluoreData[a.inpkey].col=a.cArray[e],a.fluoreData[a.inpkey].animat=a.aArray[e]+a.fluoreData[a.inpkey].index,a.ckey=e,this.setData({fluore:a})},ftart:function(t){var e,a=this.data.view,r=this.data.fluore,o=0;o=r.fluoreData.map(function(t){return t.show&&t.edit?1:0}).reduce(function(t,e){return t+e}),(t||o!=r.tLen)&&(e=o*r.fz,r.tLen=o,a.windowHeight>e?r.top=(a.windowHeight-e)/2-r.fz/2:r.top=-(e-a.windowHeight)/2-r.fz/2,this.setData({fluore:r}))},menuTap:function(t){var e=t.currentTarget.dataset.current;console.log(e),this.setData({menuTapCurrent:e})},setfz:function(t){var e,a=t.currentTarget.dataset.key,r=this.data,o=r.roll,i=r.fluore,s=r.view,n=this;if(s.fkey==a)return!1;if(s.vtxt=s.ftArray[a],s.fkey=a,s.isFont=!1,0==s.category)o.fz=o.fArray[a],o.move=0,o.time=0,o.fkey=a,o.top=s.windowHeight-o.fz/2,o.setfz=!0,this.setData({view:s,roll:o}),setTimeout(function(){n.start(!0)},50);else if(1==s.category){switch(i.fkey=a,i.fz=i.fArray[a],e=i.fluoreData.length,i.fluoreData=i.fluoreData.map(function(t){return t.edit=!0,t}),a){case 1:i.fluoreData[e-1].edit=!1,4==i.inpkey&&(i.inpkey=3);break;case 2:i.fluoreData[e-1].edit=!1,i.fluoreData[e-2].edit=!1,4!=i.inpkey&&3!=i.inpkey||(i.inpkey=2)}this.setData({fluore:i,view:s}),this.ftart(!0)}},setView:function(){var t=this.data.view,e=this.data.fluore,r=this.data.roll,i=this.data.rollShare,s=this.data.fluoreShare;if(r||e){if(t.footShow){if(t.footShow=!1,t.rollShow=!1,t.fluoreShow=!1,t.isFont=!1,t.isfCol=!1,t.isrCol=!1,t.isSpeed=!1,t.category==a.BarrageType.NORMAL)r.txt==r.defaultTxt||i.some(function(t){return t==r.txt})||(i.push(r.txt),i.length>10&&i.shift(),this.reportCurrentBarrage());else if(t.category==a.BarrageType.FLUORE){var n="";e.fluoreData.forEach(function(t){t.show&&(n+=t.shtxt)}),n==e.defaultTxt||s.some(function(t){return t==n})||(s.push(n),s.length>10&&s.shift(),this.reportCurrentBarrage())}this.getAdUrl(this.data.AdButton)}else t.isSet?this.doneSet():(t.footShow=!0,0==t.category?t.rollShow=!0:1==t.category&&(t.fluoreShow=!0));o.ScreenOn(),this.setData({view:t,rollShare:i,fluoreShare:s})}else wx.showToast({title:"正在获取弹幕，请稍后...",icon:"none"})},reportCurrentBarrage:function(){},swFluore:function(){wx.navigateTo({url:"../../pages/styleList/index"})},swFluore1:function(){var t=this.data.view,e=this.data.fluore;if(t&&e){t.fkey=e.fkey,t.vtxt=t.ftArray[t.fkey],t.category=a.BarrageType.FLUORE,t.rollShow=!1,t.fluoreShow=!0,t.isFont=!1,t.isfCol=!1,1==t.iscal?(t.iscal=0,this.setData({view:t}),this.closeStart(),this.ftart(!0)):(this.closeStart(),this.setData({view:t}));var r=this.data.roll;r.bgcol=r.bgcArray[0],getApp().getBarrageType(t.category),this.setData({roll:r,view:t})}else console.log("swFluore1 view or fluore is null")},formSubmit:function(t){var e=t.detail.formId;getApp().getLogic().trriggerTemplateMsg(e)},swToll:function(){wx.navigateTo({url:"../../pages/styleList/index"})},swToll1:function(){var t=this.data.view,e=this.data.roll,r=e.bgckey;t.fkey=e.fkey,t.vtxt=t.ftArray[t.fkey],t.category=a.BarrageType.NORMAL,t.rollShow=!0,t.fluoreShow=!1,t.isFont=!1,t.isfCol=!1,e.bgcol=e.bgcArray[r],getApp().setBarrageType(t.category),this.setData({view:t}),this.reStart(),console.log(e.bgckey)},listenerVal:function(t){this.data.roll?(this.data.roll.temptxt=t.detail.value,this.start(!1)):console.error("listenerVal roll is null")},showSpeed:function(){var t=this.data.view;t.isSpeed=!t.isSpeed,t.isFont=!1,t.isColor=!1,this.setData({view:t})},setSpeed:function(t){var e=this.data.roll,a=t.currentTarget.dataset.key,r=this.data.view,o=this;if(e.skey==a)return!1;e.move=0,e.time=0,e.skey=a,r.isSpeed=!1,e.spTxt=e.sTxtArray[a],e.setfz=!0,this.setData({roll:e,view:r}),setTimeout(function(){o.start(!0)},50)},showCol:function(){var t=this.data.view;t.isrCol=!t.isrCol,t.isFont=!1,t.isSpeed=!1,this.setData({view:t})},setCol:function(t){var e=this.data.roll,a=t.currentTarget.dataset.key,r=this.data.view,o=this;if(e.ckey==a)return!1;e.col=e.cArray[a],clearInterval(e.st),e.ckey=a,r.isrCol=!1,e.move=0,e.time=0,this.setData({roll:e,view:r}),setTimeout(function(){o.time()},50),a>=5?this.setData({toView_color:this.data.order[a-5]}):this.setData({toView_color:this.data.order[0]})},setbgCol:function(t){var e=this.data.roll,a=t.currentTarget.dataset.key,r=this.data.view,o=this;if(e.bgckey==a)return!1;e.bgcol=e.bgcArray[a],e.bgckey=a,clearInterval(this.data.lastIntervalId),r.isrCol=!1,e.move=0,e.time=0,this.setData({roll:e,view:r}),setTimeout(function(){o.time()},50),a>=5?this.setData({toView_bgcolor:this.data.order[a-5]}):this.setData({toView_bgcolor:this.data.order[0]})},showfz:function(){var t=this.data.view;t.isFont=!t.isFont,t.isfCol=!1,t.isrCol=!1,t.isSpeed=!1,this.setData({view:t})},focus:function(){var t=this.data.roll;t?(clearInterval(t.st),t.txt="",t.focus=!0,t.move=0,t.time=0,this.setData({roll:t,focus:!0})):console.error("focus roll is null")},inputEnd:function(){this.start(!0),this.setData({focus:!1})},start:function(t){this.data.view;var e,a,r,s,n=this.data.roll;n?(s=n.speedbase*n.sArray[n.skey],e=(a=i.Trim(n.temptxt)).length,this.data.isAndroid&&(i.haveEmojiFace(a)?this.setData({rollTextHaveFace:!0}):this.setData({rollTextHaveFace:!1})),0==e&&(e=(a=n.setfz?n.txt:n.defaultTxt).length),r=i.chineseNum(a)+2,n.moveLen=(e-r+2)*n.fz/2+r*n.fz+o.systemInfo().windowHeight,n.moveTime=Math.ceil(n.moveLen/s/1e3),n.moveLen=-n.moveLen,n.setmoveTime=1e3*n.moveTime+300,n.txt=a,t&&(n.temptxt="",n.setfz=!1,n.focus=!1,this.setData({temptxt:""})),this.setData({roll:n}),this.time()):console.log("index start roll is null")},time:function(){var t=this.data.roll,e=this;console.log("clearInerval:"+this.data.lastIntervalId),clearInterval(this.data.lastIntervalId),t.move=0,t.time=0,e.setData({roll:t}),setTimeout(function(){t.move=t.moveLen,t.time=t.moveTime,e.setData({roll:t})},300),this.data.lastIntervalId=setInterval(function(a){t.move=0,t.time=0,e.setData({roll:t}),setTimeout(function(){t.move=t.moveLen,t.time=t.moveTime,e.setData({roll:t})},300)},t.setmoveTime)},closeStart:function(){var t=this.data.roll;t?(clearInterval(t.st),t.move=0,t.time=0,this.setData({roll:t})):console.error("closeStart roll is null")},reStart:function(){var t=this.data.roll;{if(t)return t.isReStart?(t.isReStart=!1,this.setData({roll:t}),!1):void(t.moveTime>0?this.time():this.start(!0));console.error("reStart roll is null")}},onHide:function(){var t=this.data.view;t&&0==t.category&&this.closeStart()},goHeiKeJi:function(){if(0==this.data.showDlg){var e=t.getAppId();this.data.AdId==e?wx.redirectTo({url:this.data.AdUrl}):(s.reportSourceRecordGo(this.data.AdId),wx.navigateToMiniProgram({appId:this.data.AdId,path:this.data.AdUrl,success:function(t){},fail:function(t){console.log(t)}}))}},AdCount:function(){s.reportSourceRecordGo(this.data.AdId)},getAdUrl:function(e){var a=this;wx.request({url:"https://shenjiaokj.com/sjkj_api/api/buttonEvent",data:{btn_key:e,_type:"rand"},header:{"secret-token":t.getSecretToken()},success:function(t){if(1==t.data.code){var e="/"+t.data.data.appurl,r=t.data.data.appid,o=t.data.data.bgimg_path_src;a.setData({dlgOpacity:1,AdUrl:e,AdId:r,AdImg:o,showDlg:!1}),a.getNavigateToMiniProgram()}else console.log(t.data)}})},onShow:function(){var t=this.data.view,r=this;try{t.category==a.BarrageType.NORMAL&&this.reStart()}catch(o){setTimeout(function(){r.data.view||(t=e.getInfo("view"),r.setData({view:t}),t.category==a.BarrageType.NORMAL&&getApp().getBarrageType()==a.BarrageType.FLUORE?r.swFluore1():t.category==a.BarrageType.FLUORE&&getApp().getBarrageType()==a.BarrageType.NORMAL&&r.swToll1())},1e3)}t&&(r.setData({view:t}),t.category==a.BarrageType.NORMAL&&getApp().getBarrageType()==a.BarrageType.FLUORE?this.swFluore1():t.category==a.BarrageType.FLUORE&&getApp().getBarrageType()==a.BarrageType.NORMAL&&this.swToll1()),this.getAdUrl(this.data.AdButton)},setInfo:function(){this.getAdUrl(this.data.AdButton),console.log("--------------");var t=this.data,e=t.view,a=t.roll,r=t.fluore;a||r?(e.isSet=!0,e.footShow=!1,this.setData({view:e})):wx.showToast({title:"正在获取弹幕，请稍后...",icon:"none"})},doneSet:function(){var t=this.data.view;t.isSet=!1,t.footShow=!0,this.setData({view:t})},smallPrgo:function(){wx.navigateTo({url:"/pages/drainage/drainage"})},makeGif:function(){var t=this.data.roll;t&&t.txt&&t.txt.length>0?t.txt.length<=20?wx.navigateTo({url:"/pages/gif/gif?txt="+t.txt+"&color="+t.col+"&speed="+t.skey+"&bgColor="+t.bgcol+"&fontSize="+t.fz}):wx.showToast({title:"字数要小于20字"}):wx.showToast({title:"你还没输入"})},userInfoHandler:function(t){var e=t.detail.userInfo;getApp().getLogic().setUserInfo(e),this.setInfo()},onLoad:function(t){var i=o.systemInfo(),s=e.getInfo("fluore"),n=e.getInfo("view"),l=e.getInfo("roll"),d=this;if(this.setData({isAndroid:!i.IOS}),console.log("onLoad ud:"+t.ud+" uuid:"+t.uuid),r.isEmpty(t.ud))n.category=a.BarrageType.NORMAL,n.rollShow=!0,n.fluoreShow=!1,n.footShow=!0,n.windowWidth=i.windowWidth,n.windowHeight=i.windowHeight,n.IOS=i.IOS,n.tleft=i.windowWidth/2?i.windowWidth/2:150,l.top=i.windowHeight-l.fz/2,"alading"==decodeURIComponent(t.scene)&&(l.txt="AMIC大会带您领略小程序大商业",l.temptxt=l.txt),r.isEmpty(t.fromOtherPage)||(l.txt=getApp().getOtherPathToNoramlText(t.fromOtherPage),l.temptxt=l.txt),d.setData({fluore:s,roll:l,view:n,cursorSpace:o.rpx2px(13)});else try{getApp().getLogic().getBarrage(t.ud,t.uuid,function(t,e){if(1==t)if(null!=e){d.data.curBarrageInfo=e,n.category=e.getType(),n.category==a.BarrageType.NORMAL?(l.isReStart=!0,n.fkey=l.fkey,n.vtxt=n.ftArray[n.fkey],(l=e.data).move=0,l.time=0,l.setfz=!0):(n.iscal=0,s=e.data);var r=!0,h=!1,u=void 0;try{for(var f,c=Object.keys(n)[Symbol.iterator]();!(r=(f=c.next()).done);r=!0){var g=f.value;!0===n[g]&&(n[g]=!1)}}catch(t){h=!0,u=t}finally{try{!r&&c.return&&c.return()}finally{if(h)throw u}}n.windowWidth=i.windowWidth,n.windowHeight=i.windowHeight,n.IOS=i.IOS,n.tleft=i.windowWidth/2?i.windowWidth/2:150,l.top=i.windowHeight-l.fz/2,l.isReStart&&setTimeout(function(){d.start(!0)},50),d.setData({fluore:s,roll:l,view:n}),1==n.category&&d.ftart(!0)}else n.category=a.BarrageType.NORMAL,n.rollShow=!0,n.fluoreShow=!1,n.footShow=!0,n.windowWidth=i.windowWidth,n.windowHeight=i.windowHeight,n.IOS=i.IOS,n.tleft=i.windowWidth/2?i.windowWidth/2:150,l.top=i.windowHeight-l.fz/2,d.setData({fluore:s,roll:l,view:n,cursorSpace:o.rpx2px(13)});else wx.hideLoading&&wx.hideLoading(),wx.showToast({title:-2==t?"网络不佳，获取弹幕失败":"网络不佳，获取弹幕失败！",icon:"none",duration:2e3}),n.windowWidth=i.windowWidth,n.windowHeight=i.windowHeight,n.IOS=i.IOS,n.tleft=i.windowWidth/2?i.windowWidth/2:150,l.top=i.windowHeight-l.fz/2,l.isReStart&&setTimeout(function(){d.start(!0)},50),d.setData({fluore:s,roll:l,view:n}),1==n.category?this.ftart(!0):setTimeout(function(){d.start(!0)},50)})}catch(t){console.log(t)}},getNavigateToMiniProgram:function(){o.curVersionBiggerThan("2.0.6")?this.setData({naviToMiniProgramVisible:!1}):this.setData({naviToMiniProgramVisible:!0})},back:function(){wx.navigateBack({delta:1})},onShareAppMessage:function(){var t="";console.log("isRollShow:"+this.data.view.category),r.isNull(this.data.curBarrageInfo)?this.data.view.category==a.BarrageType.NORMAL?this.data.curBarrageInfo=new a.BarrageInfo(a.BarrageType.NORMAL,this.data.roll):this.data.curBarrageInfo=new a.BarrageInfo(a.BarrageType.FLUORE,this.data.fluore):this.data.view.category==a.BarrageType.NORMAL?(this.data.curBarrageInfo.setData(this.data.roll),this.data.curBarrageInfo.setType(a.BarrageType.NORMAL)):(this.data.curBarrageInfo.setData(this.data.fluore),this.data.curBarrageInfo.setType(a.BarrageType.FLUORE)),t=getApp().getLogic().getBarrageIdForShare(),this.data.curBarrageInfo.setId(t);var o=this,s="/pages/index/index?ud="+t+"&uuid="+getApp().getLogic().getUUID();return console.log("onAppShareMessage:"+s),{title:"快点开看我说了啥",path:s,imageUrl:"https://scdm-1254308649.file.myqcloud.com/common/scdm_share_index.png",success:function(r){console.log("分享成功 index....."),getApp().getLogic().addBarrage(o.data.curBarrageInfo,function(t,r){if(-3==t){var s=o.data.view;if(s.footShow=!0,o.data.view.category==a.BarrageType.NORMAL){o.data.rollShare=i.findStrAndRemoveFromArray(o.data.rollShare,o.data.curBarrageInfo.getText());var n=o.data.roll;n.txt=n.defaultTxt,o.setData({temptxt:"",roll:n,view:s})}else{o.data.fluoreShare=i.findStrAndRemoveFromArray(o.data.fluoreShare,o.data.curBarrageInfo.getText());var l=e.getInfo("fluore");o.setData({fluore:l,view:s})}o.start(!0)}}),getApp().getLogic().resetBarrageIdForShare(),console.log("share message succ id:"+t,"uuid:"+getApp().getLogic().getUUID()),getApp().getLogic().updateShareBarrage(t)}}},showZhezhao:function(){var t=this.data.yinyu_fuli_hint;t.showZhezhao=!0,this.setData({yinyu_fuli_hint:t})},hideZhezhao:function(){var t=this.data.yinyu_fuli_hint;t.showZhezhao=!1,this.setData({yinyu_fuli_hint:t})}}); 
 			}); 	require("pages/index/index.js");
 		__wxRoute = 'pages/drainage/drainage';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/drainage/drainage.js';	define("pages/drainage/drainage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=require("../../server/StatisticsLogic.js"),t=require("../../utils/SystemHelper.js");Page({data:{defaultData:[{cat:"donation",slogan:"向开发者赞赏",img:"",name:"赞赏",appid:"wx18a2ac992306a5a4",appurl:"pages/apps/largess/detail?accountId=77738"},{cat:"program",slogan:"你的优惠券，尽在小券包",img:"https://shenjiaokj.com/public_dls/upload/recommend/20180118/logo_5a5ff8c8f090d6.17863915.png",name:"小券包",appid:"wx6ea39853a45f470f"},{cat:"program",slogan:"精心的一句话，让萌翻牌牌们帮你举起来吧！",img:"/img/mfpp.png",name:"萌翻牌牌",appid:"wxf5c9e529b32bf3f2"},{cat:"program",slogan:"海量真人图片，等你来主持颜值正义",img:"/img/placards.jpg",name:"颜擂台",appid:"wxa2010ca9bca8d36d"},{cat:"program",slogan:"精心的一句话，让萌翻牌牌们帮你举起来吧！",img:"https://shenjiaokj.com/public_dls/upload/recommend/20180115/logo_5a5c749dd00991.84192323.jpeg",name:"游戏码",appid:"wx73c9987386ac24d6"},{cat:"public"},{cat:"redpack",slogan:"快来领取支付宝跨年红包！1月1日起还有机会额外获得专享红包哦！复制此消息，打开最新版支付宝就能领取！i5jJli96Gj"}],join:!1,startdefault:!1,AdImg:"",AdId:"",naviToMiniProgramVisible:!0,yinyu_fuli_hint:{showZhezhao:!1}},closeJoin:function(){this.setData({join:!1})},saveImg:function(a){var t=a.currentTarget.dataset.key,o=this.data.startdefault;wx.showLoading({title:"处理中"}),o?wx.saveImageToPhotosAlbum({filePath:t,success:function(a){wx.hideLoading(),wx.showModal({title:"提示",content:"图片已保存到相册，请在微信扫码打开",showCancel:!1,success:function(a){a.confirm}})}}):wx.getImageInfo({src:t,success:function(a){wx.saveImageToPhotosAlbum({filePath:a.path,success:function(a){wx.hideLoading(),wx.showModal({title:"提示",content:"图片已保存到相册，请在微信扫码打开",showCancel:!1,success:function(a){a.confirm}})},fail:function(a){console.log(a)}})}})},goProduct:function(t){var o=t.currentTarget.dataset.key,i=void 0;i="pages/index/index",o.appurl&&(i=o.appurl),console.log(o.appid,i),a.reportSourceRecordGo(o.appid),wx.navigateToMiniProgram&&wx.navigateToMiniProgram({appId:o.appid,path:i,success:function(a){},fail:function(a){console.log(a)}})},openJoin:function(){wx.setClipboardData&&wx.setClipboardData({data:"风雨晓程",success:function(a){}}),this.setData({join:!0})},getRedpack:function(a){var t=a.currentTarget.dataset.key;wx.setClipboardData&&wx.setClipboardData({data:t,success:function(a){wx.showModal({title:"提示",content:"打开吱付宝，领取红包",showCancel:!1,success:function(a){a.confirm}})}})},getNavigateToMiniProgram:function(){t.curVersionBiggerThan("2.0.6")?this.setData({naviToMiniProgramVisible:!1}):this.setData({naviToMiniProgramVisible:!0}),console.log(this.data.naviToMiniProgramVisible)},AdCount:function(t){a.reportSourceRecordGo(t.currentTarget.dataset.appid)},onLoad:function(){var a=this,o=this.data.defaultData,i=void 0,e=this;wx.request({url:"https://shenjiaokj.com/sjkj_api/api/recommend",header:{"secret-token":"az4ZpQ7km18xy3dhvQ5JrpMgROiHdwMo"},success:function(t){console.log(t.data.data);try{i=t.data.data,i=i.filter(function(a){return"手持弹幕"!=a.name}),a.setData({dsts:i})}catch(t){a.setData({dsts:o,startdefault:!0})}e.getNavigateToMiniProgram()},fail:function(t){a.setData({dsts:o,startdefault:!0})}}),wx.request({url:"https://shenjiaokj.com/sjkj_api/api/adStatus?id=about_applet",success:function(a){var t=a.data;null!=t&&1==t.code&&1==t.status?e.showBottomAd(!0):e.showBottomAd(!1),console.log(t)},fail:function(a){var t=a.data;e.showBottomAd(!0),console.log(t)}}),this.setData({top:t.getStatusBarHeight()+"rpx"})},showBottomAd:function(a){this.setData({showBottomAd:a})},back:function(){wx.navigateBack({delta:1})},showZhezhao:function(){var a=this.data.yinyu_fuli_hint;a.showZhezhao=!0,this.setData({yinyu_fuli_hint:a})},hideZhezhao:function(){var a=this.data.yinyu_fuli_hint;a.showZhezhao=!1,this.setData({yinyu_fuli_hint:a})}}); 
 			}); 	require("pages/drainage/drainage.js");
 		__wxRoute = 'pages/particle/particle';__wxRouteBegin = true; 	define("pages/particle/particle.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../server/BarrageInfo.js");var t=require("../../server/BarrageInfoPartice.js"),e=require("../../utils/CommonHelper.js"),a=require("../../utils/SystemHelper.js"),r=require("../../utils/StringHelper.js"),i=require("../../server/ParticeLogic.js");Page({data:{view:null,roll:null,menuTapCurrent:2,toView_color:"c1",toView_bgcolor:"c1",order:["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12","c13","c14","c15"],focus:!1,temptxt:"",isAndroid:!1,rollTextHaveFace:!1,toView_pcolor:"c1",particeOrder:["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12"],supportCanvas:!0,isHorizontal:!0,windowWidth:0,windowHeight:0,showMakeFailDialog:!1,isReady:!1},particeLogic:null,curBarrageInfo:null,fromShareId:"",triggerStartInSetView:!1,rollShare:[],setInfo:function(){var t=this.data.view;t.isSet=!0,t.footShow=!1,this.setData({view:t})},focus:function(){this.setData({focus:!0})},inputEnd:function(t){this.curBarrageInfo.setText(this.data.temptxt),this.triggerStartInSetView||this.start();var e=this.data.view;e.footShow=!1,this.setData({focus:!1,view:e})},listenerVal:function(t){this.data.temptxt=t.detail.value;var e=r.spliteTextByChar(this.data.temptxt," ",5);this.setData({temptxt:e})},swFluore:function(){wx.navigateTo({url:"../../pages/styleList/index"})},setView:function(){var t=this.data.view;this.data.roll;t.footShow?t.footShow=!1:(t.footShow=!0,this.triggerStartInSetView=!1,t.isSet&&this.doneSet()),a.ScreenOn(),this.setData({view:t}),t.footShow||(this.start(),this.triggerStartInSetView=!0)},doneSet:function(){var t=this.data.view;t.isSet=!1,t.footShow=!0,this.setData({view:t})},goDrainage:function(){wx.navigateTo({url:"../../pages/drainage/drainage"})},menuTap:function(t){var e=t.currentTarget.dataset.current;this.setData({menuTapCurrent:e})},reportCurrentBarrage:function(){},start:function(t){var a=this;this.particeLogic.setFontColor(this.curBarrageInfo.getFontColor1(),this.curBarrageInfo.getFontColor2()),this.particeLogic.setBgColor(this.curBarrageInfo.getBgColor()),!e.isNull(t)&&t||this.curBarrageInfo.setText(this.data.temptxt);var r=this;this.curBarrageInfo.getText()==this.curBarrageInfo.getData().defaultTxt||this.rollShare.some(function(t){return t==a.curBarrageInfo.getText()})||(this.rollShare.push(this.curBarrageInfo.getText()),this.rollShare.length>10&&this.rollShare.shift(),this.reportCurrentBarrage()),e.isEmpty(getApp().getLogic().getBarrageInfoTemp())?(r.showMakeDataLoading(!0),getApp().getLogic().loadBarrageInfoTemp(),setTimeout(function(){r.start(t)},1e3)):0==this.particeLogic.start(this.curBarrageInfo)&&r.showMakeDataLoading(!0)},setpcol:function(t){var e=t.currentTarget.dataset.key,a=this.curBarrageInfo.getData();if(a.pckey==e)return!1;a.pckey=e,this.setData({roll:a}),this.particeLogic.setFontColor(a.pcArray1[e],a.pcArray2[e]),e>=3?this.setData({toView_pcolor:this.data.particeOrder[e-3]}):this.setData({toView_pcolor:this.data.particeOrder[0]})},setCol:function(t){var e=this.data.roll,a=t.currentTarget.dataset.key;this.data.view;if(e.ckey==a)return!1;e.col=e.cArray[a],e.ckey=a,this.setData({roll:e}),this.particeLogic.setFontColor(e.col),a>=5?this.setData({toView_color:this.data.order[a-5]}):this.setData({toView_color:this.data.order[0]})},setbgCol:function(t){var e=this.curBarrageInfo.getData(),a=t.currentTarget.dataset.key;this.data.view;if(e.bgckey==a)return!1;this.particeLogic.setBgColor(this.curBarrageInfo.getBgColor()),e.bgckey=a,this.setData({roll:e})},setPattern:function(t){var e=this.curBarrageInfo.getData(),a=t.currentTarget.dataset.key;this.data.view;if(e.playMode==a)return!1;e.playMode=a,this.setData({roll:e}),console.log(e.playMode)},goList:function(){wx.redirectTo({url:"../../pages/styleList/index"})},closeMakeFailDlg:function(){this.setData({showMakeFailDialog:!1})},retry:function(){this.closeMakeFailDlg(),this.start()},goNormal:function(){var t=this.curBarrageInfo.getText();getApp().setOtherPathToNoramlText("Particle",t),wx.redirectTo({url:"../../pages/index/index?fromOtherPage=Particle"})},onLoad:function(r){l=this;if(this.setData({isAndroid:!a.systemInfo().IOS}),null==this.particeLogic){this.particeLogic=new i.ParticeLogic(!this.data.isAndroid);var o=a.getWindowWidth(),s=a.getWindowHeight(),n=i.isHorizontalMode();this.setData({windowWidth:o,windowHeight:s,isHorizontal:n});var c=new i.Canvas("canvasForShow",o,s);new i.Canvas("canvasForBuild",n?s:o,n?o:s);this.particeLogic.setCanvas(c,c),this.particeLogic.setMakeParticeDataCallback(function(t,e){t?l.showMakeDataLoading(!1):(console.error("make date fail"),l.setData({showMakeFailDialog:!0}))})}i.checkClientIsSurpport()||(getApp().aldstat.sendEvent("unvisible","particle"),this.setData({supportCanvas:!1}));var g=t.getConfigInfo("roll"),l=this,h=t.getConfigInfo("view");this.curBarrageInfo=new t.BarrageInfoPartice(g),this.setData({roll:g,view:h,cursorSpace:a.rpx2px(13)}),e.isEmpty(r.ud)||e.isEmpty(r.uuid)||(console.log("particle onload barrage id:"+r.ud+" uuid:"+r.uuid),getApp().getLogic().getBarrage(r.ud,r.uuid,function(t,e){if(1==t){l.curBarrageInfo=e;var a=l.data.view;a.footShow=!1,l.data.temptxt=l.curBarrageInfo.getText(),l.setData({roll:l.curBarrageInfo.getData(),view:a}),l.data.isReady?l.start(!0):(l.showMakeDataLoading(!0),setTimeout(function(){l.start(!0)},500))}else l.data.isReady?l.start(!1):(l.showMakeDataLoading(!0),setTimeout(function(){l.start(!0)},500))}),this.fromShareId=r.ud)},onReady:function(){if(this.data.supportCanvas){var t=this;e.isEmpty(this.fromShareId)&&setTimeout(function(){t.start()},100)}this.data.isReady=!0},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(t){console.log(this.curBarrageInfo.data),this.curBarrageInfo.setId(getApp().getLogic().getBarrageIdForShare());var e=this,a="/pages/particle/particle?ud="+this.curBarrageInfo.getId()+"&uuid="+getApp().getLogic().getUUID();return console.log("particle share :"+a),{title:"我有话要对你说↓",path:a,imageUrl:"https://scdm-1254308649.file.myqcloud.com/common/scdm_share_lizi.png",success:function(t){console.log("Share succ........... particle"),getApp().getLogic().addBarrage(e.curBarrageInfo,function(t,a){if(-3==t){var i=e.data.view;i.footShow=!0,e.data.rollShare=r.findStrAndRemoveFromArray(e.data.rollShare,e.data.curBarrageInfo.getText());var o=e.data.roll;o.txt=o.defaultTxt,e.setData({temptxt:"",roll:o,view:i}),e.start(!0)}}),getApp().getLogic().resetBarrageIdForShare(),console.log("share message succ id:"+e.curBarrageInfo.getId(),"uuid:"+getApp().getLogic().getUUID()),getApp().getLogic().updateShareBarrage(e.curBarrageInfo.getId())}}},showMakeDataLoading:function(t){this.data.isAndroid&&(t?wx.showLoading({title:"生成中..."}):wx.hideLoading())}}); 
 			}); 	require("pages/particle/particle.js");
 		__wxRoute = 'pages/gif/gif';__wxRouteBegin = true; 	define("pages/gif/gif.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../config/ServerConfig.js"),i=require("../../utils/base64.modified.js"),a=require("../../utils/CommonHelper.js"),e=require("../../utils/SystemHelper.js"),o=require("../../server/StatisticsLogic.js");Page({data:{showGifGenerateSucc:!1,gifPath:"",loadingData:{text:"生成中..."},showSaveHint:!1,hintData:{text:""},loadingTimeOut:!1,AdId:"",AdUrl:"",AdImg:"../../img/dlgBg.png",dlgOpacity:"0",naviToMiniProgramVisible:!0,yinyu_fuli_hint:{showZhezhao:!1}},onLoad:function(t){var o=this;if(t.txt){var s=i.encode(t.txt),n=""+(t.fontSize?t.fontSize:170),d=t.color?t.color:"#ffffff",h=t.speed?t.speed:"1",r=t.bgColor?t.bgColor:"#000000";"0"==h&&(h="0.5");var c={text:s,font_color:d,font_speed:h,font_size:n,bg_color:r};getApp().getLogic().makeGif(c,{success:function(t){if(t.data&&1==t.data.code){var i=t.data.data.gif_pic_path,a=t.data.data.width,e=t.data.data.height;if(void 0==a&&(a=320),void 0==e&&(e=80),i)return o.setData({gifPath:i,showGifGenerateSucc:!1,gifWidth:a,gifHeight:e}),void(o.data.loadingTimeOut&&(o.saveGif(),o.setData({showGifGenerateSucc:!0})))}o.makeGifFailed()},fail:function(t){o.makeGifFailed()}})}(o=this).showLoadding("生成中..."),setTimeout(function(){o.showLoadding("生成后记得长按分享哦~"),setTimeout(function(){o.data.loadingTimeOut=!0,a.isEmpty(o.data.gifPath)||(o.saveGif(),o.setData({showGifGenerateSucc:!0}))},2e3)},1e3),this.setData({top:e.getStatusBarHeight()+"rpx"})},makeGifFailed:function(t){this.setData({showGifGenerateSucc:!1}),wx.showToast({icon:"none",title:"注入动图失败"}),setTimeout(function(){wx.navigateBack({delta:1})},2e3)},makeGifAndShowSuccess:function(t){wx.hideLoading()},back:function(){wx.navigateBack({delta:1})},gifLoadSucc:function(){this.makeGifAndShowSuccess()},gifLoadFail:function(){wx.showToast({title:"加载动图失败"})},onShow:function(){if(this.data.showGifGenerateSucc){var t=wx.getStorageSync("visitingTime");t?t<3?(t++,wx.setStorageSync("visitingTime",t),this.setData({showDlg:!0}),this.getAdUrl("scdm_play_hkj")):(this.back(),this.setData({showDlg:!1})):(wx.setStorageSync("visitingTime","1"),this.setData({showDlg:!0}),this.getAdUrl("scdm_play_hkj"))}},getAdUrl:function(i){var a=this;wx.request({url:"https://shenjiaokj.com/sjkj_api/api/buttonEvent",data:{btn_key:"scdm_play_hkj"},header:{"secret-token":t.getSecretToken()},success:function(t){var i="/"+t.data.data.appurl,e=t.data.data.appid,o=t.data.data.bgimg_path_src;a.setData({dlgOpacity:1,AdUrl:i,AdId:e,AdImg:o,showDlg:!1}),a.getNavigateToMiniProgram()}})},showLoadding:function(t){var i={text:t};this.setData({loadingData:i})},goHeiKeJi:function(){if(0==this.data.showDlg){var i=t.getAppId();this.data.AdId==i?wx.redirectTo({url:this.data.AdUrl}):(o.reportSourceRecordGo(this.data.AdId),wx.navigateToMiniProgram({appId:this.data.AdId,path:this.data.AdUrl,success:function(t){},fail:function(t){console.log(t)}}))}},AdCount:function(){o.reportSourceRecordGo(this.data.AdId)},getNavigateToMiniProgram:function(){e.curVersionBiggerThan("2.0.6")?this.setData({naviToMiniProgramVisible:!1}):this.setData({naviToMiniProgramVisible:!0})},closeDlg:function(){0==this.data.showDlg&&wx.navigateBack({delta:1})},previewGif:function(){getApp().aldstat.sendEvent("btn_click","preview"),this.saveGif()},saveGif:function(){wx.previewImage({urls:[this.data.gifPath]})},showZhezhao:function(){var t=this.data.yinyu_fuli_hint;t.showZhezhao=!0,this.setData({yinyu_fuli_hint:t})},hideZhezhao:function(){var t=this.data.yinyu_fuli_hint;t.showZhezhao=!1,this.setData({yinyu_fuli_hint:t})}}); 
 			}); 	require("pages/gif/gif.js");
 	