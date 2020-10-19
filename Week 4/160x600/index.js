(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,434,1200);


(lib.pack1 = function() {
	this.initialize(img.pack1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,382);


(lib.pack3 = function() {
	this.initialize(img.pack3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,146);


(lib.packnew = function() {
	this.initialize(img.packnew);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,331);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.white = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AE2EIQgKgFgIgIIALgOQANAOASAAQALAAAGgGQAGgGAAgIQAAgKgGgFQgHgFgJAAQgHAAgHACQgFACgGAGIgPgFIAAg/IBLAAIAAASIg3AAIAAAgQAGgEAGgCQAGgDAIAAQAIAAAGACQAGACAFAFQAFAEADAIQADAHAAAIQAAAJgDAHQgDAHgGAFQgFAGgJACQgHADgKAAQgPAAgJgFgAiSEHQgFgFAAgLIAAgvIgOAAIAAgQIAOAAIAAgWIARAAIAAAWIARAAIAAAQIgRAAIAAArQABADACAEQACADADAAIAFgBIADgCIAFANQgDADgEABQgDACgHAAQgKAAgGgGgAjbEJQgJgDgFgGQgFgFgEgIQgDgIAAgKQAAgIADgJQAEgHAFgGQAFgGAJgDQAJgEAIAAIALACIAIADIAHAFIAFAFIgMALQgGgKgMAAQgMAAgGAIQgHAHAAAMQAAAHABAEIAGAJQACADAGADQADACAHAAQAMAAAGgKIAMALQgEAGgIAEQgHAFgMAAQgKAAgHgEgAlTEIQgLgEgIgIQgIgIgEgLQgEgLAAgMQAAgMAEgLQAEgLAIgIQAIgIALgEQAKgFANAAQANAAALAFQAKAEAIAIQAHAIAEALQAFAKAAANQAAANgFAKQgEALgHAIQgIAIgKAEQgLAFgNAAQgNAAgKgFgAlMCsQgGADgGAGQgFAGgCAHQgCAGgBAKQABAKACAGQACAHAFAGQAGAGAGADQAIADAIAAQAIAAAIgDQAGgDAFgGQAFgFADgIQACgIAAgIQAAgIgCgIQgDgIgFgFQgFgGgGgDQgIgDgIAAQgIAAgIADgAC+ELIAAgQIAvgnQAHgHAEgGQADgGAAgHQAAgEgCgDIgEgGIgHgDIgIgBQgKAAgHAEQgHAEgGAGIgMgNQAIgJALgFQAMgEALAAQAKAAAGACQAHACAGAFQAFADAEAHQAEAIAAAHQAAAHgEAJIgKAPIgQAPIgUARIAyAAIAAASgABaELIAAgaIg2AAIAAgQIAvhIIAcAAIAABGIAOAAIAAASIgOAAIAAAagAA4DfIAiAAIAAg0gAg8ELIAAgQIAwgnQAIgJACgEQACgGAAgHQAAgFgBgCQgBgEgDgCQgDgCgEgBIgIgBQgKAAgHAEQgGADgHAHIgMgNQAIgJAMgFQALgEALAAQAKAAAGACQAGACAGAFQAGADADAHQAEAHAAAIQAAAJgEAHQgFAJgFAGQgGAIgJAHQgHAIgNAJIAxAAIAAASgACHDpIAAgPIApAAIAAAPgAEfA3QgIgCgHgHIAIgNIAFAEIAHAEIAIACIAIABQAHAAAFgDQAEgDAAgFQAAgEgEgCIgJgDIgYgHQgFgDgEgEQgDgEAAgIQAAgFABgEQACgEAFgEQADgDAHgDQAIgCAFAAQAKAAAJAEQAIACAFAGIgHAMQgEgEgGgDQgHgCgIAAQgGAAgFACQgDADAAAFQgBACAEACIAWAGIAMAEQAFADAEAFQADAFAAAIQAAAGgCAEQgDAGgEACQgDADgIADQgHACgHAAQgLAAgJgEgADpA1QgEgFAAgLIAAguIgPAAIAAgQIAPAAIAAgWIARAAIAAAWIARAAIAAAQIgRAAIAAAqQAAADACAEQADADADAAIAEgBIAEgCIAEANQgCADgFABQgDACgHAAQgKAAgGgGgAAmA0QgGgIAAgLIAAg6IASAAIAAAzQAAAKAEADQAEAEAIAAQAHAAAFgDQAGgEADgEIAAg5IASAAIAABSIgSAAIAAgLQgDADgJAGQgHAEgKAAQgNAAgHgHgAguA3QgIgEgEgFQgFgFgEgJQgDgIAAgJQAAgIADgHQAEgJAFgFQAEgFAIgEQAKgEAIAAQAIAAAKAEQAIAEAEAFQAFAFAEAJQADAHAAAIQAAAJgDAIQgEAJgFAFQgEAFgIAEQgKAEgIAAQgIAAgKgEgAgmgJIgIAGQgDADgBAFQgBAFAAAFQAAAGABAFQABAFADAEIAIAGQAEACAGAAQAGAAAEgCQAFgCADgEQADgEACgFQABgFAAgGQAAgFgBgFQgCgFgDgDQgDgDgFgDQgFgCgFAAQgEAAgGACgAiBA3QgJgDgFgGQgFgFgEgIQgDgIAAgKQAAgIADgIQAEgHAFgGQAFgGAJgDQAJgEAIAAQAGAAAEACIAJADIAHAFIAFAFIgMALQgGgKgMAAQgMAAgGAIQgHAGAAAMQAAAHABAEIAGAJQACADAGADQADACAHAAQAMAAAGgKIAMALQgEAGgIAEQgHAFgMAAQgKAAgHgEgAjdA3QgIgCgIgHIAJgNIAEAEIAHAEIAIACIAIABQAIAAAEgDQAFgDAAgFQAAgDgFgDIgJgDIgLgDQgGgBgGgDQgGgDgDgEQgFgFAAgHQABgEACgFQABgDAFgFQADgDAHgDQAIgCAGAAQAJAAAKAEQAFACAIAGIgHAMQgFgEgGgDQgHgCgHAAQgHAAgEACQgEADAAAFQAAACAEACIAVAGIALAEQAGADAEAFQAEAFAAAIQAAAGgDAEQgCAFgEADQgEADgHADQgIACgGAAQgMAAgIgEgAlhA4QgGgDgFgGQgFgEgDgJQgCgJAAgKQAAgJACgHQADgIAFgGQAEgGAHgDQAHgDAIAAQAHAAAHAEQAIAEAEAGIAAgrIASAAIAABxIgSAAIAAgMQgEAGgIAEQgHAEgHAAQgHAAgIgDgAlXgJQgEACgDAEQgDADgBAEIgCALQAAAHACAEQABAGADADQADADAEADQAEACAGAAIAGgBIAGgCIAFgEIAEgEIAAggIgEgEIgFgEIgGgCIgGgBQgGAAgEACgAC4A5IAAg0QgBgIgEgEQgEgEgIAAQgHAAgFAEQgGADgDAEIAAA5IgSAAIAAhSIASAAIAAAMIAFgFIAHgEQADgDAFAAQAEgCAFAAQANAAAHAHQAGAIABAMIAAA5gAkPA5IAAhSIASAAIAABSgAkOgmQgDgDAAgFQAAgEADgDQAEgEAEAAQAFAAADAEQADADAAAEQAAAFgDADQgDADgFAAQgEAAgEgDgADdh6QgIgCgIgHIAJgNQAEAFAHADQAGACAJAAIAJgBIAIgEQADgCACgFQACgFABgGIAAgJQgHAHgFADQgGAEgJAAQgHAAgIgDQgGgCgFgGQgFgFgDgIQgCgIAAgKQAAgLACgHQADgIAFgFQAEgFAHgEQAIgDAHAAQAHAAAHAEQAIAEAFAGIAAgMIARAAIAABOQAAAMgEAHQgCAGgIAFQgFAFgIABIgPACQgMAAgHgDgADijWQgGAIAAAMQAAALAGAIQAHAHAKAAQAGAAAHgDQAGgEADgEIAAgfQgDgEgGgEQgHgDgGAAQgKAAgHAHgAhLh5IAAhyIASAAIAAAMQAFgHAGgDQAIgEAIAAQAIAAAHADQAGADAFAGQAEAFADAIQACAJAAAJQAAAKgCAJQgDAHgEAGQgFAGgGADQgHADgIAAQgHAAgIgEQgIgEgEgGIAAArgAgwjaQgGAEgDAEIAAAhIAEAEIAFAEIAGACIAGABQALAAAGgIQAHgHAAgNQAAgMgHgHQgGgIgLAAQgGAAgGADgABgiaQgGgDgFgHIAAAMIgSAAIAAhyIASAAIAAArQAEgGAHgEQAJgEAGAAQAIAAAGADQAIADAEAGQAFAFADAJQACAIABAJQgBAKgCAJQgEAJgEAEQgEAGgIADQgGADgIAAQgHAAgIgEgABejaQgHAEgCAEIAAAhQACAFAHADQAFADAHAAQAKAAAHgIQAGgHAAgNIgBgLIgGgIIgHgGQgEgCgFAAQgHAAgFADgAiZiaQgHgDgGgGQgFgGgDgIQgDgIAAgJQAAgIADgIQADgIAFgGQAGgGAHgDQAJgEAJAAQAIAAAKAEQAIAEAFAFQAFAHAEAHQADAIgBAIQABAJgDAIQgEAHgFAHQgFAFgIAEQgKAEgIAAQgJAAgJgEgAiRjbQgEADgEADQgDAEgBAFQgBAFAAAFQAAAGABAFQABAFADAEQAEAEAEACQAEACAGAAQAGAAAEgCQAEgCADgEQADgEACgFQACgEAAgHQAAgGgCgEQgCgFgDgEQgDgEgEgCQgGgCgEAAQgEAAgGACgAllibQgLgFgJgIIAMgQQAGAHAIAEQAKAFAMAAIAKgBQAGgCABgCIAEgFIABgGQAAgFgEgEIgNgFIgPgEIgQgGQgHgDgGgHQgEgGAAgKQAAgHACgHQADgGAFgEQAEgEAKgDQAIgDAIAAQAOAAAKAFQAKADAJAIIgLAPQgIgHgIgDQgIgDgJAAQgJAAgFAEQgFAEgBAGQAAAFAGADIAMAFIAQAEQAHACAJAEQAGAEAGAHQAFAGgBAKQAAAJgCAFQgCAGgGAFQgFAFgIADQgJADgLAAQgPAAgMgFgACmiYIAAhTIASAAIAABTgAjViYIAAg0QAAgJgFgEQgEgEgHAAQgIAAgFAEQgGADgDAEIAAA6IgSAAIAAhyIASAAIAAArIAFgFIAHgEQAEgDAEAAQAEgCAGAAQAMAAAHAHQAHAHAAAMIAAA7gACnj4QgDgDAAgFQAAgEADgDQADgEAFAAQAEAAAEAEQADADAAAEQAAAFgDADQgEADgEAAQgFAAgDgDg");
	this.shape.setTransform(42.65,153.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.white, new cjs.Rectangle(4.9,126.7,75.5,53.7), null);


(lib.topBlack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bKKIAA0TMAu3AAAIAAUTg");
	this.shape.setTransform(150,65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.topBlack, new cjs.Rectangle(0,0,300,130), null);


(lib.shopbig = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Isolation_Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E52823").s().p("AE2EIQgKgFgIgIIALgOQANAOASAAQALAAAGgGQAGgGAAgIQAAgKgGgFQgHgFgJAAQgHAAgHACQgFACgGAGIgPgFIAAg/IBLAAIAAASIg3AAIAAAgQAGgEAGgCQAGgDAIAAQAIAAAGACQAGACAFAFQAFAEADAIQADAHAAAIQAAAJgDAHQgDAHgGAFQgFAGgJACQgHADgKAAQgPAAgJgFgAiSEHQgFgFAAgLIAAgvIgOAAIAAgQIAOAAIAAgWIARAAIAAAWIARAAIAAAQIgRAAIAAArQABADACAEQACADADAAIAFgBIADgCIAFANQgDADgEABQgDACgHAAQgKAAgGgGgAjbEJQgJgDgFgGQgFgFgEgIQgDgIAAgKQAAgIADgJQAEgHAFgGQAFgGAJgDQAJgEAIAAIALACIAIADIAHAFIAFAFIgMALQgGgKgMAAQgMAAgGAIQgHAHAAAMQAAAHABAEIAGAJQACADAGADQADACAHAAQAMAAAGgKIAMALQgEAGgIAEQgHAFgMAAQgKAAgHgEgAlTEIQgLgEgIgIQgIgIgEgLQgEgLAAgMQAAgMAEgLQAEgLAIgIQAIgIALgEQAKgFANAAQANAAALAFQAKAEAIAIQAHAIAEALQAFAKAAANQAAANgFAKQgEALgHAIQgIAIgKAEQgLAFgNAAQgNAAgKgFgAlMCsQgGADgGAGQgFAGgCAHQgCAGgBAKQABAKACAGQACAHAFAGQAGAGAGADQAIADAIAAQAIAAAIgDQAGgDAFgGQAFgFADgIQACgIAAgIQAAgIgCgIQgDgIgFgFQgFgGgGgDQgIgDgIAAQgIAAgIADgAC+ELIAAgQIAvgnQAHgHAEgGQADgGAAgHQAAgEgCgDIgEgGIgHgDIgIgBQgKAAgHAEQgHAEgGAGIgMgNQAIgJALgFQAMgEALAAQAKAAAGACQAHACAGAFQAFADAEAHQAEAIAAAHQAAAHgEAJIgKAPIgQAPIgUARIAyAAIAAASgABaELIAAgaIg2AAIAAgQIAvhIIAcAAIAABGIAOAAIAAASIgOAAIAAAagAA4DfIAiAAIAAg0gAg8ELIAAgQIAwgnQAIgJACgEQACgGAAgHQAAgFgBgCQgBgEgDgCQgDgCgEgBIgIgBQgKAAgHAEQgGADgHAHIgMgNQAIgJAMgFQALgEALAAQAKAAAGACQAGACAGAFQAGADADAHQAEAHAAAIQAAAJgEAHQgFAJgFAGQgGAIgJAHQgHAIgNAJIAxAAIAAASgACHDpIAAgPIApAAIAAAPgAEfA3QgIgCgHgHIAIgNIAFAEIAHAEIAIACIAIABQAHAAAFgDQAEgDAAgFQAAgEgEgCIgJgDIgYgHQgFgDgEgEQgDgEAAgIQAAgFABgEQACgEAFgEQADgDAHgDQAIgCAFAAQAKAAAJAEQAIACAFAGIgHAMQgEgEgGgDQgHgCgIAAQgGAAgFACQgDADAAAFQgBACAEACIAWAGIAMAEQAFADAEAFQADAFAAAIQAAAGgCAEQgDAGgEACQgDADgIADQgHACgHAAQgLAAgJgEgADpA1QgEgFAAgLIAAguIgPAAIAAgQIAPAAIAAgWIARAAIAAAWIARAAIAAAQIgRAAIAAAqQAAADACAEQADADADAAIAEgBIAEgCIAEANQgCADgFABQgDACgHAAQgKAAgGgGgAAmA0QgGgIAAgLIAAg6IASAAIAAAzQAAAKAEADQAEAEAIAAQAHAAAFgDQAGgEADgEIAAg5IASAAIAABSIgSAAIAAgLQgDADgJAGQgHAEgKAAQgNAAgHgHgAguA3QgIgEgEgFQgFgFgEgJQgDgIAAgJQAAgIADgHQAEgJAFgFQAEgFAIgEQAKgEAIAAQAIAAAKAEQAIAEAEAFQAFAFAEAJQADAHAAAIQAAAJgDAIQgEAJgFAFQgEAFgIAEQgKAEgIAAQgIAAgKgEgAgmgJIgIAGQgDADgBAFQgBAFAAAFQAAAGABAFQABAFADAEIAIAGQAEACAGAAQAGAAAEgCQAFgCADgEQADgEACgFQABgFAAgGQAAgFgBgFQgCgFgDgDQgDgDgFgDQgFgCgFAAQgEAAgGACgAiBA3QgJgDgFgGQgFgFgEgIQgDgIAAgKQAAgIADgIQAEgHAFgGQAFgGAJgDQAJgEAIAAQAGAAAEACIAJADIAHAFIAFAFIgMALQgGgKgMAAQgMAAgGAIQgHAGAAAMQAAAHABAEIAGAJQACADAGADQADACAHAAQAMAAAGgKIAMALQgEAGgIAEQgHAFgMAAQgKAAgHgEgAjdA3QgIgCgIgHIAJgNIAEAEIAHAEIAIACIAIABQAIAAAEgDQAFgDAAgFQAAgDgFgDIgJgDIgLgDQgGgBgGgDQgGgDgDgEQgFgFAAgHQABgEACgFQABgDAFgFQADgDAHgDQAIgCAGAAQAJAAAKAEQAFACAIAGIgHAMQgFgEgGgDQgHgCgHAAQgHAAgEACQgEADAAAFQAAACAEACIAVAGIALAEQAGADAEAFQAEAFAAAIQAAAGgDAEQgCAFgEADQgEADgHADQgIACgGAAQgMAAgIgEgAlhA4QgGgDgFgGQgFgEgDgJQgCgJAAgKQAAgJACgHQADgIAFgGQAEgGAHgDQAHgDAIAAQAHAAAHAEQAIAEAEAGIAAgrIASAAIAABxIgSAAIAAgMQgEAGgIAEQgHAEgHAAQgHAAgIgDgAlXgJQgEACgDAEQgDADgBAEIgCALQAAAHACAEQABAGADADQADADAEADQAEACAGAAIAGgBIAGgCIAFgEIAEgEIAAggIgEgEIgFgEIgGgCIgGgBQgGAAgEACgAC4A5IAAg0QgBgIgEgEQgEgEgIAAQgHAAgFAEQgGADgDAEIAAA5IgSAAIAAhSIASAAIAAAMIAFgFIAHgEQADgDAFAAQAEgCAFAAQANAAAHAHQAGAIABAMIAAA5gAkPA5IAAhSIASAAIAABSgAkOgmQgDgDAAgFQAAgEADgDQAEgEAEAAQAFAAADAEQADADAAAEQAAAFgDADQgDADgFAAQgEAAgEgDgADdh6QgIgCgIgHIAJgNQAEAFAHADQAGACAJAAIAJgBIAIgEQADgCACgFQACgFABgGIAAgJQgHAHgFADQgGAEgJAAQgHAAgIgDQgGgCgFgGQgFgFgDgIQgCgIAAgKQAAgLACgHQADgIAFgFQAEgFAHgEQAIgDAHAAQAHAAAHAEQAIAEAFAGIAAgMIARAAIAABOQAAAMgEAHQgCAGgIAFQgFAFgIABIgPACQgMAAgHgDgADijWQgGAIAAAMQAAALAGAIQAHAHAKAAQAGAAAHgDQAGgEADgEIAAgfQgDgEgGgEQgHgDgGAAQgKAAgHAHgAhLh5IAAhyIASAAIAAAMQAFgHAGgDQAIgEAIAAQAIAAAHADQAGADAFAGQAEAFADAIQACAJAAAJQAAAKgCAJQgDAHgEAGQgFAGgGADQgHADgIAAQgHAAgIgEQgIgEgEgGIAAArgAgwjaQgGAEgDAEIAAAhIAEAEIAFAEIAGACIAGABQALAAAGgIQAHgHAAgNQAAgMgHgHQgGgIgLAAQgGAAgGADgABgiaQgGgDgFgHIAAAMIgSAAIAAhyIASAAIAAArQAEgGAHgEQAJgEAGAAQAIAAAGADQAIADAEAGQAFAFADAJQACAIABAJQgBAKgCAJQgEAJgEAEQgEAGgIADQgGADgIAAQgHAAgIgEgABejaQgHAEgCAEIAAAhQACAFAHADQAFADAHAAQAKAAAHgIQAGgHAAgNIgBgLIgGgIIgHgGQgEgCgFAAQgHAAgFADgAiZiaQgHgDgGgGQgFgGgDgIQgDgIAAgJQAAgIADgIQADgIAFgGQAGgGAHgDQAJgEAJAAQAIAAAKAEQAIAEAFAFQAFAHAEAHQADAIgBAIQABAJgDAIQgEAHgFAHQgFAFgIAEQgKAEgIAAQgJAAgJgEgAiRjbQgEADgEADQgDAEgBAFQgBAFAAAFQAAAGABAFQABAFADAEQAEAEAEACQAEACAGAAQAGAAAEgCQAEgCADgEQADgEACgFQACgEAAgHQAAgGgCgEQgCgFgDgEQgDgEgEgCQgGgCgEAAQgEAAgGACgAllibQgLgFgJgIIAMgQQAGAHAIAEQAKAFAMAAIAKgBQAGgCABgCIAEgFIABgGQAAgFgEgEIgNgFIgPgEIgQgGQgHgDgGgHQgEgGAAgKQAAgHACgHQADgGAFgEQAEgEAKgDQAIgDAIAAQAOAAAKAFQAKADAJAIIgLAPQgIgHgIgDQgIgDgJAAQgJAAgFAEQgFAEgBAGQAAAFAGADIAMAFIAQAEQAHACAJAEQAGAEAGAHQAFAGgBAKQAAAJgCAFQgCAGgGAFQgFAFgIADQgJADgLAAQgPAAgMgFgACmiYIAAhTIASAAIAABTgAjViYIAAg0QAAgJgFgEQgEgEgHAAQgIAAgFAEQgGADgDAEIAAA6IgSAAIAAhyIASAAIAAArIAFgFIAHgEQAEgDAEAAQAEgCAGAAQAMAAAHAHQAHAHAAAMIAAA7gACnj4QgDgDAAgFQAAgEADgDQADgEAFAAQAEAAAEAEQADADAAAEQAAAFgDADQgEADgEAAQgFAAgDgDg");
	this.shape.setTransform(42.65,153.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shopbig, new cjs.Rectangle(4.6,3.1,213.9,177.3), null);


(lib.prod3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pack1();
	this.instance.setTransform(140,-315,0.9902,0.9902);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.prod3, new cjs.Rectangle(140,-315,153.5,378.3), null);


(lib.prod2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pack3();
	this.instance.setTransform(79,57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.prod2, new cjs.Rectangle(79,57,118,146), null);


(lib.prod1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.packnew();
	this.instance.setTransform(-61,-148,0.9025,0.9025);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.prod1, new cjs.Rectangle(-61,-148,241,298.7), null);


(lib.petsmart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWAWQgJgKAAgMQAAgNAKgJQAJgJAMAAQANAAAKAKQAJAJAAAMQgBANgJAKQgKAJgMAAQgNgBgJgJgAgKgVQgIAFgDAIIAAAIIAAAAQAMgTAVAAIAAAAIgHgEIgFgBQgFAAgFADg");
	this.shape.setTransform(86.9159,386.6257,2.2767,2.2767);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1A4IAPgkQAOALATAAQALABAAgIQAAgFgKgCIgJgCQgPgDgJgIQgKgJABgOQAAgXASgNQAQgNAWAAQATAAAWAKIgMAgQgPgGgOAAQgKAAAAAHQAAADADACIARAEQAiAHAAAdQgBAXgSANQgQANgWAAQgbAAgXgNg");
	this.shape_1.setTransform(76.0483,415.5427,2.2767,2.2767);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHgAgEAAQAAAGAEAAQAGAAAAgGQAAgFgGAAQgEAAAAAFgAACAEIgBgCQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIAAAAIAAADIgBAAIAAgHIABAAIACABIABABQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAAACgAAAAAIAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIAAAAg");
	this.shape_2.setTransform(195.4036,427.4954,2.2767,2.2767);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWg+IApgBIAoB8IglAAIgFgNIgiABIgDANIglACgAAIAUIgJggIgIAgIARAAg");
	this.shape_3.setTransform(138.2015,410.1355,2.2767,2.2767);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAGA9IgVgjIAAAgIgogCIABh7IA2ADQATACANAMQAPANgBAXQAAAdgUAIIAeAsIgygGgAgOgDIAEAAQAMAAAAgMQAAgHgDgDQgEgDgFAAIgEgBg");
	this.shape_4.setTransform(165.9203,411.16,2.2767,2.2767);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6g3IAngGIAUA3IAWg8IAngEIALB6IgqAEIgDgsIgSAuIgSADIgRgsIgEAvIgrAHg");
	this.shape_5.setTransform(106.6122,412.8106,2.2767,2.2767);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgyA/IABiDIA1AKQAvAGAAApQAAAwgvgEIgOgCIAAAmIgogGgAgJABIAEAAQAMACAAgNQAAgMgMgCIgEAAg");
	this.shape_6.setTransform(5.7549,411.6723,2.2767,2.2767);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVA9IABhXIgYgCIAAgmQAsACAtAIIAAAnIgXgEIgBBYQgLgCgfgEg");
	this.shape_7.setTransform(188.5166,413.3798,2.2767,2.2767);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWA/IAAhaIgWgBIAAghQAqACAvgDIAAAiIgXABIABBZIgXABIgWAAg");
	this.shape_8.setTransform(50.2638,416.7265,2.2767,2.2767);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgpA9IACh9QAqAFAmABIAAAfIgmgCIAAARIAkABIAAAcIgkgBIAAASIAnABIgBAeQggAAgygEg");
	this.shape_9.setTransform(28.2936,415.8842,2.2767,2.2767);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWAKQAPggAegQIAAAFQABAKAHAHQgbAIgTAYIgPAXQABgNAHgQg");
	this.shape_10.setTransform(71.8356,396.4753,2.2767,2.2767);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAzgCQhDgphVAaQBlg0A8A0QAfAZALAkQgRgagigUg");
	this.shape_11.setTransform(40.5878,391.7227,2.2767,2.2767);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.petsmart, new cjs.Rectangle(-5.8,379.4,204.60000000000002,51.80000000000001), null);


(lib.imgMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img1();
	this.instance.setTransform(115,9,0.3096,0.3096);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(97).to({_off:true},1).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(115,9,134.4,371.6);


(lib.ctared = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E52823").s().p("AgOAfQgHgCgGgGIAHgKQADAEAHADQAGACAFAAQAGAAAEgCQADgCAAgDQAAgEgEgCQgDgCgHgCIgNgDQgEgBgEgEQgEgDAAgHQAAgFADgFQADgEAGgDQAGgDAHAAQAPAAALAJIgGAKQgDgEgGgBQgGgDgFAAQgEAAgEADQgDACAAADQAAADAEACIAWAGQAGADADACQAEAGAAAFQAAAKgIAFQgHAGgNAAQgHAAgHgDg");
	this.shape.setTransform(97.575,12.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E52823").s().p("AgKApQgEgFAAgIIAAhIIAOAAIAABFQAAAEABACQAAAAABABQABAAAAAAQABAAAAABQABAAAAAAIAEgBIACgCIAEALQgFAEgIAAQgHAAgFgEg");
	this.shape_1.setTransform(93,11.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E52823").s().p("AgRAdQgHgDgEgIQgDgHAAgLQAAgJADgHQAEgJAHgDQAHgEAIgBQAFAAAGADQAFADAEAFIAAgJIAOAAIAAA/IgOAAIAAgJQgEAFgFADQgHADgEAAQgIgBgHgEgAgMgOQgFAHAAAHQAAAJAFAHQAGAFAHAAQAFABAFgDQAFgDACgDIAAgZQgCgDgFgCQgFgDgFAAQgHAAgGAGg");
	this.shape_2.setTransform(86.425,12.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E52823").s().p("AgPAdQgJgFgDgGQgFgIAAgKQAAgHAFgJQAEgIAHgEQAIgEAIgBQAKABAHAEQAHAEAFAJQAEAIAAAIIAAADIgyAAQABAIAGAFQAEAFAJAAQAGAAAEgCQAGgCACgDIAHAKQgEAEgHACQgGADgKAAQgIgBgIgEgAgLgQQgFAFgBAHIAkAAIgCgIQgDgEgEgCQgDgDgHAAQgHAAgEAFg");
	this.shape_3.setTransform(78.9,12.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E52823").s().p("AgoAsIAAhXIAiAAQANAAALAFQALAHAGAJQAGAKAAAMQAAANgGAKQgGAKgLAFQgLAGgNAAgAgYAfIASAAQAJAAAHgFQAIgEADgHQADgGAAgJQAAgIgDgGQgEgHgHgEQgHgFgJAAIgSAAg");
	this.shape_4.setTransform(70.475,11.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E52823").s().p("AgPAdQgIgEgEgHQgFgIAAgKQAAgHAFgJQADgIAIgEQAJgEAIgBQAJABAIAEQAHAFAEAIQAEAGAAAKIAAADIgyAAQABAJAGAEQAFAFAIAAIAKgCQAHgCACgDIAGAKQgEAEgHACQgGADgJAAQgJgBgIgEgAgMgQQgFAGAAAGIAkAAQAAgEgCgEQgCgEgEgCQgEgDgGAAQgIAAgFAFg");
	this.shape_5.setTransform(58.175,12.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E52823").s().p("AAPAsIAAgoQAAgFgDgEQgEgDgGAAQgFAAgEADQgEACgDADIAAAsIgOAAIAAhXIAOAAIAAAhQADgFAHgDQAFgDAHAAQAKABAGAFQAFAFAAAKIAAAsg");
	this.shape_6.setTransform(50.525,11.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E52823").s().p("AgFAlQgDgFAAgHIAAgkIgLAAIAAgMIALAAIAAgRIAMAAIAAARIAOAAIAAAMIgOAAIAAAhQAAACADADQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIADgBIAEgBIACAKQgEAEgIAAQgIAAgFgEg");
	this.shape_7.setTransform(44.5,11.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E52823").s().p("AgPAdQgIgEgEgHQgFgIAAgKQAAgHAEgJQAFgIAHgEQAIgEAIgBQALABAGAEQAIAFAEAIQAEAIAAAIIAAADIgyAAQABAJAFAEQAGAFAIAAIAKgCQAGgCADgDIAGAKQgFAEgHACQgFADgJAAQgIgBgJgEgAgMgQQgFAFAAAHIAkAAQAAgFgCgDQgDgEgDgCQgFgDgGAAQgHAAgFAFg");
	this.shape_8.setTransform(35.075,12.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E52823").s().p("AgPAdQgIgEgEgHQgFgIAAgKQAAgHAFgJQAEgIAHgEQAIgEAIgBQAKABAIAEQAGAEAFAJQAEAIAAAIIAAADIgyAAQABAIAGAFQAEAFAJAAIAKgCQAGgCACgDIAHAKQgEAEgHACQgGADgKAAQgIgBgIgEgAgLgQQgFAFgBAHIAkAAIgCgIQgDgEgEgCQgEgDgGAAQgHAAgEAFg");
	this.shape_9.setTransform(27.5,12.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E52823").s().p("AgTAqQgJgEgHgHIAJgLQAFAFAIAEQAIADAGAAQAIAAAHgDQAEgEAAgFQAAgEgDgDIgHgDIgbgIQgGgCgFgFQgEgFAAgJQAAgGAEgHQAGgGAGgDQAHgEAJAAQAVAAANANIgJALQgFgEgHgDQgGgCgHgBQgIABgDACQgFADAAAFQAAADADADQACACAEABIAKADIARAFQAGADAGAEQAEAGAAAJQAAAGgEAHQgEAGgIAEQgHAEgMAAQgLAAgJgEg");
	this.shape_10.setTransform(19.6,11.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AnTB0QgvAAghghQghgggBgtIAAgLQABgtAhggQAhghAvAAIOnAAQAvAAAhAhQAiAggBAtIAAALQABAtgiAgQghAhgvAAg");
	this.shape_11.setTransform(58.15,11.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctared, new cjs.Rectangle(0,0,116.3,23.2), null);


(lib.cta160 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAfQgHgCgGgGIAHgKQADAEAHADQAGACAFAAQAGAAAEgCQADgCAAgDQAAgEgEgCQgDgCgHgCIgNgDQgEgBgEgEQgEgDAAgHQAAgFADgFQADgEAGgDQAGgDAHAAQAPAAALAJIgGAKQgDgEgGgBQgGgDgFAAQgEAAgEADQgDACAAADQAAADAEACIAWAGQAGADADACQAEAGAAAFQAAAKgIAFQgHAGgNAAQgHAAgHgDg");
	this.shape.setTransform(97.575,12.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKApQgEgFAAgIIAAhIIAOAAIAABFQAAAEABACQAAAAABABQABAAAAAAQABAAAAABQABAAAAAAIAEgBIACgCIAEALQgFAEgIAAQgHAAgFgEg");
	this.shape_1.setTransform(93,11.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAdQgHgDgEgIQgDgHAAgLQAAgJADgHQAEgJAHgDQAHgEAIgBQAFAAAGADQAFADAEAFIAAgJIAOAAIAAA/IgOAAIAAgJQgEAFgFADQgHADgEAAQgIgBgHgEgAgMgOQgFAHAAAHQAAAJAFAHQAGAFAHAAQAFABAFgDQAFgDACgDIAAgZQgCgDgFgCQgFgDgFAAQgHAAgGAGg");
	this.shape_2.setTransform(86.425,12.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPAdQgJgFgDgGQgFgIAAgKQAAgHAFgJQAEgIAHgEQAIgEAIgBQAKABAHAEQAHAEAFAJQAEAIAAAIIAAADIgyAAQABAIAGAFQAEAFAJAAQAGAAAEgCQAGgCACgDIAHAKQgEAEgHACQgGADgKAAQgIgBgIgEgAgLgQQgFAFgBAHIAkAAIgCgIQgDgEgEgCQgDgDgHAAQgHAAgEAFg");
	this.shape_3.setTransform(78.9,12.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoAsIAAhXIAiAAQANAAALAFQALAHAGAJQAGAKAAAMQAAANgGAKQgGAKgLAFQgLAGgNAAgAgYAfIASAAQAJAAAHgFQAIgEADgHQADgGAAgJQAAgIgDgGQgEgHgHgEQgHgFgJAAIgSAAg");
	this.shape_4.setTransform(70.475,11.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAdQgIgEgEgHQgFgIAAgKQAAgHAFgJQADgIAIgEQAJgEAIgBQAJABAIAEQAHAFAEAIQAEAGAAAKIAAADIgyAAQABAJAGAEQAFAFAIAAIAKgCQAHgCACgDIAGAKQgEAEgHACQgGADgJAAQgJgBgIgEgAgMgQQgFAGAAAGIAkAAQAAgEgCgEQgCgEgEgCQgEgDgGAAQgIAAgFAFg");
	this.shape_5.setTransform(58.175,12.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAPAsIAAgoQAAgFgDgEQgEgDgGAAQgFAAgEADQgEACgDADIAAAsIgOAAIAAhXIAOAAIAAAhQADgFAHgDQAFgDAHAAQAKABAGAFQAFAFAAAKIAAAsg");
	this.shape_6.setTransform(50.525,11.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFAlQgDgFAAgHIAAgkIgLAAIAAgMIALAAIAAgRIAMAAIAAARIAOAAIAAAMIgOAAIAAAhQAAACADADQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIADgBIAEgBIACAKQgEAEgIAAQgIAAgFgEg");
	this.shape_7.setTransform(44.5,11.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAdQgIgEgEgHQgFgIAAgKQAAgHAEgJQAFgIAHgEQAIgEAIgBQALABAGAEQAIAFAEAIQAEAIAAAIIAAADIgyAAQABAJAFAEQAGAFAIAAIAKgCQAGgCADgDIAGAKQgFAEgHACQgFADgJAAQgIgBgJgEgAgMgQQgFAFAAAHIAkAAQAAgFgCgDQgDgEgDgCQgFgDgGAAQgHAAgFAFg");
	this.shape_8.setTransform(35.075,12.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPAdQgIgEgEgHQgFgIAAgKQAAgHAFgJQAEgIAHgEQAIgEAIgBQAKABAIAEQAGAEAFAJQAEAIAAAIIAAADIgyAAQABAIAGAFQAEAFAJAAIAKgCQAGgCACgDIAHAKQgEAEgHACQgGADgKAAQgIgBgIgEgAgLgQQgFAFgBAHIAkAAIgCgIQgDgEgEgCQgEgDgGAAQgHAAgEAFg");
	this.shape_9.setTransform(27.5,12.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAqQgJgEgHgHIAJgLQAFAFAIAEQAIADAGAAQAIAAAHgDQAEgEAAgFQAAgEgDgDIgHgDIgbgIQgGgCgFgFQgEgFAAgJQAAgGAEgHQAGgGAGgDQAHgEAJAAQAVAAANANIgJALQgFgEgHgDQgGgCgHgBQgIABgDACQgFADAAAFQAAADADADQACACAEABIAKADIARAFQAGADAGAEQAEAGAAAJQAAAGgEAHQgEAGgIAEQgHAEgMAAQgLAAgJgEg");
	this.shape_10.setTransform(19.6,11.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E52823").s().p("AnTB0QgvAAghghQghgggBgtIAAgLQABgtAhggQAhghAvAAIOnAAQAvAAAhAhQAiAggBAtIAAALQABAtgiAgQghAhgvAAg");
	this.shape_11.setTransform(58.15,11.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta160, new cjs.Rectangle(0,0,116.3,23.2), null);


(lib.click_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,300);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.circleEnd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E52823").s().p("AxgSaQnQnoAAqyQAAqxHQnpQHRnoKPgBQKRABHQHoQHQHpAAKxQAAKynQHoQnQHqqRAAQqPAAnRnqg");
	this.shape.setTransform(209.55,172.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.circleEnd, new cjs.Rectangle(51.1,5.5,317,333.5), null);


(lib.black2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(64.9019,203.8355,0.9131,0.9131);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black2, new cjs.Rectangle(0,-0.9,262.4,244.20000000000002), null);


(lib.black1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(41.7538,145.005,0.9024,0.9024);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black1, new cjs.Rectangle(0.1,105.3,83.4,79.50000000000001), null);


(lib.cta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {on:1,off:10};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10));

	// Layer_5
	this.instance = new lib.ctared();
	this.instance.setTransform(60.1,180.6,1,1,0,0,0,58.1,11.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},8,cjs.Ease.cubicInOut).to({alpha:0},9,cjs.Ease.cubicInOut).wait(1));

	// Layer_4
	this.instance_1 = new lib.cta160();
	this.instance_1.setTransform(60.1,180.6,1,1,0,0,0,58.1,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9,cjs.Ease.cubicInOut).to({alpha:1},9,cjs.Ease.cubicInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,169,116.3,23.19999999999999);


// stage content:
(lib._160x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,299];
	// timeline functions:
	this.frame_0 = function() {
		var frequency=10;
		stage.enableMouseOver(frequency);
		_this = this;
		
		_this.click_btn.addEventListener('click', linkM);
		function linkM() {
				// actions
		}
		
		
		_this.click_btn.addEventListener('mouseover', linkN);
		function linkN() {
				 _this.cta.gotoAndPlay("on");
		}
			
		_this.click_btn.addEventListener('mouseout', linkO);
		function linkO() {
			_this.cta.gotoAndPlay("off");
		
		}
	}
	this.frame_299 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(299).call(this.frame_299).wait(1));

	// click_btn
	this.click_btn = new lib.click_btn();
	this.click_btn.name = "click_btn";
	this.click_btn.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.click_btn, 0, 1, 2, false, new lib.click_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.click_btn).wait(300));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgMfgu3IY/AAMAAABdvI4/AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(300));

	// prod2
	this.instance = new lib.prod2();
	this.instance.setTransform(106.5,794.5,0.5,0.5,0,0,0,91,117);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({_off:false},0).to({y:554.5},39,cjs.Ease.quintOut).wait(142));

	// prod3
	this.instance_1 = new lib.prod3();
	this.instance_1.setTransform(40.5,822.5,0.5,0.5,0,0,0,117,47);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(117).to({_off:false},0).to({y:582.5},39,cjs.Ease.quintOut).wait(144));

	// prod1
	this.instance_2 = new lib.prod1();
	this.instance_2.setTransform(70,805.5,0.5,0.5,0,0,0,62,107);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(118).to({_off:false},0).to({y:565.5},39,cjs.Ease.quintOut).wait(143));

	// redCircle
	this.instance_3 = new lib.circleEnd();
	this.instance_3.setTransform(68.5,791.5,0.5,0.5,0,0,0,186.5,93);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(116).to({_off:false},0).to({y:551.5},39,cjs.Ease.quintOut).wait(145));

	// logo
	this.instance_4 = new lib.petsmart();
	this.instance_4.setTransform(66.55,512.35,0.4998,0.4998,0,0,0,102.2,27.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(115).to({_off:false},0).to({regX:101,regY:26.2,scaleX:0.4987,scaleY:0.4987,x:72.35,y:153.05},39,cjs.Ease.quintOut).wait(146));

	// cta
	this.cta = new lib.cta();
	this.cta.name = "cta";
	this.cta.setTransform(68.65,516.55,1,1,0,0,0,59.5,13);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(72).to({_off:false},0).wait(42).to({y:126.55},39,cjs.Ease.quintOut).wait(147));

	// shopWhite
	this.instance_5 = new lib.white();
	this.instance_5.setTransform(148,93.5,1,1,0,0,0,136.4,9.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(161).to({_off:false},0).to({alpha:1},6).wait(9).to({alpha:0},5).to({_off:true},1).wait(118));

	// shopbig
	this.instance_6 = new lib.shopbig();
	this.instance_6.setTransform(148,483.5,1,1,0,0,0,136.4,9.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(113).to({_off:false},0).to({y:93.5},39,cjs.Ease.quintOut).wait(148));

	// Layer_10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_80 = new cjs.Graphics().p("AspI1IAAxpIZTAAIAARpg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(80).to({graphics:mask_graphics_80,x:80.5,y:335}).wait(19).to({graphics:null,x:0,y:0}).wait(201));

	// black2
	this.instance_7 = new lib.black2();
	this.instance_7.setTransform(150.05,52.45,1,1,0,0,0,135.7,11);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80).to({_off:false},0).to({y:127.45},18,cjs.Ease.quintOut).wait(15).to({y:-36.55},39,cjs.Ease.quintOut).wait(148));

	// Layer_12 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_80 = new cjs.Graphics().p("AtHIXIAAwtIaPAAIAAQtg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(80).to({graphics:mask_1_graphics_80,x:83.5,y:231}).wait(19).to({graphics:null,x:0,y:0}).wait(201));

	// black1
	this.instance_8 = new lib.black1();
	this.instance_8.setTransform(150.05,218.85,1,1,0,0,0,133.8,14);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(80).to({_off:false},0).to({y:97.85},18,cjs.Ease.quintOut).wait(15).to({y:-66.15},39,cjs.Ease.quintOut).wait(148));

	// botBG
	this.instance_9 = new lib.topBlack();
	this.instance_9.setTransform(80.55,745.35,2.0528,2.3686,0,0,0,149.6,65.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(72).to({_off:false},0).to({regX:150.2,regY:65.2,scaleX:2.0541,scaleY:2.3699,y:451.1},16,cjs.Ease.quintOut).wait(212));

	// topBG
	this.instance_10 = new lib.topBlack();
	this.instance_10.setTransform(80.9,-152.7,2.0523,2.3681,0,0,0,149.5,64.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(72).to({_off:false},0).to({regX:150.2,regY:65,scaleX:2.0539,scaleY:2.3697,y:152.4},16,cjs.Ease.quintOut).wait(212));

	// logo1
	this.instance_11 = new lib.petsmart();
	this.instance_11.setTransform(119.4,454.05,0.3491,0.3491,0,0,0,101.2,26.4);
	this.instance_11.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(300));

	// imgMC
	this.instance_12 = new lib.imgMC("synched",0,false);
	this.instance_12.setTransform(71.35,266.1,1.6145,1.6149,0,0,0,176.8,173.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regX:176.2,regY:173.1,scaleX:3.5088,scaleY:3.5088,x:100.6,y:226.6,startPosition:90},98,cjs.Ease.quadInOut).to({_off:true},1).wait(201));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-147.9,-51.6,672.9,1006.1);
// library properties:
lib.properties = {
	id: 'FE59A2EB19588B4D92276D944A3E0AE5',
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/img1.jpg?1602528138149", id:"img1"},
		{src:"images/pack1.png?1602528138149", id:"pack1"},
		{src:"images/pack3.png?1602528138149", id:"pack3"},
		{src:"images/packnew.png?1602528138149", id:"packnew"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['FE59A2EB19588B4D92276D944A3E0AE5'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;